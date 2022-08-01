<template>
  <div id="wrap">
    <header id="header"></header>
    <main>
      <div id="container2">
        <div class="title-wrap">
          <a href="front-login.html" class="title-logo"
            ><img src="../assets/images/signup_login/logo.svg" alt=""
          /></a>
          <h4>활성 회원 전환 안내</h4>
          <div class="login-text">
            <br />
            <p>
              현재 사용하고 계시는 계정은 <b>휴면 계정</b>입니다. <br />활성
              회원 계정으로 전환하시려면 개인정보 보호를 위해 <br />
              이메일 인증 후 로그인을 진행해 주시기 바랍니다.
            </p>
          </div>
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
            <button class="confirmation">확인</button>
          </li>
          <li>
            <div class="login-title">
              <span></span>
            </div>
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
