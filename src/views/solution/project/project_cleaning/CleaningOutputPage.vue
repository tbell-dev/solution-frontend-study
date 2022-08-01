<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article>
            <ul class="current-bar">
              <li>
                <h2>전체 산출물 목록</h2>
                <b>3</b>
                <h2>건</h2>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>산출물 단계</span></th>
                <th><span>산출물 파일명</span></th>
                <th><span>마지막 작업완료일</span></th>
                <th><span>용량</span></th>
                <th></th>
              </tr>
              <tr>
                <td><b>정제완료 산출물 다운로드</b></td>
                <td><span>인간_result_752.zip</span></td>
                <td><span>2022.02.14 11:39:41</span></td>
                <td><span>518 MB</span></td>
                <td><button class="btn2-1">다운로드</button></td>
              </tr>
              <tr>
                <td><b>검수완료 산출물 다운로드</b></td>
                <td><span>인간_result_1754.zip</span></td>
                <td><span>2022.02.27 15:14:31</span></td>
                <td><span>427 MB</span></td>
                <td><button class="btn2-1">다운로드</button></td>
                <td></td>
              </tr>

              <tr>
                <td><b>최종 산출물 다운로드</b></td>
                <td><span>인간_result_2656.zip</span></td>
                <td><span>2021.03.03 04:08:47</span></td>
                <td><span>158 MB</span></td>
                <td><button class="btn2-1">다운로드</button></td>
              </tr>
            </table>
          </article>
          <article class="pagination">
            <button class="page-prev">
              <img
                src="../../../../assets/images/project/icon/icon-page-prev.svg"
                alt=""
              />
            </button>
            <ul class="pagination-page">
              <li class="now-page">
                <button><span> 1</span></button>
              </li>
            </ul>
            <button class="page-next">
              <img
                src="../../../../assets/images/project/icon/icon-page-next.svg"
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
