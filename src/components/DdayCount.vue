<template>
  <!-- 카운트다운 -->
  <FlipCountDown
    class="countdown my-5 py-3"
    @time-end="timeEnd"
    @set-countdown-status="setCountDownStatus"
  />
</template>

<script>
// components
import FlipCountDown from "./TheFlipCountDown.vue";
import { getDiffTime } from "../utils/filter";

export default {
  components: {
    FlipCountDown,
  },
  mounted() {
    this.setCountDownStatus();
  },
  data() {
    return {
      countDownStatus: "count", // default: null(로딩 중), count(카운트다운 모드)
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  computed: {
    bumperDate() {
      return "2023-03-19 11:00:00";
    },
    liveStartDate() {
      return "2023-03-19 11:00:00";
    },
  },
  methods: {
    setCountDownStatus() {
      const isStartBumper = getDiffTime(this.bumperDate) <= 0;
      if (isStartBumper) {
        this.countDownStatus = "play";
      } else {
        this.countDownStatus = "count";
      }
    },
    timeEnd(mode) {
      this.countDownStatus = "count";
      this.$emit("time-over");
    },
  },
};
</script>

<style></style>
