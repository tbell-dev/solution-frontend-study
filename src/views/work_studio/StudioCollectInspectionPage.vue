<template>
  <div id="studio-wrap">
    <header id="header">
      <ul class="header-top">
        <li class="ht-left">
          <div>
            <router-link to="/allproject/allprojectlist"
              ><img
                src="../../assets/images/studio/header/icon-home.svg"
                alt=""
            /></router-link>
          </div>
          <a :href="require(`@/assets/images/studio/${selectImg}`)" download>
            <button>
              <img
                src="../../assets/images/studio/icon/icon-down02.svg"
                alt="Down"
              />
            </button>
          </a>
          <button>
            <img
              src="../../assets/images/studio/header/icon-save.svg"
              alt="Save"
            />
          </button>
          <button @click="new FullScreenOnOff()">
            <img
              src="../../assets/images/studio/header/icon-fullscreen.svg"
              alt="Full Screen"
            />
          </button>
          <router-link to="/allproject/allprojectlist">
            <button>
              <img
                src="../../assets/images/studio/header/icon-logout.svg"
                alt="Log Out"
              />
            </button>
          </router-link>
        </li>
        <li class="ht-center">
          <button
            class="sutdio-prev"
            @click="selectImgFunction(this.currentImageIndex - 1)"
          >
            <img src="../../assets/images/studio/header/icon-prev.svg" alt="" />
          </button>
          <div class="ht-title">
            <div class="studio-project">Project_Name</div>
            <h2
              :class="{
                unworked: DataListItem[currentImageIndex].status === '미작업',
                working: DataListItem[currentImageIndex].status === '작업중',
                worked: DataListItem[currentImageIndex].status === '완료',
                companion: DataListItem[currentImageIndex].status === '반려',
              }"
            >
              {{ selectImgName }}
            </h2>
          </div>
          <!-- 작업 상태에 따라 파일 이름 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
          <button
            class="sutdio-next"
            @click="selectImgFunction(this.currentImageIndex + 1)"
          >
            <img src="../../assets/images/studio/header/icon-next.svg" alt="" />
          </button>
        </li>
        <li class="ht-right">
          <div class="work-assignee">
            <b>수집 담당자</b>
            <span class="bar"></span>
            <p>강은수</p>
          </div>
          <div class="work-stage">
            <b>작업단계</b>
            <span class="bar"></span>
            <p>수집</p>
          </div>
          <div class="work-status">
            <b>작업상태</b>
            <!-- 작업 상태에 따라 동그라미와 작업상태 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
            <span class="bar"></span>
            <p
              :class="{
                unworked: DataListItem[currentImageIndex].status === '미작업',
                working: DataListItem[currentImageIndex].status === '작업중',
                worked: DataListItem[currentImageIndex].status === '완료',
                companion: DataListItem[currentImageIndex].status === '반려',
              }"
            >
              <span class="ball"></span
              >{{ DataListItem[currentImageIndex].status }}
            </p>
          </div>
        </li>
      </ul>
    </header>
    <main id="main">
      <div class="studio-center">
        <div class="studio-pic">
          <img :src="require(`@/assets/images/studio/${selectImg}`)" alt="" />
        </div>
      </div>
      <!-- 기본 속성 -->
      <div class="studio-right studio-right1">
        <div class="studio-right-top">
          <ul class="studio-assignee">
            <li class="studio-contents">
              <b>수집 담당자</b>
              <span class="bar-left"></span>
              <p>강은수</p>
            </li>
            <li class="studio-contents">
              <b>검수 담당자</b>
              <span class="bar-left"></span>
              <p>김철수</p>
            </li>
            <li class="studio-contents">
              <b>최종 담당자</b>
              <span class="bar-left"></span>
              <p>신상호</p>
            </li>
          </ul>
          <ul class="studio-file-info">
            <li class="studio-title3" @click="isFileInfoOnOff">
              <img
                v-if="isFileInfoOn"
                src="../../assets/images/studio/icon/icon-up.svg"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/studio/icon/icon-down.svg"
                alt=""
              />
              <h2>File</h2>
            </li>
            <li class="studio-contents" v-if="isFileInfoOn">
              <div class="top-wrap">
                <div class="top">
                  <table class="file-info-table">
                    <tr>
                      <th><b>해상도</b></th>
                      <td><p>72dpi</p></td>
                    </tr>
                    <tr>
                      <th><b>용량</b></th>
                      <td>
                        <p>{{ DataListItem[currentImageIndex].fileSize }}</p>
                      </td>
                    </tr>
                    <tr>
                      <th><b>파일크기</b></th>
                      <td>
                        <p>
                          {{ DataListItem[currentImageIndex].width }}*{{
                            DataListItem[currentImageIndex].height
                          }}
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="studio-right-bottom" v-if="isFinalPIC">
          <button class="finish2" @click="imageStatusComplete()">완료</button>
          <button class="return" @click="isCompanionOnOff">반려</button>
        </div>
        <div class="studio-right-bottom" v-else>
          <button class="finish1" @click="imageStatusComplete()">완료</button>
        </div>
      </div>
      <!-- 반려하기 팝업 -->
      <ul class="studio-popup" v-show="isCompanionOn">
        <li class="studio-popup-title">
          <h3>반려사유입력</h3>
          <button class="studio-popup-close" @click="isCompanionOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <textarea name="" id=""></textarea>
        </li>
        <li class="studio-popup-button">
          <button class="btn1-4" @click="isCompanionOn = false">
            <span>취소</span>
          </button>
          <button class="btn2-4" @click="CompanionCompleteClick">
            <span>전송</span>
          </button>
        </li>
      </ul>
      <footer class="footer">
        <ul class="studio-file-list-type3">
          <li class="studio-title3">
            <div class="st-title3" @click="isFileListOnOff">
              <img
                v-if="isFileListOn"
                src="../../assets/images/studio/icon/icon-down.svg"
                alt=""
              />
              <img
                v-else
                src="../../assets/images/studio/icon/icon-up.svg"
                alt=""
              />
              <h2>
                File List <span>({{ itemLength() }})</span>
              </h2>
            </div>
            <div class="st-title3">
              <button class="file-filter">
                <b>작업상태</b>
                <select class="drop-file-filter" v-model="filters">
                  <option value="전체">전체</option>
                  <option value="미작업">미작업</option>
                  <option value="작업중">작업중</option>
                  <option value="완료">완료</option>
                  <option value="반려">반려</option>
                </select>
                <img
                  src="../../assets/images/studio/icon/icon-down.svg"
                  alt=""
                />
              </button>
            </div>
          </li>
          <div
            class="studio-contents file-list-contents-type3"
            v-if="isFileListOn"
          >
            <div class="file-pre">
              <div class="img-wrap3">
                <img
                  :src="require(`@/assets/images/studio/${selectImg}`)"
                  alt=""
                />
              </div>
              <div class="text-wrap">
                <p>{{ selectImgName }}</p>
                <b
                  :class="{
                    unworked: selectImgStatus === '미작업',
                    working: selectImgStatus === '작업중',
                    worked: selectImgStatus === '완료',
                    companion: selectImgStatus === '반려',
                  }"
                >
                  {{ selectImgStatus }}
                </b>
              </div>
            </div>
            <span class="file-bar"></span>
            <!-- select-file-list -->
            <template v-for="(item, index) in DataListItem" :key="index">
              <li
                class="file-list-contents-element3"
                v-if="filters === '전체'"
                @click="selectImgFunction(index)"
              >
                <div class="file-list-detail3">
                  <div class="left-wrap3">
                    <div class="img-wrap3">
                      <img
                        id="img-list"
                        :src="require(`@/assets/images/studio/${item.img}`)"
                        alt=""
                      />
                    </div>
                    <div class="text-wrap">
                      <p>{{ item.fileName }}</p>
                      <b
                        :class="{
                          unworked: item.status === '미작업',
                          working: item.status === '작업중',
                          worked: item.status === '완료',
                          companion: item.status === '반려',
                        }"
                      >
                        {{ item.status }}
                      </b>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="file-list-contents-element3"
                v-else-if="filters === item.status"
                @click="selectImgFunction(index)"
              >
                <div class="file-list-detail3">
                  <div class="left-wrap3">
                    <div class="img-wrap3">
                      <img
                        id="img-list"
                        :src="require(`@/assets/images/studio/${item.img}`)"
                        alt=""
                      />
                    </div>
                    <div class="text-wrap">
                      <p>{{ item.fileName }}</p>
                      <b
                        :class="{
                          unworked: item.status === '미작업',
                          working: item.status === '작업중',
                          worked: item.status === '완료',
                          companion: item.status === '반려',
                        }"
                      >
                        {{ item.status }}
                      </b>
                    </div>
                  </div>
                </div>
              </li>
            </template>
          </div>
        </ul>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isfullPageOn: false,
      isFinalPIC: true,

      //중앙
      selectImg: 'file-list1.png',
      selectImgName: 'person_0001.png',
      selectImgStatus: '미작업',
      selectAssignee: '홍길동',

      //우측
      isAssigneeOn: true,
      isFileListOn: false,
      isHistoryOn: false,
      isCompanionOn: false,
      isFileInfoOn: false,

      currentImageIndex: 0,
      filters: '전체',

      DataListItem: [
        {
          id: 1,
          fileName: 'person_0001.png',
          fileSize: '5.21KB',
          img: 'file-list1.png',
          status: '미작업',
        },
        {
          id: 2,
          fileName: 'person_0002.png',
          fileSize: '3.82KB',
          img: 'file-list2.png',
          status: '미작업',
        },
        {
          id: 3,
          fileName: 'person_0003.png',
          fileSize: '3.54KB',
          img: 'file-list3.png',
          status: '작업중',
        },
        {
          id: 4,
          fileName: 'person_0004.png',
          fileSize: '4.11KB',
          img: 'file-list4.png',
          status: '완료',
        },
        {
          id: 5,
          fileName: 'person_0005.jpg',
          fileSize: '5.79KB',
          img: 'file-list5.jpg',
          status: '미작업',
        },
        {
          id: 6,
          fileName: 'person_0006.jpg',
          fileSize: '3.82KB',
          img: 'file-list6.jpg',
          status: '미작업',
        },
        {
          id: 7,
          fileName: 'person_0007.jpg',
          fileSize: '5.44KB',
          img: 'file-list7.jpg',
          status: '반려',
        },
        {
          id: 8,
          fileName: 'person_0008.jpg',
          fileSize: '6.41KB',
          img: 'file-list8.jpg',
          status: '미작업',
        },
        {
          id: 9,
          fileName: 'person_0009.jpg',
          fileSize: '7.17KB',
          img: 'file-list9.jpg',
          status: '미작업',
        },
        {
          id: 10,
          fileName: 'person_0010.jpg',
          fileSize: '2.76KB',
          img: 'file-list10.jpg',
          status: '미작업',
        },
        {
          id: 11,
          fileName: 'person_0011.jpg',
          fileSize: '9.72KB',
          img: 'file-list11.jpg',
          status: '미작업',
        },
        {
          id: 12,
          fileName: 'person_0012.jpg',
          fileSize: '7.15KB',
          img: 'file-list12.jpg',
          status: '미작업',
        },
      ],
      DataListAssignee: [
        {
          id: 1,
          assigneeName: '김철수',
        },
        {
          id: 2,
          assigneeName: '박영희',
        },
        {
          id: 3,
          assigneeName: '최미영',
        },
        {
          id: 4,
          assigneeName: '신상호',
        },
        {
          id: 5,
          assigneeName: '이상희',
        },
      ],
    };
  },

  methods: {
    FullScreenOnOff() {
      const documentElement = document.documentElement;
      if (document.fullscreenElement === null) {
        //전체화면 아닌 상태
        documentElement.requestFullscreen();
        this.isfullPageOn = true;
      } else {
        //전체화면 상태
        document.exitFullscreen();
        this.isfullPageOn = false;
      }
    },
    ShortcutKeysOnOff() {
      //단축키 팝업 on/off
      this.isShortcutKeysOn = !this.isShortcutKeysOn;
    },
    isqna1ShowOnoff() {
      //Qna보기 on/off
      this.isqna1ShowOn = !this.isqna1ShowOn;
    },
    isqna2ShowOnoff() {
      //Qna 상세 on/off
      this.isqna2ShowOn = !this.isqna2ShowOn;
    },
    isQnAPopUpOnOff() {
      //Qna 질문하기 팝업 on/off
      this.isqna2ShowOn = !this.isqna2ShowOn;
    },
    isAssigneeOnOff() {
      this.isAssigneeOn = !this.isAssigneeOn;
    },
    isFileListOnOff() {
      this.isFileListOn = !this.isFileListOn;
    },
    isFileInfoOnOff() {
      this.isFileInfoOn = !this.isFileInfoOn;
    },
    isHistoryOnOff() {
      this.isHistoryOn = !this.isHistoryOn;
    },
    isCompanionOnOff() {
      this.isCompanionOn = !this.isCompanionOn;
    },
    CompanionCompleteClick() {
      this.isCompanionOn = !this.isCompanionOn;
      this.DataListItem[this.currentImageIndex].status = '반려';
    },
    selectImgFunction(index) {
      this.selectImg = this.DataListItem[index].img;
      this.selectImgName = this.DataListItem[index].fileName;
      this.selectImgStatus = this.DataListItem[index].status;
      this.currentImageIndex = index;
    },
    imageStatusComplete() {
      this.DataListItem[this.currentImageIndex].status = '완료';
    },
    selectAssigneeFunction(index) {
      this.selectAssignee = this.DataListAssignee[index].assigneeName;
    },
    itemLength() {
      let cnt = 0;
      for (let i = 0; i < this.DataListItem.length; i++) {
        if (this.filters === '전체') {
          cnt++;
        } else if (this.filters === this.DataListItem[i].status) {
          cnt++;
        }
      }
      return cnt;
    },
  },
  computed: {},
};
</script>

<style>
@import '../../css/reset.css';
@import '../../css/common.css';
</style>
