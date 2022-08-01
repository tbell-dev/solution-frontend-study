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
    <section class="qna1 sub-section">
      <ul class="box-left">
        <li><h4>&#42;문의유형</h4></li>
        <li><h4>&#42;제목</h4></li>
        <li><h4>&#42;이름</h4></li>
        <li><h4>&#42;전화번호</h4></li>
        <li><h4>&#42;이메일</h4></li>
        <li><h4>&#42;문의내용</h4></li>
      </ul>
      <ul class="box-right">
        <li>
          <select name="type" id="">
            <option value="">문의 유형을 선택해주세요.</option>
          </select>
        </li>
        <li>
          <input type="text" placeholder="문의 제목을 입력해주세요." />
        </li>
        <li>
          <input type="text" placeholder="이름을 입력해주세요." />
        </li>
        <li>
          <input type="text" placeholder="전화번호를 입력해주세요." />
        </li>
        <li>
          <input type="text" placeholder="이메일을 정확히 입력해주세요." />
        </li>
        <li class="area-box">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="문의내용을 상세히 입력해주세요."
          ></textarea>
        </li>
        <li></li>
        <div class="btn-wrap">
          <button class="button1">수정</button>
          <a href="qna-detail.html" class="to-list">목록</a>
        </div>
      </ul>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/support/qna.css);
@import url(../../../css/sslo/support/qnadetail.css);
</style>
