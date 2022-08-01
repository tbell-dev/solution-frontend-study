<template>
  <header id="header">
    <ul class="header-wrap">
      <li>
        <button>
          <img
            src="../../../assets/images/project/header+menu/icon-list.svg"
            alt=""
          />
        </button>
        <h2>전체 프로젝트</h2>
      </li>
      <li>
        <div class="alarm">
          <div class="alarm-icon">
            <img
              src="../../../assets/images/project/header+menu/icon-alarm.svg"
              alt=""
            />
            <span></span>
          </div>
          <!-- <ul class="alarm-list">
                                <li>
                                    <p>2022년 1월 11일 화요일 17:00</p>
                                    <div class="text-wrap">
                                        <b>홍길동님 (gd.hong@tbell.co.kr) 조직멤버를 추가하였습니다.</b>
                                    </div>
                                    <a href="../my-setting/org-setting.html">조직설정 바로가기</a>
                                </li>
                            </ul> -->
        </div>
        <div class="my-setting">
          <div class="profle-icon">
            <button @click="MyPageOnOff()">
              <img
                src="../../../assets/images/project/header+menu/icon-profile.svg"
                alt=""
              />
            </button>
          </div>
          <ul class="my-setting-list" v-show="isMyPageOn">
            <li>
              <router-link to="/mypage/team">조직 설정</router-link>
            </li>
            <li>
              <router-link to="/mypage/member">멤버 설정</router-link>
            </li>
            <li>
              <button id="logout" class="btn4-0">로그아웃</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data: function () {
    return { isMyPageOn: false };
  },
  methods: {
    MyPageOnOff: function () {
      this.isMyPageOn = !this.isMyPageOn;
      console.log('hi');
    },
  },
};
</script>

<style></style>
