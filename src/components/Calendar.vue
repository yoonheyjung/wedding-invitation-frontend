<!-- eslint-disable vue/html-indent -->
<template>
  <div>
    <div
      class="address whitespace-pre-line mx-8 outline outline-offset-8 outline-pink-200 font-semibold"
    >
      <span>🤍 더베뉴지서울 아트홀 🤍</span>
    </div>
    <!-- calWrap -->
    <div class="calWrap grid place-items-center p-5">
      <span class="my-2">3월</span>
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
            <td class="absolute text-lg px-0">
              <img
                class="animate-pingSlow left-0 absolute"
                src="../assets/heart2.png"
              />
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
  </div>
</template>

<script>
export default {};
</script>

<style>
.address {
  font-family: "GangwonEdu_bold";
  font-size: 20px;
}
.calWrap {
  font-family: "IM_Hyemin";
  font-size: 18px;
}
.calWrap span {
  font-family: "IM_Hyemin";
  font-size: 22px;
}
.calWrap * {
  font-family: "IM_Hyemin";
  font-size: 15px;
  padding: 5px;
  padding-left: 14px;
  padding-right: 14px;
}
</style>
