<template>
  <div class="sub-menu">
    <div class="sub-menu-top">
      <select name="" id="" v-model="projectCheck">
        <option v-for="(item, index) in AllProjectListItem" :key="index">
          {{ item.projectName }}
        </option>
      </select>
    </div>
    <div class="sub-menu-wrap">
      <div class="sub-menu-title">
        <b class="align1"
          ><img
            src="../../../assets/images/project/header+menu/icon-project.svg"
            alt=""
          />프로젝트 관리</b
        >
      </div>
      <ul class="sub-menu-bottom">
        <li :class="{ 'now-menu': currentPage == 'folderlist' }">
          <router-link to="/solution/mywork/folderlist">내 작업</router-link>
        </li>
        <li :class="{ 'now-menu': currentPage == 'statistics' }">
          <router-link to="/solution/mywork/statistics"
            >내 작업 통계</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      currentPage: '',
      projectCheck: '이상행동(주취행동) 이미지 가공',
      AllProjectListItem: [],
    };
  },
  mounted: function () {
    axios.get('./ProjectData.json').then(response => {
      // console.log(response.data.project);
      this.AllProjectListItem = response.data.project;
      this.AllProjectListItemOrigin = response.data.project;
    });
    console.log(this.AllProjectListItem);
  },
  created() {
    console.log('현재 url' + window.location.href);
    var path = window.location.href.split('/');
    if (path[5] == 'folderlist') {
      this.currentPage = 'folderlist';
    } else if (path[5] == 'statistics') {
      this.currentPage = 'statistics';
    }
    console.log(path[4]);
  },
};
</script>

<style></style>
