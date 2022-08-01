<template>
  <header id="sslo-header">
    <nav>
      <div class="gnb container">
        <div class="logobox">
          <router-link to="/sslo/main">
            <img
              src="../../../assets/images/sslo/sslo-logo.svg"
              alt="sslo-logo"
            />
          </router-link>
        </div>
        <ul class="menubox">
          <li><router-link to="/sslo/service">서비스</router-link></li>
          <li><router-link to="/sslo/solution">솔루션</router-link></li>
          <li><router-link to="/sslo/price">가격</router-link></li>
          <li><router-link to="/sslo/company">회사소개</router-link></li>
          <li><router-link to="/sslo/notice">고객지원</router-link></li>
        </ul>
        <div class="loginbox">
          <ul>
            <li class="platform">
              <div class="goto">
                <router-link to="/dashboard/list"
                  >통합 플랫폼 바로가기</router-link
                >
                <img src="../../../assets/images/sslo/icon-goto.svg" alt="" />
              </div>
            </li>
            <li class="login">
              <a href="">로그인</a>
              <div class="h-profile" @click="toggleOnOff()"></div>
              <ul class="my-list" v-if="isStatusOn">
                <li><a href="qna-detail.html">문의내역</a></li>
                <li><a href="personal-set.html">개인정보설정</a></li>
                <li>
                  <button id="logout"><span>로그아웃</span></button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      isStatusOn: false,
    };
  },
  methods: {
    toggleOnOff: function () {
      this.isStatusOn = !this.isStatusOn;
    },
  },
};
</script>

<style></style>
