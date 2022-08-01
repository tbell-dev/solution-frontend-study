<template>
  <div id="wrap">
    <header id="header"></header>
    <main>
      <div id="container2">
        <div class="title-wrap">
          <a href="front-login.html" class="title-logo"
            ><img src="../assets/images/signup_login/logo.svg" alt=""
          /></a>
          <h4>아이디와 회원정보에 기재된 이메일을 입력하세요.</h4>
        </div>
        <ul>
          <li>
            <div class="login-title">
              <span></span>
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <input type="text" id="login-id" required />
              <label for="login-id">아이디</label>
              <div class="warning">
                <img
                  src="../assets/images/signup_login/icon-warning.svg"
                  alt=""
                /><span> 아이디를 입력하세요.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <input type="text" id="login-id" required />
              <label for="login-id">이메일</label>
              <div class="warning">
                <img
                  src="../assets/images/signup_login/icon-warning.svg"
                  alt=""
                /><span> 이메일 주소를 입력하세요.</span>
              </div>
            </div>
          </li>
          <li class="login-btn-wrap">
            <a href="front-login.html" class="cancel">취소</a>
            <a href="front-reset-pw-mail.html" class="confirmation">확인</a>
          </li>
          <div class="login-title">
            <span></span>
          </div>
        </ul>

        <div class="contentbox">
          <div class="member-info">
            <p>
              회원정보가 기억나지 않거나 이메일 주소가 불일치하여 <br />
              비밀번호 재설정이 어려운 경우에는 관리자에게 문의해주세요. <br />
              <b>관리자 이메일 : abc1234@tbell.co.kr</b>
            </p>
          </div>
        </div>
      </div>
    </main>
    <footer id="footer"></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import '../css/reset.css';
@import '../css/signup_login.css';
</style>
