<template>
  <main id="main">
    <!-- 인트로-->
    <section class="intro-type2">
      <img src="../../../assets/images/sslo/sslo-logo(k).svg" alt="sslo-logo" />
      <h2>제휴 문의</h2>
      <b>Partnership inquiry</b>
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
        <div class="now now2"><div class="now-bar"></div></div>
      </div>
    </div>
    <!-- 섹션1-제휴 -->
    <section class="sub-section partnership1">
      <h3>제휴제안 내용</h3>
      <div class="content-box">
        <ul class="box-left">
          <li><h4>&#42;제휴 유형</h4></li>
          <li><h4>&#42;제목</h4></li>
          <li class="textarea-box"><h4>&#42;내용</h4></li>
          <li><h4>제안서 첨부</h4></li>
        </ul>
        <ul class="box-right">
          <li>
            <select name="type" id="">
              <option value="">제휴 유형을 선택해주세요.</option>
            </select>
          </li>
          <li>
            <input type="text" placeholder="제목을 입력해주세요." />
          </li>
          <li class="textarea-box">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="제휴하실 내용을 입력해주세요. "
            ></textarea>
          </li>
          <li class="offer">
            <input
              class="upload-name"
              type="text"
              placeholder="제안서를 첨부해주세요."
              readonly
            />
            <label className="input-file-button" for="file"> 파일 첨부 </label>
            <input type="file" id="file" class="input-flie" />
          </li>
        </ul>
      </div>
    </section>
    <!-- 섹션2 정보 -->
    <section class="sub-section partnership1 partnership2">
      <h3>업체 정보</h3>
      <div class="content-box">
        <ul class="box-left">
          <li><h4>&#42;기업 구분</h4></li>
          <li><h4>&#42;회사 주소</h4></li>
          <li><h4>&#42;대표자명</h4></li>
          <li><h4>&#42;전화번호</h4></li>
          <li><h4>&#42;메일주소</h4></li>
          <li><h4>홈페이지 주소</h4></li>
          <li><h4>회사소개서</h4></li>
        </ul>
        <ul class="box-right">
          <li>
            <select name="type" id="">
              <option value="">기업 구분을 선택해주세요.</option>
            </select>
          </li>
          <li class="address">
            <input type="text" />
            <button>우편번호 찾기</button>
          </li>
          <li>
            <input type="text" placeholder="제안자명을 입력해주세요." />
          </li>
          <li>
            <input type="text" placeholder="전화번호를 입력해주세요." />
          </li>
          <li>
            <input type="text" placeholder="메일 주소를 입력해주세요." />
          </li>
          <li>
            <input type="text" placeholder="홈페이지 주소를 선택해주세요." />
          </li>
          <li class="offer">
            <input
              class="fileload-name"
              type="text"
              placeholder="회사 소개서를 첨부해주세요."
              readonly
            />
            <label className="input-file-button" for="file2"> 파일 첨부 </label>
            <input type="file" id="file2" class="input-flie" />
          </li>
          <li class="check1">
            <input type="checkbox" />
            <p><b>개인정보 수집 및 이용</b>에 동의합니다.</p>
          </li>
          <button class="submit">제출</button>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/support/partnership.css);
</style>
