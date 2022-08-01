<template>
  <div id="wrap">
    <header id="header"></header>
    <main>
      <div id="container2">
        <div class="title-wrap">
          <a href="front-login.html" class="title-logo"
            ><img src="../assets/images/signup_login/logo.svg" alt=""
          /></a>
          <h4>아이디 안내 이메일이 전송되었습니다.</h4>
        </div>
        <ul>
          <li>
            <div class="login-title">
              <span></span>
            </div>
          </li>
          <li class="login-text">
            <p>
              <b>tbell@tbell.co.kr</b>으로 <br />
              아이디 안내 이메일이 전송되었습니다.
            </p>
            <p>이메일 확인 후 서비스에 로그인해주세요.</p>
          </li>
          <li class="login-btn-wrap">
            <a href="front-login.html" class="confirmation2">확인</a>
          </li>
          <li class="login-guidance">
            <p>비밀번호가 기억이 나지 않으세요?</p>
            <a href="front-reset-pw.html">비밀번호 재설정</a>
          </li>
          <li>
            <div class="login-title">
              <span></span>
            </div>
          </li>
        </ul>

        <div class="contentbox">
          <div class="member-info">
            <p>
              정상적으로 메일 수신이 되지 않았다면, <b>스팸 메일함</b>을 확인해
              주십시오.
            </p>
            <p>기타 아이디 관련 문의는 관리자에게 문의해주세요.</p>
            <b>관리자 이메일 : abc1234@tbell.co.kr</b>
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
