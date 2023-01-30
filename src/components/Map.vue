<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <div class="relative max-md:w-full lg:w-3/5 bg-center">
      <div id="map" class="rounded-md bg-center"></div>
    </div>
    <button class="rounded-full m-2 bg-indigo-500" @click="openTmap">
      티맵 바로가기
    </button>
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
          endX: 126.839355,
          endY: 37.560297,
          endRpFlag: "G",
          reqCoordType: "WGS84GEO",
          startX: 126.98217734415019,
          startY: 37.56468648536046,
          gpsTime: "20191125153000",
          carType: 0,
          endName: "%eb%8d%94%eb%b2%a0%eb%89%b4%ec%a7%80%ec%84%9c%ec%9a%b8",
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
