<template>
  <div v-show="show" class="container flip-clock">
    <span
      v-for="(data, i) in timeData"
      :key="i"
      class="flip-clock__piece"
      :class="data.label"
      :id="data.elementId"
      v-show="data.show"
    >
      <span class="flip-clock__card flip-card">
        <b class="flip-card__top">{{ data.current | twoDigits }}</b>
        <b
          class="flip-card__bottom"
          v-bind:data-value="data.current | twoDigits"
        ></b>
        <b
          class="flip-card__back"
          v-bind:data-value="data.previous | twoDigits"
        ></b>
        <b
          class="flip-card__back-bottom"
          v-bind:data-value="data.previous | twoDigits"
        ></b>
      </span>
      <span class="flip-clock__slot uppercase">{{ data.label }}</span>
    </span>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { getDiffTime } from "../utils/filter";

export default {
  name: "flipCountdown",
  props: {
    deadline: {
      type: String,
    },
    stop: {
      type: Boolean,
    },
    showDays: {
      type: Boolean,
      required: false,
      default: true,
    },
    showHours: {
      type: Boolean,
      required: false,
      default: true,
    },
    showMinutes: {
      type: Boolean,
      required: false,
      default: true,
    },
    showSeconds: {
      type: Boolean,
      required: false,
      default: true,
    },
    labels: {
      type: Object,
      required: false,
      default: function () {
        return {
          days: "days",
          hours: "hours",
          minutes: "minutes",
          seconds: "seconds",
        };
      },
    },
  },
  data() {
    const uuid = uuidv4();
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      interval: null,
      liveDiff: Number,
      bumperDiff: Number,
      show: false,
      timeData: [
        {
          current: 0,
          previous: 0,
          label: this.labels.days,
          elementId: "flip-card-days-" + uuid,
          show: this.showDays,
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.hours,
          elementId: "flip-card-hours-" + uuid,
          show: this.showHours,
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.minutes,
          elementId: "flip-card-minutes-" + uuid,
          show: this.showMinutes,
        },
        {
          current: 0,
          previous: 0,
          label: this.labels.seconds,
          elementId: "flip-card-seconds-" + uuid,
          show: this.showSeconds,
        },
      ],
    };
  },
  computed: {
    liveStartDate() {
      return "2023-03-19 11:00:00";
    },
    bumperDate() {
      return "2023-03-19 11:00:00";
    },
    seconds() {
      return Math.trunc(this.liveDiff) % 60;
    },
    minutes() {
      return Math.trunc(this.liveDiff / 60) % 60;
    },
    hours() {
      return Math.trunc(this.liveDiff / 60 / 60) % 24;
    },
    days() {
      return Math.trunc(this.liveDiff / 60 / 60 / 24);
    },
  },
  watch: {
    diff(value) {
      if (value === 0) {
        clearInterval(this.interval);
        this.$emit("time-end", "live");
        this.updateAllCards();
      }
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
  created() {
    this.turnOnTimer();
  },
  mounted() {
    this.liveDiff = getDiffTime(this.liveStartDate);
    this.updateAllCards();
    if (this.liveDiff !== undefined || this.liveDiff > 0) {
      this.show = true;
    }
  },
  beforeDestroy() {
    if (window["cancelAnimationFrame"]) {
      cancelAnimationFrame(this.frame);
    }
    if (this.interval) clearInterval(this.interval);
  },
  methods: {
    turnOnTimer() {
      this.interval = setInterval(() => {
        this.bumperDiff = getDiffTime(this.bumperDate);

        this.liveDiff = getDiffTime(this.liveStartDate);
        if (this.bumperDiff <= 0) {
          clearInterval(this.interval);
          this.$emit("time-end", "bumper");
        }
        if (this.liveDiff <= 0 || this.stop) {
          this.updateTime(3, 0);
          clearInterval(this.interval);
          this.$emit("time-end", "live");
        } else {
          this.updateAllCards();
        }
      }, 1000);
    },
    updateAllCards() {
      this.updateTime(0, this.days);
      this.updateTime(1, this.hours);
      this.updateTime(2, this.minutes);
      this.updateTime(3, this.seconds);
    },
    updateTime(idx, newValue) {
      if (idx >= this.timeData.length || newValue === undefined) {
        return;
      }

      if (window["requestAnimationFrame"]) {
        this.frame = requestAnimationFrame(this.updateTime.bind(this));
      }

      const d = this.timeData[idx];
      const val = newValue < 0 ? 0 : newValue;
      const el = document.querySelector(`#${d.elementId}`);

      if (val !== d.current) {
        d.previous = d.current;
        d.current = val;

        if (el) {
          el.classList.remove("flip");
          void el.offsetWidth;
          el.classList.add("flip");
        }

        if (idx === 0) {
          const els = el.querySelectorAll("span b");
          if (els) {
            for (let e of els) {
              const cls = e.classList[0];
              if (newValue / 1000 >= 1) {
                if (!cls.includes("-4digits")) {
                  const newCls = cls + "-4digits";
                  e.classList.add(newCls);
                  e.classList.remove(cls);
                }
              } else {
                if (cls.includes("-4digits")) {
                  const newCls = cls.replace("-4digits", "");
                  e.classList.add(newCls);
                  e.classList.remove(cls);
                }
              }
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>
/* 기존 */
.flip-clock {
  font-family: "GangwonEdu_bold";
  text-align: center;
  perspective: 800px;
  margin: 0 auto;
  max-width: 900px;
}
*,
*:before,
*:after {
  text-align: center;
  perspective: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}
.flip-clock__piece {
  display: inline-block;
  margin: 0 0.2vw;
}
.flip-clock__slot {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  opacity: 0.7;
  font-weight: 100;
}

.flip-card {
  font-family: "GangwonEdu_bold";
  display: block;
  position: relative;
  padding-bottom: 0.72em;
  font-size: 2.3rem;
  line-height: 0.95;
  margin-bottom: 10px;
}

.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  margin-left: 0px;
  margin-right: 0px;
  display: block;
  height: 0.72em;
  color: #cca900;
  background: #ffb9b9;
  border-radius: 0.35em 0.35em 0 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  width: 2.1em;
  height: 0.72em;
}

.flip-card__top-4digits,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits,
.flip-card__back-4digits::before,
.flip-card__back-4digits::after {
  display: block;
  height: 0.72em;
  color: #cca900;
  background: #ffb9b9;
  padding: 0.23em 0.15em 0.4em;
  border-radius: 0.35em 0.35em 0 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  width: 2.65em;
  height: 0.72em;
}

.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits {
  color: #ffdc00;
  position: absolute;
  left: 0;
  border-top: solid 1px rgb(255, 172, 199);
  background: #ffb9b9;
  border-radius: 0 0 0.35em 0.35em;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}

.flip-card__back-bottom,
.flip-card__back-bottom-4digits {
  z-index: 1;
}

.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after {
  display: block;
  margin-top: -0.72em;
}

.flip-card__back::before,
.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__back-4digits::before,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after {
  content: attr(data-value);
}

.flip-card__back,
.flip-card__back-4digits {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}

.flip-card__back::before,
.flip-card__back-4digits::before {
  position: relative;
  overflow: hidden;
  z-index: -1;
}

.flip .flip-card__back::before,
.flip .flip-card__back-4digits::before {
  z-index: 1;
  animation: flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flip .flip-card__bottom,
.flip .flip-card__bottom-4digits {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }
  0%,
  99% {
    opacity: 1;
  }
  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {
  0%,
  50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
    z-index: 5;
  }
}

/*custom*/
.flip-card {
  padding-bottom: 1em;
  font-size: 2.2rem;
}
.flip-card__top,
.flip-card__back::before {
  color: #ffffff;
  width: 2.1em;
  height: 1.2em;
  line-height: 2.25em;
}
.flip-card__back::after,
.flip-card__back-bottom,
.flip-card__bottom {
  color: #ffffff;
  width: 2.1em;
  height: 1.2em;
  line-height: 1.25em;
}
.flip-card__back::before {
  color: #eaeaea;
  background: #ffb9b9;
}
.uppercase {
  text-transform: uppercase;
}

.secounds .flip-card__top,
.secounds .flip-card__back::after,
.secounds .flip-card__back-bottom,
.secounds .flip-card__bottom {
  color: #30a5ff !important;
}
.secounds .flip-card__back::before {
  color: #2291e8 !important;
}
.secounds::before,
.minutes::before {
  font-size: 2rem;
  opacity: 0.6;
  float: left;
  margin-left: -10px;
  line-height: 5.6rem;
}
.flip-clock__piece {
  margin: 0 6px;
}
@media (max-width: 1260px) {
  .flip-card {
    font-size: 1.6rem;
  }
  .secounds::before,
  .minutes::before {
    font-size: 1.5rem;
    margin-left: -8px;
    line-height: 3.5rem;
  }
  .flip-clock__slot {
    font-size: 0.7rem;
  }
  .flip-clock__piece {
    margin: 0 4px;
  }
}
@media (max-width: 960px) {
  .flip-card {
    font-size: 2rem;
  }
}
@media (max-width: 400px) {
  .flip-card {
    font-size: 1.6rem;
  }
  .secounds::before,
  .minutes::before {
    font-size: 1.5rem;
    margin-left: -8px;
    line-height: 3.5rem;
  }
  .flip-clock__slot {
    font-size: 0.7rem;
  }
  .flip-clock__piece {
    margin: 0 4px;
  }
}
</style>
