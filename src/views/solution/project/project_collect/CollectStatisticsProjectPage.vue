<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article class="align1 button-filter">
            <router-link
              to="/allProject/project_cleaning/statistics/project"
              class="btn-set btn2-1"
              >공통 통계</router-link
            >
            <router-link
              to="/allProject/project_cleaning/statistics/member"
              class="btn-set btn1-1"
              >작업자 통계</router-link
            >
          </article>
        </section>
        <section>
          <article class="align5">
            <div class="statistics-left">
              <div class="statistics-title align1">
                <h2>전체 작업 진행률</h2>
              </div>
              <div class="statistics-wrap">
                <div class="statistics">
                  <h3>프로젝트 진행현황</h3>
                  <!-- 도넛그래프 -->
                </div>
                <table class="table7">
                  <tr class="table7-head">
                    <th><span>작업단계</span></th>
                    <th><span>완료 파일 개수</span></th>
                    <th><span>전체 개수 대비 비율</span></th>
                  </tr>
                  <tr>
                    <th><span>정제</span></th>
                    <td><span>700</span></td>
                    <td><span>70%</span></td>
                  </tr>
                  <tr>
                    <th><span>검수</span></th>
                    <td><span>200</span></td>
                    <td><span>20%</span></td>
                  </tr>
                  <tr>
                    <th><span>최종(완료)</span></th>
                    <td><span>100</span></td>
                    <td><span>10%</span></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="statistics-right">
              <div class="statistics-title align4">
                <h2>일별 작업 진행 추이</h2>
                <div class="right align1">
                  <button class="excel-download align1">
                    <img
                      src="../../../../assets/images/project/icon/icon-excel.svg"
                      alt=""
                    />
                    <h3>엑셀 다운로드</h3>
                    <img
                      src="../../../../assets/images/project/icon/icon-download.svg"
                      alt=""
                    />
                  </button>
                  <select name="" id="">
                    <option value=""><span> 최근 7일</span></option>
                    <option value=""><span> 최근 14일</span></option>
                    <option value=""><span> 최근 30일</span></option>
                  </select>
                </div>
              </div>
              <Grape1 />
              <Grape2 />
            </div>
          </article>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// 메뉴
import MainMenu from '../../../../components/solution/common/MenuMain.vue';
import SubMenu from '../../../../components/solution/common/MenuSub1.vue';
// 헤더
import Header from '../../../../components/solution/common/Header.vue';

import Grape1 from '../../../../components/solution/project/common/setting/CleaningGraph1.vue';
import Grape2 from '../../../../components/solution/project/common/setting/CleaningGraph2.vue';

export default {
  components: {
    MainMenu,
    SubMenu,
    Header,
    Grape1,
    Grape2,
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
