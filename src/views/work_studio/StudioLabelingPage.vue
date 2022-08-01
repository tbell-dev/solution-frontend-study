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
          <button
            class="sutdio-prev"
            @click="selectImgFunction(this.currentImageIndex - 1)"
          >
            <img src="../../assets/images/studio/header/icon-prev.svg" alt="" />
          </button>
          <h2
            :class="{
              unworked: this.selectImgStatus === '미작업',
              working: this.selectImgStatus === '작업중',
              worked: this.selectImgStatus === '완료',
              companion: this.selectImgStatus === '반려',
            }"
          >
            {{ selectImgName }}
          </h2>
          <!-- 작업 상태에 따라 파일 이름 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
          <button
            class="sutdio-next"
            @click="selectImgFunction(this.currentImageIndex + 1)"
          >
            <img src="../../assets/images/studio/header/icon-next.svg" alt="" />
          </button>
        </li>
        <li class="ht-right">
          <button>
            <img
              src="../../assets/images/studio/header/icon-save.svg"
              alt="Save"
            />
          </button>
          <button @click="FullScreenOnOff()">
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
            <p>라벨링</p>
          </div>
          <div class="work-status">
            <b>작업상태</b>
            <!-- 작업 상태에 따라 동그라미와 작업상태 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
            <span class="bar"></span>
            <p>
              <span class="ball"></span
              >{{ DataListItem[currentImageIndex].status }}
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
        <div class="tool-top">
          <img src="../../assets/images/studio/icon/icon-fold2.svg" alt="" />
        </div>
        <div class="tool-list-wrap">
          <ul class="tool-list">
            <li>
              <button>
                <img
                  src="../../assets/images/studio/icon/icon-move01.svg"
                  alt="이동"
                  title="이동"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  src="../../assets/images/studio/icon/icon-tag01.svg"
                  alt="태그"
                  title="태그"
                />
              </button>
            </li>
            <li>
              <button>
                <img
                  src="../../assets/images/studio/icon/icon-reset01.svg"
                  alt="리셋"
                  title="리셋"
                />
              </button>
            </li>
            <!-- <li><button class="select-tool"><img src="../../assets/images/studio/icon/icon-boxing02.svg" alt="박싱"title="박싱"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-polyline01.svg" alt="폴리라인"title="폴리라인"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-polygon01.svg" alt="폴리곤" title="폴리곤"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-point01.svg" alt="포인트"title="포인트"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-brush01.svg" alt="브러쉬"title="브러쉬"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-3dcube01.svg" alt="3D 큐브"title="3D 큐브"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-segment01.svg" alt="세그먼트"title="세그먼트"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-magicwand01.svg" alt="매직완드"title="매직완드"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-autopoint01.svg" alt="오토포인트"title="오토포인트"></button></li>
                        <li><button><img src="../../assets/images/studio/icon/icon-keypoint01.svg" alt="키포인트"title="키포인트"></button></li> -->
          </ul>
          <ul class="tool-list">
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolBoxingOn,
                }"
              >
                <img
                  v-show="!isToolBoxingOn"
                  @click="isToolBoxingOnOff"
                  src="../../assets/images/studio/icon/icon-boxing01.svg"
                  alt="박싱"
                  title="박싱"
                />
                <img
                  v-show="isToolBoxingOn"
                  src="../../assets/images/studio/icon/icon-boxing02.svg"
                  alt="박싱"
                  title="박싱"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolPolylineOn,
                }"
              >
                <img
                  v-show="!isToolPolylineOn"
                  @click="isToolPolylineOnOff"
                  src="../../assets/images/studio/icon/icon-polyline01.svg"
                  alt="폴리라인"
                  title="폴리라인"
                />
                <img
                  v-show="isToolPolylineOn"
                  src="../../assets/images/studio/icon/icon-polyline02.svg"
                  alt="폴리라인"
                  title="폴리라인"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolPolygonOn,
                }"
              >
                <img
                  v-show="!isToolPolygonOn"
                  @click="isToolPolygonOnOff"
                  src="../../assets/images/studio/icon/icon-polygon01.svg"
                  alt="폴리곤"
                  title="폴리곤"
                />
                <img
                  v-show="isToolPolygonOn"
                  src="../../assets/images/studio/icon/icon-polygon02.svg"
                  alt="폴리곤"
                  title="폴리곤"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolPointOn,
                }"
              >
                <img
                  v-show="!isToolPointOn"
                  @click="isToolPointOnOff"
                  src="../../assets/images/studio/icon/icon-point01.svg"
                  alt="포인트"
                  title="포인트"
                /><img
                  v-show="isToolPointOn"
                  src="../../assets/images/studio/icon/icon-point02.svg"
                  alt="포인트"
                  title="포인트"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolDrawpenOn,
                }"
              >
                <img
                  v-show="!isToolDrawpenOn"
                  @click="isToolDrawpenOnOff"
                  src="../../assets/images/studio/icon/icon-brush01.svg"
                  alt="브러쉬"
                  title="브러쉬"
                />
                <img
                  v-show="isToolDrawpenOn"
                  src="../../assets/images/studio/icon/icon-brush02.svg"
                  alt="브러쉬"
                  title="브러쉬"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isTool3DCubeOn,
                }"
              >
                <img
                  v-show="!isTool3DCubeOn"
                  @click="isTool3DCubeOnOff"
                  src="../../assets/images/studio/icon/icon-3dcube01.svg"
                  alt="3D 큐브"
                  title="3D 큐브"
                />
                <img
                  v-show="isTool3DCubeOn"
                  src="../../assets/images/studio/icon/icon-3dcube02.svg"
                  alt="3D 큐브"
                  title="3D 큐브"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolSegmentOn,
                }"
              >
                <img
                  v-show="!isToolSegmentOn"
                  @click="isToolSegmentOnOff"
                  src="../../assets/images/studio/icon/icon-segment01.svg"
                  alt="세그먼트"
                  title="세그먼트"
                />
                <img
                  v-show="isToolSegmentOn"
                  src="../../assets/images/studio/icon/icon-segment02.svg"
                  alt="세그먼트"
                  title="세그먼트"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolMagicwandOn,
                }"
              >
                <img
                  v-show="!isToolMagicwandOn"
                  @click="isToolMagicwandOnOff"
                  src="../../assets/images/studio/icon/icon-magicwand01.svg"
                  alt="매직완드"
                  title="매직완드"
                /><img
                  v-show="isToolMagicwandOn"
                  src="../../assets/images/studio/icon/icon-magicwand02.svg"
                  alt="매직완드"
                  title="매직완드"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolAutopointOn,
                }"
              >
                <img
                  v-show="!isToolAutopointOn"
                  @click="isToolAutopointOnOff"
                  src="../../assets/images/studio/icon/icon-autopoint01.svg"
                  alt="오토포인트"
                  title="오토포인트"
                /><img
                  v-show="isToolAutopointOn"
                  src="../../assets/images/studio/icon/icon-autopoint02.svg"
                  alt="오토포인트"
                  title="오토포인트"
                />
              </button>
            </li>
            <li>
              <button
                v-bind:class="{
                  'select-tool': this.isToolKeypointOn,
                }"
              >
                <img
                  v-show="!isToolKeypointOn"
                  @click="isToolKeypointOnOff"
                  src="../../assets/images/studio/icon/icon-keypoint01.svg"
                  alt="키포인트"
                  title="키포인트"
                />
                <img
                  v-show="isToolKeypointOn"
                  src="../../assets/images/studio/icon/icon-keypoint02.svg"
                  alt="키포인트"
                  title="키포인트"
                />
              </button>
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
          <li class="brightness">
            <img
              src="../../assets/images/studio/icon/icon-brightness.svg"
              alt=""
            />
            <input type="range" min="0" max="100" value="0" />
            <input type="number" />
          </li>
          <li class="contrast">
            <img
              src="../../assets/images/studio/icon/icon-contrast.svg"
              alt=""
            />
            <input type="range" min="0" max="100" value="0" />
            <input type="number" />
          </li>
          <li>
            <button class="view-class">클래스</button>
          </li>
        </ul>
        <div class="class-setting" v-show="isClassSettingOn">
          <button class="close" @click="isClassSettingOn = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
          <ul class="class-setting-contents">
            <li>
              <h3>클래스 설정</h3>
            </li>
            <li>
              <button>인간</button>
            </li>
          </ul>
          <ul class="class-setting-contents">
            <li>
              <h3>속성명</h3>
            </li>
            <li>
              <button>얼굴</button>
              <button>팔</button>
              <button>다리</button>
            </li>
          </ul>
        </div>
        <div class="studio-pic">
          <img :src="require(`@/assets/images/studio/${selectImg}`)" />
          <!-- :src="require(`${selectImg}`)"  -->

          <!-- ${this.selectImg} -->
        </div>
      </div>
      <!-- 기본 속성 -->
      <div class="studio-right studio-right1">
        <div class="studio-right-top">
          <ul class="studio-assignee">
            <li class="studio-title" @click="isAssigneeOnOff">
              <h2>Assignee</h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <li class="studio-contents" v-if="isAssigneeOn">
              <p>라벨링 담당자</p>
              <span class="bar-left"></span>
              <p>강은수</p>
            </li>
          </ul>
          <ul class="studio-guide">
            <li class="studio-title" @click="isGuideOnOff">
              <h2>Guide</h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <li class="studio-contents" v-if="isGuideOn">
              <p>가이드가 없습니다.</p>
              <span class="bar-bottom"></span>
              <a href="#" class="guide-link">가이드 링크입니다.</a>
              <span class="bar-bottom"></span>
              <p class="guide-file">가이드 파일입니다.</p>
            </li>
          </ul>
          <ul class="studio-file-list">
            <li class="studio-title" @click="isFileListOnOff">
              <h2>File List <span>(5)</span></h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <div class="studio-contents file-list-contents" v-if="isFileListOn">
              <li
                class="file-list-contents-element"
                v-for="(item, index) in DataListItem"
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
                    <p>{{ item.fileName }}</p>
                  </div>
                  <div class="right-wrap">
                    <img
                      src="../../assets/images/studio/icon/icon-bubble.svg"
                      alt=""
                    />
                    <p>{{ item.question }}</p>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <ul class="studio-instance">
            <li class="studio-title" @click="isInstanceOnOff">
              <h2>Instance</h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <li class="studio-contents" v-if="isInstanceOn">
              <div class="top-wrap">
                <div class="left">
                  <img
                    src="../../assets/images/studio/sample-image.png"
                    alt=""
                  />
                </div>
                <div class="right">
                  <div class="right-title">
                    <table class="instance-table1">
                      <tr>
                        <th>클래스</th>
                        <td><span class="instance-ball"></span>인간</td>
                      </tr>
                      <tr>
                        <th>속성</th>
                        <td>다리</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="bottom-wrap">
                <div class="top">
                  <table class="instance-table2">
                    <tr>
                      <th><b>넓이</b></th>
                      <td>
                        <p>592,032px</p>
                        <span>(10.14%)</span>
                      </td>
                      <th><b>대각선</b></th>
                      <td>
                        <p>1,408px</p>
                        <span>(32.94%)</span>
                      </td>
                    </tr>
                    <tr>
                      <th><b>너비</b></th>
                      <td>
                        <p>1,128px</p>
                        <span>(37.3%)</span>
                      </td>
                      <th><b>높이</b></th>
                      <td>
                        <p>844px</p>
                        <span>(29.915%)</span>
                      </td>
                    </tr>
                    <tr>
                      <th><b>위치</b></th>
                      <td>
                        <p>X:1,644px</p>
                        <p>Y:1,192px</p>
                      </td>
                    </tr>
                  </table>
                </div>
                <ul class="bottom">
                  <li
                    class="instance-detail select-file-list"
                    @click="isClassSettingOnOff()"
                  >
                    <div class="left-wrap">
                      <div class="img-wrap">
                        <img
                          src="../../assets/images/studio/icon/icon-boxing02.svg"
                          alt=""
                        />
                      </div>
                      <b>인간</b>
                    </div>
                    <div class="right-wrap">
                      <div class="icon-lock">
                        <button class="lock">
                          <img
                            src="../../assets/images/studio/icon/icon-lock01.svg"
                            alt=""
                          />
                        </button>
                        <button class="visibility">
                          <img
                            src="../../assets/images/studio/icon/icon-visibility01.svg"
                            alt=""
                          />
                        </button>
                        <button class="delete">
                          <img
                            src="../../assets/images/studio/icon/icon-delete01.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="instance-detail">
                    <div class="left-wrap">
                      <div class="img-wrap">
                        <img
                          src="../../assets/images/studio/icon/icon-boxing02.svg"
                          alt=""
                        />
                      </div>
                      <b>인간</b>
                    </div>
                    <div class="right-wrap">
                      <div class="icon-lock">
                        <button class="lock">
                          <img
                            src="../../assets/images/studio/icon/icon-lock01.svg"
                            alt=""
                          />
                        </button>
                        <button class="visibility">
                          <img
                            src="../../assets/images/studio/icon/icon-visibility01.svg"
                            alt=""
                          />
                        </button>
                        <button class="delete">
                          <img
                            src="../../assets/images/studio/icon/icon-delete01.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="studio-history">
            <li class="studio-title" @click="isHistoryOnOff">
              <h2>History</h2>
              <img src="../../assets/images/studio/icon/icon-up.svg" alt="" />
            </li>
            <div class="studio-contents" v-if="isHistoryOn">
              <li class="studio-contents-element">
                <div class="left-wrap">
                  <b>홍</b>
                </div>
                <div class="right-wrap">
                  <b>클래스 추가</b>
                  <p>2022.01.10 18:43</p>
                </div>
              </li>
              <li class="studio-contents-element">
                <div class="left-wrap">
                  <b>홍</b>
                </div>
                <div class="right-wrap">
                  <b>클래스 추가</b>
                  <p>2022.01.10 18:47</p>
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
                src="../../assets/images/studio/icon/icon-close.svg"
                alt=""
                @click="isqna1ShowOn = false"
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
          <li
            class="studio-contents"
            @click="isqna2ShowOnoff"
            v-for="(item, index) in QnaListItem"
            :key="index"
          >
            <div class="top-wrap">
              <div class="img-wrap">
                <img :src="require(`@/assets/images/studio/${selectImg}`)" />
              </div>
              <div class="text-wrap">
                <p>
                  {{ item.author }} <span class="left-bar"></span>
                  {{ item.date }}
                </p>
                <b>{{ item.question }}</b>
              </div>
            </div>
            <div class="bottom-wrap">
              Reply&nbsp;<span>{{ item.answer_count }}</span>
            </div>
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
                  src="../../assets/images/studio/icon/icon-back.svg"
                  alt=""
                  @click="isqna2ShowOn = false"
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
                <img :src="require(`@/assets/images/studio/${selectImg}`)" />
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
      <!-- 반려하기 팝업 -->
      <!-- <ul class="studio-popup">
                <li class="studio-popup-title">
                    <h3>반려사유입력</h3>
                    <button class="studio-popup-close"><img src="../../assets/images/studio/icon/icon-close.svg" alt=""></button>
                </li>
                <li class="studio-popup-contents">
                    <textarea name="" id=""></textarea>
                </li>
                <li class="studio-popup-button">
                    <button class="btn1-4"><span>취소</span></button>
                    <button class="btn2-4"><span>전송</span></button>
                </li>
            </ul> -->
      <!-- 단축키 팝업 -->
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
// // Header
// import HeaderTop from '../../components/work_studio/common/top_area/HeaderTop1.vue';
// import HeaderBottom from '../../components/work_studio/common/top_area/HeaderBottom.vue';
// //Left
// import LeftArea from '../../components/work_studio/common/left_area/LeftCleaningFrame.vue';

// // Center
// import CenterArea from '../../components/work_studio/common/center_area/CenterCleaningFrame.vue';
// // Right
// import RightFileList from '../../components/work_studio/common/right_area/RightFileList1.vue';
// // Add
// import QnA from '../../components/work_studio/common/add_area/QnA.vue';

export default {
  data: function () {
    return {
      // 헤더
      isfullPageOn: false,
      isShortcutKeysOn: false,
      isqna1ShowOn: false,
      isqna2ShowOn: false,
      isQnAPopUpOn: false,

      //중앙
      selectImg: 'file-list1.png',
      selectImgName: 'person_0001.png',
      selectImgStatus: '미작업',

      //우측
      isAssigneeOn: true,
      isGuideOn: true,
      isFileListOn: true,
      isInstanceOn: true,
      isHistoryOn: true,

      isClassSettingOn: false,

      currentImageIndex: 0,

      DataListItem: [
        {
          id: 1,
          fileName: 'person_0001.png',
          fileSize: '5.21MB',
          question: '3',
          img: 'file-list1.png',
          status: '미작업',
        },
        {
          id: 2,
          fileName: 'person_0002.png',
          fileSize: '3.82MB',
          question: '2',
          img: 'file-list2.png',
          status: '작업중',
        },
        {
          id: 3,
          fileName: 'person_0003.png',
          fileSize: '3.54MB',
          question: '0',
          img: 'file-list3.png',
          status: '미작업',
        },
        {
          id: 4,
          fileName: 'person_0004.png',
          fileSize: '4.11MB',
          question: '3',
          img: 'file-list4.png',
          status: '미작업',
        },
        {
          id: 5,
          fileName: 'person_0005.png',
          fileSize: '5.79MB',
          question: '1',
          img: 'file-list5.jpg',
          status: '반려',
        },
        {
          id: 5,
          fileName: 'person_0006.png',
          fileSize: '3.44MB',
          question: '0',
          img: 'file-list6.jpg',
          status: '미작업',
        },
      ],
      QnaListItem: [
        {
          id: 1,
          author: '강은수',
          question: '손가락도 포함하여 작업하나요?',
          answer_count: '3',
          answer: '0',
          date: '2022.01.23',
        },
        {
          id: 2,
          author: '한은혁',
          question: '사람이 잘리는 경우에도 작업하나요?',
          answer_count: '0',
          answer: '0',
          date: '2022.01.25',
        },
      ],
      isToolBoxingOn: true,
      isToolPolylineOn: false,
      isToolPolygonOn: false,
      isToolPointOn: false,
      isToolDrawpenOn: false,
      isTool3DCubeOn: false,
      isToolMagicwandOn: false,
      isToolKeypointOn: false,
      isToolAutopointOn: false,
      isToolSegmentOn: false,
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
    isGuideOnOff() {
      this.isGuideOn = !this.isGuideOn;
    },
    isFileListOnOff() {
      this.isFileListOn = !this.isFileListOn;
    },
    isInstanceOnOff() {
      this.isInstanceOn = !this.isInstanceOn;
    },
    isHistoryOnOff() {
      this.isHistoryOn = !this.isHistoryOn;
    },
    isClassSettingOnOff() {
      this.isClassSettingOn = !this.isClassSettingOn;
    },
    isToolBoxingOnOff() {
      this.isToolBoxingOn = !this.isToolBoxingOn;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolPolylineOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = !this.isToolPolylineOn;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },

    isToolPolygonOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = !this.isToolPolygonOn;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolPointOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = !this.isToolPointOn;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolDrawpenOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = !this.isToolDrawpenOn;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isTool3DCubeOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = !this.isTool3DCubeOn;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolMagicwandOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = !this.isToolMagicwandOn;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolKeypointOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = !this.isToolKeypointOn;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolAutopointOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = !this.isToolAutopointOn;
      this.isToolSegmentOn = false;
    },
    isToolSegmentOnOff() {
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = !this.isToolSegmentOn;
    },
    selectImgFunction(index) {
      if (index >= 0 && index < this.DataListItem.length) {
        this.selectImg = this.DataListItem[index].img;
        this.selectImgName = this.DataListItem[index].fileName;
        this.currentImageIndex = index;
        this.selectImgStatus = this.DataListItem[index].status;
      }
    },
    // leftSelectImgFunction() {

    // },
    imageStatusComplete() {
      this.DataListItem[this.currentImageIndex].status = '완료';
      this.selectImgStatus = this.DataListItem[this.currentImageIndex].status;
    },
  },
  // components: {
  //   HeaderTop,
  //   HeaderBottom,
  //   LeftArea,
  //   CenterArea,
  //   RightFileList,
  //   QnA,
  // },
};
</script>

<style scoped>
@import '../../css/reset.css';
@import '../../css/common.css';
</style>
