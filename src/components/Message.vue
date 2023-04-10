<template>
  <div id="app">
    <h1 class="headTitle pt-3 pb-5">축하 메세지를 남겨주세요 ❤️</h1>

    <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-3" />

    <!-- <form> -->
    <!-- <form @keypress.enter.prevent @submit.prevent="saveMessage">
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
    </form> -->
    <div class="comment flex mx-1" v-for="item in comments">
      <div
        class="flex-1 my-1 border rounded-lg px-3 py-2 sm:px-6 sm:py-4 leading-relaxed"
      >
        <strong class="text-left">{{ item.name }}</strong>
        <span class="text-right text-gray-400 mx-2">{{ item.createdAt }}</span>
        <p class="text-left">
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
      const convertKst = (time) => {
        const kr_curr = new Date(Number(time));

        return kr_curr.toISOString().replace("T", " ").substring(0, 19);
      };

      this.comments = [
        {
          name: "케2트",
          createdAt: convertKst(1677519495430),
          message: "공주님🤍 축하드려요 !",
        },
        {
          name: "오픈런",
          createdAt: convertKst(1677519576845),
          message: "일빠냐?",
        },
        {
          name: "이태규",
          createdAt: convertKst(1677519928000),
          message: "축하해 혜정아😀",
        },
        {
          name: "주현진",
          createdAt: convertKst(1677708247903),
          message:
            "방명록은 처음 써봐서 어떻게 써야할지 몰라 서툴 수 있는 점 양해 부탁드립니다. 두 분 취미든 식성이든 공통점이 많아 서로가 배우자이자 좋은 친구로 오래오래 잘 지낼 것 같다는 확신이 들어요. 신랑 신부 두 분 결혼 진심으로 축하드립니다! 행복하세요💓",
        },
        {
          name: "두분",
          createdAt: convertKst(1677708402028),
          message: "너무 잘어울려요 축하드립니다 ㅎ",
        },
        {
          name: "정윤",
          createdAt: convertKst(1677676869000),
          message: "유녜정!!!!!! 결혼축하한다!!!!!!!!!!",
        },
        {
          name: "솔💓",
          createdAt: convertKst(1677709895304),
          message: "우리 예쁜 혜정이 결혼 너무너무 축하해~",
        },
        {
          name: "솔지🥰",
          createdAt: convertKst(1677709941927),
          message: "이모~ 공주님 기대할께요~",
        },
        {
          name: "크림버드공주",
          createdAt: convertKst(1677754262125),
          message: "결혼축하해요!",
        },
        {
          name: "정선",
          createdAt: convertKst(1677756035096),
          message: "혜정이❤️웰컴 유부월드🥰",
        },
        {
          name: "먹린",
          createdAt: convertKst(1677769079751),
          message: "혜정이 너무 예쁘다 ❤️ ❤️ 행복하게 잘살아",
        },
        {
          name: "아람단",
          createdAt: convertKst(1677773380956),
          message: "혜정아 이쁘게 잘살아~~",
        },
        {
          name: "맥X",
          createdAt: convertKst(1677773664351),
          message:
            "신부님 너무 아름다우세요. 혹시 유모차세요? 예뻐서 제 마음을 너무 애태우네요.",
        },
        {
          name: "메리",
          createdAt: convertKst(1677773764761),
          message: "넘 이쁜 카리나 ❤",
        },
        {
          name: "렛이나",
          createdAt: convertKst(1677773854733),
          message: "혜정씨? 당신 사진 때문에 핸드폰에 과즙 튀었어요. 🍊",
        },
        {
          name: "렛이나",
          createdAt: convertKst(1677773894666),
          message:
            "당신 영어이름을 조지나 부시로 해주시겠어요?  내 마음을 조지고 부시니까 ❤️",
        },
        {
          name: "조유진",
          createdAt: convertKst(1677774101923),
          message: "결혼 축하해 혜정~ 오래오래 함께 행복하길 바라🖤",
        },
        {
          name: "공구파트너",
          createdAt: convertKst(1677774190161),
          message: "완전 축하드립니다요 ~!!!",
        },
        {
          name: "유녕",
          createdAt: convertKst(1677775365179),
          message:
            "혜정아~ 결혼 너무너무 축하해♥️ 예쁜 부부의 앞날에 행복만 가득하길 바랍니다! 힘들때 서로 의지하고 위기는 지혜롭게 해결해나가는 건강한 가정이 되기를! 행복하세요☺️",
        },
        {
          name: "제리",
          createdAt: convertKst(1677775547439),
          message: "시기하고, 질투하고, 사랑하고♥️",
        },
        {
          name: "쩡2",
          createdAt: convertKst(1677776017057),
          message: "혜정이 반품은 안돼요~~ ㅋㅋㅋ",
        },
        {
          name: "어슙",
          createdAt: convertKst(1677776091827),
          message:
            "앞으로도 이렇게 예쁜 모습으로 잘 살거라 믿어 의심치 않는다!! 결혼 너무 축하해🤍",
        },
        {
          name: "ben",
          createdAt: convertKst(1677777088315),
          message: "와 결혼 축하합니다~",
        },
        {
          name: "착한말교육담당선생님",
          createdAt: convertKst(1677777109566),
          message: "햄벅하세요..^ㅅ^",
        },
        {
          name: "소현",
          createdAt: convertKst(1677777794707),
          message:
            "결혼 너어어어무 축하해!!! 앞으로 꽃길만 걸어라!!!💐💐💐💐💐",
        },
        {
          name: "우리집갑",
          createdAt: convertKst(1677784534787),
          message: "당신들의 결혼을 축하해💓💓",
        },
        {
          name: "너무",
          createdAt: convertKst(1677797871965),
          message: "잘어울려👍🏻",
        },
        {
          name: "엊엉",
          createdAt: convertKst(1677833903856),
          message: "청첩장 퀄 넘 조하효",
        },
        {
          name: "애니웨이앤",
          createdAt: convertKst(1677841713150),
          message:
            "드레스마다 혜정을 위한 옷 같아요! 따스한 미소를 가진 두 분이 늘 평안하고 행복하기를 바라며 진심으로 축복합니다🥰",
        },
        {
          name: "리낭",
          createdAt: convertKst(1677947951353),
          message: "결혼 축하해요🥳🥳🥳",
        },
        {
          name: "선민",
          createdAt: convertKst(1678058182127),
          message: "혜정아 결혼 축하해❤️ 건강하고 행복하길 응원할게 👏🏻",
        },
        {
          name: "🧸",
          createdAt: convertKst(1678229679279),
          message:
            "혜정언니 결혼 진심으로 너무너무 축하해🫶🏻 행복하게 잘 살아야해🎀🤍 이젠 정말 예비신부 얼마 안남았어요 꺅~~~",
        },
        {
          name: "마장동불주먹",
          createdAt: convertKst(1678319063501),
          message:
            "혜정 범식님 결혼 축하드려요 세상에서 가장 아름답고 멋진 주인공! 다가올 세월에 길이길이 남을 행복한 부부이기를 무종교지만 마음 다 해 기도합니다❤️",
        },
        {
          name: "윤예지",
          createdAt: convertKst(1678477999897),
          message: "혜정아 결혼 너무너무너무너무 축하해!!!!!!!!!!!!",
        },
        {
          name: "한현진",
          createdAt: convertKst(1679010701633),
          message: "ㅋㅋㅋㅋㅋ 유녜정 결혼이라니 축하한다 !!!! 잘살구 행복해.",
        },
        {
          name: "토리",
          createdAt: convertKst(1679050665832),
          message: "항상행복하세요!!",
        },
        {
          name: "김지수",
          createdAt: convertKst(1679173283285),
          message: "새로운 시작 응원할게 혜정아❤️ 좋은 꿈 꾸고 내일 보자",
        },
        {
          name: "대장마오",
          createdAt: convertKst(1679213603422),
          message: "고독남자의 길에 온 걸 환영한다.",
        },
        {
          name: "임덕수",
          createdAt: convertKst(1679218451358),
          message: "원준.미향 친구 아들결혼축하해~~",
        },
      ];
      // console.log(`🚀 ~ messageData:`, messageData);

      // axios({
      //   url: "https://api.sikhyeworld.com/v1/messages",
      //   params: { limit: 3, offset: 3 },
      //   responseType: "json",
      //   headers: { "Access-Control-Allow-Origin": "*" },
      //   xhrFields: {
      //     withCredentials: true,
      //   },
      // })
      //   .then((res) => {
      //     const data = res.data?.data;
      //     this.comments = data ?? [];
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
    // saveMessage: function () {
    //   if (!this.user) return alert("이름을 입력해주세요 :)");
    //   if (!this.message) return alert("메세지를 입력해주세요 :)");

    //   axios({
    //     url: "https://api.sikhyeworld.com/v1/messages",
    //     method: "post",
    //     data: {
    //       user: this.user,
    //       message: this.message,
    //     },
    //     xhrFields: {
    //       withCredentials: true,
    //     },
    //   })
    //     .then((res) => {
    //       alert("저장되었습니다 !");
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
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
