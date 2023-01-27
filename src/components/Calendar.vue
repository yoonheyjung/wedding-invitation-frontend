<!-- eslint-disable vue/html-indent -->
<template>
  <div
    class="address whitespace-pre-line mx-8 outline outline-offset-8 outline-pink-200 font-semibold text-xl"
  >
    <font-awesome-icon icon="fa-solid fa-location-dot" />
    <span> 더베뉴지 아트홀</span>
  </div>
  <!-- calWrap -->
  <font-awesome-icon icon="fa-solid fa-user-secret" />
  <div class="calWrap grid place-items-center p-5">
    <table class="table-auto">
      <thead>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
        </tr>
        <tr>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
        </tr>
        <tr>
          <td class="text-lg">
            <div
              class="bg-local"
              style="background-image: url('../src/assets/logo1.PNG')"
            ></div>
            19
          </td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
        </tr>
        <tr>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- //calWrap -->
  <div class="h-24 bg-gradient-to-r from-purple-500 to-pink-500">
    <Countdown
      :deadline-i-s-o="'2023-03-19 11:00:00'"
      :main-color="'#F2789F'"
      :flip-animation="false"
      :show-days="true"
      :countdown-size="'7rem'"
      :label-size="'1rem'"
    />
  </div>
</template>

<script>
import { Countdown } from "vue3-flip-countdown";
export default {
  components: {
    Countdown,
  },
};
</script>

<style>
.address {
  font-family: "suitRegular";
  font-size: 20px;
}
.calWrap {
  font-family: "IM_Hyemin";
  font-size: 16px;
}
.calWrap * {
  font-family: "IM_Hyemin";
  font-size: 16px;
  padding: 5px;
  padding-left: 14px;
  padding-right: 14px;
}
</style>
