ㄱ
<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article>
            <ul class="search-filter">
              <li class="search-title">
                <h2>검색어</h2>
              </li>
              <li class="search-contents">
                <select name="" id="">
                  <option value="">파일명</option>
                </select>
                <input
                  type="search"
                  placeholder="파일명을 입력해주세요."
                  v-model="searchKeyword"
                />
                <button class="btn2-1" @click="sortedData()">검색</button>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <ul class="current-bar">
              <li>
                <h2><span>전체</span> 폴더</h2>
                <span class="arrow">></span>
                <h2>&#8361; 무료 이미지</h2>
                <b>{{ this.ImageDataListItem.length }}</b>
                <h2>개</h2>
              </li>
              <li class="bar"></li>
              <li>
                <router-link to="/labelingstudio" class="btn3-1 btn-set"
                  >STUDIO</router-link
                >
                <button class="btn1-2">데이터 불러오기</button>
                <div class="file-wrap">
                  <input
                    type="file"
                    id="purification-file"
                    ref="selectFile"
                    @change="uploadFolder"
                    multiple
                  />
                  <label for="purification-file" class="btn-set btn1-1"
                    >업로드</label
                  >
                </div>
                <router-link
                  to="/allProject/project_labeling/filemanage"
                  class="btn-set btn1-2"
                  target="_blank"
                  >데이터셋 관리</router-link
                >
                <button class="btn2-1" @click="isPopUp1OnOff()">
                  할당하기
                </button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>파일명</span></th>
                <th>
                  <span @click="isFilterPopUp1OnOff()">작업단계</span>
                  <button @click="isFilterPopUp1OnOff()">
                    <img
                      src="../../../../assets/images/project/icon/icon-filter.svg"
                      alt=""
                    />
                  </button>
                  <ul class="filter-more" v-show="isFilterPopUp1On">
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>전체</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>가공</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>검수</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>최종</span></label>
                    </li>
                  </ul>
                </th>
                <th>
                  <span @click="isFilterPopUp2OnOff()"> 작업상태</span>
                  <button @click="isFilterPopUp2OnOff()">
                    <img
                      src="../../../../assets/images/project/icon/icon-filter.svg"
                      alt=""
                    />
                  </button>
                  <ul class="filter-more" v-show="isFilterPopUp2On">
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for="table1-filter2"><span>전체</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for="table1-filter2"><span>미작업</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for="table1-filter2"><span>작업중</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for="table1-filter2"><span>작업</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for="table1-filter2"><span>SKIP</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for="table1-filter2"><span>완료</span></label>
                    </li>
                    <li class="align1">
                      <input type="checkbox" id="table1-filter2" />
                      <label for=""><span>반려</span></label>
                    </li>
                  </ul>
                </th>
                <th><span>마지막 업데이트</span></th>
                <th><span>검수 담당자</span></th>
                <th><span>최종 담당자</span></th>
              </tr>
              <tr v-for="(item, index) in ImageDataListItem" :key="index">
                <td class="align4">
                  <ul class="left align1">
                    <li class="img-wrap">
                      <!-- <img :src="require(`${item.img}`)" alt="" /> -->
                      <img :src="item.img" alt="" />
                    </li>
                    <li>
                      <span
                        class="table1-bold"
                        @click="isStudioPreviewPopUpOnOff()"
                      >
                        {{ item.fileName }}</span
                      >
                    </li>
                  </ul>
                  <div class="right align2">
                    <router-link to="/labelingstudio" class="btn3-2 btn-set"
                      >STUDIO</router-link
                    >
                  </div>
                </td>
                <td>
                  <span>{{ item.workStep }}</span>
                </td>
                <td>
                  <span>{{ item.workStatus }}</span>
                </td>
                <td>
                  <span>{{ item.updateDate }}</span>
                </td>
                <td>
                  <select name="" id="" v-model="inspectionManager">
                    <option value="default" hidden>담당자명</option>
                    <option
                      v-for="option in item.inspectionOptions"
                      :key="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </td>
                <td>
                  <select name="" id="" v-model="finalManager">
                    <option value="default" hidden>담당자명</option>

                    <option
                      v-for="option in item.finalOptions"
                      :key="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </td>
              </tr>
            </table>
          </article>
          <article class="pagination">
            <button class="page-prev">
              <img
                src="../../../../assets/images/project/icon/icon-page-prev.svg"
                alt=""
              />
            </button>
            <ul class="pagination-page">
              <li class="now-page">
                <button><span> 1</span></button>
              </li>
              <li>
                <button><span> 2</span></button>
              </li>
              <li>
                <button><span> 3</span></button>
              </li>
              <li>
                <button><span> 4</span></button>
              </li>
              <li>
                <button><span> 5</span></button>
              </li>
            </ul>
            <button class="page-next">
              <img
                src="../../../../assets/images/project/icon/icon-page-next.svg"
                alt=""
              />
            </button>
          </article>
        </section>
      </main>
    </div>
    <div class="page-studio-wrap align2" v-show="isStudioPreviewPopUpOn">
      <ul class="page-studio">
        <li class="page-studio-head align2">
          <a
            href="../../../studio/collect-Inspection-studio.html"
            class="btn-set btn5-2 studio-btn"
          >
            <span> STUDIO</span></a
          >
          <div class="collect-file-name align2">
            <button class="prev">
              <img
                src="../../../../assets/images/project/icon/icon-prev.svg"
                alt=""
              />
            </button>
            <h2>조깅_0001.png</h2>
            <button class="next">
              <img
                src="../../../../assets/images/project/icon/icon-next.svg"
                alt=""
              />
            </button>
          </div>
          <button class="close" @click="isStudioPreviewPopUpOn = false">
            <img
              src="../../../../assets/images/project/icon/icon-close04.svg"
              alt=""
            />
          </button>
        </li>
        <li class="page-stuido-contents align5">
          <div class="page-studio-inner">
            <div class="page-studio-img-wrap">
              <img
                src="../../../../assets/images/studio/sample-image.png"
                alt=""
              />
            </div>
          </div>
          <div class="page-studio-inner page-studio-info">
            <div class="page-studio-inner-title align2">
              <h3>작업내역</h3>
            </div>
            <div class="page-studio-bar"></div>
            <div class="inner-info-wrap">
              <div class="box">
                <div class="work-detail">
                  <div class="align5">
                    <div class="left align1">
                      <div class="work-state"><span>정제</span></div>
                      <span class="ball"></span>
                      <b>완료</b>
                    </div>
                    <div class="right">
                      <b class="date">2022-01-01 10:00:47</b>
                    </div>
                  </div>
                  <div class="page-studio-bar2"></div>
                  <table class="table8">
                    <tr>
                      <th><span>담당자</span></th>
                      <td><span class="manager align2">홍</span></td>
                    </tr>
                    <tr>
                      <th><span>최종 저장시간</span></th>
                      <td><span>2022-01-01 08:00:50</span></td>
                    </tr>
                    <tr>
                      <th><span>담당자</span></th>
                      <td><span>이미지 회전</span></td>
                    </tr>
                    <tr>
                      <th><span>총 작업시간</span></th>
                      <td><span>0</span></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="inner-info-wrap">
              <div class="page-studio-inner-title align2">
                <h3>데이터 정보</h3>
              </div>
              <div class="page-studio-bar"></div>
              <table class="table5">
                <tr>
                  <th><span>파일명</span></th>
                  <td><span>Image명</span></td>
                </tr>
                <tr>
                  <th><span>파일경로</span></th>
                  <td><span>D:&#8361;무료이미지</span></td>
                </tr>
                <tr>
                  <th><span>파일형식</span></th>
                  <td><span>JPG</span></td>
                </tr>
                <tr>
                  <th><span>파일용량</span></th>
                  <td><span>2MB</span></td>
                </tr>
                <tr>
                  <th><span>파일크기</span></th>
                  <td><span>800X900</span></td>
                </tr>
                <tr>
                  <th><span>제공일시</span></th>
                  <td><span>2020.10.10 18:00</span></td>
                </tr>
              </table>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="project-popup-wrap" v-show="isPopUp1On">
      <ul class="project-popup2" v-show="isPopUp1On">
        <li class="project-popup-title align2">
          <h2>할당하기</h2>
          <button @click="isPopUp1On = false">
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </li>
        <li class="project-popup-contents">
          <div class="project-popup-inner">
            <h3>작업단계</h3>
            <select name="" id="">
              <option value="">검수</option>
              <option value="">최종</option>
            </select>
          </div>
          <div class="project-popup-inner">
            <div class="align0">
              <h3>대상 데이터</h3>
              <h4>Total File <span>0개</span></h4>
            </div>
            <div class="align1">
              <button class="btn2-2 select-data" @click="isPopUp2OnOff()">
                <span>데이터 선택</span>
              </button>
              <input type="text" />
            </div>
          </div>
          <div class="project-popup-inner align1">
            <ul class="align1">
              <li class="radio-wrap">
                <input
                  type="radio"
                  id="collect-folder-assignment-all"
                  name="collect-folder-assignment"
                />
                <label for="collect-folder-assignment-all"
                  ><span> <span>전체</span>파일</span></label
                >
              </li>
              <li class="radio-wrap">
                <input
                  type="radio"
                  id="collect-folder-assignment-set"
                  name="collect-folder-assignment"
                />
                <label for="collect-folder-assignment-set"
                  ><span> 개수 설정</span></label
                >
              </li>
            </ul>
          </div>
          <div class="project-popup-inner">
            <div class="align0">
              <h3>담당자</h3>
              <h4>담당자 수 <span>0명</span></h4>
            </div>
            <input type="text" placeholder="이름 또는 이메일로 검색해주세요." />
          </div>
          <div class="project-popup-inner align5">
            <div class="table-wrap">
              <table class="table3">
                <tr class="table3-head">
                  <th><input type="checkbox" /></th>
                  <th><span>멤버 이메일</span></th>
                  <th><span>멤버명</span></th>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>gd.hong@abc.com</span></td>
                  <td><span>홍길동1</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>gd.hong@abc.com</span></td>
                  <td><span>홍길동1</span></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td><span>gd.hong@abc.com</span></td>
                  <td><span>홍길동1</span></td>
                </tr>
              </table>
            </div>
            <div class="manager-box collect-dataset-list.html align3">
              <span class="align1"
                >홍길동
                <img
                  src="../../../../assets/images/project/icon/icon-close03.svg"
                  alt=""
              /></span>
            </div>
          </div>
          <div class="project-popup-inner align5">
            <div class="pagination">
              <button class="page-prev">
                <img
                  src="../../../../assets/images/project/icon/icon-page-prev.svg"
                  alt=""
                />
              </button>
              <ul class="pagination-page">
                <li class="now-page">
                  <button><span> 1</span></button>
                </li>
                <li>
                  <button><span> 2</span></button>
                </li>
                <li>
                  <button><span> 3</span></button>
                </li>
                <li>
                  <button><span> 4</span></button>
                </li>
                <li>
                  <button><span> 5</span></button>
                </li>
              </ul>
              <button class="page-next">
                <img
                  src="../../../../assets/images/project/icon/icon-page-next.svg"
                  alt=""
                />
              </button>
            </div>
            <div>
              <button class="btn2-1"><span>작업할당</span></button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="project-popup1" v-show="isPopUp2On">
        <li class="project-popup-title align2">
          <h2>폴더선택</h2>
          <button @click="isPopUp2On = false">
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </li>
        <li class="project-popup-contents">
          <table class="table4">
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <span
                  ><img
                    src="../../../../assets/images/project/icon/icon-folder.svg"
                    alt=""
                  />무료 이미지</span
                >
              </td>
              <td><span>500</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <span
                  ><img
                    src="../../../../assets/images/project/icon/icon-folder.svg"
                    alt=""
                  />무료 이미지</span
                >
              </td>
              <td><span>500</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <span
                  ><img
                    src="../../../../assets/images/project/icon/icon-folder.svg"
                    alt=""
                  />무료 이미지</span
                >
              </td>
              <td><span>500</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <span
                  ><img
                    src="../../../../assets/images/project/icon/icon-folder.svg"
                    alt=""
                  />무료 이미지</span
                >
              </td>
              <td><span>500</span></td>
            </tr>
          </table>
          <div class="align6">
            <button class="btn1-1" @click="isPopUp2On = false">취소</button>
            <button class="btn2-1">선택</button>
          </div>
        </li>
      </ul>
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
    return {
      isStudioPreviewPopUpOn: false,
      isPopUp1On: false,
      isPopUp2On: false,
      isFilterPopUp1On: false,
      isFilterPopUp2On: false,
      inspectionManager: 'default',
      finalManager: 'default',
      searchKeyword: '',

      ImageDataListItemOrigin: [
        {
          id: 1,
          fileName: 'person_0001.png',
          fileSize: '5.21KB',
          img: 'file-list1.png',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '강경은' }],
        },
        {
          id: 2,
          fileName: 'person_0002.png',
          fileSize: '3.82KB',
          img: 'file-list2.png',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '이지은' }],
          finalOptions: [{ text: '은상현' }, { text: '송현주' }],
        },
        {
          id: 3,
          fileName: 'person_0003.png',
          fileSize: '3.54KB',
          img: 'file-list3.png',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '정규호' }, { text: '이지현' }],
          finalOptions: [{ text: '박영주' }, { text: '오현우' }],
        },
        {
          id: 4,
          fileName: 'person_0004.png',
          fileSize: '4.11KB',
          img: 'file-list4.png',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '김진경' }],
          finalOptions: [{ text: '은상현' }, { text: '강경은' }],
        },
        {
          id: 5,
          fileName: 'person_0005.jpg',
          fileSize: '5.79KB',
          img: 'file-list5.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.11',
          inspectionOptions: [{ text: '송현주' }, { text: '오현우' }],
          finalOptions: [{ text: '이지은' }],
        },
        {
          id: 6,
          fileName: 'person_0006.jpg',
          fileSize: '3.82KB',
          img: 'file-list6.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.11',
          inspectionOptions: [{ text: '정규호' }],
          finalOptions: [{ text: '강경은' }],
        },
        {
          id: 7,
          fileName: 'person_0007.jpg',
          fileSize: '5.44KB',
          img: 'file-list7.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.12',
          inspectionOptions: [{ text: '김진경' }],
          finalOptions: [{ text: '오현우' }],
        },
        {
          id: 8,
          fileName: 'person_0008.jpg',
          fileSize: '6.41KB',
          img: 'file-list8.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.12',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '은상현' }, { text: '강경은' }],
        },
        {
          id: 9,
          fileName: 'person_0009.jpg',
          fileSize: '7.17KB',
          img: 'file-list9.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '이지은' }],
          finalOptions: [{ text: '송현주' }, { text: '강경은' }],
        },
        {
          id: 10,
          fileName: 'person_0010.jpg',
          fileSize: '2.76KB',
          img: 'file-list10.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '은상현' }, { text: '강경은' }],
        },
        {
          id: 11,
          fileName: 'person_0011.jpg',
          fileSize: '9.72KB',
          img: 'file-list11.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '오현우' }, { text: '이지은' }],
          finalOptions: [{ text: '정규호' }],
        },
        {
          id: 12,
          fileName: 'person_0012.jpg',
          fileSize: '7.15KB',
          img: 'file-list12.jpg',
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '강경은' }],
        },
      ],
      ImageDataListItem: [
        {
          id: 1,
          fileName: 'person_0001.png',
          fileSize: '5.21KB',
          img: require('../../../../assets/images/studio/file-list1.png'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '강경은' }],
        },
        {
          id: 2,
          fileName: 'person_0002.png',
          fileSize: '3.82KB',
          img: require('../../../../assets/images/studio/file-list2.png'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '이지은' }],
          finalOptions: [{ text: '은상현' }, { text: '송현주' }],
        },
        {
          id: 3,
          fileName: 'person_0003.png',
          fileSize: '3.54KB',
          img: require('../../../../assets/images/studio/file-list3.png'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '정규호' }, { text: '이지현' }],
          finalOptions: [{ text: '박영주' }, { text: '오현우' }],
        },
        {
          id: 4,
          fileName: 'person_0004.png',
          fileSize: '4.11KB',
          img: require('../../../../assets/images/studio/file-list4.png'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.08',
          inspectionOptions: [{ text: '김진경' }],
          finalOptions: [{ text: '은상현' }, { text: '강경은' }],
        },
        {
          id: 5,
          fileName: 'person_0005.jpg',
          fileSize: '5.79KB',
          img: require('../../../../assets/images/studio/file-list5.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.11',
          inspectionOptions: [{ text: '송현주' }, { text: '오현우' }],
          finalOptions: [{ text: '이지은' }],
        },
        {
          id: 6,
          fileName: 'person_0006.jpg',
          fileSize: '3.82KB',
          img: require('../../../../assets/images/studio/file-list6.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.11',
          inspectionOptions: [{ text: '정규호' }],
          finalOptions: [{ text: '강경은' }],
        },
        {
          id: 7,
          fileName: 'person_0007.jpg',
          fileSize: '5.44KB',
          img: require('../../../../assets/images/studio/file-list7.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.12',
          inspectionOptions: [{ text: '김진경' }],
          finalOptions: [{ text: '오현우' }],
        },
        {
          id: 8,
          fileName: 'person_0008.jpg',
          fileSize: '6.41KB',
          img: require('../../../../assets/images/studio/file-list8.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.12',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '은상현' }, { text: '강경은' }],
        },
        {
          id: 9,
          fileName: 'person_0009.jpg',
          fileSize: '7.17KB',
          img: require('../../../../assets/images/studio/file-list9.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '이지은' }],
          finalOptions: [{ text: '송현주' }, { text: '강경은' }],
        },
        {
          id: 10,
          fileName: 'person_0010.jpg',
          fileSize: '2.76KB',
          img: require('../../../../assets/images/studio/file-list10.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '은상현' }, { text: '강경은' }],
        },
        {
          id: 11,
          fileName: 'person_0011.jpg',
          fileSize: '9.72KB',
          img: require('../../../../assets/images/studio/file-list11.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '오현우' }, { text: '이지은' }],
          finalOptions: [{ text: '정규호' }],
        },
        {
          id: 12,
          fileName: 'person_0012.jpg',
          fileSize: '7.15KB',
          img: require('../../../../assets/images/studio/file-list12.jpg'),
          workStep: '전체',
          workStatus: '완료',
          updateDate: '2022.02.13',
          inspectionOptions: [{ text: '김진경' }, { text: '박수아' }],
          finalOptions: [{ text: '강경은' }],
        },
      ],
      files: [],
    };
  },
  methods: {
    isStudioPreviewPopUpOnOff: function () {
      this.isStudioPreviewPopUpOn = !this.isStudioPreviewPopUpOn;
    },
    isPopUp1OnOff: function () {
      this.isPopUp1On = !this.isPopUp1On;
    },
    isPopUp2OnOff: function () {
      this.isPopUp2On = !this.isPopUp2On;
    },
    isFilterPopUp1OnOff: function () {
      this.isFilterPopUp1On = !this.isFilterPopUp1On;
    },
    isFilterPopUp2OnOff: function () {
      this.isFilterPopUp2On = !this.isFilterPopUp2On;
    },
    sortedData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.ImageDataListItem.filter(data => {
          return data.fileName
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });

        return (this.ImageDataListItem = this.searchedData1);
      } else {
        //데이터가 없을 경우, 전체 리스트 출력
        return (this.ImageDataListItem = this.ImageDataListItemOrigin);
      }
    },
    imageAddUpload() {
      let num = -1;
      if (0 < this.$refs.selectFile.files.length) {
        for (let i = 0; i < this.$refs.selectFile.files.length; i++) {
          this.files = [
            ...this.files,
            //이미지 업로드
            {
              //실제 파일
              file: this.$refs.selectFile.name,
              //이미지 프리뷰
              preview: this.$refs.selectFile.type,
              //삭제및 관리를 위한 number
              //number: i + this.uploadImageIndex,
            },
          ];
          this.ImageDataListItem.push({
            datasetName: 'dataset_name[0]',
            projectType: '데이터 가공',
            progressCount: '0',
            allCount: this.$refs.selectFile.files.length,
            projectTypeLink: '/project_cleaning',
            workingCount: '0',
            inspectionCount: '0',
            completeCount: '0',
          });
          num = i;
        }
        this.uploadImageIndex = this.uploadImageIndex + num + 1;
      }
    },
    uploadFolder() {
      // 선택된 파일이 있는가?
      if (0 < this.$refs.selectFile.files.length) {
        for (let i = 0; i < this.$refs.selectFile.files.length; i++) {
          // 0 번째 파일을 가져 온다.
          this.selectFile = this.$refs.selectFile.files[i];
          // 마지막 . 위치를 찾고 + 1 하여 확장자 명을 가져온다.
          let fileExt = this.selectFile.name.substring(
            this.selectFile.name.lastIndexOf('.') + 1,
          );
          // 소문자로 변환
          fileExt = fileExt.toLowerCase();
          // 이미지 확장자 체크, 1메가 바이트 이하 인지 체크
          if (
            ['jpeg', 'png', 'gif', 'bmp'].includes(fileExt) &&
            this.selectFile.size <= 1048576
          ) {
            // FileReader 를 활용하여 파일을 읽는다
            var reader = new FileReader();
            reader.onload = e => {
              // base64
              this.previewImgUrl = e.target.result;
            };
            console.log('mic' + this.selectFile);
            reader.readAsDataURL(this.selectFile);
            console.log('키키' + this.$refs.selectFile.name[i]);
            this.ImageDataListItem.push({
              id: 11,
              fileName: this.selectFile.name,
              fileSize: '9.72KB',
              img: URL.createObjectURL(this.$refs.selectFile.files[i]),
              workStep: '전체',
              workStatus: '완료',
              updateDate: '2022.02.13',
              inspectionOptions: [{ text: '오현우' }, { text: '이지은' }],
              finalOptions: [{ text: '정규호' }],
            });
          } else if (this.selectFile.size <= 1048576) {
            // 이미지외 파일
            this.previewImgUrl = null;
          } else {
            alert('파일을 다시 선택해 주세요.');
            this.selectFile = null;
            this.previewImgUrl = null;
          }
        }
      } else {
        // 파일을 선택하지 않았을때
        this.selectFile = null;
        this.previewImgUrl = null;
      }
      console.log(this.selectFile);
      console.log(this.files);
      console.log(this.files.length);
    },
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
