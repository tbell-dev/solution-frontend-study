<template>
  <div id="main-wrap">
    <main id="main">
      <section>
        <article>
          <ul class="common-layout1">
            <li class="project-title">
              <h2>프로젝트 명 <span class="star">*</span></h2>
            </li>
            <li class="project-contents">
              <div class="input-wrap">
                <input
                  type="text"
                  placeholder="프로젝트 이름을 입력해주세요."
                  v-model="projectName"
                />
                <div class="warning" v-show="isprojectNameValid">
                  <img
                    src="../../../../assets/images/project/icon/icon-warning.svg"
                    alt=""
                  /><span>1~50자로 입력해 주세요.</span>
                </div>
              </div>
            </li>
          </ul>
          <ul class="common-layout1">
            <li class="project-title">
              <h2>프로젝트 설명</h2>
            </li>
            <li class="project-contents">
              <div class="input-wrap">
                <input
                  type="text"
                  placeholder="프로젝트 설명을 입력해주세요."
                  v-model="projectExplain"
                />
                <div class="warning" v-show="isprojectExplainValid">
                  <img
                    src="../../../../assets/images/project/icon/icon-warning.svg"
                    alt=""
                  /><span>1~100자로 입력해 주세요.</span>
                </div>
              </div>
            </li>
          </ul>
          <ul class="common-layout1">
            <li class="project-title">
              <h2>프로젝트 유형 <span class="star">*</span></h2>
            </li>
            <li class="project-contents">
              <select
                name=""
                id=""
                v-model="projectType"
                @change="projectWorkStepSelect()"
              >
                <option value="collect">데이터 수집</option>
                <option value="cleaning">데이터 정제/전처리</option>
                <option value="labeling">데이터 가공</option>
              </select>
            </li>
          </ul>
        </article>
      </section>
      <section v-show="projectType == 'collect'">
        <article>
          <ul class="current-bar1">
            <li>
              <h2>프로젝트 설정<span class="star">*</span></h2>
            </li>
          </ul>
        </article>
        <!-- 데이터 수집 선택시 -->
        <article class="common1">
          <h3>데이터 유형 <span class="star">*</span></h3>
          <ul class="align1">
            <li>
              <button
                @click="collectOwnOnOff"
                :class="{
                  'btn1-active btn1-3': isCollectOwnOn,
                  'btn1-3': !isCollectOwnOn,
                }"
              >
                자체 제공 데이터셋
              </button>
              <button
                @click="collectCrawlingOnOff"
                :class="{
                  'btn1-active btn1-3': isCollectCrawlingOn,
                  'btn1-3': !isCollectCrawlingOn,
                }"
              >
                크롤링 수집 데이터
              </button>
              <button
                @click="collectOfflineOnOff"
                :class="{
                  'btn1-active btn1-4': isCollectOfflineOn,
                  'btn1-4': !isCollectOfflineOn,
                }"
              >
                오프라인 데이터 수집
              </button>
            </li>
          </ul>
        </article>
        <!-- 자체제공데이터셋 -->
        <article class="basic-article" v-show="isCollectOwnOn">
          <table class="table1">
            <tr class="table1-head">
              <th>
                <input
                  type="checkbox"
                  v-model="isAllChecked"
                  value=""
                  @click="allCheck"
                />
              </th>
              <th><span>데이터셋 번호</span></th>
              <th><span>데이터셋 명</span></th>
              <th><span>데이터셋 건수</span></th>
              <th><span>데이터셋 대분류</span></th>
              <th><span>데이터셋 세부분류</span></th>
              <th><span>데이터셋 총 용량</span></th>
            </tr>
            <tr v-for="(item, index) in collectOwnListItem" :key="index">
              <td>
                <input
                  type="checkbox"
                  :value="'id' + index"
                  v-model="checkedCollectOwn"
                  @change="clickFunc"
                />
              </td>
              <td>
                <span>{{ index + 1 }}</span>
              </td>
              <td>
                <span>{{ item.datasetName }}</span>
              </td>
              <td>
                <span>{{ item.datasetCount }}</span>
              </td>
              <td>
                <span>{{ item.datasetMainCate }}</span>
              </td>
              <td>
                <span>{{ item.datasetSubCate }}</span>
              </td>
              <td>
                <span>{{ item.datasetVolume }}</span>
              </td>
            </tr>
          </table>
        </article>
        <!-- 크롤링 수집 데이터 -->
        <article
          class="common1 crolling-collect-data"
          v-show="isCollectCrawlingOn"
        >
          <h3>수집 채널</h3>
          <ul class="align1">
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-chanel"
                  id="collect-chanel-naver"
                  v-model="collectCrawlingChannel"
                  value="naver"
                />
                <label for="collect-chanel-naver"
                  >네이버<span>(NAVER)</span></label
                >
              </div>
              <div class="img-wrap">
                <img
                  src="../../../../assets/images/project/img/naver.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-chanel"
                  id="collect-chanel-daum"
                  v-model="collectCrawlingChannel"
                  value="daum"
                />
                <label for="collect-chanel-daum"
                  >다음 <span>(DAUM)</span></label
                >
              </div>
              <div class="img-wrap">
                <img
                  src="../../../../assets/images/project/img/daum.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-chanel"
                  id="collect-chanel-google"
                  v-model="collectCrawlingChannel"
                  value="google"
                />
                <label for="collect-chanel-google"
                  >구글 <span>(Google)</span></label
                >
              </div>
              <div class="img-wrap">
                <img
                  src="../../../../assets/images/project/img/google.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-chanel"
                  id="collect-chanel-insta"
                  v-model="collectCrawlingChannel"
                  value="instagram"
                />
                <label for="collect-chanel-insta"
                  >인스타그램 <span>(Instagram)</span></label
                >
              </div>
              <div class="img-wrap">
                <img
                  src="../../../../assets/images/project/img/instagram.svg"
                  alt=""
                />
              </div>
            </li>
          </ul>
          <h3>키워드</h3>
          <ul class="align1">
            <li>
              <div class="input-wrap">
                <input
                  type="text"
                  placeholder="키워드를 입력하세요."
                  v-model="collectCrawlingKeyword"
                />
                <div class="warning" v-show="isCollectCrawlingKeywordValid">
                  <img
                    src="../../../../assets/images/project/icon/icon-warning.svg"
                    alt=""
                  /><span>1~10자로 입력해 주세요.</span>
                </div>
              </div>
            </li>
          </ul>
          <h3>수집 기간</h3>
          <ul class="align1">
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-week"
                  v-model="collectCrawlingPeriod"
                  value="1week"
                />
                <label for="collect-date-week">1주일</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-month"
                  v-model="collectCrawlingPeriod"
                  value="3month"
                />
                <label for="collect-date-month">3개월</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-year"
                  v-model="collectCrawlingPeriod"
                  value="1year"
                />
                <label for="collect-date-year">1년</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-set"
                  v-model="collectCrawlingPeriod"
                  value="custom"
                />
                <label for="collect-date-set">직접입력</label>
                <Datepicker
                  class="datepicker"
                  v-model="collectCrawlingPeriodInput"
                  v-show="collectCrawlingPeriod == 'custom'"
                  range
                  multiCalendars
                  :enableTimePicker="false"
                />
              </div>
            </li>
          </ul>
          <h3>수집 건수</h3>
          <ul class="align1">
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-case"
                  id="collect-case-100"
                  v-model="collectCrawlingCount"
                  value="count100"
                />
                <label for="collect-case-100">100</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-case"
                  id="collect-case-500"
                  v-model="collectCrawlingCount"
                  value="count500"
                />
                <label for="collect-case-500">500</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-case"
                  id="collect-case-1000"
                  v-model="collectCrawlingCount"
                  value="count1000"
                />
                <label for="collect-case-1000">1000</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-case"
                  id="collect-case-2000"
                  v-model="collectCrawlingCount"
                  value="count2000"
                />
                <label for="collect-case-2000">2000</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-case"
                  id="collect-case-3000"
                  v-model="collectCrawlingCount"
                  value="count3000"
                />
                <label for="collect-case-3000">3000</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-case"
                  id="collect-case-set"
                  v-model="collectCrawlingCount"
                  value="countcustom"
                />
                <label for="collect-case-set">직접 입력</label>
                <input
                  type="text"
                  v-show="collectCrawlingCount == 'countcustom'"
                  v-model="collectCrawlingCountInput"
                />
              </div>
            </li>
          </ul>
        </article>
        <!-- 오프라인 데이터 수집 -->
        <article
          class="common1 crolling-collect-data"
          v-show="isCollectOfflineOn"
        >
          <h3>수집 대상</h3>
          <ul class="align1">
            <li>
              <input type="text" v-model="collectOfflineTaget" />
              <div class="warning" v-show="isCollectOfflineTargetValid">
                <img
                  src="../../../../assets/images/project/icon/icon-warning.svg"
                  alt=""
                /><span>수집 대상을 입력해주세요.</span>
              </div>
            </li>
          </ul>
          <h3>수집 각도</h3>
          <ul class="align1">
            <li>
              <select name="" id="" v-model="collectOfflineAngle1">
                <option value="front">대상 정면 촬영</option>
                <option value="leftSide">대상 좌측면 촬영</option>
                <option value="rightSide">대상 우측면 촬영</option>
                <option value="back">대상 후면 촬영</option>
              </select>
              <select name="" id="" v-model="collectOfflineAngle2">
                <option value="UpToDown">위에서 아래로 촬영</option>
                <option value="DownToUp">아래에서 위로 촬영</option>
                <option value="collinear">동일 선상에서 촬영</option>
              </select>
            </li>
          </ul>
          <h3>수집 기간</h3>
          <ul class="align1">
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-week"
                  v-model="collectOfflinePeriod"
                  value="1week"
                />
                <label for="collect-date-week">1주일</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-month"
                  v-model="collectOfflinePeriod"
                  value="3month"
                />
                <label for="collect-date-month">3개월</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-year"
                  v-model="collectOfflinePeriod"
                  value="1year"
                />
                <label for="collect-date-year">1년</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-date"
                  id="collect-date-set"
                  v-model="collectOfflinePeriod"
                  value="custom"
                />
                <label for="collect-date-set">직접입력 </label>
                <Datepicker
                  class="datepicker"
                  v-model="collectOfflinePeriodInput"
                  v-show="collectOfflinePeriod == 'custom'"
                  range
                  multiCalendars
                  :enableTimePicker="false"
                />
              </div>
            </li>
          </ul>
          <h3>수집 거리</h3>
          <ul class="align1">
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-distance"
                  id="collect-distance-1"
                  v-model="collectOfflineDistance"
                  value="1To3"
                />
                <label for="collect-distance-1">1~3m</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-distance"
                  id="collect-distance-3"
                  v-model="collectOfflineDistance"
                  value="3To5"
                />
                <label for="collect-distance-3">3~5m</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-distance"
                  id="collect-distance-5"
                  v-model="collectOfflineDistance"
                  value="5To7"
                />
                <label for="collect-distance-5">5~7m</label>
              </div>
            </li>
            <li>
              <div class="radio-wrap">
                <input
                  type="radio"
                  name="collect-distance"
                  id="collect-distance-set"
                  v-model="collectOfflineDistance"
                  value="custom"
                />
                <label for="collect-distance-set">직접입력</label>
                <div
                  class="custom-area"
                  v-show="collectOfflineDistance == 'custom'"
                >
                  <p>시작거리</p>
                  <input type="text" />
                  <p>m</p>
                  <span class="wave">~</span>
                  <p>종료거리</p>
                  <input type="text" />
                  <p>m</p>
                </div>
              </div>
            </li>
          </ul>
          <h3>수집장소</h3>
          <ul class="align1">
            <li>
              <div class="input-wrap">
                <input type="text" v-model="collectOfflinePlace" />
                <div class="warning" v-show="isCollectOfflinePlaceValid">
                  <img
                    src="../../../../assets/images/project/icon/icon-warning.svg"
                    alt=""
                  /><span>수집장소를 입력해주세요.</span>
                </div>
              </div>
            </li>
          </ul>
          <h3>수집 상세내용</h3>
          <!-- 게시판 -->
          <ul class="align1">
            <li>
              <div class="board">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  v-model="collectOfflineContent"
                ></textarea>
              </div>
              <div class="warning" v-show="isCollectOfflineContentValid">
                <img
                  src="../../../../assets/images/project/icon/icon-warning.svg"
                  alt=""
                /><span>수집 상세내용을 입력해주세요.</span>
              </div>
            </li>
          </ul>
          <h3>수집 목적</h3>
          <ul class="align1">
            <li>
              <input type="text" v-model="collectOfflinePurpose" />
              <div class="warning" v-show="isCollectOfflinePurposeValid">
                <img
                  src="../../../../assets/images/project/icon/icon-warning.svg"
                  alt=""
                /><span>수집 목적을 입력해주세요.</span>
              </div>
            </li>
          </ul>
          <h3>수집 건수</h3>
          <ul class="align1">
            <li>
              <input type="text" v-model="collectOfflineCount" />
              <div class="warning" v-show="isCollectOfflineCountValid">
                <img
                  src="../../../../assets/images/project/icon/icon-warning.svg"
                  alt=""
                /><span>1~10000 사이의 숫자만 입력해 주세요.</span>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <!-- 데이터 정제/전처리 -->
      <section v-show="projectType == 'cleaning'">
        <article>
          <ul class="current-bar1">
            <li>
              <h2>프로젝트 설정<span class="star">*</span></h2>
            </li>
          </ul>
        </article>
        <article class="common1">
          <h3>데이터 유형 <span class="star">*</span></h3>
          <ul class="align1">
            <li>
              <button
                @click="cleaningOnOff"
                :class="{
                  'btn1-active btn1-3': isCleaningOn,
                  'btn1-3': !isCleaningOn,
                }"
              >
                영상/이미지 정제
              </button>
              <button
                @click="preprocessingOnOff"
                :class="{
                  'btn1-active btn1-3': isPreprocessingOn,
                  'btn1-3': !isPreprocessingOn,
                }"
              >
                이미지 전처리
              </button>
            </li>
          </ul>
        </article>
        <article class="purification-data-type" v-show="isCleaningOn">
          <ul class="align1">
            <li class="radio-wrap">
              <input
                type="radio"
                name="purification-type"
                id="purification-type1"
                v-model="CleaningFunction"
                value="CleaningFunctionFrame"
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
                v-model="CleaningFunction"
                value="CleaningFunctionRemove"
              />
              <label for="purification-type2">중복 이미지 데이터 제거</label>
            </li>
          </ul>
        </article>
        <article class="image-preprocessing" v-show="isPreprocessingOn">
          <ul class="align1">
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type1"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction1"
              />
              <label for="image-preprocessing-type1">그레이스케일</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type2"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction2"
              />
              <label for="image-preprocessing-type2">이진화</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type3"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction3"
              />
              <label for="image-preprocessing-type3">확대/축소</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type4"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction4"
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
                v-model="PreprocessingFunction"
                value="PreprocessingFunction5"
              />
              <label for="image-preprocessing-type5">밝기/대비</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type6"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction6"
              />
              <label for="image-preprocessing-type6">선명도</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type7"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction7"
              />
              <label for="image-preprocessing-type7">자르기</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type8"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction8"
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
                v-model="PreprocessingFunction"
                value="PreprocessingFunction9"
              />
              <label for="image-preprocessing-type9">노이즈 제거</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type10"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction10"
              />
              <label for="image-preprocessing-type10">배경제거</label>
            </li>
            <li class="checkbox-wrap">
              <input
                type="checkbox"
                name="image-preprocessing-type"
                id="image-preprocessing-type11"
                v-model="PreprocessingFunction"
                value="PreprocessingFunction11"
              />
              <label for="image-preprocessing-type11">비식별화</label>
            </li>
          </ul>
        </article>
      </section>
      <section v-show="projectType == 'labeling'">
        <article>
          <ul class="current-bar1">
            <li>
              <h2>프로젝트 설정<span class="star">*</span></h2>
            </li>
          </ul>
        </article>
        <article>
          <h3>클래스 유형 <span class="star">*</span></h3>
        </article>
        <article class="align0">
          <ul class="project-class-setting">
            <li class="class-setting-title">
              <h3>작업 도구 유형</h3>
            </li>
            <li
              @click="toolBoxing"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolBoxing,
                'align1 class-setting-contents': !this.istoolBoxing,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-boxing02.svg"
                alt=""
                v-show="this.istoolBoxing"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-boxing03.svg"
                alt=""
                v-show="!this.istoolBoxing"
              />
              <b>Boxing</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolPolyline"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolPolyline,
                'align1 class-setting-contents': !this.istoolPolyline,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-polyline02.svg"
                alt=""
                v-show="this.istoolPolyline"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-polyline03.svg"
                alt=""
                v-show="!this.istoolPolyline"
              />
              <b>Polyline</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolPolygon"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolPolygon,
                'align1 class-setting-contents': !this.istoolPolygon,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-polygon02.svg"
                alt=""
                v-show="this.istoolPolygon"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-polygon03.svg"
                alt=""
                v-show="!this.istoolPolygon"
              />
              <b>Polygon</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolPoint"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolPoint,
                'align1 class-setting-contents': !this.istoolPoint,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-point02.svg"
                alt=""
                v-show="this.istoolPoint"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-point03.svg"
                alt=""
                v-show="!this.istoolPoint"
              />
              <b>Point</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolDrawpen"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolDrawpen,
                'align1 class-setting-contents': !this.istoolDrawpen,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-brush02.svg"
                alt=""
                v-show="this.istoolDrawpen"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-brush03.svg"
                alt=""
                v-show="!this.istoolDrawpen"
              />
              <b>Draw Pen</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="tool3DCube"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istool3DCube,
                'align1 class-setting-contents': !this.istool3DCube,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-3dcube02.svg"
                alt=""
                v-show="this.istool3DCube"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-3dcube03.svg"
                alt=""
                v-show="!this.istool3DCube"
              />
              <b>3D Cube</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolMagicwand"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolMagicwand,
                'align1 class-setting-contents': !this.istoolMagicwand,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-magicwand02.svg"
                alt=""
                v-show="this.istoolMagicwand"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-magicwand03.svg"
                alt=""
                v-show="!this.istoolMagicwand"
              />
              <b>Smart Pen</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolKeypoint"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolKeypoint,
                'align1 class-setting-contents': !this.istoolKeypoint,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-keypoint02.svg"
                alt=""
                v-show="this.istoolKeypoint"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-keypoint03.svg"
                alt=""
                v-show="!this.istoolKeypoint"
              />
              <b>Key Point</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolAutopoint"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolAutopoint,
                'align1 class-setting-contents': !this.istoolAutopoint,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-autopoint02.svg"
                alt=""
                v-show="this.istoolAutopoint"
              />
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-autopoint03.svg"
                alt=""
                v-show="!this.istoolAutopoint"
              />
              <b>Auto Point</b>
            </li>
            <li
              class="align1 class-setting-contents"
              @click="toolSegment"
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-select':
                  this.istoolSegment,
                'align1 class-setting-contents': !this.istoolSegment,
              }"
            >
              <img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-segment02.svg"
                alt=""
                v-show="this.istoolSegment"
              /><img
                class="class-setting-icon"
                src="../../../../assets/images/studio/icon/icon-segment03.svg"
                alt=""
                v-show="!this.istoolSegment"
              />
              <b>Segment</b>
            </li>
          </ul>
          <ul
            class="project-class-setting"
            v-show="
              this.istoolBoxing ||
              this.istoolPolyline ||
              this.istoolPolygon ||
              this.istoolPoint ||
              this.istoolDrawpen ||
              this.istool3DCube ||
              this.istoolMagicwand ||
              this.istoolKeypoint ||
              this.istoolAutopoint ||
              this.istoolSegment
            "
          >
            <li class="class-setting-title">
              <h3>클래스</h3>
              <button @click="isPopUpOnOff()">
                <img
                  src="../../../../assets/images/project/icon/icon-setting.svg"
                  alt=""
                />
              </button>
            </li>
            <li class="align2 class-setting-contents-input">
              <input
                type="text"
                placeholder="클래스 입력 후 Enter"
                v-model="className"
                @keypress.enter.stop="classNamesubmit"
                @focus="isActiveClassSettingTitle = true"
              />
            </li>
            <li
              v-bind:class="{
                'align1 class-setting-contents class-setting-contents-se':
                  this.isClassSelectOn[index],
                'align1 class-setting-contents': !this.isClassSelectOn[index],
              }"
              v-for="(item, index) in ClasslistItem"
              :key="index"
            >
              <button
                class="close"
                @click="classNameDelete(index)"
                v-show="!this.isClassSelectOn[index]"
              >
                <img
                  src="../../../../assets/images/project/icon/icon-close01.svg"
                  alt=""
                /></button
              ><button
                class="close"
                @click="classNameDelete(index)"
                v-show="this.isClassSelectOn[index]"
              >
                <img
                  src="../../../../assets/images/project/icon/icon-close02.svg"
                  alt=""
                /></button
              ><b @click="isClassSelectOnOff(index)"> {{ item }}</b
              ><button class="class-more" v-show="isClassSelectOn[index]">
                <img
                  src="../../../../assets/images/project/icon/icon-arrow01.svg"
                  alt=""
                />
              </button>
            </li>
          </ul>
          <div
            v-for="(item, index) in ClasslistItem"
            :key="index"
            v-show="this.isClassSelectOn[index]"
          >
            <div class="class-setting-title2 align1">
              <div class="class-setting-title2-select align2">
                <h3>공통속성</h3>
              </div>
              <div class="align2">
                <h3>클래스 별 속성</h3>
              </div>
            </div>
            <ul class="class-setting-contents2">
              <li class="attribute-wrap">
                <!-- 단일선택형 -->
                <div class="align0 attribute-inner">
                  <div>
                    <h3>속성명</h3>
                    <input type="text" />
                  </div>
                  <div>
                    <h3>속성유형</h3>
                    <select name="" id="" v-model="propertyType">
                      <option value="classSettingsignleSelect">
                        단일 선택형
                      </option>
                      <option value="classSettingMultipleSelect">
                        다중 선택형
                      </option>
                      <option value="classSettingInput">입력형</option>
                    </select>
                  </div>
                </div>
                <div
                  class="attribute-inner"
                  v-show="propertyType == 'classSettingsignleSelect'"
                >
                  <h3>속성값</h3>
                  <input type="text" placeholder="속성 값 입력 후 Enter" />
                  <div class="attribute-value align3">
                    <span class="align2"
                      >여자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >남자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >여자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >남자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >여자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >남자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >여자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >남자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >여자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                    <span class="align2"
                      >남자
                      <button>
                        <img
                          src="../../../../assets/images/project/icon/icon-close01.svg"
                          alt=""
                        /></button
                    ></span>
                  </div>
                </div>
                <!-- 다중선택형 -->
                <div
                  class="attribute-inner"
                  v-show="propertyType == 'classSettingMultipleSelect'"
                >
                  <div class="attribute-inner">
                    <h3>속성값</h3>
                    <input type="text" placeholder="속성 값 입력 후 Enter" />
                    <div class="attribute-value align3">
                      <span class="align2"
                        >여자
                        <button>
                          <img
                            src="../../../../assets/images/project/icon/icon-close01.svg"
                            alt=""
                          /></button
                      ></span>
                      <span class="align2"
                        >남자
                        <button>
                          <img
                            src="../../../../assets/images/project/icon/icon-close01.svg"
                            alt=""
                          /></button
                      ></span>
                    </div>
                  </div>
                  <div class="align0 attribute-inner">
                    <div>
                      <h3>최소 선택 수</h3>
                      <input type="number" />
                    </div>
                    <div>
                      <h3>최대 선택 수</h3>
                      <input type="number" />
                    </div>
                  </div>
                </div>
                <!-- 입력형 -->
                <div
                  class="attribute-inner"
                  v-show="propertyType == 'classSettingInput'"
                >
                  <div class="attribute-inner">
                    <h3>숫자입력 값</h3>
                    <div class="align4">
                      <input type="number" />
                      <span>~</span>
                      <input type="number" />
                    </div>
                  </div>
                  <div class="attribute-inner">
                    <h3>글자입력 수</h3>
                    <div class="align4">
                      <input type="number" />
                      <span>~</span>
                      <input type="number" />
                    </div>
                  </div>
                </div>
              </li>

              <li class="attribute-wrap align4 attribute-add">
                <b>추가하기</b>
                <img
                  src="../../../../assets/images/project/icon/icon-add2.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section>
        <article>
          <ul class="current-bar1">
            <li>
              <h2>작업단계</h2>
            </li>
          </ul>
        </article>
        <article>
          <ul class="project-create-work-stage">
            <li>
              <div class="left"><h3>1단계</h3></div>
              <div class="right">{{ this.projectWorkStep }}</div>
            </li>
            <li>
              <div class="left"><h3>2단계</h3></div>
              <div class="right">검수</div>
            </li>
            <li>
              <div class="left"><h3>3단계</h3></div>
              <div class="right">촤종</div>
            </li>
          </ul>
        </article>
      </section>
      <div class="button-align1" @click="submitForm()">
        <router-link
          :to="{
            name: 'allprojectlist',
            params: { projectName: this.projectName },
          }"
          class="btn-set btn2-1"
          >생성하기</router-link
        >
        <a href="all-project.html" class="btn-set btn1-1">취소</a>
      </div>
    </main>
    <div class="project-popup-wrap" v-show="isPopUpOn">
      <ul class="project-popup1">
        <li class="project-popup-title align2">
          <h2>클래스 세부 설정</h2>
          <button @click="isPopUpOn = false">
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </li>
        <li class="project-popup-contents">
          <div class="project-popup-inner">
            <h3>클래스 추가</h3>
            <input type="text" placeholder="클래스 입력 후 Enter" />
          </div>
          <div class="project-popup-inner">
            <table class="table3">
              <tr class="table3-head">
                <th><span>색상</span></th>
                <th><span>클래스명</span></th>
                <th><span>실제 작업 클래스명</span></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <span>
                    <input type="color" value="#8579F3" />
                  </span>
                </td>
                <td><span>person1</span></td>
                <td><span>person1</span></td>
                <td>
                  <button>
                    <img
                      src="../../../../assets/images/project/icon/icon-delete.svg"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input type="color" value="#3580E3" />
                  </span>
                </td>
                <td><span>person1</span></td>
                <td><span>person1</span></td>
                <td>
                  <button>
                    <img
                      src="../../../../assets/images/project/icon/icon-delete.svg"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <input type="color" value="#DE61A6" />
                  </span>
                </td>
                <td><span>person1</span></td>
                <td><span>person1</span></td>
                <td>
                  <button>
                    <img
                      src="../../../../assets/images/project/icon/icon-delete.svg"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div class="align6">
            <button class="btn2-1">저장</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="alert-wrap">
      <ul class="alert">
        <li class="alert-top">
          <h2>
            입력된 건수를 채우지 못하고 제한 용량에 도달하면 데이터 수집이
            마무리됩니다.
          </h2>
        </li>
        <li class="alert-bottom align6">
          <button class="btn2-1">확인</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import fs from 'fs';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

//import axios from 'axios';

//fs.writeFile('../../../../api/ProjectData.json', 'data');
//fs.writeFileSync('../../../../api/ProjectData.json', 'data');

export default {
  components: { Datepicker },
  data: function () {
    return {
      //1. 전체
      projectName: '', //프로젝트 명
      projectExplain: '', //프로젝트 설명
      projectType: 'collect', //프로젝트 유형

      //1-1.데이터 수집
      isCollectOwnOn: true, //자제 제공 데이터셋
      isCollectCrawlingOn: false, //크롤링 수집 데이터
      isCollectOfflineOn: false, // 오프라인 데이터 수집

      //1-1-1.자체 제공 데이터셋
      checkedCollectOwn: [], //목록 선택 체크박스
      collectOwnListItem: [
        //데이터셋 목록
        {
          id: 1,
          datasetName: '인간 자세 데이터셋_001',
          datasetCount: '100',
          datasetMainCate: '인간',
          datasetSubCate: '폭력',
          datasetVolume: '3GB',
        },
        {
          id: 2,
          datasetName: '인간 자세 데이터셋_001',
          datasetCount: '100',
          datasetMainCate: '인간',
          datasetSubCate: '폭력',
          datasetVolume: '3GB',
        },
        {
          id: 3,
          datasetName: '인간 자세 데이터셋_001',
          datasetCount: '100',
          datasetMainCate: '인간',
          datasetSubCate: '폭력',
          datasetVolume: '3GB',
        },
      ],
      //1-1-2.크롤링 수집 데이터
      collectCrawlingChannel: 'naver', //수집채널
      collectCrawlingKeyword: '', //키워드
      collectCrawlingPeriod: '1week', //수집 기간
      collectCrawlingPeriodInput: '', //수집 기간-직접입력값
      collectCrawlingCount: 'count100', //수집 건수
      collectCrawlingCountInput: '', //수집 건수-직접입력값

      //1-1-3.오프라인 데이터 수집
      collectOfflineTaget: '',
      collectOfflineAngle1: 'front',
      collectOfflineAngle2: 'UpToDown',
      collectOfflinePeriod: '1week',
      collectOfflineDistance: '1To3',
      collectOfflinePlace: '',
      collectOfflineContent: '',
      collectOfflinePurpose: '',
      collectOfflineCount: '',

      // checkedValues: [],
      // isAllChecked: true,

      //1-2.데이터 정제/전처리
      isCleaningOn: true, //데이터 정제
      isPreprocessingOn: false, //데이터 전처리

      //1-2-1.영상/이미지 정제
      CleaningFunction: 'CleaningFunctionFrame',

      //1-2-2.이미지 전처리
      PreprocessingFunction: [],

      //1-3.데이터 가공
      istoolBoxing: false,
      istoolPolyline: false,
      istoolPolygon: false,
      istoolPoint: false,
      istoolDrawpen: false,
      istool3DCube: false,
      istoolMagicwand: false,
      istoolKeypoint: false,
      istoolAutopoint: false,
      istoolSegment: false,

      className: '',
      ClasslistItem: [],

      isPopUpOn: false, //클래스 세부 설정 팝업

      propertyType: 'classSettingsignleSelect',
      classSettingMultipleChoice: false,
      classSettingInput: false,

      isClassSelectOn: [],

      projectWorkStep: '수집',
    };
  },
  computed: {
    isprojectNameValid() {
      //this.projectName.trim();
      return this.projectName.length < 1 || this.projectName.length > 50;
    },
    isprojectExplainValid() {
      return this.projectExplain.length < 1 || this.projectExplain.length > 100;
    },
    isCollectCrawlingKeywordValid() {
      return (
        this.collectCrawlingKeyword.length < 1 ||
        this.collectCrawlingKeyword.length > 10
      );
    },
    isCollectOfflineTargetValid() {
      return (
        this.collectOfflineTaget.length < 1 ||
        this.collectOfflineTaget.length > 20
      );
    },
    isCollectOfflinePlaceValid() {
      return (
        this.collectOfflinePlace.length < 1 ||
        this.collectOfflinePlace.length > 20
      );
    },
    isCollectOfflineContentValid() {
      return (
        this.collectOfflineContent.length < 1 ||
        this.collectOfflineContent.length > 500
      );
    },
    isCollectOfflinePurposeValid() {
      return (
        this.collectOfflinePurpose.length < 1 ||
        this.collectOfflinePurpose.length > 50
      );
    },
    isCollectOfflineCountValid() {
      return (
        parseInt(this.collectOfflineCount) < 1 ||
        parseInt(this.collectOfflineCount) > 10000
      );
    },
  },

  methods: {
    projectWorkStepSelect: function () {
      if (this.projectType == 'collect') {
        this.projectWorkStep = '수집';
      } else if (this.projectType == 'cleaning') {
        this.projectWorkStep = '정제';
      } else if (this.projectType == 'labeling') {
        this.projectWorkStep = '가공';
      }
    },
    //데이터 수집 프로젝트 설정 - 데이터 유형
    collectOwnOnOff: function () {
      this.isCollectOwnOn = !this.isCollectOwnOn;
      this.isCollectCrawlingOn = false;
      this.isCollectOfflineOn = false;
    },
    collectCrawlingOnOff: function () {
      this.isCollectOwnOn = false;
      this.isCollectCrawlingOn = !this.isCollectCrawlingOn;
      this.isCollectOfflineOn = false;
    },
    collectOfflineOnOff: function () {
      this.isCollectOwnOn = false;
      this.isCollectCrawlingOn = false;
      this.isCollectOfflineOn = !this.isCollectOfflineOn;
    },
    //데이터 정제/전처리 프로젝트 설정 - 데이터 유형
    cleaningOnOff: function () {
      this.isCleaningOn = !this.isCleaningOn;
      this.isPreprocessingOn = false;
    },
    preprocessingOnOff: function () {
      this.isCleaningOn = false;
      this.isPreprocessingOn = !this.isPreprocessingOn;
    },
    //데이터 가공 프로젝트 설정 - 작업도구 설정
    toolBoxing() {
      this.istoolBoxing = !this.istoolBoxing;
    },
    toolPolyline() {
      this.istoolPolyline = !this.istoolPolyline;
    },
    toolPolygon() {
      this.istoolPolygon = !this.istoolPolygon;
    },
    toolPoint() {
      this.istoolPoint = !this.istoolPoint;
    },
    toolDrawpen() {
      this.istoolDrawpen = !this.istoolDrawpen;
    },
    tool3DCube() {
      this.istool3DCube = !this.istool3DCube;
    },
    toolMagicwand() {
      this.istoolMagicwand = !this.istoolMagicwand;
    },
    toolKeypoint() {
      this.istoolKeypoint = !this.istoolKeypoint;
    },
    toolAutopoint() {
      this.istoolAutopoint = !this.istoolAutopoint;
    },
    toolSegment() {
      this.istoolSegment = !this.istoolSegment;
    },
    classNamesubmit() {
      this.ClasslistItem.push(this.className);
      this.className = '';
    },
    classNameDelete(index) {
      this.ClasslistItem.splice(index, 1);
    },
    isPopUpOnOff() {
      this.isPopUpOn = !this.isPopUpOn;
    },
    isClassSelectOnOff(index) {
      for (let index = 0; index < this.isClassSelectOn.length; index++) {
        this.isClassSelectOn[index] = false;
      }
      this.isClassSelectOn[index] = !this.isClassSelectOn[index];

      console.log(this.isClassSelectOn);
    },

    async submitForm() {
      if (this.collectCrawlingPeriod == 'custom') {
        this.collectCrawlingPeriod = this.collectCrawlingPeriodInput;
      }
      if (this.collectCrawlingCount == 'countcustom') {
        this.collectCrawlingCount = this.collectCrawlingCountInput;
      }
      const ProejctCommonData = {
        projectName: this.projectName.trim(),
        projectExplain: this.projectExplain,
        projectType: this.projectType,
      };
      const CollectOwnData = {
        checkedCollectOwn: this.checkedCollectOwn,
      };
      const CollectCrawlingData = {
        collectCrawlingChannel: this.collectCrawlingChannel,
        collectCrawlingKeyword: this.collectCrawlingKeyword,
        collectCrawlingPeriod: this.collectCrawlingPeriod,
        collectCrawlingCount: this.collectCrawlingCount,
      };
      const CollectOfflineData = {
        collectOfflineTaget: this.collectOfflineTaget,
        collectOfflineAngle1: this.collectOfflineAngle1,
        collectOfflineAngle2: this.collectOfflineAngle2,
        collectOfflinePeriod: this.collectOfflinePeriod,
        collectOfflineDistance: this.collectOfflineDistance,
        collectOfflinePlace: this.collectOfflinePlace,
        collectOfflineContent: this.collectOfflineContent,
        collectOfflinePurpose: this.collectOfflinePurpose,
        collectOfflineCount: this.collectOfflineCount,
      };
      const CleaningData = {
        CleaningFunction: this.CleaningFunction,
      };
      const PreprocessingData = {
        PreprocessingFunction: this.PreprocessingFunction,
      };

      console.log(ProejctCommonData);
      console.log(CollectOwnData);
      console.log(CollectCrawlingData);
      console.log(CollectOfflineData);
      console.log(CleaningData);
      console.log(PreprocessingData);

      alert('프로젝트가 생성되었습니다.');

      this.$router.push({
        name: 'allprojectlist',
        params: {
          projectName: this.projectName,
          projectType: this.projectType,
        },
      });
    },

    initForm() {
      this.projectName = '';
      this.projectExplanation = '';
      this.className = '';
      this.propertyName = '';
      this.selectType = '';
      this.selectPropertyValue = '';
      this.selectMinSelect = '';
      this.selectMaxSelect = '';
      this.inputNumber1 = '';
      this.inputNumber2 = '';
      this.inputString1 = '';
      this.inputString2 = '';
      this.workStep1 = '';
      this.workStep2 = '';
    },
    clickFunc() {
      console.log(this.checkedCollectOwn);
    },
  },
};
</script>

<style></style>
