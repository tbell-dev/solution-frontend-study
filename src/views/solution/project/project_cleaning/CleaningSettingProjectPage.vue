<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article class="align1 button-filter">
            <router-link
              to="/allProject/project_cleaning/setting/cleaning"
              class="btn-set btn2-2"
              >프로젝트 정보</router-link
            >
            <router-link
              to="/allProject/project_cleaning/membersetting/cleaning"
              class="btn-set btn1-2"
              >프로젝트 멤버</router-link
            >
          </article>
        </section>
        <section>
          <article class="common1">
            <h3>프로젝트 명</h3>
            <ul class="align1">
              <li>
                <input type="text" readonly />
              </li>
            </ul>
            <h3>프로젝트 설명</h3>
            <ul class="align1">
              <li>
                <input type="text" readonly />
              </li>
            </ul>
            <h3>프로젝트 유형</h3>
            <ul class="align1">
              <li>
                <input type="text" readonly />
              </li>
            </ul>
            <h3>프로젝트 설정</h3>
            <ul class="align1">
              <li>
                <button
                  :class="{
                    'btn1-active btn1-3': isCleaningShowOn == true,
                    'btn1-3': isCleaningShowOn == false,
                  }"
                  @click="isCleaningShowOnOff()"
                >
                  영상/이미지 정제
                </button>
                <button
                  :class="{
                    'btn1-active btn1-3': isPreprocessingShowOn == true,
                    'btn1-3': isPreprocessingShowOn == false,
                  }"
                  @click="isPreprocessingShowOnOff()"
                >
                  이미지 전처리
                </button>
              </li>
            </ul>
          </article>
          <article class="purification-data-type" v-show="isCleaningShowOn">
            <ul class="align1">
              <li class="radio-wrap">
                <input
                  type="radio"
                  checked
                  name="purification-type"
                  id="purification-type1"
                />
                <label for="purification-type1"
                  >영상 프레임 단위 이미지 추출</label
                >
              </li>
              <li class="radio-wrap">
                <input
                  type="radio"
                  name="purification-type"
                  id="purification-type2"
                />
                <label for="purification-type2">중복 이미지 데이터 제거</label>
              </li>
            </ul>
          </article>
          <article class="image-preprocessing" v-show="isPreprocessingShowOn">
            <ul class="align1">
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type1"
                  checked
                />
                <label for="image-preprocessing-type1">그레이스케일</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type2"
                />
                <label for="image-preprocessing-type2">이진화</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type3"
                />
                <label for="image-preprocessing-type3">확대/축소</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type4"
                />
                <label for="image-preprocessing-type4">회전/변환</label>
              </li>
            </ul>
            <ul class="align1">
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type5"
                />
                <label for="image-preprocessing-type5">밝기/대비</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type6"
                />
                <label for="image-preprocessing-type6">선명도</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type7"
                />
                <label for="image-preprocessing-type7">자르기</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type8"
                />
                <label for="image-preprocessing-type8">블러처리</label>
              </li>
            </ul>
            <ul class="align1">
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type9"
                />
                <label for="image-preprocessing-type9">노이즈 제거</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type10"
                />
                <label for="image-preprocessing-type10">배경제거</label>
              </li>
              <li class="checkbox-wrap">
                <input
                  type="checkbox"
                  name="image-preprocessing-type"
                  id="image-preprocessing-type11"
                />
                <label for="image-preprocessing-type11">비식별화</label>
              </li>
            </ul>
          </article>
        </section>
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
  data: function () {
    return { isCleaningShowOn: true, isPreprocessingShowOn: false };
  },
  methods: {
    isCleaningShowOnOff() {
      this.isCleaningShowOn = true;
      this.isPreprocessingShowOn = false;
    },
    isPreprocessingShowOnOff() {
      this.isCleaningShowOn = false;
      this.isPreprocessingShowOn = true;
    },
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
