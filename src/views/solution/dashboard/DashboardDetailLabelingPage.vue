<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article>
            <ul class="search-filter">
              <li class="search-title">
                <h2>검색일</h2>
              </li>
              <li class="search-contents">
                <input type="date" />
                <button class="btn1-1 btn1-active"><span>7일</span></button>
                <button class="btn1-1"><span>14일</span></button>
                <button class="btn1-1"><span>1개월</span></button>
                <button class="btn1-1"><span>3개월</span></button>
                <button class="btn1-1"><span>6개월</span></button>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <ProjectDetail />
          <article>
            <ul class="current-bar">
              <li>
                <h2>검수 작업자 현황</h2>
              </li>
            </ul>
          </article>
          <article>
            <table class="table3">
              <tr class="table3-head">
                <th><span>No</span></th>
                <th><span>구분</span></th>
                <th><span>작업자명</span></th>
                <th><span>완료 작업 건수</span></th>
                <th><span>마지막 작업일</span></th>
                <th><span>작업당 평균 소요시간</span></th>
                <th><span>전체 소요시간</span></th>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>검수</span></td>
                <td><span>홍길동</span></td>
                <td><span>500</span></td>
                <td><span>2021.10.22</span></td>
                <td><span>15초</span></td>
                <td><span>1시간 10분 35초</span></td>
              </tr>
              <tr>
                <td><span>2</span></td>
                <td><span>검수</span></td>
                <td><span>홍길동</span></td>
                <td><span>500</span></td>
                <td><span>2021.10.22</span></td>
                <td><span>15초</span></td>
                <td><span>1시간 10분 35초</span></td>
              </tr>
            </table>
          </article>
          <article class="pagination">
            <button class="page-prev">
              <img
                src="../../../assets/images/project/icon/icon-page-prev.svg"
                alt=""
              />
            </button>
            <ul class="pagination-page">
              <li class="now-page">
                <button><span> 1</span></button>
              </li>
              <li>
                <button><span> 2</span></button>
              </li>
              <li>
                <button><span> 3</span></button>
              </li>
              <li>
                <button><span> 4</span></button>
              </li>
              <li>
                <button><span> 5</span></button>
              </li>
            </ul>
            <button class="page-next">
              <img
                src="../../../assets/images/project/icon/icon-page-next.svg"
                alt=""
              />
            </button>
          </article>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
// 메뉴
import MainMenu from '../../../components/solution/common/MenuMain.vue';
// 헤더
import Header from '../../../components/solution/common/Header.vue';
// 프로젝트 세부 현황
import ProjectDetail from '../../../components/solution/dashboard/dashboard_component/DashboardDetailLabeling.vue';

export default {
  components: { MainMenu, Header, ProjectDetail },
};
</script>

<style scoped>
@import '../../../css/reset.css';
@import '../../../css/common.css';
</style>
