<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article class="align1 button-filter">
            <a href="collect-set.html" class="btn-set btn1-2">프로젝트 정보</a>
            <a href="collect-set-member.html" class="btn-set btn2-2"
              >프로젝트 멤버</a
            >
          </article>
        </section>
        <section>
          <article>
            <ul class="search-filter">
              <li class="search-title">
                <h2>검색어</h2>
              </li>
              <li class="search-contents">
                <input
                  type="search"
                  placeholder="이름, 이메일로 입력해주세요."
                />
                <button class="btn2-1">검색</button>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <ul class="current-bar">
              <li>
                <h2>전체 멤버</h2>
                <b>6</b>
                <h2>명</h2>
              </li>
              <li class="bar"></li>
              <li>
                <button class="btn2-2"><span> 작업자 추가하기</span></button>
                <button class="btn1-1"><span> 삭제</span></button>
                <button class="btn1-3 work-stage">
                  <span> 작업단계 변경</span>
                  <img
                    src="../../../../assets/images/project/icon/icon-dropdown.svg"
                    alt=""
                  />
                  <ul class="filter-more">
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>검수</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>최종</span></label>
                    </li>
                  </ul>
                </button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><input type="checkbox" /></th>
                <th><span>이메일</span></th>
                <th><span>이름</span></th>
                <th><span>작업단계</span></th>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td><span>abc@abc.co.kr</span></td>
                <td><span>홍길동</span></td>
                <td><span>검수</span></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td><span>abc@abc.co.kr</span></td>
                <td><span>홍길동</span></td>
                <td><span>검수</span></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td><span>abc@abc.co.kr</span></td>
                <td><span>홍길동</span></td>
                <td><span>검수</span></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td><span>abc@abc.co.kr</span></td>
                <td><span>홍길동</span></td>
                <td><span>검수</span></td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td><span>abc@abc.co.kr</span></td>
                <td><span>홍길동</span></td>
                <td><span>검수</span></td>
              </tr>
            </table>
          </article>
        </section>
      </main>
    </div>
    <div class="project-popup-wrap">
      <div class="project-popup2">
        <div class="project-popup-title align2">
          <h2>프로젝트 멤버 추가</h2>
          <button>
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </div>
        <div class="project-popup-contents">
          <div class="project-popup-inner align1">
            <input type="text" placeholder="이름 또는 이메일로 검색해주세요." />
            <button class="btn2-0">
              <img
                src="../../../../assets/images/project/icon/icon-search-btn.svg"
                alt=""
              />
            </button>
          </div>
          <div class="project-popup-inner project-member-add align5">
            <div class="left">
              <table class="table1">
                <tr class="table1-head">
                  <th><input type="checkbox" /></th>
                  <th><span>멤버명</span></th>
                  <th><span>멤버 이메일</span></th>
                  <th><span>작업단계</span></th>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>홍길동</span></td>
                  <td><span>gd.hong@abc.co.kr</span></td>
                  <td><span>검수</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>홍길동</span></td>
                  <td><span>gd.hong@abc.co.kr</span></td>
                  <td><span>검수</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>홍길동</span></td>
                  <td><span>gd.hong@abc.co.kr</span></td>
                  <td><span>검수</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>홍길동</span></td>
                  <td><span>gd.hong@abc.co.kr</span></td>
                  <td><span>검수</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>홍길동</span></td>
                  <td><span>gd.hong@abc.co.kr</span></td>
                  <td><span>검수</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>홍길동</span></td>
                  <td><span>gd.hong@abc.co.kr</span></td>
                  <td><span>검수</span></td>
                </tr>
              </table>
            </div>
            <div class="right">
              <div class="member-board align3">
                <span>홍길동</span>
                <span>홍길동</span>
                <span>홍길동</span>
                <span>홍길동</span>
                <span>홍길동</span>
              </div>
              <select name="" id="">
                <option value="">검수</option>
                <option value="">최종</option>
              </select>
            </div>
          </div>
          <div class="project-popup-inner align6">
            <button class="btn2-1">추가</button>
          </div>
        </div>
      </div>
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
