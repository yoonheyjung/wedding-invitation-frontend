<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="bg-white pt-10 pb-5 px-5">
    <base-input v-model="map"></base-input>
    <h1 class="headTitle">📍 오시는 길을 안내합니다</h1>
    <div class="py-7">
      <div class="inset-px" id="map"></div>
    </div>
    <div class="my-10 mx-5">
      <span class="middleTitle text-lg block pb-3"> 내비게이션</span>
      <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-8" />
      <div class="middleAddress text-lg pb-3 text-left">
        <span class="block">더베뉴지 서울</span>
        <span class="block text-base">
          서울시 강서구 강서로 388 (구, 등촌동 678-14 베뉴지웨딩홀)
        </span>
        <span class="block text-sm"> TEL)02-2657-2100 </span>
        <br />
        <div class="block">
          지하철<br />
          <span class="text-base block"
            >- 5호선 발산역 3번출구 방향 1분이내</span
          >

          <span class="text-base block"
            >- 9호선 양천향교역 6번 출구 도보 10분 직진</span
          >
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-y-0.5 pt-4">
        <button
          class="butten-text border-[#FDAFAB] rounded-lg mx-1 text-sm col-span-1 md:col-span-2 bg-white border-borderPink"
          @click="openTmap()"
        >
          티맵 바로 안내
        </button>
        <button
          class="butten-text border-[#FDAFAB] rounded-lg mx-1 text-sm col-span-1 md:col-span-2 bg-white border-borderPink"
          @click="openNaver()"
        >
          네이버 빠른길 찾기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      markerPositions1: [[37.560297, 126.839355]],

      markers: [37.560297, 126.839355],
      infowindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=471511625df2bb21b8e9b796a0a4190e";
      document.head.appendChild(script);
    }
  },
  methods: {
    openTmap() {
      window.location.href =
        "https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx959196f75a854585bae68626d7d26797&name=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8&lon=126.839495815516&lat=37.559823831741";
    },
    openNaver() {
      window.open("https://map.naver.com/v5/entry/place/33499928", "_blank");
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.560297, 126.839355),
        level: 4,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      // 마커가 표시될 위치입니다
      const markerPosition = new kakao.maps.LatLng(37.560297, 126.839355);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        title: "gpgp",
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map);
    },
  },
};
</script>

<style scoped>
.headTitle {
  font-family: "GangwonEdu_bold";
  font-size: 23px;
}
.middleTitle {
  font-family: "GangwonEdu_bold";
  font-size: 20px;
}
.middleAddress {
  font-family: "GangwonEdu_bold";
  font-size: 18px;
}
.butten-text {
  font-family: "IM_Hyemin";
  font-size: 15px;
  font-weight: 100;
}
#map {
  width: 100%;
  height: 310px;
}
</style>
