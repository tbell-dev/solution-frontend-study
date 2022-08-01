<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /></div>
    <div class="right-wrap">
      <Header />
      <MainArea />
    </div>
  </div>
</template>

<script>
// 메뉴
import MainMenu from '../../../components/solution/common/MenuMain.vue';
// 헤더
import Header from '../../../components/solution/common/Header.vue';
// 메인
import MainArea from '../../../components/solution/dashboard/DashboardList.vue';

export default {
  components: { MainMenu, Header, MainArea },
};
</script>

<style scoped>
@import '../../../css/reset.css';
@import '../../../css/common.css';
</style>
