<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro-type2">
      <img src="../../../assets/images/sslo/sslo-logo(k).svg" alt="sslo-logo" />
      <h2>공지사항</h2>
      <b>Notice</b>
    </section>
    <!-- 메뉴바 -->
    <div class="lnb">
      <ul>
        <li><router-link to="/sslo/notice">공지사항</router-link></li>
        <li><router-link to="/sslo/qna">1:1 문의하기</router-link></li>
        <li><router-link to="/sslo/partnership">제휴문의</router-link></li>
        <li><router-link to="/sslo/faq">자주하는 질문</router-link></li>
      </ul>
      <div class="container">
        <div class="now"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 섹션1-게시판 -->
    <section class="customer1 sub-section">
      <div class="table-bar">
        <div class="category">
          <button class="all">전체</button>
          <button class="service">서비스 안내</button>
          <button class="work">작업 안내</button>
        </div>
        <div class="search">
          <input type="text" class="search" />
          <button class="search-img">
            <img src="../../../assets/images/sslo/search.png" alt="" />
          </button>
        </div>
      </div>
      <table>
        <!-- 1열 -->
        <tr>
          <td class="tag">서비스 안내</td>
          <td class="title">내용을 입력하세요</td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 2열 -->
        <tr>
          <td class="tag">서비스 안내</td>
          <td class="title">내용을 입력하세요</td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 3열 -->
        <tr>
          <td class="tag">서비스 안내</td>
          <td class="title">내용을 입력하세요</td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 4열 -->
        <tr>
          <td class="tag">서비스 안내</td>
          <td class="title">내용을 입력하세요</td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 5열 -->
        <tr>
          <td class="tag">서비스 안내</td>
          <td class="title">내용을 입력하세요</td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 6열 -->
        <tr>
          <td class="tag">서비스 안내</td>
          <td class="title">내용을 입력하세요</td>
          <td class="date">2021.10.19</td>
        </tr>
      </table>
      <div class="pager">
        <button class="left">
          <img src="../../../assets/images/sslo/button-pagerleft.png" alt="" />
        </button>
        <button class="pagenum1">1</button>
        <button class="pagenum2">2</button>
        <button class="pagenum3">3</button>
        <button class="pagenum4">4</button>
        <button class="pagenum5">5</button>
        <button class="right">
          <img src="../../../assets/images/sslo/button-pagerright.png" alt="" />
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/support/notice.css);
</style>
