<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="bg-white py-10 px-5">
    <base-input v-model="map"></base-input>
    <h1 class="headTitle">📍 오시는 길을 안내합니다</h1>
    <div class="py-7">
      <div class="inset-px" id="map"></div>
    </div>
    <div class="my-10 mx-5">
      <span class="middleTitle text-lg block pb-3"> 내비게이션</span>
      <hr class="translate-x-1/3 border-[#ffc7c49c] w-3/5 border-dashed pb-8" />
      <div class="middleAddress text-lg pb-3">
        <span class="block">더베뉴지 서울</span>
        <span class="block">
          서울시 강서구 강서로 388 (구, 등촌동 678-14 베뉴지웨딩홀)
        </span>
        <span class="block"> TEL)02-2657-2100 </span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-y-0.5">
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
      console.log("fhfh");
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          appKey: "l7xx959196f75a854585bae68626d7d26797",
        },
        body: JSON.stringify({
          tollgateFareOption: 16,
          roadType: 32,
          directionOption: 1,
          endX: 129.07579349764512,
          endY: 35.17883196265564,
          endRpFlag: "G",
          reqCoordType: "WGS84GEO",
          startX: 126.98217734415019,
          startY: 37.56468648536046,
          gpsTime: "20191125153000",
          speed: 10,
          uncetaintyP: 1,
          uncetaintyA: 1,
          uncetaintyAP: 1,
          carType: 0,
          startName:
            "%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9E%85%EA%B5%AC%EC%97%AD",
          endName: "%ED%97%A4%EC%9D%B4%EB%A6%AC",
          passList: "127.38454163183215,36.35127257501252",
          gpsInfoList:
            "126.939376564495,37.470947057194365,120430,20,50,5,2,12,1_126.939376564495,37.470947057194365,120430,20,50,5,2,12,1",
          detailPosFlag: "2",
          resCoordType: "WGS84GEO",
          sort: "index",
        }),
      };

      fetch(
        "https://apis.openapi.sk.com/tmap/routes?version=1&callback=function",
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
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
