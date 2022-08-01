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
        <li><a href="../html/customer.html">공지사항</a></li>
        <li><a href="../html/qna.html">1:1 문의하기</a></li>
        <li><a href="../html/partnership.html">제휴문의</a></li>
        <li><a href="../html/faq.html">자주하는 질문</a></li>
      </ul>
      <div class="container">
        <div class="now3 now"><div class="now-bar"></div></div>
      </div>
    </div>

    <section class="faq1 sub-section">
      <table class="table1">
        <tr>
          <th>질문번호</th>
          <td>134</td>
        </tr>
        <tr>
          <th>분야</th>
          <td>분야명</td>
        </tr>
        <tr>
          <th>질문 제목</th>
          <td>프로젝트 이용관련 문의합니다</td>
        </tr>
        <tr>
          <th>질문 게시날짜</th>
          <td>2020.10.10</td>
        </tr>
        <tr>
          <th>내용</th>
          <td>
            안녕하세요. 주식회사 티어스입니다. <br />라벨링 플랫폼을 이용하고자
            가격 문의드립니다.
          </td>
        </tr>
        <tr>
          <th>질문 작성자</th>
          <td>홍길동</td>
        </tr>
      </table>
      <div class="btn-wrap">
        <router-link to="/sslo/faq" class="to-list">목록</router-link>
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
