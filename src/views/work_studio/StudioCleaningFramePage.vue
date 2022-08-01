<template>
  <div id="studio-wrap">
    <header id="header">
      <ul class="header-top">
        <li class="ht-left">
          <div>
            <router-link to="/sslo/main">
              <img
                src="../../assets/images/studio/header/logo-studio.svg"
                alt=""
              />
            </router-link>
          </div>
          <div>
            <router-link to="/allprojectlist"
              ><img
                src="../../assets/images/studio/header/icon-home.svg"
                alt=""
            /></router-link>
          </div>
        </li>
        <li class="ht-center">
          <h2>프로젝트 명</h2>
          <!-- 작업 상태에 따라 파일 이름 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
        </li>
        <li class="ht-right">
          <button>
            <img
              src="../../assets/images/studio/header/icon-save.svg"
              alt="Save"
            />
          </button>
          <button>
            <img
              src="../../assets/images/studio/header/icon-fullscreen.svg"
              alt="Full Screen"
            />
          </button>
          <button @click="ShortcutKeysOnOff()">
            <img
              src="../../assets/images/studio/header/icon-key.svg"
              alt="Shortcut Keys"
            />
          </button>
          <button>
            <img
              src="../../assets/images/studio/header/icon-logout.svg"
              alt="Log Out"
            />
          </button>
        </li>
      </ul>
      <ul class="header-bottom">
        <li class="hb-left">
          <div class="work-stage">
            <b>작업단계</b>
            <span class="bar"></span>
            <p>정제</p>
          </div>
          <div class="work-status">
            <b>작업상태</b>
            <!-- 작업 상태에 따라 동그라미와 작업상태 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
            <span class="bar"></span>
            <p>
              <span class="ball"></span
              >{{ VideoDataListItem[currentImageIndex].status }}
            </p>
          </div>
          <div class="work-assignee">
            <b>담당자</b>
            <span class="bar"></span>
            <a href="#"
              >홍길동
              <img src="../../assets/images/studio/icon/icon-link.svg" alt=""
            /></a>
          </div>
        </li>
        <li class="hb-right">
          <button @click="isqna1ShowOnoff()">
            <span>Q&A 보기</span
            ><img src="../../assets/images/studio/header/icon-qna.svg" alt="" />
          </button>
        </li>
      </ul>
    </header>
    <main id="main">
      <div class="studio-left">
        <ul class="tool-list3">
          <li v-for="(item, index) in ImageDataListItem" :key="index">
            <img :src="require(`@/assets/images/studio/${item.img}`)" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
          <li>
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </li>
        </ul>
      </div>
      <div class="studio-center">
        <ul class="option-bar2">
          <li>
            <h3>FPS</h3>
            <input type="number" min="1" max="300" value="1" />
          </li>
          <li>
            <button class="btn2-0">추출</button>
          </li>
        </ul>
        <div class="studio-pic">
          <img :src="require(`@/assets/images/studio/${selectImg}`)" />
        </div>
      </div>
      <!-- 기본 속성 -->
      <div class="studio-right studio-right1">
        <div class="studio-right-top2">
          <ul class="studio-file-list-type2">
            <li class="studio-title" @click="isFileListOnOff">
              <h2>
                File List <span>({{ VideoDataListItem.length }})</span>
              </h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <div
              class="studio-contents file-list-contents-type2"
              v-if="isFileListOn"
            >
              <li
                class="file-list-contents-element"
                v-for="(item, index) in VideoDataListItem"
                :key="index"
                @click="selectImgFunction(index)"
              >
                <div class="file-list-detail">
                  <div class="left-wrap">
                    <div class="img-wrap">
                      <img
                        :src="require(`@/assets/images/studio/${item.img}`)"
                        alt=""
                      />
                    </div>
                    <div class="text-wrap">
                      <p>{{ item.fileName }}</p>
                      <b>{{ item.fileSize }}</b>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div class="studio-right-bottom">
          <button class="finish1" @click="imageStatusComplete()">완료</button>
        </div>
      </div>
      <!-- Q&A보기 창 -->
      <div
        class="studio-right studio-right-qna studio-right-qna1"
        v-show="isqna1ShowOn"
      >
        <ul>
          <li class="studio-title">
            <h2>질문목록</h2>
            <div class="icon-wrap">
              <button @click="isQnAPopUpOn = true">
                질문 작성
                <img
                  src="../../assets/images/studio/icon/icon-edit.svg"
                  alt=""
                />
              </button>
              <img
                @click="isqna1ShowOn = false"
                src="../../assets/images/studio/icon/icon-close.svg"
                alt=""
              />
            </div>
          </li>
          <li class="studio-subtitle">
            <div>
              <b>미해결 질문 <span>(1)</span></b>
            </div>
            <div>
              <b>해결된 질문 <span>(0)</span></b>
            </div>
          </li>
          <li class="studio-contents" @click="isqna2ShowOnoff">
            <div class="top-wrap">
              <div class="img-wrap">
                <img src="../../assets/images/studio/file-list4.png" alt="" />
              </div>
              <div class="text-wrap">
                <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                <b>손가락도 포함하여 작업하나요?</b>
              </div>
            </div>
            <div class="bottom-wrap">Reply 0</div>
          </li>
          <li class="studio-contents">
            <div class="top-wrap">
              <div class="img-wrap">
                <button>
                  <img src="../../assets/images/studio/file-list4.png" alt="" />
                </button>
              </div>
              <div class="text-wrap">
                <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                <b>손가락도 포함하여 작업하나요?</b>
              </div>
            </div>
            <div class="bottom-wrap">Reply 0</div>
          </li>
        </ul>
      </div>
      <div
        class="studio-right studio-right-qna studio-right-qna2"
        v-show="isqna2ShowOn"
      >
        <div class="studio-right-top">
          <ul>
            <li class="studio-title">
              <div class="title-wrap">
                <img
                  @click="isqna2ShowOn = false"
                  src="../../assets/images/studio/icon/icon-back.svg"
                  alt=""
                />
                <h2>질문보기</h2>
              </div>
              <div class="icon-wrap">
                <button>질문 해결</button>
              </div>
            </li>
            <li class="studio-subtitle">
              <div>
                <b>미해결 질문 <span>(1)</span></b>
              </div>
              <div>
                <b>해결된 질문 <span>(0)</span></b>
              </div>
            </li>
            <li class="studio-contents">
              <div class="qna-img-wrap">
                <img src="../../assets/images/studio/sample-image.png" alt="" />
              </div>
            </li>
            <li class="studio-contents">
              <div class="top-wrap">
                <ul class="text-wrap">
                  <li class="top">
                    <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                    <div>
                      <button>수정</button>
                      <span class="bar-left"></span>
                      <button>삭제</button>
                    </div>
                  </li>
                  <li>
                    <b>질문 내용입니다.</b>
                  </li>
                </ul>
              </div>
              <div class="bottom-wrap">Reply 0</div>
            </li>
            <li class="studio-contents">
              <div class="top-wrap">
                <ul class="text-wrap">
                  <li class="top">
                    <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                    <div>
                      <button>수정</button>
                      <span class="bar-left"></span>
                      <button>삭제</button>
                    </div>
                  </li>
                  <li>
                    <b>질문 내용입니다.</b>
                  </li>
                </ul>
              </div>
              <div class="bottom-wrap">Reply 0</div>
            </li>
            <li class="studio-contents">
              <div class="top-wrap">
                <ul class="text-wrap">
                  <li class="top">
                    <p>홍길동 <span class="left-bar"></span> 2022.01.23</p>
                    <div>
                      <button>수정</button>
                      <span class="bar-left"></span>
                      <button>삭제</button>
                    </div>
                  </li>
                  <li>
                    <b>답변 내용입니다.</b>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="studio-right-bottom">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="질문을 입력해주세요."
          ></textarea>
          <button class="btn2-4">등록</button>
        </div>
      </div>
      <!-- 질문하기 팝업 -->
      <ul class="studio-popup" v-show="isQnAPopUpOn">
        <li class="studio-popup-title">
          <h3>질문하기</h3>
          <button class="studio-popup-close" @click="isQnAPopUpOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <textarea name="" id=""></textarea>
        </li>
        <li class="studio-popup-button">
          <button class="btn1-4"><span>취소</span></button>
          <button class="btn2-4"><span>작성</span></button>
        </li>
      </ul>
      <ul class="studio-popup" v-show="isShortcutKeysOn">
        <li class="studio-popup-title">
          <h3>공통 단축키</h3>
          <button class="studio-popup-close" @click="isShortcutKeysOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <table class="shortcut-table">
            <tr>
              <th>Ctrl + S</th>
              <td>저장</td>
            </tr>
            <tr>
              <th>Ctrl + Shift + S</th>
              <td>완료 / 완료취소</td>
            </tr>
            <tr>
              <th>Q</th>
              <td>이전 데이터셋 파일</td>
            </tr>
            <tr>
              <th>E</th>
              <td>다음 데이터셋 파일</td>
            </tr>
            <tr>
              <th>Delete</th>
              <td>선택된 객체 라벨링 삭제</td>
            </tr>
            <tr>
              <th>Ctrl + Alt + R</th>
              <td>라벨링 전체 초기화</td>
            </tr>
            <tr>
              <th>Ctrl + C</th>
              <td>복사</td>
            </tr>
            <tr>
              <th>Ctrl + V</th>
              <td>붙여넣기</td>
            </tr>
            <tr>
              <th>Ctrl + X</th>
              <td>잘라내기</td>
            </tr>
            <tr>
              <th>Ctrl + Z</th>
              <td>이전 행동으로 돌리기</td>
            </tr>
            <tr>
              <th>Ctrl + Y</th>
              <td>이전 행동으로 돌린 걸 다시 복원하기</td>
            </tr>
            <tr>
              <th>Ctrl + (+)</th>
              <td>확대</td>
            </tr>
            <tr>
              <th>Ctrl + (-)</th>
              <td>축소</td>
            </tr>
            <tr>
              <th>Ctrl + I</th>
              <td>라벨 숨기기 / 표시하기</td>
            </tr>
          </table>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isShortcutKeysOn: false,
      isqna1ShowOn: false,
      isqna2ShowOn: false,
      isQnAPopUpOn: false,
      isFileListOn: false,

      //중앙
      selectImg: 'file-list1.png',
      currentImageIndex: 0,

      ImageDataListItem: [
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 1,
          img: 'file-list1.png',
        },
        {
          id: 2,
          img: 'file-list2.png',
        },
        {
          id: 2,
          img: 'file-list2.png',
        },
        {
          id: 2,
          img: 'file-list2.png',
        },
        {
          id: 2,
          img: 'file-list2.png',
        },
        {
          id: 2,
          img: 'file-list2.png',
        },
        {
          id: 3,
          img: 'file-list3.png',
        },
        {
          id: 3,
          img: 'file-list3.png',
        },
        {
          id: 3,
          img: 'file-list3.png',
        },
        {
          id: 3,
          img: 'file-list3.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 4,
          img: 'file-list4.png',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 5,
          img: 'file-list5.jpg',
        },
        {
          id: 6,
          img: 'file-list6.jpg',
        },
        {
          id: 6,
          img: 'file-list6.jpg',
        },
        {
          id: 6,
          img: 'file-list6.jpg',
        },
        {
          id: 6,
          img: 'file-list6.jpg',
        },
        {
          id: 6,
          img: 'file-list6.jpg',
        },
        {
          id: 7,
          img: 'file-list7.jpg',
        },
        {
          id: 7,
          img: 'file-list7.jpg',
        },
        {
          id: 7,
          img: 'file-list7.jpg',
        },
        {
          id: 7,
          img: 'file-list7.jpg',
        },
        {
          id: 7,
          img: 'file-list7.jpg',
        },
        {
          id: 8,
          img: 'file-list8.jpg',
        },
        {
          id: 8,
          img: 'file-list8.jpg',
        },
        {
          id: 8,
          img: 'file-list8.jpg',
        },
        {
          id: 8,
          img: 'file-list8.jpg',
        },
        {
          id: 8,
          img: 'file-list8.jpg',
        },
        {
          id: 8,
          img: 'file-list8.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 9,
          img: 'file-list9.jpg',
        },
        {
          id: 10,
          img: 'file-list10.jpg',
        },
        {
          id: 10,
          img: 'file-list10.jpg',
        },
        {
          id: 10,
          img: 'file-list10.jpg',
        },
        {
          id: 10,
          img: 'file-list10.jpg',
        },
        {
          id: 10,
          img: 'file-list10.jpg',
        },
        {
          id: 11,
          img: 'file-list11.jpg',
        },
        {
          id: 11,
          img: 'file-list11.jpg',
        },
        {
          id: 11,
          img: 'file-list11.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
        {
          id: 12,
          img: 'file-list12.jpg',
        },
      ],
      VideoDataListItem: [
        {
          id: 1,
          fileName: 'person_0001.mp4',
          fileSize: '5.21MB',
          img: 'file-list1.png',
          status: '미작업',
        },
        {
          id: 2,
          fileName: 'person_0002.mp4',
          fileSize: '3.82MB',
          img: 'file-list2.png',
          status: '미작업',
        },
        {
          id: 3,
          fileName: 'person_0003.mp4',
          fileSize: '3.54MB',
          img: 'file-list3.png',
          status: '미작업',
        },
        {
          id: 4,
          fileName: 'person_0004.mp4',
          fileSize: '4.11MB',
          img: 'file-list4.png',
          status: '미작업',
        },
        {
          id: 5,
          fileName: 'person_0005.mp4',
          fileSize: '5.79MB',
          img: 'file-list5.jpg',
          status: '미작업',
        },
        {
          id: 6,
          fileName: 'person_0006.mp4',
          fileSize: '3.82MB',
          img: 'file-list6.jpg',
          status: '미작업',
        },
        {
          id: 7,
          fileName: 'person_0007.mp4',
          fileSize: '5.44MB',
          img: 'file-list7.jpg',
          status: '미작업',
        },
        {
          id: 8,
          fileName: 'person_0008.mp4',
          fileSize: '6.41MB',
          img: 'file-list8.jpg',
          status: '미작업',
        },
        {
          id: 9,
          fileName: 'person_0009.mp4',
          fileSize: '7.17MB',
          img: 'file-list9.jpg',
          status: '미작업',
        },
        {
          id: 10,
          fileName: 'person_0010.mp4',
          fileSize: '2.76MB',
          img: 'file-list10.jpg',
          status: '미작업',
        },
        {
          id: 11,
          fileName: 'person_0011.mp4',
          fileSize: '9.72MB',
          img: 'file-list11.jpg',
          status: '미작업',
        },
        {
          id: 12,
          fileName: 'person_0012.mp4',
          fileSize: '7.15MB',
          img: 'file-list12.jpg',
          status: '미작업',
        },
      ],
    };
  },
  methods: {
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
    isFileListOnOff() {
      this.isFileListOn = !this.isFileListOn;
    },
    selectImgFunction(index) {
      this.selectImg = this.VideoDataListItem[index].img;
      this.currentImageIndex = index;
    },
    imageStatusComplete() {
      this.VideoDataListItem[this.currentImageIndex].status = '완료';
    },
  },
  components: {},
};
</script>

<style scoped>
@import '../../css/reset.css';
@import '../../css/common.css';
</style>
