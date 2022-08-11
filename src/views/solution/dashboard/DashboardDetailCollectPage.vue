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
                <label>
                  7일 <input type="radio" v-model="period" value="7일" />
                </label>
                <label>
                  14일 <input type="radio" v-model="period" value="14일" />
                </label>
                <label>
                  1개월 <input type="radio" v-model="period" value="1개월" />
                </label>
                <label>
                  3개월 <input type="radio" v-model="period" value="3개월" />
                </label>
                <label>
                  6개월 <input type="radio" v-model="period" value="6개월" />
                </label>
                <p v-if="period !== ''">현재 선택 : {{ period }}</p>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <ProjectDetail :project-id="projectId" />
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
import ProjectDetail from '../../../components/solution/dashboard/dashboard_component/DashboardDetailCollect.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const projectId = route.params.id;
    const period = ref('');
    return {
      period,
      projectId,
    };
  },
  components: { MainMenu, Header, ProjectDetail },
};
</script>

<style scoped>
@import '../../../css/reset.css';
@import '../../../css/common.css';
</style>
