<template>
  <div id="wrap">
    <header id="header"></header>
    <main>
      <div id="container2">
        <div class="title-wrap">
          <a href="front-login.html" class="title-logo"
            ><img src="../assets/images/signup_login/logo.svg" alt=""
          /></a>
          <h4>비밀번호 재설정 이메일이 전송되었습니다.</h4>
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
              비밀번호 재설정 이메일이 전송되었습니다.
            </p>
            <p>
              메일의 비밀번호 재설정 버튼을 클릭하시면 <br />
              새 비밀번호로 설정 가능합니다.
            </p>
          </li>
          <li class="login-btn-wrap">
            <a href="front-login.html" class="confirmation2">확인</a>
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
