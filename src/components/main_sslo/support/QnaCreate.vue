<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro-type2">
      <img src="../../../assets/images/sslo/sslo-logo(k).svg" alt="sslo-logo" />
      <h2>회사 소개</h2>
      <b>1:1 Question</b>
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
        <div class="now1 now"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 섹션1-문의 -->
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
        <div class="check1">
          <div class="line1">
            <input type="checkbox" />
            <b>14세 미만이 아님을 확인합니다.</b>
          </div>
          <p>
            만 14세 미만인 경우 서비스가 제한됩니다. 서비스를 원하시는 경우,
            고객센터로 문의 부탁드립니다. <br />(고객센터 연락처 :
            abdc1234@tbell.co.kr)
          </p>
        </div>
        <div class="check2">
          <input type="checkbox" />
          <p><b>개인정보 수집 및 이용</b>에 동의합니다.</p>
        </div>
        <button class="submit">제출</button>
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
</style>
