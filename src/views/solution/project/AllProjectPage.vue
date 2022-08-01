<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /></div>
    <div class="right-wrap">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
// 메뉴
import MainMenu from '../../../components/solution/common/MenuMain.vue';
// 헤더
import Header from '../../../components/solution/common/Header.vue';

export default {
  components: { MainMenu, Header },
};
</script>

<style scoped>
@import '../../../css/reset.css';
@import '../../../css/common.css';
</style>
