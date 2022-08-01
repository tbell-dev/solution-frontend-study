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
          <h2>이상행동(절도) 이미지 정제</h2>
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
            <p>전처리</p>
          </div>
          <div class="work-status">
            <b>작업상태</b>
            <!-- 작업 상태에 따라 동그라미와 작업상태 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
            <span class="bar"></span>
            <p>
              <span class="ball"></span
              >{{ ImageDataListItem[currentImageIndex].status }}
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
        <div class="tool-list-wrap">
          <ul class="tool-list2">
            <li
              class="select-file-list"
              v-show="isToolOriginOn"
              @click="isToolOriginOnOff"
            >
              <button>원본 이미지</button>
            </li>
            <li v-show="!isToolOriginOn" @click="isToolOriginOnOff">
              <button>원본 이미지</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolGrayScaleOn"
              @click="isToolGrayScaleOnOff"
            >
              <button>그레이스케일</button>
            </li>
            <li v-show="!isToolGrayScaleOn" @click="isToolGrayScaleOnOff">
              <button>그레이스케일</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolBinaryOn"
              @click="isToolBinaryOnOff"
            >
              <button>이진화</button>
            </li>
            <li v-show="!isToolBinaryOn" @click="isToolBinaryOnOff">
              <button>이진화</button>
            </li>

            <li
              class="select-file-list"
              v-show="isToolZoomOn"
              @click="isToolZoomOnOff"
            >
              <button>확대/축소</button>
            </li>
            <li v-show="!isToolZoomOn" @click="isToolZoomOnOff">
              <button>확대/축소</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolRotateOn"
              @click="isToolRotateOnOff"
            >
              <button>회전/대칭</button>
            </li>
            <li v-show="!isToolRotateOn" @click="isToolRotateOnOff">
              <button>회전/대칭</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolConversionOn"
              @click="isToolConversionOnOff"
            >
              <button>변환</button>
            </li>
            <li v-show="!isToolConversionOn" @click="isToolConversionOnOff">
              <button>변환</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolBrightnessOn"
              @click="isToolBrightnessOnOff"
            >
              <button>밝기/대비</button>
            </li>
            <li v-show="!isToolBrightnessOn" @click="isToolBrightnessOnOff">
              <button>밝기/대비</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolCropOn"
              @click="isToolCropOnOff"
            >
              <button>자르기</button>
            </li>
            <li v-show="!isToolCropOn" @click="isToolCropOnOff">
              <button>자르기</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolNoiseOn"
              @click="isToolNoiseOnOff"
            >
              <button>노이즈 제거</button>
            </li>
            <li v-show="!isToolNoiseOn" @click="isToolNoiseOnOff">
              <button>노이즈 제거</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolBackgroundOn"
              @click="isToolBackgroundOnOff"
            >
              <button>배경 제거</button>
            </li>
            <li v-show="!isToolBackgroundOn" @click="isToolBackgroundOnOff">
              <button>배경 제거</button>
            </li>
            <li
              class="select-file-list"
              v-show="isToolDeidentifiedOn"
              @click="isToolDeidentifiedOnOff"
            >
              <button>비식별화</button>
            </li>
            <li v-show="!isToolDeidentifiedOn" @click="isToolDeidentifiedOnOff">
              <button>비식별화</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="studio-center">
        <ul class="option-bar">
          <li>
            <button class="return">
              <img
                src="../../assets/images/studio/icon/icon-refresh.svg"
                alt=""
              />
            </button>
          </li>
          <li>
            <button class="undo">
              <img src="../../assets/images/studio/icon/icon-undo.svg" alt="" />
            </button>
          </li>
          <li>
            <button class="redo">
              <img src="../../assets/images/studio/icon/icon-redo.svg" alt="" />
            </button>
          </li>
          <li class="zoom">
            <img src="../../assets/images/studio/icon/icon-minus.svg" alt="" />
            <input type="range" min="-100" max="100" value="0" />
            <img src="../../assets/images/studio/icon/icon-plus.svg" alt="" />
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
                File List <span>({{ ImageDataListItem.length }})</span>
              </h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <div
              class="studio-contents file-list-contents-type2"
              v-if="isFileListOn"
            >
              <li
                class="file-list-contents-element"
                v-for="(item, index) in ImageDataListItem"
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
      <!-- 그레이스케일 팝업 -->
      <ul class="studio-popup2" v-show="isToolGrayScaleOn">
        <li class="studio-popup-title">
          <h3>그레이스케일</h3>
          <button class="studio-popup-close" @click="isToolGrayScaleOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <input type="number" min="0" max="255" value="0" step="5" />
          <input type="range" min="0" max="255" value="0" step="5" />
          <div class="wrap">
            <img src="../../assets/images/studio/icon/icon-minus.svg" alt="" />
            <img src="../../assets/images/studio/icon/icon-plus.svg" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolGrayScaleOn = false">
            취소
          </button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 이진화 팝업 -->
      <ul class="studio-popup2" v-show="isToolBinaryOn">
        <li class="studio-popup-title">
          <h3>이진화</h3>
          <button class="studio-popup-close" @click="isToolBinaryOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="img-wrap">
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolBinaryOn = false">취소</button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 확대축소 팝업 -->
      <ul class="studio-popup2" v-show="isToolZoomOn">
        <li class="studio-popup-title">
          <h3>확대/축소</h3>
          <button class="studio-popup-close" @click="isToolZoomOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <input type="number" min="-100" max="100" value="0" step="5" />
          <input type="range" min="-100" max="100" value="0" step="5" />
          <div class="wrap">
            <img src="../../assets/images/studio/icon/icon-zoomin.svg" alt="" />
            <img
              src="../../assets/images/studio/icon/icon-zoomout.svg"
              alt=""
            />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolZoomOn = false">취소</button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 회전/대칭 팝업 -->
      <ul class="studio-popup2" v-show="isToolRotateOn">
        <li class="studio-popup-title">
          <h3>회전/대칭</h3>
          <button class="studio-popup-close" @click="isToolRotateOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="wrap3"><h3>회전</h3></div>
          <div class="wrap2">
            <button>
              <img
                src="../../assets/images/studio/icon/icon-rotate1.svg"
                alt=""
              />
            </button>
            <button>
              <img
                src="../../assets/images/studio/icon/icon-rotate2.svg"
                alt=""
              />
            </button>
            <button>
              <img
                src="../../assets/images/studio/icon/icon-rotate3.svg"
                alt=""
              />
            </button>
            <button>
              <img
                src="../../assets/images/studio/icon/icon-rotate4.svg"
                alt=""
              />
            </button>
          </div>
          <input type="number" min="0" max="360" value="0" step="10" />
          <input type="range" min="0" max="360" value="0" step="10" />
          <div class="wrap">
            <img src="../../assets/images/studio/icon/icon-minus.svg" alt="" />
            <img src="../../assets/images/studio/icon/icon-plus.svg" alt="" />
          </div>
          <div class="wrap3"><h3>크기 조정</h3></div>
          <div class="wrap4">
            <b>너비</b>
            <input type="number" />
            <b>px</b>
          </div>
          <div class="wrap4">
            <b>높이</b>
            <input type="number" />
            <b>px</b>
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolRotateOn = false">취소</button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 변환 팝업 -->
      <ul class="studio-popup2" v-show="isToolConversionOn">
        <li class="studio-popup-title">
          <h3>변환</h3>
          <button
            class="studio-popup-close"
            @click="isToolConversionOn = false"
          >
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="wrap4">
            <button class="select-button">트랜스레이션</button>
            <button>스케일링</button>
          </div>
          <div class="img-wrap">
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolConversionOn = false">
            취소
          </button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 밝기/대비 팝업 -->
      <ul class="studio-popup2" v-show="isToolBrightnessOn">
        <li class="studio-popup-title">
          <h3>밝기/대비</h3>
          <button
            class="studio-popup-close"
            @click="isToolBrightnessOn = false"
          >
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="wrap3"><h3>밝기</h3></div>
          <input type="number" min="0" max="100" value="0" step="5" />
          <input type="range" min="0" max="100" value="0" step="5" />
          <div class="wrap5">
            <img
              src="../../assets/images/studio/icon/icon-brightness.svg"
              alt=""
            />
          </div>
          <div class="wrap3"><h3>대비</h3></div>
          <input type="number" min="0" max="100" value="0" step="5" />
          <input type="range" min="0" max="100" value="0" step="5" />
          <div class="wrap5">
            <img
              src="../../assets/images/studio/icon/icon-contrast.svg"
              alt=""
            />
          </div>
        </li>

        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolBrightnessOn = false">
            취소
          </button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 자르기 팝업 -->
      <ul class="studio-popup2" v-show="isToolCropOn">
        <li class="studio-popup-title">
          <h3>자르기</h3>
          <button class="studio-popup-close" @click="isToolCropOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="img-wrap">
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolCropOn = false">취소</button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 노이즈 제거 팝업 -->
      <ul class="studio-popup2 reject-noise" v-show="isToolNoiseOn">
        <li class="studio-popup-title">
          <h3>노이즈 제거</h3>
          <button class="studio-popup-close" @click="isToolNoiseOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="img-wrap">
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </div>
          <input type="number" min="0" max="100" value="0" step="5" />
          <input type="range" min="0" max="100" value="0" step="5" />
          <div class="wrap">
            <img src="../../assets/images/studio/icon/icon-minus.svg" alt="" />
            <img src="../../assets/images/studio/icon/icon-plus.svg" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolNoiseOn = false">취소</button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 배경 제거 팝업 -->
      <ul class="studio-popup2" v-show="isToolBackgroundOn">
        <li class="studio-popup-title">
          <h3>배경 제거</h3>
          <button
            class="studio-popup-close"
            @click="isToolBackgroundOn = false"
          >
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="img-wrap">
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolBackgroundOn = false">
            취소
          </button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
      <!-- 비식별화 팝업 -->
      <ul class="studio-popup2" v-show="isToolDeidentifiedOn">
        <li class="studio-popup-title">
          <h3>비식별화</h3>
          <button
            class="studio-popup-close"
            @click="isToolDeidentifiedOn = false"
          >
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <div class="img-wrap">
            <img src="../../assets/images/studio/sample-image.png" alt="" />
          </div>
        </li>
        <li class="studio-popup-buttons">
          <button class="btn1-4" @click="isToolDeidentifiedOn = false">
            취소
          </button>
          <button class="btn2-4">적용</button>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
// Header

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

      isToolOriginOn: true,
      isToolGrayScaleOn: false,
      isToolBinaryOn: false,
      isToolZoomOn: false,
      isToolRotateOn: false,
      isToolConversionOn: false,
      isToolBrightnessOn: false,
      isToolCropOn: false,
      isToolNoiseOn: false,
      isToolBackgroundOn: false,
      isToolDeidentifiedOn: false,

      currentImageIndex: 0,

      ImageDataListItem: [
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
          status: '미작업',
        },
        {
          id: 4,
          fileName: 'person_0004.png',
          fileSize: '4.11KB',
          img: 'file-list4.png',
          status: '미작업',
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
          status: '미작업',
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
    isToolOriginOnOff() {
      this.isToolOriginOn = !this.isToolOriginOn;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolGrayScaleOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = !this.isToolGrayScaleOn;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolBinaryOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = !this.isToolBinaryOn;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolZoomOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = !this.isToolZoomOn;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolRotateOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = !this.isToolRotateOn;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolConversionOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = !this.isToolConversionOn;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolBrightnessOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = !this.isToolBrightnessOn;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolCropOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = !this.isToolCropOn;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolNoiseOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = !this.isToolNoiseOn;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = false;
    },
    isToolBackgroundOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = !this.isToolBackgroundOn;
      this.isToolDeidentifiedOn = false;
    },
    isToolDeidentifiedOnOff() {
      this.isToolOriginOn = false;
      this.isToolGrayScaleOn = false;
      this.isToolBinaryOn = false;
      this.isToolZoomOn = false;
      this.isToolRotateOn = false;
      this.isToolConversionOn = false;
      this.isToolBrightnessOn = false;
      this.isToolCropOn = false;
      this.isToolNoiseOn = false;
      this.isToolBackgroundOn = false;
      this.isToolDeidentifiedOn = !this.isToolDeidentifiedOn;
    },
    selectImgFunction(index) {
      this.selectImg = this.ImageDataListItem[index].img;
      this.currentImageIndex = index;
    },
    imageStatusComplete() {
      this.ImageDataListItem[this.currentImageIndex].status = '완료';
    },
  },
};
</script>

<style>
@import '../../css/reset.css';
@import '../../css/common.css';
</style>
