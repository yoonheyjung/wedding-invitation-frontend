<!-- eslint-disable vue/max-attributes-per-line -->
<!-- git test012 -->
<template>
  <div>
    <h1 href="	https://map.kakao.com/link/map/8700757">카카오 맵 테스트</h1>
    <button class="rounded-full m-2 bg-indigo-500" @click="openTmap">
      티맵
    </button>
    <div>
      <div class="inset-px mx-5" id="map"></div>
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
#map {
  width: 80%;
  height: 400px;
}
</style>
