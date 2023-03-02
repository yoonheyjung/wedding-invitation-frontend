<template>
  <div id="app">
    <h1 class="headTitle pt-3 pb-5">축하 메세지를 남겨주세요 ❤️</h1>

    <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-3" />

    <!-- <form> -->
    <form @keypress.enter.prevent @submit.prevent="saveMessage">
      <div class="message grid gap-2 mb-6 md:grid-cols-2">
        <div>
          <input
            id="user"
            type="text"
            v-model="user"
            class="w-1/6 inline-block p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="이름"
          />
          <input
            type="text"
            v-model="message"
            id="message"
            class="w-4/5 lg:w-1/2 inline-block p-2.5 mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="축하 메세지를 입력해주세요 🤍"
          />
        </div>
        <div>
          <button
            class="bg-transparent pt-1 px-24 rounded hover:bg-pink-500 text-pink-700 font-semibold hover:text-white border border-pink-500 hover:border-transparent"
          >
            저장
          </button>
        </div>
      </div>
    </form>
    <div class="comment flex mx-1" v-for="item in comments">
      <div
        class="flex-1 my-1 border rounded-lg px-3 py-2 sm:px-6 sm:py-4 leading-relaxed"
      >
        <strong>{{ item.name }}</strong>
        <span class="text-gray-400 mx-2">{{
          item.createdAt.substr(0, 10)
        }}</span>
        <p>
          {{ item.message }}
        </p>
      </div>
    </div>

    <!-- <form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  el: "#app",
  data() {
    return {
      comments: [],
      user: "",
      message: "",
      // totalComment: 0,
    };
  },
  created() {
    this.getMessage(); // 초기 데이터 수신
  },
  methods: {
    getMessage: function () {
      axios({
        url: "https://api.sikhyeworld.com/v1/messages",
        params: { limit: 3, offset: 3 },
        responseType: "json",
        headers: { "Access-Control-Allow-Origin": "*" },
        xhrFields: {
          withCredentials: true,
        },
      })
        .then((res) => {
          const data = res.data?.data;
          this.comments = data ?? [];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    saveMessage: function () {
      if (!this.user) return alert("이름을 입력해주세요 :)");
      if (!this.message) return alert("메세지를 입력해주세요 :)");

      axios({
        url: "https://api.sikhyeworld.com/v1/messages",
        method: "post",
        data: {
          user: this.user,
          message: this.message,
        },
        xhrFields: {
          withCredentials: true,
        },
      })
        .then((res) => {
          alert("저장되었습니다 !");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.headTitle {
  font-family: "GangwonEdu_bold";
  font-size: 20px;
}

.message {
  font-family: "GangwonEdu_bold";
  font-size: 16px;
}

.comment {
  font-family: "IM_Hyemin";
  font-size: 14px;
}
.comment span {
  font-family: "IM_Hyemin";
  font-size: 10px;
}
.comment p {
  font-family: "S-CoreDream";
  font-size: 13px;
}
</style>
