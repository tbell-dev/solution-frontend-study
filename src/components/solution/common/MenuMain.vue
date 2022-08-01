<template>
  <div class="main-menu" v-bind:class="active" v-on:click.prevent>
    <div class="main-menu-top">
      <router-link class="main-logo" to="/sslo/main"
        ><img
          src="../../../assets/images/project/header+menu/header-logo.svg"
          alt=""
      /></router-link>
    </div>
    <ul class="main-menu-bottom">
      <li :class="{ 'now-menu': currentPage == 'dashboard' }">
        <router-link to="/dashboard/list">
          <img
            :src="
              require(`@/assets/images/project/header+menu/${currentPageImgDashboard}`)
            "
          />
          대시보드</router-link
        >
      </li>
      <li :class="{ 'now-menu': currentPage == 'allProject' }">
        <router-link to="/allProject/allprojectlist">
          <img
            :src="
              require(`@/assets/images/project/header+menu/${currentPageImgAllProject}`)
            "
          />
          전체 프로젝트</router-link
        >
      </li>
      <li :class="{ 'now-menu': currentPage == 'mywork' }">
        <router-link to="/solution/mywork/folderlist"
          ><img
            :src="
              require(`@/assets/images/project/header+menu/${currentPageImgMyWork}`)
            "
          />
          내 작업</router-link
        >
      </li>
      <li :class="{ 'now-menu': currentPage == 'useGuide' }">
        <router-link to="/">
          <img
            :src="
              require(`@/assets/images/project/header+menu/${currentPageImgUseGuide}`)
            "
          />이용 가이드
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentPage: '',
      currentPageImgDashboard: 'icon-menu1.svg',
      currentPageImgAllProject: 'icon-menu2.svg',
      currentPageImgMyWork: 'icon-menu3.svg',
      currentPageImgUseGuide: 'icon-menu4.svg',
    };
  },
  created() {
    console.log('현재 url' + window.location.href);
    var path = window.location.href.split('/');
    if (path[3] == 'dashboard') {
      this.currentPage = 'dashboard';
      this.currentPageImgDashboard = 'icon-menu1-1.svg';
    } else if (path[3] == 'allProject') {
      this.currentPage = 'allProject';
      this.currentPageImgAllProject = 'icon-menu2-1.svg';
    } else if (path[4] == 'mywork') {
      this.currentPage = 'mywork';
      this.currentPageImgMyWork = 'icon-menu3-1.svg';
    } else if (path[3] == 'useGuide') {
      this.currentPageImgUseGuide = 'icon-menu4-1.svg';
    }
    console.log(path[3]);
  },
  methods: {
    // currentPageOn(page) {
    //   this.currentPage = page;
    //   if (page == 'dashboard') {
    //     this.currentPageImgDashboard = 'icon-menu1-1.svg';
    //   } else if (page == 'allProject') {
    //     this.currentPageImgAllProject = 'icon-menu2-1.svg';
    //   } else if (page == 'mywork') {
    //     this.currentPageImgMyWork = 'icon-menu3-1.svg';
    //   } else if (page == 'useGuide') {
    //     this.currentPageImgUseGuide = 'icon-menu4-1.svg';
    //   }
    // },
  },
};
</script>

<style></style>
