<template>
  <div id="wrap">
    <header id="header"></header>
    <main>
      <div id="container2">
        <div class="title-wrap">
          <a href="front-login.html" class="title-logo"
            ><img src="../assets/images/signup_login/logo.svg" alt=""
          /></a>
          <h4>회원가입을 해주셔서 감사합니다.</h4>
        </div>
        <ul>
          <li>
            <div class="login-title">
              <span></span>
            </div>
          </li>
          <li class="mail-box">
            <div class="left">
              <b>이메일 주소</b>
            </div>
            <div class="right">
              <p>abc@abc.co.kr</p>
            </div>
          </li>
          <li class="login-text">
            <p>이메일로 회원가입 인증 메일이 발송되었습니다.</p>
            <p>인증 이후에 회원 가입이 완료됩니다.</p>
          </li>
          <li class="login-btn-wrap">
            <button class="confirmation2">인증메일 재발송하기</button>
          </li>
          <li>
            <div class="login-title">
              <span></span>
            </div>
          </li>
          <li class="logout-wrap">
            <button class="logout"><span>로그아웃</span></button>
          </li>
        </ul>
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
