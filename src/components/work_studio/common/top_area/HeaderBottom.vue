<template>
  <ul class="header-bottom">
    <li class="hb-left">
      <div class="work-stage">
        <b>작업단계</b>
        <span class="bar"></span>
        <p>라벨링</p>
      </div>
      <div class="work-status">
        <b>작업상태</b>
        <!-- 작업 상태에 따라 동그라미와 작업상태 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
        <span class="bar"></span>
        <p><span class="ball"></span>미작업</p>
      </div>
      <div class="work-assignee">
        <b>담당자</b>
        <span class="bar"></span>
        <a href="#"
          >홍길동
          <img src="../../../../assets/images/studio/icon/icon-link.svg" alt=""
        /></a>
      </div>
    </li>
    <li class="hb-right">
      <button @click="qnaShow">
        <span>Q&A 보기</span
        ><img
          src="../../../../assets/images/studio/header/icon-qna.svg"
          alt=""
        />
      </button>
    </li>
  </ul>
</template>

<script>
// import EventBus from '../../../../eventBus';
//import { reactive } from 'vue';

export default {
  data: function () {
    return {};
  },
  methods: {
    // qnaShow: function () {},
  },
};
</script>

<style></style>
