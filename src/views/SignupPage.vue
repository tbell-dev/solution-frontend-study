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
              <h4>소셜 간편 가입</h4>
              <span></span>
            </div>
            <div class="social-signup">
              <button class="google">
                <img src="../assets/images/signup_login/google.svg" alt="" />
                <span>구글 계정으로 회원가입</span>
              </button>
              <button class="kakao">
                <img
                  src="../assets/images/signup_login/kakao.svg"
                  alt=""
                /><span>카카오 계정으로 회원가입</span>
              </button>
              <button class="naver">
                <img
                  src="../assets/images/signup_login/naver.svg"
                  alt=""
                /><span>네이버 계정으로 회원가입</span>
              </button>
            </div>
            <div class="login-title">
              <span></span>
              <p>또는</p>
              <span></span>
            </div>
          </li>
          <li>
            <div class="login-title">
              <span></span>
              <h4>회원 정보를 입력하세요.</h4>
              <span></span>
            </div>
            <div class="login-text">
              <p>*는 필수 입력 정보입니다.</p>
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <div class="login-input-check">
                <div class="left">
                  <input
                    type="text"
                    id="login-id"
                    required
                    class="check-data"
                  />
                  <label for="login-id"
                    ><span class="star">*</span> 이메일</label
                  >
                  <span class="check-result">사용 가능</span>
                </div>
                <button>중복체크</button>
              </div>
              <div class="warning">
                <img
                  src="../assets/images/signup_login/icon-warning.svg"
                  alt=""
                /><span> 이메일을 입력하세요.</span>
              </div>
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <div class="login-input-check">
                <div class="left">
                  <input
                    type="text"
                    id="login-id"
                    required
                    class="check-data"
                  />
                  <label for="login-id"
                    ><span class="star">*</span> 아이디
                    <span class="small">(6-12자 이내 영문/숫자)</span>
                  </label>
                  <span class="check-result">사용 가능</span>
                </div>
                <button>중복체크</button>
              </div>
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
              <input type="password" id="login-pw" required />
              <label for="login-pw"
                ><span class="star">*</span> 비밀번호
                <span class="small">(8-20자 이내 영문/숫자/특수문자)</span>
              </label>
              <img
                class="pw-view"
                src="../assets/images/signup_login/icon-view1.svg"
                alt=""
              />
              <!-- <img class="pw-view" src="../assets/images/signup_login/icon-view2.svg" alt=""> -->
              <div class="warning">
                <img
                  src="../assets/images/signup_login/icon-warning.svg"
                  alt=""
                /><span> 비밀번호를 입력하세요.</span>
              </div>
              <!-- <div class="warning"><img src="../assets/images/signup_login/icon-warning.svg" alt=""><span> 비밀번호는 최소 8자 이상입니다.</span></div>
                            <div class="warning"><img src="../assets/images/signup_login/icon-warning.svg" alt=""><span> 아이디를 입력하세요.</span></div> -->
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <input type="password" id="login-pw" required />
              <label for="login-pw"
                ><span class="star">*</span> 비밀번호 확인
              </label>
              <img
                class="pw-view"
                src="../assets/images/signup_login/icon-view1.svg"
                alt=""
              />
              <!-- <img class="pw-view" src="../assets/images/signup_login/icon-view2.svg" alt=""> -->
              <div class="warning">
                <img
                  src="../assets/images/signup_login/icon-warning.svg"
                  alt=""
                /><span> 비밀번호를 입력하세요.</span>
              </div>
              <!-- <div class="warning"><img src="../assets/images/signup_login/icon-warning.svg" alt=""><span> 비밀번호는 최소 8자 이상입니다.</span></div>
                            <div class="warning"><img src="../assets/images/signup_login/icon-warning.svg" alt=""><span> 아이디를 입력하세요.</span></div> -->
            </div>
          </li>
          <li>
            <div class="login-input-wrap">
              <input type="text" id="login-id" required />
              <label for="login-id"><span class="star">*</span> 이름</label>
              <di을 class="warning"
                ><img
                  src="../assets/images/signup_login/icon-warning.svg"
                  alt=""
                /><span> 이름을 입력하세요.</span></di을
              >
            </div>
          </li>
          <li>
            <div class="login-title">
              <span></span>
              <h4>추가 정보를 입력하세요.</h4>
              <span></span>
            </div>
            <div class="login-text">
              <p>*는 필수 입력 정보입니다.</p>
            </div>
            <div class="login-text">
              <p>
                더 나은 서비스 제공을 위해 <br />
                가입경로 및 가입사유를 제공받고 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div class="login-title">
              <h4><span class="star">*</span> 가입경로(복수 선택 가능)</h4>
            </div>
            <div class="signup-board">
              <ul class="checkbox-wrap">
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>홈페이지</span></label>
                </li>
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>SNS</span></label>
                </li>
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>광고</span></label>
                </li>
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>블로그</span></label>
                </li>
              </ul>
              <ul class="checkbox-wrap">
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>지인추천</span></label>
                </li>
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>인터넷 검색</span></label>
                </li>
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>협력업체</span></label>
                </li>
              </ul>
              <ul class="checkbox-wrap">
                <li class="checkbox-wrap">
                  <input type="checkbox" id="signup-path1" />
                  <label for="signup-path1"><span>기타 (직접입력)</span></label>
                  <input type="text" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="login-title">
              <h4><span class="star">*</span> 가입사유</h4>
            </div>
            <div class="signup-board2">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </li>
          <li class="service-agree">
            <div class="checkbox-wrap">
              <input type="checkbox" id="service-agree1" />
              <label for="service-agree1"
                ><span
                  ><a href="#">서비스 이용약관</a>에 동의합니다.</span
                ></label
              >
            </div>
            <div class="checkbox-wrap">
              <input type="checkbox" id="service-agree2" />
              <label for="service-agree2"
                ><span
                  ><a href="#">개인정보 처리방침</a>에 동의합니다.</span
                ></label
              >
            </div>
            <div class="checkbox-wrap">
              <input type="checkbox" id="service-agree3" />
              <label for="service-agree3"
                ><span
                  ><a href="#">개인정보 수집 및 이용</a>에 동의합니다.</span
                ></label
              >
            </div>
          </li>
          <li class="login-btn-wrap">
            <button class="confirmation2">회원가입</button>
          </li>
          <li>
            <div class="login-title">
              <span></span>
            </div>
          </li>
          <li class="logout-wrap">
            <p>이미 계정이 있으세요?</p>
            <a href="front-login.html" class="login">로그인</a>
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
