<template>
  <div id="app">
    <h1 class="headTitle pt-3 pb-5">축하 메세지를 남겨주세요 ❤️</h1>
    <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-3" />
    <!-- <h1 class="headTitle text-zinc-500 pt-3 pb-5">
      방명록은 2월 26일에 열립니다. 조금만 기다려주세요 ❤️
    </h1> -->
    <div class="flex mx-5" :items="comments">
      <!-- <div class="flex-shrink-0 mr-3">
        <img
          class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
          alt=""
        />
      </div> -->
      <!-- <div
        class="flex-1 my-3 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
      >
        <strong>Sarah</strong>
        <span class="text-xs text-gray-400 mx-2">3:34 PM</span>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div> -->
    </div>

    <!-- <form> -->
    <form @submit.prevent="saveMessage">
      <div class="message grid gap-6 mb-6 md:grid-cols-2">
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
            class="w-3/6 inline-block p-2.5 mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="축하 메세지를 입력해주세요 🤍"
          /><button
            class="bg-transparent py-2 px-4 rounded hover:bg-pink-500 text-pink-700 font-semibold hover:text-white border border-pink-500 hover:border-transparent"
          >
            저장
          </button>
        </div>
      </div>
    </form>
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
    getMessage: () => {
      axios({
        url: "http://127.0.0.1:3000/v1/messages",
        params: { limit: 3, offset: 3 },
        responseType: "json",
        headers: { "Access-Control-Allow-Origin": "*" },
        xhrFields: {
          withCredentials: true,
        },
      })
        .then((res) => {
          const { code } = res.data;
          const { messages } = res.data?.data;
          // 받아온 응원 댓글 array를 comments에 넣어준다.
          if (Array.isArray(messages) && messages.length > 0) {
            messages.forEach((el) => {
              el["add"] = true;
              this.messages.unshift(el);
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    saveMessage: function () {
      if (!this.user) return alert("이름을 입력해주세요 :)");
      if (!this.message) return alert("메세지를 입력해주세요 :)");

      axios({
        url: "http://127.0.0.1:3000/v1/messages",
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
</style>
