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
              class="btn-set btn1-1"
              >공통 통계</router-link
            >
            <router-link
              to="/allProject/project_cleaning/statistics/member"
              class="btn-set btn2-1"
              >작업자 통계</router-link
            >
          </article>
        </section>
        <section>
          <article class="align5">
            <div class="statistics-right">
              <div class="statistics-title">
                <h2>일별 작업자의 작업량</h2>
              </div>
              <div class="statistics-wrap">
                <div class="statistics">
                  <h3>일별 작업자의 작업량</h3>
                  <!-- 꺾은선그래프 -->
                </div>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article>
            <h2>단계별 작업자의 작업량</h2>
          </article>
          <article class="align1 button-filter">
            <button class="btn-set btn2-1">정제</button>
            <button class="btn-set btn1-1">검수</button>
            <button class="btn-set btn1-1">최종</button>
          </article>
          <article>
            <ul class="search-filter">
              <li class="search-title">
                <h2>검색어</h2>
              </li>
              <li class="search-contents">
                <input
                  type="search"
                  placeholder="이름과 이메일로 검색해주세요."
                  class="search-icon-bar"
                />
                <button class="btn2-0 search-icon-btn">
                  <img
                    src="../../../../assets/images/project/icon/icon-search-btn.svg"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <input type="date" />
              </li>
              <li>
                <button class="btn1-1">오늘</button>
                <button class="btn1-1">3일</button>
                <button class="btn1-1">1주일</button>
                <button class="btn1-1">1개월</button>
              </li>
            </ul>
          </article>
          <article class="align6">
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
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>멤버명</span></th>
                <th><span>이메일</span></th>
                <th><span>작업 파일 수</span></th>
                <th><span>반려 파일 수</span></th>
                <th><span>재작업 수</span></th>
                <th><span>총 작업시간</span></th>
              </tr>
              <tr>
                <td><span>홍길동</span></td>
                <td><span>gd.hong@abc.co.kr</span></td>
                <td><span>80개</span></td>
                <td><span>80개</span></td>
                <td><span>10개</span></td>
                <td><span>0</span></td>
              </tr>
              <tr>
                <td><span>홍길동</span></td>
                <td><span>gd.hong@abc.co.kr</span></td>
                <td><span>80개</span></td>
                <td><span>80개</span></td>
                <td><span>10개</span></td>
                <td><span>0</span></td>
              </tr>
              <tr>
                <td><span>홍길동</span></td>
                <td><span>gd.hong@abc.co.kr</span></td>
                <td><span>80개</span></td>
                <td><span>80개</span></td>
                <td><span>10개</span></td>
                <td><span>0</span></td>
              </tr>
              <tr>
                <td><span>홍길동</span></td>
                <td><span>gd.hong@abc.co.kr</span></td>
                <td><span>80개</span></td>
                <td><span>80개</span></td>
                <td><span>10개</span></td>
                <td><span>0</span></td>
              </tr>
              <tr>
                <td><span>홍길동</span></td>
                <td><span>gd.hong@abc.co.kr</span></td>
                <td><span>80개</span></td>
                <td><span>80개</span></td>
                <td><span>10개</span></td>
                <td><span>0</span></td>
              </tr>
            </table>
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

export default {
  components: {
    MainMenu,
    SubMenu,
    Header,
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
