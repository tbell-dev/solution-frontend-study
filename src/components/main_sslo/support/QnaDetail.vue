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
      <table class="table1">
        <tr>
          <th>문의 유형</th>
          <td colspan="3">1:1 문의</td>
        </tr>
        <tr>
          <th>등록자</th>
          <td>홍길동</td>
          <th>등록일</th>
          <td>2021.12.25</td>
        </tr>
        <tr>
          <th>첨부파일</th>
          <td>없음</td>
          <th>조회수</th>
          <td>1</td>
        </tr>
        <tr>
          <th>문의 제목</th>
          <td colspan="3">프로젝트 이용관련 문의합니다.</td>
        </tr>
        <tr>
          <th>문의 제목</th>
          <td colspan="3">
            안녕하세요. 주식회사 티어스입니다. <br />
            라벨링 플랫폼을 이용하고자 가격 문의드립니다.
          </td>
        </tr>
      </table>
      <div class="btn-wrap">
        <a href="qna-detail-modify.html" class="button1">수정</a>
        <a href="qna-detail.html" class="to-list">목록</a>
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
