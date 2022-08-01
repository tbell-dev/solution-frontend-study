<template>
  <div id="wrap">
    <header id="header"></header>
    <main>
      <div id="container2">
        <div class="title-wrap">
          <a href="front-login.html" class="title-logo"
            ><img src="../assets/images/signup_login/logo.svg" alt=""
          /></a>
          <h4>새로운 비밀번호를 입력해주세요.</h4>
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
              <label for="login-id">새 비밀번호</label>
              <!-- <div class="warning"><img src="../assets/images/signup_login/icon-warning.svg" alt=""><span> 아이디를 입력하세요.</span></div> -->
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <input type="text" id="login-id" required />
              <label for="login-id">새 비밀번호 확인</label>
              <!-- <div class="warning"><img src="../assets/images/signup_login/icon-warning.svg" alt=""><span> 이메일 주소를 입력하세요.</span></div> -->
              <div class="guidance">
                <span
                  >영문, 숫자, 특수문자를 포함하여 8자에서 20자까지 사용
                  가능합니다.</span
                >
              </div>
            </div>
          </li>
          <li class="login-btn-wrap">
            <a href="front-login.html" class="cancel">취소</a>
            <a href="front-reset-pw-mail.html" class="confirmation">확인</a>
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
