<template>
  <div>
    <main id="main">
      <!-- 인트로-->
      <section class="intro-type2">
        <img
          src="../../../assets/images/sslo/sslo-logo(k).svg"
          alt="sslo-logo"
        />
        <h2>서비스 가격</h2>
        <b>Our Plans</b>
        <p>다양한 기업들이 통합 플랫폼을 사용하여 성장 중에 있습니다.</p>
      </section>
      <!-- 서비스 가격 옵션 -->
      <section class="service sub-section">
        <ul>
          <li>
            <h3>Starter</h3>
            <span></span>
            <b
              >무료<br />
              <p>(계정)</p></b
            >
            <p class="firstp">일부 주석도구</p>
            <div class="start start1">Start Now</div>
          </li>
          <li>
            <h3>Standard</h3>
            <span></span>
            <b>모든 주석도구</b>
            <p>모든 주석도구</p>
            <div class="start start2">Buy Standard</div>
          </li>
          <li>
            <h3>Premium</h3>
            <span></span>
            <b>프리미엄</b>
            <p>모든 주석도구 + 모든 주석도구</p>
            <div class="start start3">Buy Premium</div>
          </li>
          <li>
            <h3>Enterprise</h3>
            <span></span>
            <b>기업 문의</b>
            <p>모든 주석도구 + 대량사용</p>
            <div class="start start4">Contact Us</div>
          </li>
        </ul>
        <div class="mail container">문의 메일 : abc@tbell.co.kr</div>
      </section>
    </main>
    <!-- 문의 세부 -->
    <div class="modal" v-if="isStatusOn">
      <div class="box">
        <div class="close" v-on:click="isStatusOn = false">
          <img src="../../../assets/images/sslo/close.png" alt="" />
        </div>
        <div class="title">
          <h3>제품 문의하기</h3>
        </div>
        <div class="text-box-type">
          <div class="text-left">
            <h4>&#42;기업명</h4>
            <input type="text" placeholder="기업명을 입력해주세요." />
            <h4>&#42;전화번호</h4>
            <input type="text" placeholder="전화번호를 입력해주세요." />
            <h4>&#42;이메일</h4>
            <input type="text" placeholder="이메일을 정확히 입력해주세요." />
            <h4>&#42;사업 분야</h4>
            <select name="" id="">
              <option value="">귀하의 사업 분야를 선택해주세요.</option>
              <option value="">분야1</option>
              <option value="">분야2</option>
              <option value="">분야3</option>
            </select>
          </div>
          <div class="text-right">
            <h4>&#42;견적 내용</h4>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="제품 사용용도, 사용자 수, 사용기간 등의 내용을 상세히 입력해주세요. 
                        "
            ></textarea>
            <div class="agree">
              <input type="checkbox" />
              <p><b>개인정보 수집 및 이용</b>에 동의합니다.</p>
            </div>
            <button>제출</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isStatusOn: false,
    };
  },
  methods: {
    toggleOnOff: function () {
      this.isStatusOn = !this.isStatusOn;
    },
  },
};
</script>

<style scoped>
@import url(../../../css/reset.css);
@import url(../../../css/sslo/price/price.css);
</style>
