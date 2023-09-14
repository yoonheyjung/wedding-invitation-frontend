<template>
  <div class="accountParent">
    <h1 class="headTitle pt-6 pb-5">혼주에게 연락하기</h1>
    <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-3" />
  </div>
  <!-- 혼주 -->
  <div class="accountParent account grid grid-cols-2 gap-y-3 pb-10">
    <div class="col-span-1">
      <div class="text-sm inline-block">아버지</div>
      <div class="text-lg pl-1 inline-block">공찬식</div>

      <div class="block">
        <a class="pr-3" href="tel:01011112222">📞</a
        ><a href="sms:01011112222">💬</a>
      </div>
      <div class="block">
        <button
          class="text-base inline-block text-zinc-500"
          type="button"
          @click="urlLink('bum')"
        >
          농협 1111-1111-1111-11
        </button>
      </div>

      <div class="text-sm inline-block">어머니</div>
      <div class="text-lg pl-1 inline-block">이인옥</div>
      <div class="block pb-2">
        <a class="pr-3" href="tel:01022223333">📞</a
        ><a href="sms:01022223333">💬</a>
      </div>
    </div>

    <div class="col-span-1">
      <div class="text-sm inline-block">아버지</div>
      <div class="text-lg pl-1 inline-block">오동욱</div>

      <div class="block">
        <a class="pr-3" href="tel:01033334444">📞</a
        ><a href="sms:01033334444">💬</a>
      </div>
      <div class="block m-0 lg:pl-25">
        <button
          class="text-base block text-zinc-500"
          style="margin: 0 auto"
          type="button"
          @click="urlLink('heyFather')"
        >
          신한 1111-1111-1111-11
        </button>
      </div>

      <div class="text-sm inline-block">어머니</div>
      <div class="text-lg pl-1 inline-block">강봉님</div>
      <div class="block pb-2">
        <a class="pr-3" href="tel:01044445555"> 📞 </a
        ><a href="sms:01044445555"> 💬 </a>
      </div>
      <div class="block m-0 lg:pl-25">
        <button
          class="text-base m-0 block text-zinc-500"
          style="margin: 0 auto"
          type="button"
          @click="urlLink('heyMom')"
        >
          국민 111111-11-11111
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    kakaoPay() {
      window.open("http://kko.to/TdB4cRvFlh", "_blank");
    },

    urlLink(who) {
      let copyLink = { account: "", name: "" };

      switch (who) {
        case "bum":
          copyLink.account = "농협 11111111111";
          copyLink.name = "신랑 아버지의";
          break;
        case "heyMom":
          copyLink.account = "국민 11111111111";
          copyLink.name = "신부 어머니의";
          break;

        case "heyFather":
          copyLink.account = "신한 11111111111";
          copyLink.name = "신부 아버지의";
          break;
      }
      this.$copyText(copyLink.account).then(function () {
        alert(`${copyLink.name} 계좌번호가 복사되었습니다.`);
      });
    },
  },
};
</script>

<style scoped>
.accountParent {
  background: #fbebf7;
}
.headTitle {
  font-family: "GangwonEdu_bold";
  font-size: 20px;
}
.account div {
  font-family: "GangwonEdu_bold";
}
.account button {
  font-family: "GangwonEdu_bold";
  font-size: 15px;
}
</style>
