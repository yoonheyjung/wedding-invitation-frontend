<template>
  <div>
    <h1 class="headTitle pt-3 pb-5">마음 전하실 곳</h1>
    <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-3" />
  </div>
  <!-- 신랑 /  신부 -->
  <div class="account grid grid-cols-2 gap-y-3 my-3">
    <div class="">
      <div class="text-lg block">신랑 공태경</div>

      <div class="block">
        <a class="pr-3" href="tel:010111111">📞</a
        ><a href="sms:010111111">💬</a>
      </div>
      <div class="block text-zinc-600">
        <button type="button" @click="urlLink('bum')">국민 11111111111</button>
      </div>
    </div>
    <div class="">
      <div class="text-lg block">신부 오연두</div>

      <div class="block">
        <a class="pr-3" href="tel:010222222"> 📞 </a
        ><a href="sms:010222222"> 💬 </a>
      </div>
      <div class="block text-zinc-600">
        <button type="button" @click="urlLink('hey')">신한 2222222</button>
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
          copyLink.account = "국민은행 11111111111";
          copyLink.name = "신랑의";
          break;
        case "hey":
          copyLink.account = "신한은행 2222222";
          copyLink.name = "신부의";
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
.headTitle {
  font-family: "GangwonEdu_bold";
  font-size: 23px;
}
.account div {
  font-family: "GangwonEdu_bold";
  font-size: 20px;
}
.account button {
  font-family: "GangwonEdu_bold";
  font-size: 15px;
}
</style>
