<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro-type2">
      <img src="../../../assets/images/sslo/sslo-logo(k).svg" alt="sslo-logo" />
      <h2>개인정보설정</h2>
      <b>Pesonal Setting</b>
    </section>
    <!-- 메뉴바 -->
    <div class="lnb">
      <ul>
        <li><a href="qna-detail-list.html">문의내역</a></li>
        <li><a href="personal-set.html">개인정보설정</a></li>
      </ul>
      <div class="container">
        <div class="now now2"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 섹션1-게시판 -->
    <section class="personal-set1 sub-section">
      <table class="table1">
        <tr>
          <th>현재 비밀번호</th>
          <td><input type="text" placeholder="현재 비밀번호" /></td>
        </tr>
        <tr>
          <th>새 비밀번호</th>
          <td><input type="text" placeholder="새 비밀번호" /></td>
        </tr>
        <tr>
          <th>새 비밀번호 확인</th>
          <td><input type="text" placeholder="새 비밀번호 확인" /></td>
        </tr>
      </table>
      <div class="button-box">
        <button class="save">저장</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/mypage/mypage_setting.css);
</style>
