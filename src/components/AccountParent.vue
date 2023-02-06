<template>
  <div class="accountParent">
    <h1 class="headTitle pt-3 pb-5">혼주에게 연락하기</h1>
    <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-3" />
  </div>
  <!-- 신랑 /  신부 -->
  <div class="accountParent account grid grid-cols-2 gap-y-3 pb-10">
    <div class="">
      <div class="text-sm inline-block">아버지</div>
      <div class="text-lg pl-1 inline-block">유원준</div>

      <div class="block">
        <a class="pr-3" href="tel:01038556484">📞</a
        ><a href="sms:01038556484">💬</a>
      </div>
      <!-- <div class="block">
        <button type="button" @click="urlLink('bum')">계좌번호</button>
      </div> -->
      <div class="text-sm inline-block">어머니</div>
      <div class="text-lg pl-1 inline-block">임미향</div>

      <div class="block pb-2">
        <a class="pr-3" href="tel:01024086484">📞</a
        ><a href="sms:01024086484">💬</a>
      </div>

      <div class="text-base inline-block text-zinc-500">
        농협 301-0186-7271-31
      </div>
    </div>

    <div class="">
      <div class="text-sm inline-block">아버지</div>
      <div class="text-lg pl-1 inline-block">윤병렬</div>

      <div class="block">
        <a class="pr-3" href="tel:01032133318">📞</a
        ><a href="sms:01032133318">💬</a>
      </div>

      <div class="text-base block text-zinc-500 pb-2">신한 110-427-93-1177</div>
      <!-- <div class="block">
        <button type="button" @click="urlLink('hey')">계좌번호</button>
      </div> -->
      <div class="text-sm inline-block">어머니</div>
      <div class="text-lg pl-1 inline-block">홍윤혜</div>

      <div class="block pb-2">
        <a class="pr-3" href="tel:01062066810"> 📞 </a
        ><a href="sms:01062066810"> 💬 </a>
      </div>
      <div class="text-base inline-block text-zinc-500">
        국민 758402-04-002361
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
          copyLink.account = "국민은행 48970101571806";
          copyLink.name = "신랑의";
          break;
        case "hey":
          copyLink.account = "신한은행 110439208364";
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
.accountParent {
  background: #faf8f1;
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
