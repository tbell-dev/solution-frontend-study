<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro-type2">
      <img src="../../../assets/images/sslo/sslo-logo(k).svg" alt="sslo-logo" />
      <h2>자주하는 질문</h2>
      <b>FAQ</b>
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
        <div class="now now3"><div class="now-bar"></div></div>
      </div>
    </div>

    <section class="faq1 sub-section">
      <div class="table-bar">
        <div class="category">
          <button class="all">전체</button>
          <button class="member">회원</button>
          <button class="price">요금</button>
          <button class="solution">솔루션</button>
          <button class="error">오류</button>
          <button class="etc">기타</button>
        </div>
        <div class="search">
          <input type="text" class="search" />
          <button class="search-img">
            <img src="../../../assets/images/sslo/search.png" alt="" />
          </button>
        </div>
      </div>
      <table class="table2">
        <!-- 1열 -->
        <tr>
          <td class="tag">회원</td>
          <td class="title"><a href="faq-list.html"> 내용을 입력하세요.</a></td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 2열 -->
        <tr>
          <td class="tag">서비스</td>
          <td class="title"><a href="faq-list.html"> 내용을 입력하세요.</a></td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 3열 -->
        <tr>
          <td class="tag">요금</td>
          <td class="title"><a href="faq-list.html"> 내용을 입력하세요.</a></td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 4열 -->
        <tr>
          <td class="tag">솔루션</td>
          <td class="title"><a href="faq-list.html"> 내용을 입력하세요.</a></td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 5열 -->
        <tr>
          <td class="tag">오류</td>
          <td class="title"><a href="faq-list.html"> 내용을 입력하세요.</a></td>
          <td class="date">2021.10.19</td>
        </tr>
        <!-- 6열 -->
        <tr>
          <td class="tag">기타</td>
          <td class="title"><a href="faq-list.html"> 내용을 입력하세요.</a></td>
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
@import url(../../../css/sslo/support/faq.css);
</style>
