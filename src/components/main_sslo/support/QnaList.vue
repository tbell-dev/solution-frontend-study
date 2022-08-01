<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro-type2">
      <img src="../../../assets/images/sslo/sslo-logo(k).svg" alt="sslo-logo" />
      <h2>문의내역</h2>
      <b>Contact Details</b>
    </section>
    <!-- 메뉴바 -->
    <div class="lnb">
      <ul>
        <li><a href="qna-detail.html">문의내역</a></li>
        <li><a href="personal-set.html">개인정보설정</a></li>
      </ul>
      <div class="container">
        <div class="now now1"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 섹션1-게시판 -->
    <section class="qna-detail1 sub-section">
      <div class="table-bar">
        <div class="category">
          <button class="all">전체</button>
          <button class="service">1:1 문의</button>
          <button class="work">제휴 문의</button>
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
          <td class="tag">1:1 문의</td>
          <td class="title">
            <a href="qna-detail-list.html">내용을 입력하세요</a>
          </td>
          <td class="date">2021.10.19</td>
          <td class="state">답변대기</td>
        </tr>
        <!-- 2열 -->
        <tr>
          <td class="tag">제휴문의</td>
          <td class="title">
            <a href="qna-detail-list.html">내용을 입력하세요</a>
          </td>
          <td class="date">2021.10.19</td>
          <td class="state">답변대기</td>
        </tr>
        <!-- 3열 -->
        <tr>
          <td class="tag">1:1 문의</td>
          <td class="title">
            <a href="qna-detail-list.html">내용을 입력하세요</a>
          </td>
          <td class="date">2021.10.19</td>
          <td class="state">답변대기</td>
        </tr>
        <!-- 4열 -->
        <tr>
          <td class="tag">1:1 문의</td>
          <td class="title">
            <a href="qna-detail-list.html">내용을 입력하세요</a>
          </td>
          <td class="date">2021.10.19</td>
          <td class="state">처리완료</td>
        </tr>
        <!-- 5열 -->
        <tr>
          <td class="tag">1:1 문의</td>
          <td class="title">
            <a href="qna-detail-list.html">내용을 입력하세요</a>
          </td>
          <td class="date">2021.10.19</td>
          <td class="state">처리완료</td>
        </tr>
        <!-- 6열 -->
        <tr>
          <td class="tag">1:1 문의</td>
          <td class="title">
            <a href="qna-detail-list.html">내용을 입력하세요</a>
          </td>
          <td class="date">2021.10.19</td>
          <td class="state">처리완료</td>
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
    <div class="button-box">
      <button class=""></button>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/support/qnadetail.css);
</style>
