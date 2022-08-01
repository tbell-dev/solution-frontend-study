<template>
  <main id="main">
    <section>
      <article>
        <ul class="search-filter">
          <li class="search-title">
            <h2>검색일</h2>
          </li>
          <li class="search-contents">
            <!-- <button
              class="btn1-1 btn1-active"
              @click="PeriodNow"
              :class="{
                active: isActivePeriodNow,
                'btn1-1': !isActivePeriodNow,
              }"
            >
              <span>당월</span>
            </button> -->
            <button
              @click="Period_2_Week"
              :class="{
                'btn1-1 btn1-active': isActivePeriodWeek2,
                'btn1-1': !isActivePeriodWeek2,
              }"
            >
              <span>14일</span>
            </button>
            <button
              @click="Period_1_Month"
              :class="{
                'btn1-1 btn1-active': isActivePeriodMonth1,
                'btn1-1': !isActivePeriodMonth1,
              }"
            >
              <span>1개월</span>
            </button>
            <button
              @click="Period_3_Month"
              :class="{
                'btn1-1 btn1-active': isActivePeriodMonth3,
                'btn1-1': !isActivePeriodMonth3,
              }"
            >
              <span>3개월</span>
            </button>
            <button
              @click="Period_6_Month"
              :class="{
                'btn1-1 btn1-active': isActivePeriodMonth6,
                'btn1-1': !isActivePeriodMonth6,
              }"
            >
              <span>6개월</span>
            </button>
            <button
              @click="Period_Custom"
              :class="{
                'btn1-1 btn1-active': isActivePeriodCustom,
                'btn1-1': !isActivePeriodCustom,
              }"
            >
              <span>직접입력</span>
            </button>
            <Datepicker
              v-model="date"
              v-show="isActivePeriodCustom"
              range
              multiCalendars
              :enableTimePicker="false"
            />
          </li>
        </ul>
        <ul class="search-filter">
          <li class="search-title">
            <h2>검색어</h2>
          </li>
          <li class="search-contents">
            <input
              type="search"
              maxlength="70"
              v-model="searchKeyword"
              placeholder="프로젝트명을 입력해주세요."
            />
            <button class="btn2-1" @click="sortedData()">검색</button>
          </li>
        </ul>
      </article>
    </section>
    <section>
      <article>
        <ul class="current-bar1">
          <li>
            <h2>전체 프로젝트</h2>
            <b>{{ AllProjectListItem.length }}</b>
            <h2>건</h2>
          </li>
          <li>
            <select v-model="pageSizeSelect" @click="pageSizeSetting()">
              <option value="10">10개씩 보기</option>
              <option value="30">30개씩 보기</option>
              <option value="50">50개씩 보기</option>
            </select>
          </li>
        </ul>
      </article>
      <article class="basic-article">
        <table class="table1">
          <tr class="table1-head">
            <th><span>No</span></th>
            <th><span>프로젝트 유형</span></th>
            <th><span>프로젝트 명</span></th>
            <th><span>작업자 수</span></th>
            <th><span>프로젝트 생성일</span></th>
            <th class="table1-more"></th>
          </tr>
          <tr v-for="(item, index) in AllProjectListItemPage" :key="index">
            <td>
              <span>{{ index + 1 }}</span>
            </td>
            <td>
              <span>{{ item.projectType }}</span>
            </td>
            <td>
              <router-link
                :to="{
                  path: '/allProject' + item.projectTypeLink + '/folderlist',
                }"
                >{{ item.projectName }}</router-link
              >
            </td>
            <td>
              <span>{{ item.projectWorker }}명</span>
            </td>
            <td>
              <span>{{ item.date }}</span>
            </td>
            <td class="table1-more">
              <button>
                <img
                  src="../../../../assets/images/project/icon/icon-more.svg"
                  alt=""
                />
              </button>
              <ul class="more-detail" v-show="update">
                <li>
                  <button><span>수정</span></button>
                </li>
                <li>
                  <button><span>삭제</span></button>
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <div class="btn-wrap1">
          <router-link
            to="/allproject/allprojectcreate"
            class="btn-set btn2-3 add-project"
            ><span>프로젝트 추가</span
            ><img
              src="../../../../assets/images/project/icon/icon-add.svg"
              alt=""
          /></router-link>
        </div>
      </article>
      <article class="pagination">
        <button class="page-prev" :disabled="pageNum === 0" @click="prevPage">
          <img
            src="../../../../assets/images/project/icon/icon-page-prev.svg"
            alt=""
          />
        </button>
        <ul class="pagination-page">
          <li
            v-for="n in pageCount"
            :key="n"
            :class="{ 'now-page': n === pageNum + 1 }"
            @click="changeCurrentPage(n)"
          >
            <button>
              <span> {{ n }}</span>
            </button>
          </li>
        </ul>
        <button
          class="page-next"
          :disabled="pageNum >= pageCount - 1"
          @click="nextPage"
        >
          <img
            src="../../../../assets/images/project/icon/icon-page-next.svg"
            alt=""
          />
        </button>
      </article>
    </section>
  </main>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

//import ProjectData from '../../../../../public/ProjectData.json';

import axios from 'axios';

export default {
  computed: {
    maxPage() {
      // 총 페이지 수(and 최대 페이지 번호)
      return Math.ceil(this.countOfTotal / this.listSize);
    },
    startPage() {
      // 페이지 시작 번호
      return (
        Math.trunc((this.currentPage - 1) / this.pageCount) * this.pageCount + 1
      );
    },
    endPage() {
      // 페이지 끝 번호
      let end = this.startPage + this.pageCount - 1;
      return end < this.maxPage ? end : this.maxPage;
    },
    paginationUnits() {
      // 화면에 표시할 페이지 배열..
      let units = [];
      for (let num = this.startPage; num <= this.endPage; num++) {
        units.push(num);
      }
      return units;
    },
    pageCount() {
      //this.pageSize = this.pageSizeSelect;
      let listLeng = this.AllProjectListItem.length,
        listSize = this.pageSizeSelect,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    AllProjectListItemPage() {
      const start = this.pageNum * this.pageSizeSelect,
        end = start + this.pageSizeSelect;
      return this.AllProjectListItem.slice(start, end);
    },
  },
  components: { Datepicker },
  mounted: function () {
    axios.get('./ProjectData.json').then(response => {
      // console.log(response.data.project);
      this.AllProjectListItem = response.data.project;
      this.AllProjectListItemOrigin = response.data.project;

      //현재날짜 추출
      let today = new Date();
      let year = today.getFullYear();
      let month = ('0' + (today.getMonth() + 1)).slice(-2);
      let day = ('0' + today.getDate()).slice(-2);
      let dateString = year + '.' + month + '.' + day;

      //데이터 유형 체크
      let projectTypeCheck; // eslint-disable-line no-unused-vars
      if (this.$route.params.projectType === 'collect') {
        projectTypeCheck = '데이터 수집';
      } else if (this.$route.params.projectType === 'cleaning') {
        projectTypeCheck = '데이터 정제';
      } else if (this.$route.params.projectType === 'labeling') {
        projectTypeCheck = '데이터 가공';
      }

      if (this.$route.params.projectName !== undefined) {
        this.AllProjectListItem.push({
          no: this.AllProjectListItem.length + 1,
          projectType: projectTypeCheck,
          projectName: this.$route.params.projectName,
          projectWorker: 0,
          date: dateString,
          projectTypeLink: '/project_' + this.$route.params.projectType,
        });
        console.log(this.$route.params.projectTypeLink);
      }
    });
  },
  data: function () {
    return {
      pageNum: 0,
      pageSizeSelect: 10,
      //      pageCount: 10, // 페이지 버튼 최대 갯수

      isActivePeriodWeek2: true,
      isActivePeriodMonth1: false,
      isActivePeriodMonth3: false,
      isActivePeriodMonth6: false,
      isActivePeriodCustom: false,
      ProjectData: '',
      searchKeyword: '',
      AllProjectListItem: [],
      AllProjectListItemOrigin: [],
      // AllProjectListItem: [
      //   {
      //     id: 1,
      //     type: '데이터 수집',
      //     name: '인간 자세 수집',
      //     worker: '2명',
      //     date: '	2021.10.22',
      //   },
      //   {
      //     id: 2,
      //     type: '데이터 수집',
      //     name: '인간 자세 수집',
      //     worker: '2명',
      //     date: '	2021.10.22',
      //   },
      //   {
      //     id: 3,
      //     type: '데이터 수집',
      //     name: '인간 자세 수집',
      //     worker: '2명',
      //     date: '	2021.10.22',
      //   },
      // ],

      //receive: '',
    };
  },
  props: {
    listArray: {
      type: Array,
      required: true,
    },

    projectName: {
      type: String,
      default: '',
    },
  },

  methods: {
    onReceive(value) {
      console.log('전달');
      console.log(value);
    },
    // pageSizeSetting() {
    //   this.pageSize = this.pageSizeSelect;
    // },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    changeCurrentPage(page) {
      this.pageNum = page - 1;
    },
    Period_2_Week() {
      this.isActivePeriodWeek2 = !this.isActivePeriodWeek2;
      this.isActivePeriodMonth1 = false;
      this.isActivePeriodMonth3 = false;
      this.isActivePeriodMonth6 = false;
      this.isActivePeriodCustom = false;
    },
    Period_1_Month() {
      this.isActivePeriodWeek2 = false;
      this.isActivePeriodMonth1 = !this.isActivePeriodMonth1;
      this.isActivePeriodMonth3 = false;
      this.isActivePeriodMonth6 = false;
      this.isActivePeriodCustom = false;
    },
    Period_3_Month() {
      this.isActivePeriodWeek2 = false;
      this.isActivePeriodMonth1 = false;
      this.isActivePeriodMonth3 = !this.isActivePeriodMonth3;
      this.isActivePeriodMonth6 = false;
      this.isActivePeriodCustom = false;
    },
    Period_6_Month() {
      this.isActivePeriodWeek2 = false;
      this.isActivePeriodMonth1 = false;
      this.isActivePeriodMonth3 = false;
      this.isActivePeriodMonth6 = !this.isActivePeriodMonth6;
      this.isActivePeriodCustom = false;
    },
    Period_Custom() {
      this.isActivePeriodWeek2 = false;
      this.isActivePeriodMonth1 = false;
      this.isActivePeriodMonth3 = false;
      this.isActivePeriodMonth6 = false;
      this.isActivePeriodCustom = !this.isActivePeriodCustom;
    },
    sortedData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.AllProjectListItem.filter(data => {
          return data.projectName
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });
      } else {
        this.searchedData1 = this.AllProjectListItemOrigin;
      }
      return (this.AllProjectListItem = this.searchedData1);
    },
  },
};
</script>

<style></style>
