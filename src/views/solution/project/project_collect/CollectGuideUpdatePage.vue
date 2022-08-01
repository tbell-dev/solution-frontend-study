<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article>
            <ul class="current-bar">
              <li>
                <h2>가이드 등록</h2>
              </li>
            </ul>
          </article>
          <article class="guide-registration">
            <h3>유형 <span class="star">*</span></h3>
            <div class="article-inner">
              <select name="" id="">
                <option value="">작업 가이드</option>
                <option value="">도구 가이드</option>
                <option value="">참고 문서</option>
                <option value="">작업 케이스 가이드</option>
              </select>
            </div>
            <h3>제목 <span class="star">*</span></h3>
            <div class="article-inner">
              <input type="text" />
              <div class="warning">
                <img
                  src="../../../../assets/images/project/icon/icon-warning.svg"
                  alt=""
                /><span>제목을 입력해주세요.</span>
              </div>
            </div>
            <h3>노출여부</h3>
            <div class="article-inner">
              <div class="toggle-wrap">
                <input type="checkbox" id="toggle" />
                <label for="toggle" class="align1"
                  ><span class="off">OFF</span
                  ><span class="bar"><span class="ball"></span></span>
                  <span class="on">ON</span></label
                >
              </div>
            </div>
            <h3>가이드 확인 설정</h3>
            <div class="article-inner">
              <div class="checkbox-wrap">
                <input type="checkbox" id="guide-check" />
                <label for="guide-check"><span>가이드 필수 확인</span></label>
              </div>
            </div>
            <h3>가이드 형식</h3>
            <div class="article-inner">
              <div class="select-button">
                <button class="btn1-1 btn1-active btn-r">링크</button>
                <button class="btn1-1 btn-r">파일</button>
              </div>
              <input type="text" />
              <div class="warning">
                <img
                  src="../../../../assets/images/project/icon/icon-warning.svg"
                  alt=""
                /><span>링크를 입력해주세요.</span>
              </div>
            </div>
            <h3>가이드 형식</h3>
            <div class="article-inner">
              <div class="select-button">
                <button class="btn1-1 btn-r">링크</button>
                <button class="btn1-1 btn1-active btn-r">파일</button>
              </div>
              <ul class="file-wrap">
                <li class="align1">
                  <input type="text" />
                  <input type="file" id="collect-guide-file" />
                  <label for="collect-guide-file" class="btn-set btn2-1"
                    >파일찾기</label
                  >
                </li>
                <li class="file-upload-box align2">
                  <img
                    src="../../../../assets/images/project/icon/icon-upload.svg"
                    alt=""
                  />
                  <h3>파일을 드래그하여 업로드하세요.</h3>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <div class="button-align1">
          <button class="btn2-1">저장</button>
          <a href="manufacturing-guide.html" class="btn-set btn1-1">취소</a>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// 메뉴
import MainMenu from '../../../../components/solution/common/MenuMain.vue';
import SubMenu from '../../../../components/solution/common/MenuSub1.vue';
// 헤더
import Header from '../../../../components/solution/common/Header.vue';

export default {
  components: {
    MainMenu,
    SubMenu,
    Header,
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
