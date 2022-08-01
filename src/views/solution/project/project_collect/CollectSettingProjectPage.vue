<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <TypeFilter />
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
                <button class="btn1-active btn1-3">자체 제공 데이터셋</button>
                <button class="btn1-3">크롤링 수집 데이터</button>
                <button class="btn1-4">오프라인 데이터 수집 요청</button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>데이터셋 번호</span></th>
                <th><span>데이터셋 명</span></th>
                <th><span>데이터셋 건수</span></th>
                <th><span>데이터셋 대분류</span></th>
                <th><span>데이터셋 세부분류</span></th>
                <th><span>데이터셋 총 용량</span></th>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>인간 자세 데이터셋_001</span></td>
                <td><span>100</span></td>
                <td><span>인간</span></td>
                <td><span>이상행동</span></td>
                <td><span>10MB</span></td>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>인간 자세 데이터셋_001</span></td>
                <td><span>100</span></td>
                <td><span>인간</span></td>
                <td><span>이상행동</span></td>
                <td><span>10MB</span></td>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>인간 자세 데이터셋_001</span></td>
                <td><span>100</span></td>
                <td><span>인간</span></td>
                <td><span>이상행동</span></td>
                <td><span>10MB</span></td>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>인간 자세 데이터셋_001</span></td>
                <td><span>100</span></td>
                <td><span>인간</span></td>
                <td><span>이상행동</span></td>
                <td><span>10MB</span></td>
              </tr>
              <tr>
                <td><span>1</span></td>
                <td><span>인간 자세 데이터셋_001</span></td>
                <td><span>100</span></td>
                <td><span>인간</span></td>
                <td><span>이상행동</span></td>
                <td><span>10MB</span></td>
              </tr>
            </table>
          </article>
          <article class="common1">
            <h3>프로젝트 설정 <span class="star">*</span></h3>
            <ul class="align1">
              <li>
                <button class="btn1-3">자체 제공 데이터셋</button>
                <button class="btn1-active btn1-3">크롤링 수집 데이터</button>
                <button class="btn1-4">오프라인 데이터 수집 요청</button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>수집채널</span></th>
                <th><span>키워드</span></th>
                <th><span>수집기간</span></th>
                <th><span>수집 건수</span></th>
              </tr>
              <tr>
                <td><span>인스타그램</span></td>
                <td><span>달리기</span></td>
                <td><span>1주일</span></td>
                <td><span>3,000</span></td>
              </tr>
              <tr>
                <td><span>인스타그램</span></td>
                <td><span>달리기</span></td>
                <td><span>1주일</span></td>
                <td><span>3,000</span></td>
              </tr>
              <tr>
                <td><span>인스타그램</span></td>
                <td><span>달리기</span></td>
                <td><span>1주일</span></td>
                <td><span>3,000</span></td>
              </tr>
            </table>
          </article>
          <article class="common1">
            <h3>프로젝트 설정 <span class="star">*</span></h3>
            <ul class="align1">
              <li>
                <button class="btn1-3">자체 제공 데이터셋</button>
                <button class="btn1-3">크롤링 수집 데이터</button>
                <button class="btn1-active btn1-4">
                  오프라인 데이터 수집 요청
                </button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>수집대상</span></th>
                <th><span>수집각도</span></th>
                <th><span>수집거리</span></th>
                <th><span>수집장소</span></th>
                <th><span>수집 상세내용</span></th>
                <th><span>수집 목적</span></th>
                <th><span>수집 건수</span></th>
              </tr>
              <tr>
                <td><span>어린이</span></td>
                <td><span>대상 정면촬영, 위에서 아래로 촬영</span></td>
                <td><span>1~3m</span></td>
                <td><span>길거리</span></td>
                <td><span>어린이 보행</span></td>
                <td><span>데이터</span></td>
                <td><span>3,000</span></td>
              </tr>
            </table>
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
// 작업유형
import TypeFilter from '../../../../components/solution/project/common/project_setting/TypeFilter.vue';

export default {
  components: {
    MainMenu,
    SubMenu,
    Header,
    TypeFilter,
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
