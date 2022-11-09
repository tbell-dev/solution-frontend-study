<template>
  <div id="studio-wrap">
    <header id="header">
      <ul class="header-top">
        <li class="ht-left">
          <div>
            <router-link to="/allproject/allprojectlist">
              <img
                src="../../assets/images/studio/header/icon-home-dark.svg"
                alt=""
              />
            </router-link>
          </div>
          <a id="download">
            <button @click="isDownload = true">
              <img
                src="../../assets/images/studio/header/icon-down-dark.svg"
                alt="Down"
              />
            </button>
          </a>
          <button @click="workStateSave()">
            <img
              src="../../assets/images/studio/header/icon-save-dark.svg"
              alt="Save"
            />
          </button>
          <button @click="new FullScreenOnOff()">
            <img
              src="../../assets/images/studio/header/icon-fullscreen-dark.svg"
              alt="Full Screen"
            />
          </button>
          <router-link to="/allproject/allprojectlist">
            <button>
              <img
                src="../../assets/images/studio/header/icon-logout-dark.svg"
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
            <img
              src="../../assets/images/studio/header/icon-prev-dark.svg"
              alt=""
            />
          </button>
          <div class="ht-title">
            <div class="studio-project">
              {{ DataListItem[currentImageIndex].task_project.project_name }}
            </div>
            <h2
              :class="{
                unworked:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 1,
                working:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 2,
                worked:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 3,
                companion:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 4,
              }"
            >
              {{ DataListItem[currentImageIndex].task_name }}
            </h2>
          </div>
          <!-- 작업 상태에 따라 파일 이름 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
          <button
            class="sutdio-next"
            @click="selectImgFunction(this.currentImageIndex + 1)"
          >
            <img
              src="../../assets/images/studio/header/icon-next-dark.svg"
              alt=""
            />
          </button>
        </li>
        <li class="ht-right">
          <div class="work-stage">
            <b>작업단계</b>
            <span class="bar"></span>
            <p>가공</p>
          </div>
          <div class="work-status">
            <b>작업상태</b>
            <!-- 작업 상태에 따라 동그라미와 작업상태 색상 다르게, 미작업 grey0 / 작업중 blue20 / 작업완료 positive10 / 반려 negative 10 -->
            <span class="bar"></span>
            <p
              :class="{
                unworked:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 1,
                working:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 2,
                worked:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 3,
                companion:
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress === 4,
              }"
            >
              <span class="ball"></span
              >{{
                taskStatus(
                  DataListItem[currentImageIndex].task_status
                    .task_status_progress,
                )
              }}
            </p>
          </div>
          <button class="undo">
            <img
              src="../../assets/images/studio/icon/icon-undo-dark.svg"
              alt=""
            />
          </button>
          <button class="redo">
            <img
              src="../../assets/images/studio/icon/icon-redo-dark.svg"
              alt=""
            />
          </button>
          <div class="zoom">
            <img
              src="../../assets/images/studio/icon/icon-minus-dark.svg"
              alt=""
            />
            <input
              type="range"
              min="10"
              max="200"
              value="100"
              name="zRange"
              id="zoom-range"
              @mouseup="zoomAdjustment()"
              @dblclick="setZoomCenter()"
            />
            <img
              src="../../assets/images/studio/icon/icon-plus-dark.svg"
              alt=""
            />
          </div>
        </li>
      </ul>
    </header>
    <main id="main">
      <div class="studio-left">
        <div class="tool-top">
          <img
            src="../../assets/images/studio/icon/icon-scroll-up-dark.svg"
            alt=""
          />
        </div>
        <div class="tool-list-wrap">
          <ul class="tool-list">
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolMoveOn,
              }"
              @click="isToolMoveOnOff"
            >
              <button>
                <img
                  v-show="!isToolMoveOn"
                  src="../../assets/images/studio/icon/icon-move-dark.svg"
                  alt="이동"
                />
                <img
                  v-show="isToolMoveOn"
                  src="../../assets/images/studio/icon/icon-move-selected.svg"
                  alt="이동"
                />
                <span class="tooltip">이동</span>
              </button>
              <p>이동</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolTagOn,
              }"
              @click="isToolTagOnOff"
            >
              <button>
                <img
                  v-show="!isToolTagOn"
                  src="../../assets/images/studio/icon/icon-tag-dark.svg"
                  alt="태그"
                />
                <img
                  v-show="isToolTagOn"
                  src="../../assets/images/studio/icon/icon-tag-selected.svg"
                  alt="태그"
                />
                <span class="tooltip">태그</span>
              </button>
              <p>태그</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolClassOn,
              }"
              @click="isToolClassOnOff"
            >
              <button>
                <img
                  v-show="!isToolClassOn"
                  src="../../assets/images/studio/icon/icon-class-off.svg"
                  alt="클래스"
                />
                <img
                  v-show="isToolClassOn"
                  src="../../assets/images/studio/icon/icon-class-on.svg"
                  alt="클래스"
                />
                <span class="tooltip">클래스</span>
              </button>
              <p>클래스</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolResetOn,
              }"
              @click="isToolResetOnOff"
            >
              <button>
                <img
                  v-show="!isToolResetOn"
                  src="../../assets/images/studio/icon/icon-reset-dark.svg"
                  alt="리셋"
                />
                <img
                  v-show="isToolResetOn"
                  src="../../assets/images/studio/icon/icon-reset-selected.svg"
                  alt="리셋"
                />
                <span class="tooltip">리셋</span>
              </button>
              <p>리셋</p>
            </li>
            <li>
              <span class="under-bar"></span>
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
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolODOn,
              }"
              @click="isToolODOnOff"
            >
              <button>
                <img
                  v-show="!isToolODOn"
                  src="../../assets/images/studio/icon/icon-OD-dark.svg"
                  alt="OD"
                />
                <img
                  v-show="isToolODOn"
                  src="../../assets/images/studio/icon/icon-OD-selected.svg"
                  alt="OD"
                />
                <span class="tooltip">OD</span>
              </button>
              <p>OD</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolISOn,
              }"
              @click="isToolISOnOff"
            >
              <button>
                <img
                  v-show="!isToolISOn"
                  src="../../assets/images/studio/icon/icon-IS-dark.svg"
                  alt="IS"
                />
                <img
                  v-show="isToolISOn"
                  src="../../assets/images/studio/icon/icon-IS-selected.svg"
                  alt="IS"
                />
                <span class="tooltip">IS</span>
              </button>
              <p>IS</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolSESOn,
              }"
              @click="isToolSESOnOff"
            >
              <button>
                <img
                  v-show="!isToolSESOn"
                  src="../../assets/images/studio/icon/icon-SES-dark.svg"
                  alt="SES"
                />
                <img
                  v-show="isToolSESOn"
                  src="../../assets/images/studio/icon/icon-SES-selected.svg"
                  alt="SES"
                />
                <span class="tooltip">SES</span>
              </button>
              <p>SES</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolMagicwandOn,
              }"
              @click="isToolMagicwandOnOff"
            >
              <button>
                <img
                  v-show="!isToolMagicwandOn"
                  src="../../assets/images/studio/icon/icon-smartpen-dark.svg"
                  alt="매직완드"
                />
                <img
                  v-show="isToolMagicwandOn"
                  src="../../assets/images/studio/icon/icon-smartpen-selected.svg"
                  alt="매직완드"
                />
                <span class="tooltip">매직완드</span>
              </button>
              <p>매직완드</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolAutopointOn,
              }"
              @click="isToolAutopointOnOff"
            >
              <button>
                <img
                  v-show="!isToolAutopointOn"
                  src="../../assets/images/studio/icon/icon-autopoint-dark.svg"
                  alt="오토포인트"
                />
                <img
                  v-show="isToolAutopointOn"
                  src="../../assets/images/studio/icon/icon-autopoint-selected.svg"
                  alt="오토포인트"
                />
                <span class="tooltip">오토포인트</span>
              </button>
              <p>오토포인트</p>
            </li>
            <li>
              <span class="under-bar"></span>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolBoxingOn,
              }"
              @click="isToolBoxingOnOff"
            >
              <button>
                <img
                  v-show="!isToolBoxingOn"
                  src="../../assets/images/studio/icon/icon-boxing-dark.svg"
                  alt="박싱"
                />
                <img
                  v-show="isToolBoxingOn"
                  src="../../assets/images/studio/icon/icon-boxing-selected.svg"
                  alt="박싱"
                />
                <span class="tooltip">박싱</span>
              </button>
              <p>박싱</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolPolylineOn,
              }"
              @click="isToolPolylineOnOff"
            >
              <button>
                <img
                  v-show="!isToolPolylineOn"
                  src="../../assets/images/studio/icon/icon-polyline-dark.svg"
                  alt="폴리라인"
                />
                <img
                  v-show="isToolPolylineOn"
                  src="../../assets/images/studio/icon/icon-polyline-selected.svg"
                  alt="폴리라인"
                />
                <span class="tooltip">폴리라인</span>
              </button>
              <p>폴리라인</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolPolygonOn,
              }"
              @click="isToolPolygonOnOff"
            >
              <button>
                <img
                  v-show="!isToolPolygonOn"
                  src="../../assets/images/studio/icon/icon-polygon-dark.svg"
                  alt="폴리곤"
                />
                <img
                  v-show="isToolPolygonOn"
                  src="../../assets/images/studio/icon/icon-polygon-selected.svg"
                  alt="폴리곤"
                />
                <span class="tooltip">폴리곤</span>
              </button>
              <p>폴리곤</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolPointOn,
              }"
              @click="isToolPointOnOff"
            >
              <button>
                <img
                  v-show="!isToolPointOn"
                  src="../../assets/images/studio/icon/icon-point-dark.svg"
                  alt="포인트"
                />
                <img
                  v-show="isToolPointOn"
                  src="../../assets/images/studio/icon/icon-point-selected.svg"
                  alt="포인트"
                />
                <span class="tooltip">포인트</span>
              </button>
              <p>포인트</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolDrawpenOn,
              }"
              @click="isToolDrawpenOnOff"
            >
              <button>
                <img
                  v-show="!isToolDrawpenOn"
                  src="../../assets/images/studio/icon/icon-brush-group-dark.svg"
                  alt="브러쉬"
                />
                <img
                  v-show="isToolDrawpenOn"
                  src="../../assets/images/studio/icon/icon-brush-group-selected.svg"
                  alt="브러쉬"
                />
                <span class="tooltip">브러쉬</span>
              </button>
              <p>브러쉬</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isTool3DCubeOn,
              }"
              @click="isTool3DCubeOnOff"
            >
              <button>
                <img
                  v-show="!isTool3DCubeOn"
                  src="../../assets/images/studio/icon/icon-3dcube-dark.svg"
                  alt="3D 큐브"
                />
                <img
                  v-show="isTool3DCubeOn"
                  src="../../assets/images/studio/icon/icon-3dcube-selected.svg"
                  alt="3D 큐브"
                />
                <span class="tooltip">3D 큐브</span>
              </button>
              <p>3D 큐브</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolSegmentOn,
              }"
              @click="isToolSegmentOnOff"
            >
              <button>
                <img
                  v-show="!isToolSegmentOn"
                  src="../../assets/images/studio/icon/icon-segment-dark.svg"
                  alt="세그먼트"
                />
                <img
                  v-show="isToolSegmentOn"
                  src="../../assets/images/studio/icon/icon-segment-selected.svg"
                  alt="세그먼트"
                />
                <span class="tooltip">세그먼트</span>
              </button>
              <p>세그먼트</p>
            </li>
            <li
              class="select-tooltip"
              v-bind:class="{
                'select-tool': this.isToolKeypointOn,
              }"
              @click="isToolKeypointOnOff"
            >
              <button>
                <img
                  v-show="!isToolKeypointOn"
                  src="../../assets/images/studio/icon/icon-keypoint-dark.svg"
                  alt="키포인트"
                  title="키포인트"
                />
                <img
                  v-show="isToolKeypointOn"
                  src="../../assets/images/studio/icon/icon-keypoint-selected.svg"
                  alt="키포인트"
                  title="키포인트"
                />
              </button>
              <span class="tooltip">키포인트</span>
              <p>키포인트</p>
            </li>
          </ul>
        </div>
        <div class="tool-bottom">
          <img
            src="../../assets/images/studio/icon/icon-scroll-down-dark.svg"
            alt=""
          />
        </div>
      </div>
      <div class="studio-center">
        <div class="studio-pic-label">
          <canvas id="fabCanvas" class="out-canvas"></canvas>
        </div>
        <div class="loading-container">
          <LoadingSpinner v-if="isLoading"></LoadingSpinner>
        </div>
        <div class="class-setting" v-show="isClassSettingOn">
          <ul class="class-setting-contents">
            <li>
              <h3>클래스 설정</h3>
            </li>
            <li>
              <button
                id="human"
                class="class-contents-obj"
                @click="setClass($event)"
              >
                인간
              </button>
            </li>
          </ul>
          <ul class="class-setting-contents">
            <li>
              <h3>성별</h3>
            </li>
            <li>
              <button
                id="female"
                class="class-contents-gender"
                @click="setGender($event)"
              >
                여자
              </button>
              <button
                id="male"
                class="class-contents-gender"
                @click="setGender($event)"
              >
                남자
              </button>
              <button
                id="unknown"
                class="class-contents-gender"
                @click="setGender($event)"
              >
                알 수 없음
              </button>
            </li>
          </ul>
          <ul class="class-setting-contents">
            <li>
              <h3>연령</h3>
            </li>
            <li>
              <button
                id="baby"
                class="class-contents-age"
                @click="setAge($event)"
              >
                아기
              </button>
              <button
                id="children"
                class="class-contents-age"
                @click="setAge($event)"
              >
                어린이
              </button>
              <button
                id="teenager"
                class="class-contents-age"
                @click="setAge($event)"
              >
                청소년
              </button>
              <button
                id="youth"
                class="class-contents-age"
                @click="setAge($event)"
              >
                청년
              </button>
            </li>
            <li>
              <button
                id="middle"
                class="class-contents-age"
                @click="setAge($event)"
              >
                중년
              </button>
              <button
                id="old"
                class="class-contents-age"
                @click="setAge($event)"
              >
                노년
              </button>
              <button
                id="unknown"
                class="class-contents-age"
                @click="setAge($event)"
              >
                알 수 없음
              </button>
            </li>
          </ul>
          <button class="close" @click="isClassSettingOnOff()">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </div>
        <footer class="footer">
          <ul class="studio-file-list-type3">
            <li class="studio-title3">
              <div class="st-title3" @click="isFileListOnOff">
                <img
                  v-show="isFileListOn"
                  src="../../assets/images/studio/icon/icon-down-dark.svg"
                  alt=""
                />
                <img
                  v-show="!isFileListOn"
                  src="../../assets/images/studio/icon/icon-up-dark.svg"
                  alt=""
                />
                <span class="blank"></span>
                <h2>
                  File List <span>({{ itemLength() }})</span>
                </h2>
              </div>
              <div class="st-title3">
                <button class="file-filter">
                  <b>작업상태</b>
                  <select class="drop-file-filter" v-model="filters">
                    <option value="0">전체</option>
                    <option value="1">미작업</option>
                    <option value="2">작업중</option>
                    <option value="3">완료</option>
                    <option value="4">반려</option>
                  </select>
                  <img
                    src="../../assets/images/studio/icon/icon-down-dark.svg"
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
                    v-if="isHosted"
                    class="img-list"
                    :src="
                      hostUrl +
                      '/rest/api/1/task/data?project_id=' +
                      DataListItem[currentImageIndex].task_project.project_id +
                      '&task_id=' +
                      DataListItem[currentImageIndex].task_id
                    "
                    alt=""
                  />
                  <img
                    v-else
                    class="img-list"
                    :src="require(`@/assets/images/studio/${selectImg}`)"
                    alt=""
                  />
                </div>
                <div class="text-wrap">
                  <p>{{ selectImgName }}</p>
                  <b
                    :class="{
                      unworked: selectImgStatus === 1,
                      working: selectImgStatus === 2,
                      worked: selectImgStatus === 3,
                      companion: selectImgStatus === 4,
                    }"
                  >
                    {{ taskStatus(selectImgStatus) }}
                  </b>
                </div>
              </div>
              <span class="file-bar"></span>
              <!-- select-file-list -->
              <template v-for="(item, index) in DataListItem" :key="index">
                <li
                  class="file-list-contents-element3"
                  v-show="filters === '0'"
                  @click="selectImgFunction(index)"
                >
                  <div class="file-list-detail3">
                    <div class="left-wrap3">
                      <div class="img-wrap3">
                        <!--<img
                          v-if="isHosted"
                          class="img-list"
                          :src="
                            hostUrl +
                            '/rest/api/1/task/data?project_id=' +
                            DataListItem[index].task_project.project_id +
                            '&task_id=' +
                            DataListItem[index].task_id
                          "
                          alt=""
                        />-->
                        <img
                          v-if="isHosted"
                          class="img-list"
                          :src="
                            'data:image/' +
                            DataListItem[index].task_detail.image_format +
                            ';base64,' +
                            DataListItem[index].task_detail.image_thumbnail
                          "
                          alt=""
                        />
                        <img
                          v-else
                          class="img-list"
                          :src="
                            require(`@/assets/images/studio/${item.task_detail.image_name}`)
                          "
                          alt=""
                        />
                      </div>
                      <div class="text-wrap">
                        <p>{{ item.task_name }}</p>
                        <b
                          :class="{
                            unworked:
                              item.task_status.task_status_progress === 1,
                            working:
                              item.task_status.task_status_progress === 2,
                            worked: item.task_status.task_status_progress === 3,
                            companion:
                              item.task_status.task_status_progress === 4,
                          }"
                        >
                          {{
                            taskStatus(item.task_status.task_status_progress)
                          }}
                        </b>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="file-list-contents-element3"
                  v-show="
                    filters === item.task_status.task_status_progress.toString()
                  "
                  @click="selectImgFunction(index)"
                >
                  <div class="file-list-detail3">
                    <div class="left-wrap3">
                      <div class="img-wrap3">
                        <img
                          v-if="isHosted"
                          class="img-list"
                          :src="
                            hostUrl +
                            '/rest/api/1/task/data?project_id=' +
                            DataListItem[currentImageIndex].task_project
                              .project_id +
                            '&task_id=' +
                            DataListItem[currentImageIndex].task_id
                          "
                          alt=""
                        />
                        <img
                          v-else
                          class="img-list"
                          :src="
                            require(`@/assets/images/studio/${item.task_detail.image_name}`)
                          "
                          alt=""
                        />
                      </div>
                      <div class="text-wrap">
                        <p>{{ item.task_name }}</p>
                        <b
                          :class="{
                            unworked:
                              item.task_status.task_status_progress === 1,
                            working:
                              item.task_status.task_status_progress === 2,
                            worked: item.task_status.task_status_progress === 3,
                            companion:
                              item.task_status.task_status_progress === 4,
                          }"
                        >
                          {{
                            taskStatus(item.task_status.task_status_progress)
                          }}
                        </b>
                      </div>
                    </div>
                  </div>
                </li>
              </template>
            </div>
          </ul>
        </footer>
      </div>
      <!-- 기본 속성 -->
      <div class="studio-right studio-right1">
        <div class="studio-right-top">
          <ul class="studio-assignee">
            <li
              class="studio-title"
              style="border: 1px solid var(--grey50); cursor: pointer"
              @click="isLabelingAssigneeOnOff"
            >
              <div class="studio-contents-assignee">
                <b>가공 담당자</b>
                <span class="bar-left"></span>
                <p>
                  {{ selectLabelingAssignee }}
                </p>
              </div>
              <img
                v-show="isLabelingAssigneeOn"
                src="../../assets/images/studio/icon/icon-up-dark.svg"
                alt=""
              />
              <img
                v-show="!isLabelingAssigneeOn"
                src="../../assets/images/studio/icon/icon-down-dark.svg"
                alt=""
              />
            </li>
            <li class="file-list-contents" v-if="isLabelingAssigneeOn">
              <div
                class="file-list-contents-element"
                v-for="(item, index) in DataListAssignee"
                :key="index"
                @click="selectLabelingAssigneeFunction(index)"
              >
                <div class="file-list-detail">
                  <div class="left-wrap">
                    <p v-if="item.user_display_name != null">
                      {{ item.user_display_name }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <div v-show="!isLabelingAssigneeOn" style="height: 10px"></div>
            <li
              class="studio-title"
              style="border: 1px solid var(--grey50); cursor: pointer"
              @click="isInspectAssigneeOnOff"
            >
              <div class="studio-contents-assignee">
                <b>검수 담당자</b>
                <span class="bar-left"></span>
                <p>
                  {{ selectInspectAssignee }}
                </p>
              </div>
              <img
                v-show="isInspectAssigneeOn"
                src="../../assets/images/studio/icon/icon-up-dark.svg"
                alt=""
              />
              <img
                v-show="!isInspectAssigneeOn"
                src="../../assets/images/studio/icon/icon-down-dark.svg"
                alt=""
              />
            </li>
            <li class="file-list-contents" v-if="isInspectAssigneeOn">
              <div
                class="file-list-contents-element"
                v-for="(item, index) in DataListAssignee"
                :key="index"
                @click="selectInspectAssigneeFunction(index)"
              >
                <div class="file-list-detail">
                  <div class="left-wrap">
                    <p v-if="item.user_display_name != null">
                      {{ item.user_display_name }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="studio-file-info">
            <li class="studio-title3" @click="isFileInfoOnOff">
              <img
                v-show="isFileInfoOn"
                src="../../assets/images/studio/icon/icon-up-dark.svg"
                alt=""
              />
              <img
                v-show="!isFileInfoOn"
                src="../../assets/images/studio/icon/icon-down-dark.svg"
                alt=""
              />
              <span class="blank"></span>
              <h2>File Info.</h2>
            </li>
            <li class="studio-contents" v-if="isFileInfoOn">
              <div class="top-wrap">
                <table class="file-info-table">
                  <tr>
                    <th><b>파일명</b></th>
                    <td>
                      <p>
                        {{
                          DataListItem[currentImageIndex].task_detail.image_name
                        }}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th><b>파일크기</b></th>
                    <td>
                      <p>
                        {{
                          DataListItem[currentImageIndex].task_detail
                            .image_width
                        }}px*{{
                          DataListItem[currentImageIndex].task_detail
                            .image_height
                        }}px
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th><b>용량</b></th>
                    <td>
                      <p>
                        {{
                          imgSize(
                            DataListItem[currentImageIndex].task_detail
                              .image_size,
                          )
                        }}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </li>
          </ul>
          <ul class="studio-instance">
            <li class="studio-title3" @click="isInstanceOnOff">
              <img
                v-show="isInstanceOn"
                src="../../assets/images/studio/icon/icon-up-dark.svg"
                alt=""
              />
              <img
                v-show="!isInstanceOn"
                src="../../assets/images/studio/icon/icon-down-dark.svg"
                alt=""
              />
              <span class="blank"></span>
              <h2>Instance ({{ InstanceListItem.length }})</h2>
            </li>
            <li class="studio-contents" v-if="isInstanceOn">
              <div class="top-wrap" v-show="isObjectSelectOn">
                <div class="top">
                  <div class="instance-pic">
                    <!--<canvas
                      v-show="isLabelingOn && isObjectSelectOn"-->
                    <canvas id="dataCanvas" class="data-canvas"></canvas>
                  </div>
                  <table
                    class="instance-table1"
                    v-show="isObjectSelectOn && (isToolBoxingOn || isOD)"
                  >
                    <tr>
                      <th><b>클래스</b></th>
                      <td>
                        <span class="instance-ball"></span>
                        <p>{{ instanceClass }}</p>
                      </td>
                    </tr>
                    <tr>
                      <th><b>성별</b></th>
                      <td>
                        <p>{{ instanceGender }}</p>
                      </td>
                    </tr>
                    <tr>
                      <th><b>연령</b></th>
                      <td>
                        <p>{{ instanceAge }}</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="bottom-wrap">
                <div class="top" v-show="isToolBoxingOn || isToolODOn">
                  <table class="instance-table2">
                    <tr>
                      <th><b>높이</b></th>
                      <td>
                        <p>{{ Math.round(instanceHeight) }}px</p>
                        <span>
                          ({{
                            ((instanceHeight / inHeight) * 100).toFixed(2)
                          }}%)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th><b>대각선</b></th>
                      <td>
                        <p>
                          {{
                            Math.sqrt(
                              Math.pow(instanceWidth, 2) +
                                Math.pow(instanceHeight, 2),
                            ).toFixed(2)
                          }}px
                        </p>
                        <span>
                          ({{
                            (
                              (Math.sqrt(
                                Math.pow(instanceWidth, 2) +
                                  Math.pow(instanceHeight, 2),
                              ) /
                                Math.sqrt(
                                  Math.pow(canvasWidth, 2) +
                                    Math.pow(canvasHeight, 2),
                                )) *
                              100
                            ).toFixed(2)
                          }}%)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th><b>너비</b></th>
                      <td>
                        <p>{{ Math.round(instanceWidth) }}px</p>
                        <span>
                          ({{ ((instanceWidth / inWidth) * 100).toFixed(2) }}%)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th><b>위치</b></th>
                      <td>
                        <p>x : {{ Math.round(positionX) }}px</p>
                        <p>y : {{ Math.round(positionY) }}px</p>
                      </td>
                    </tr>
                  </table>
                </div>
                <ul class="bottom">
                  <template
                    v-for="(item, index) in InstanceListItem"
                    :key="index"
                  >
                    <button :id="'instance' + index" class="instance-detail">
                      <div
                        class="left-wrap"
                        @click="isClassSettingOnOff(index)"
                      >
                        <div class="img-wrap">
                          <img
                            src="../../assets/images/studio/icon/icon-boxing02.svg"
                            alt=""
                          />
                        </div>
                        <b>({{ item.id }}) {{ item.className }}</b>
                      </div>
                      <div class="right-wrap">
                        <div class="icon-lock">
                          <button
                            :id="'lockBtn' + index"
                            class="lock"
                            @click="isLock(item.id, index)"
                          >
                            <img
                              src="../../assets/images/studio/icon/icon-lock01.svg"
                              alt=""
                            />
                          </button>
                          <button
                            :id="'visibleBtn' + index"
                            class="visibility"
                            @click="isVisible(item.id, index)"
                          >
                            <img
                              src="../../assets/images/studio/icon/icon-visibility01.svg"
                              alt=""
                            />
                          </button>
                          <button class="delete" @click="isDelete(item.id)">
                            <img
                              src="../../assets/images/studio/icon/icon-delete01.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </button>
                  </template>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="studio-history">
            <li class="studio-title3" @click="isHistoryOnOff">
              <img
                v-show="isHistoryOn"
                src="../../assets/images/studio/icon/icon-up-dark.svg"
                alt=""
              />
              <img
                v-show="!isHistoryOn"
                src="../../assets/images/studio/icon/icon-down-dark.svg"
                alt=""
              />
              <span class="blank"></span>
              <h2>History</h2>
            </li>
            <li class="studio-contents" v-if="isHistoryOn">
              <div class="studio-contents-element" v-show="isHistory">
                <div class="left-wrap">
                  <b>홍</b>
                </div>
                <div class="right-wrap">
                  <b>클래스 추가</b>
                  <p>2022.01.10 18:43</p>
                </div>
              </div>
              <div class="studio-contents-element" v-show="isHistory">
                <div class="left-wrap">
                  <b>홍</b>
                </div>
                <div class="right-wrap">
                  <b>클래스 추가</b>
                  <p>2022.01.10 18:47</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="studio-right-bottom">
          <button class="finish1" @click="imageStatusComplete()">완료</button>
        </div>
      </div>
      <ul class="studio-popup" v-show="isDownload">
        <li class="studio-popup-title">
          <h3>산출물 내보내기</h3>
          <button class="studio-popup-close" @click="isDownload = false">
            <img src="../../assets/images/studio/icon/icon-close.svg" alt="" />
          </button>
        </li>
        <li class="studio-popup-contents">
          <p>다운로드 파일 형식 *</p>
          <select class="drop-down-option" v-model="downloads">
            <option value="" hidden>
              다운로드할 파일 형식을 선택해주세요.
            </option>
            <option value="coco">COCO Dataset Format</option>
            <option value="yolo">YOLO Dataset Format</option>
            <option value="img">Images</option>
          </select>
        </li>
        <li class="studio-popup-button">
          <button class="btn-cancle" @click="isDownload = false">
            <span>취소</span>
          </button>
          <button class="btn-submit" id="btnDownload" @click="downloadData()">
            <span>내보내기</span>
          </button>
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

import axios from 'axios';
import { HOST } from '@/main';
import { fabric } from 'fabric';
//import { isProxy, toRaw } from 'vue';
import LoadingSpinner from '@/components/work_studio/common/center_area/LoadingSpinner.vue';
//import keyPoint from '@/components/work_studio/common/center_area/toolKeypoint';

export default {
  components: {
    LoadingSpinner,
  },
  mounted: async function () {
    const _this = this;
    console.log(location.href); // 전체 url
    console.log(location.pathname); // 파라미터 값
    /*const urlParams = new URLSearchParams(location.search);
    const para = document.location.pathname.split('/');
    console.log(para);
    for (let p = 0; p < para.length; p++) {
      if (para[p] === 'project') {
        this.prjId = para[p + 1];
      }
    }*/
    this.prjId = this.$route.params.pId;
    this.taskId = this.$route.query.selectedTask;
    if (this.prjId === null || this.prjId === undefined) {
      this.prjId = 5;
    }
    if (this.taskId === null || this.taskId === undefined) {
      this.taskId = 1;
    }
    /*if (urlParams.has('project_id')) {
      this.prjId = urlParams.get('project_id');
    }*/
    /*if (urlParams.has('selectedTask')) {
      this.taskId = urlParams.get('task_id');
    }*/
    this.hostUrl = HOST;
    //this.dataCanvas = document.getElementById('dataCanvas');
    this.dataCanvas = new fabric.Canvas('dataCanvas', {
      left: 0,
      top: 0,
      width: 200,
      height: 150,
      hoverCursor: 'default',
      selection: false,
    });
    this.dataCtx = this.dataCanvas.getContext('2d');
    //this.dataCtx = this.dataCanvas.getContext();
    this.fCanvas = window._canvas = new fabric.Canvas('fabCanvas', {
      //selection: false,
    });
    /*if (isProxy(new fabric.Canvas('fabCanvas', { selection: false }))) {
      console.log('proxy');
      this.fCanvas = toRaw(
        new fabric.Canvas('fabCanvas', { selection: false }),
      );
    }
    if (isProxy(this.fCanvas)) {
      console.log('proxy2');
      this.fCanvas = toRaw(this.fCanvas);
    }*/
    this.fCanvas.discardActiveObject();
    const helperObj = new fabric.Object({}); //abstract invisible object
    helperObj.set('selectable', false); //so the user is not able to select and modify it manually
    this.fCanvas.add(helperObj);

    this.fCanvas.on('object:added', () => {
      //workaround - selecting all objects to enable object controls
      //console.log('set');
      let objects = this.fCanvas.getObjects();
      let selection = new fabric.ActiveSelection(objects, {
        canvas: this.fCanvas,
      });
      this.fCanvas.setActiveObject(selection); //selecting all objects...
      this.fCanvas.discardActiveObject(); //...and deselecting them
      this.fCanvas.requestRenderAll();
    });
    this.fCanvas.on('mouse:down:before', this.beforeDownCanvas);
    this.fCanvas.on('mouse:down', this.downCanvas);
    this.fCanvas.on('mouse:move', this.moveCanvas);
    this.fCanvas.on('mouse:up', this.upCanvas);
    //this.fCanvas.on('mouse:out', this.outCanvas);
    this.fCanvas.on('object:moving', this.movingObject);
    this.fCanvas.on('object:scaling', this.scalingObject);
    this.fCanvas.on('selection:created', this.createSelection);
    this.fCanvas.on('selection:updated', this.updateSelection);
    this.fCanvas.on('before:selection:cleared', this.beforeClearSelection);
    this.fCanvas.on('selection:cleared', this.clearSelection);
    this.fCanvas.on('mouse:wheel', this.onMouseWheel);
    this.fCanvas.on('path:created', this.createPath);
    this.fCtx = this.fCanvas.getContext();
    /*fabric.Object.prototype.lockRotation = true;
    fabric.Object.prototype.hasControls = true;
    fabric.Object.prototype.hasBorders = true;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.borderColor = 'transparent';
    fabric.Object.prototype.cornerStyle = 'circle';
    fabric.Object.prototype.cornerColor = 'rgba(0,0,0,0.5)';
    fabric.Object.prototype.cornerSize = 10;*/
    /*fabric.Object.prototype.on('mouseover', () => {
      console.log('over');
      this.isObjectSelectOn = true;
    });*/
    /*fabric.Object.prototype.on('mouseout', () => {
      console.log('out');
      this.isObjectSelectOn = false;
    });*/
    fabric.Object.prototype.setControlsVisibility({
      bl: true,
      br: true,
      tl: true,
      tr: true,
      mb: true,
      ml: true,
      mr: true,
      mt: true,
      mtr: false,
    });
    //'/rest/api/1/task/search?project_id=15&task_name&task_worker&task_validator&task_worker_or_validator&task_status_step&task_status_process',
    await axios
      .get(
        this.hostUrl +
          '/rest/api/1/task/search?project_id=' +
          this.prjId +
          '&maxResults=500',
      )
      .then(response => {
        if (response.data.datas.length > 0) {
          this.isHosted = true;
          this.isOpen = true;
          this.DataListItem = response.data.datas;
        } else {
          this.isHosted = false;
        }
        //this.openFabImage();
        //this.openAssignee(this.currentImageIndex);
      })
      .catch(error => {
        console.log(error);
      });
    await axios
      .get(this.hostUrl + '/rest/api/1/auth/user/search')
      .then(response => {
        if (response.data.datas.length > 0) {
          //this.isWorkers = true;
          //this.DataListAssignee = response.data.datas;
        } else {
          this.isWorkers = false;
        }
      })
      .catch(error => {
        console.log(error);
      });
    document.onkeydown = function (e) {
      if (_this.objSelected) {
        let key = e.key || e.keyCode;
        if (key === 46) {
          // || 46 = Delete
          key = 'Delete';
        }
        _this.deleteItem(key);
      }
    };
    this.openFabImage();
    for (let i = 0; i < this.DataListItem.length; i++) {
      if (this.taskId === this.DataListItem[i].task_id) {
        this.selectImgFunction(i);
      }
    }
    this.openAssignee(this.currentImageIndex);
  },
  data: function () {
    return {
      // 헤더
      isfullPageOn: false,
      isShortcutKeysOn: false,
      isqna1ShowOn: false,
      isqna2ShowOn: false,
      isQnAPopUpOn: false,
      isHosted: false,
      isWorkers: false,
      hostUrl: '',
      isDownload: false,

      //중앙
      prjId: 5,
      taskId: 1,
      selectImg: 'file-list1.png',
      selectImgName: 'person_0001.png',
      selectImgStatus: 1,
      selectLabelingAssignee: '홍길동',
      selectInspectAssignee: '홍길동',
      imgOriginWidth: 0,
      imgOriginHeight: 0,
      instanceIndex: 0,
      instanceClass: '인간',
      instanceGender: '',
      instanceAge: '',
      instanceWidth: 0,
      instanceHeight: 0,
      positionX: 0,
      positionY: 0,
      isLoading: false,
      isOpen: false,

      //우측
      isLabelingAssigneeOn: false,
      isInspectAssigneeOn: false,
      isGuideOn: true,
      isFileListOn: false,
      isInstanceOn: true,
      isHistory: false,
      isHistoryOn: false,
      isFileInfoOn: true,
      isObjectSelectOn: false,
      isObjectMoveOn: false,
      isOD: false,
      isIS: false,
      isSES: false,
      isMove: false,
      isEndPolyline: true,
      isEndPolygon: true,
      isBbox: false,

      isClassSettingOn: false,

      currentImageIndex: 0,
      filters: '0',
      downloads: '',

      DataListItem: [
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 1,
          task_name: 'person_0001.png',
          task_detail: {
            image_size: '5.01KB',
            image_width: 60,
            image_height: 44,
            image_name: 'file-list1.png',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_01',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 2,
          task_name: 'person_0002.png',
          task_detail: {
            image_size: '5.82KB',
            image_width: 60,
            image_height: 42,
            image_name: 'file-list2.png',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_02',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 3,
          task_name: 'person_0003.png',
          task_detail: {
            image_size: '4.04KB',
            image_width: 60,
            image_height: 40,
            image_name: 'file-list3.png',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 2,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_detail: {
            image_size: '4.90KB',
            image_width: 60,
            image_height: 40,
            image_name: 'file-list4.png',
          },
          task_id: 4,
          task_name: 'person_0004.png',
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 3,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 5,
          task_name: 'person_0005.jpg',
          task_detail: {
            image_size: '6.53MB',
            image_width: 5760,
            image_height: 3840,
            image_name: 'file-list5.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 6,
          task_name: 'person_0006.jpg',
          task_detail: {
            image_size: '6.10MB',
            image_width: 3840,
            image_height: 5760,
            image_name: 'file-list6.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 4,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 7,
          task_name: 'person_0007.jpg',
          task_detail: {
            image_size: '5.69MB',
            image_width: 3840,
            image_height: 5760,
            image_name: 'file-list7.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 8,
          task_name: 'person_0008.jpg',
          task_detail: {
            image_size: '8.45MB',
            image_width: 6720,
            image_height: 4480,
            image_name: 'file-list8.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 9,
          task_name: 'person_0009.jpg',
          task_detail: {
            image_size: '10.6MB',
            image_width: 6720,
            image_height: 4480,
            image_name: 'file-list9.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 10,
          task_name: 'person_0010.jpg',
          task_detail: {
            image_size: '22.2MB',
            image_width: 6593,
            image_height: 4396,
            image_name: 'file-list10.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 11,
          task_name: 'person_0011.jpg',
          task_detail: {
            image_size: '15.8MB',
            image_width: 6720,
            image_height: 4480,
            image_name: 'file-list11.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
        {
          task_project: {
            project_id: 15,
            project_name: '가공 프로젝트 01',
          },
          task_id: 12,
          task_name: 'person_0012.jpg',
          task_detail: {
            image_size: '28.8MB',
            image_width: 7952,
            image_height: 5304,
            image_name: 'file-list12.jpg',
          },
          task_status: {
            task_status_step: 1,
            task_status_progress: 1,
          },
          task_worker: {
            user_display_name: '사용자_11',
            user_id: 'user_11',
          },
          task_validator: {
            user_display_name: '사용자_01',
            user_id: 'user_01',
          },
        },
      ],
      DataListAssignee: [
        {
          user_id: 'admin_01',
          user_display_name: '김철수',
        },
        {
          user_id: 'admin_02',
          user_display_name: '박영희',
        },
        {
          user_id: 'user_01',
          user_display_name: '최미영',
        },
        {
          user_id: 'user_05',
          user_display_name: '신상호',
        },
        {
          user_id: 'user_07',
          user_display_name: '이상희',
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
      //클래스 데이터 저장 배열
      InstanceListItem: [],
      AnnotationListItem: [],
      TagListItem: [],
      ObjectListItem: [],
      DragRectListItem: [],
      autoPointList: [],
      ODListItem: [],
      DeleteIDList: [],
      isToolMoveOn: false,
      isToolTagOn: false,
      isToolClassOn: false,
      isToolResetOn: false,

      isToolODOn: false,
      isToolISOn: false,
      isToolSESOn: false,
      isToolMagicwandOn: false,
      isToolAutopointOn: false,

      isToolBoxingOn: false,
      isToolPolylineOn: false,
      isToolPolygonOn: false,
      isToolPointOn: false,
      isToolDrawpenOn: false,
      isTool3DCubeOn: false,

      isToolKeypointOn: false,
      isToolSegmentOn: false,

      isLabelingOn: false,

      //캔버스
      outCtx: '',
      drawCtx: '',
      inFile: '',
      fCanvas: '',
      fCtx: '',
      imgSrc: '',
      inImg: '',
      dataCanvas: '',
      dataCtx: '',
      objSelected: '',

      inPaper: '',
      outPaper: '',

      inImgArr: [],
      outImgArr: [],

      inWidth: '',
      outWidth: '',
      inHeight: '',
      outHeight: '',
      isDown: false,
      maxWidth: 800,
      maxHeight: 500,
      canvasWidth: 810,
      canvasHeight: 540,
      imgRatio: 1,
      pointX: 0,
      pointY: 0,
      startX: 0,
      startY: 0,
      stX: 0,
      stY: 0,
      endX: 0,
      endY: 0,
      line: '',
      imgData: ImageData,
      imgDatas: [],
      boxingPoints: [],
      polygonPoints: [],
      polylinePoints: [],
      polygonItems: [],
      polylineItems: [],
      instanceCnt: 0,
      objId: 0,
      dataX: 0,
      dataY: 0,
      tempRect: fabric.Rect,
      tmpLine: fabric.Line,
      tempLine: fabric.Polyline,

      tempArr: [],
      tempSubArr: [],

      activeLine: '',
      activeShape: '',
      lineArray: [],
      pointArray: [],
      drawMode: false,
      isDragging: false,
      selection: false,
      paintPointList: [],
      paintPathList: [],

      colorThreshold: 15,
      blurRadius: 5,
      simplifyTolerant: 0,
      simplifyCount: 30,
      hatchLength: 4,
      hatchOffset: 0,

      imageInfo: null,
      cacheInd: null,
      mask: null,
      oldMask: null,
      downPoint: null,
      allowDraw: false,
      addMode: false,
      currentThreshold: 15,
    };
  },
  methods: {
    /*customFabric() {
      //override prototype.toObject and add your custom properties here
      fabric.Object.prototype.toObject = (function (toObject) {
        return function () {
          return fabric.util.object.extend(toObject.call(this), {
            objectId: this.objectId, //my custom property
          });
        };
      })(fabric.Object.prototype.toObject);
    },*/
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
    isLabelingAssigneeOnOff() {
      this.isLabelingAssigneeOn = !this.isLabelingAssigneeOn;
    },
    isInspectAssigneeOnOff() {
      this.isInspectAssigneeOn = !this.isInspectAssigneeOn;
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
    isFileInfoOnOff() {
      this.isFileInfoOn = !this.isFileInfoOn;
    },
    isInstanceOnOff() {
      this.isInstanceOn = !this.isInstanceOn;
    },
    isHistoryOnOff() {
      this.isHistoryOn = !this.isHistoryOn;
    },
    isTagSettingOnOff() {
      // tag on/off
      //this.objSelected
      if (!this.isToolTagOn) {
        /*let items = this.fCanvas.getObjects();
        for (let i = 0; i < items.length; i++) {
          this.fCanvas.remove(this.TagListItem[i]);
        }*/
        for (let i = 0; i < this.TagListItem.length; i++) {
          this.TagListItem[i].visible = false;
        }
      } else {
        for (let i = 0; i < this.TagListItem.length; i++) {
          //this.fCanvas.add(this.TagListItem[i]);
          this.TagListItem[i].visible = true;
        }
      }
      this.fCanvas.renderAll();
    },
    isClassSettingOnOff(index) {
      let prevIndex = this.instanceIndex;
      if (index === null || index === undefined) {
        index = this.instanceIndex;
      } else {
        this.instanceIndex = index;
      }
      //let isSelectable = true;
      for (let i = 0; i < this.ObjectListItem.length; i++) {
        if (this.InstanceListItem[index].id === this.ObjectListItem[i].id) {
          if (this.ObjectListItem[i].selectable) {
            this.fCanvas.setActiveObject(this.ObjectListItem[i]);
          } else {
            //isSelectable = false;
          }
        }
      }

      let thisBtn = document.getElementById('instance' + index);
      let elseBtn = document.getElementsByClassName('instance-detail');
      if (!this.isClassSettingOn || !this.isToolClassOn) {
        for (let i = 0; i < elseBtn.length; i++) {
          elseBtn.item(i).classList.remove('active');
        }
        if (thisBtn) {
          thisBtn.classList.add('active');
        }
      } else {
        if (thisBtn) {
          thisBtn.classList.remove('active');
        }
      }

      if (prevIndex === index) {
        this.isClassSettingOn = !this.isClassSettingOn;
        if (
          (!this.isClassSettingOn && this.isToolClassOn) ||
          (this.isClassSettingOn && !this.isToolClassOn)
        ) {
          this.isToolClassOn = !this.isToolClassOn;
        } else {
          console.log('else');
        }
        if (this.isClassSettingOn) {
          document.getElementById('human').click();
        }
        this.setAnnotation();
        this.isObjectSelectOn = this.isClassSettingOn;
      } else {
        this.isClassSettingOn = true;
        document.getElementById('human').click();
        this.instanceIndex = index;
        this.setAnnotation();
      }
    },
    isToolMoveOnOff() {
      this.isToolMoveOn = !this.isToolMoveOn;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      if (this.isToolMoveOn) {
        //this.fCanvas.hoverCursor = 'crosshair';
        if (confirm('준비중입니다.')) {
          this.isToolMoveOn = false;
        } else {
          this.isToolMoveOn = false;
        }
      }
      if (this.isToolMoveOn) {
        document.body.style.cursor = 'Move';
        this.fCanvas.defaultCursor = 'move';
        this.fCanvas.hoverCursor = 'move';
      } else {
        document.body.style.cursor = 'default';
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }
      this.fCanvas.isDrawingMode = false;
    },
    isToolTagOnOff() {
      //document.body.style.cursor = 'default';
      this.isToolTagOn = !this.isToolTagOn;
      this.fCanvas.isDrawingMode = false;
      this.isTagSettingOnOff();
    },
    isToolClassOnOff() {
      //document.body.style.cursor = 'default';
      this.isToolClassOn = !this.isToolClassOn;
      this.fCanvas.isDrawingMode = false;
      this.isClassSettingOnOff();
    },
    isToolResetOnOff() {
      //document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = true;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
      if (confirm('작업 내용이 초기화 됩니다. 초기화 하시겠습니까?')) {
        document.body.style.cursor = 'default';
        this.fCanvas.hoverCursor = 'default';
        this.isToolResetOn = false;
        // clear instance, annotation
        this.clearDatas();
        // reset tools
        this.resetTools();
        this.fCanvas.clear();
        this.openFabImage();
      } else {
        this.isToolResetOn = false;
      }
    },

    isToolODOnOff() {
      if (!this.isHosted) {
        return;
      }
      document.body.style.cursor = 'default';
      this.fCanvas.hoverCursor = 'default';
      this.isToolODOn = !this.isToolODOn;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
      if (this.isToolODOn && !this.isOD) {
        this.getOD();
      } else if (!this.isToolODOn) {
        for (let i = 0; i < this.ObjectListItem.length; i++) {
          if (this.ObjectListItem[i].tool === 'OD') {
            let id = this.ObjectListItem[i].id;

            for (let j = 0; j < this.TagListItem.length; j++) {
              let tag = this.TagListItem[j];
              if (tag.id === id) {
                this.fCanvas.remove(tag);
                this.TagListItem.splice(j, 1);
              }
            }
            for (let k = 0; k < this.InstanceListItem.length; k++) {
              if (this.InstanceListItem[k].id === id) {
                this.InstanceListItem.splice(k, 1);
              }
            }
            for (let l = 0; l < this.AnnotationListItem.length; l++) {
              if (this.AnnotationListItem[l].id === id) {
                if (this.AnnotationListItem[l].annotation.annotation_id) {
                  this.DeleteIDList.push(
                    this.AnnotationListItem[l].annotation.annotation_id,
                  );
                  console.log(
                    this.AnnotationListItem[l].annotation.annotation_id,
                  );
                } else {
                  console.log('no id');
                }
                this.AnnotationListItem.splice(l, 1);
              }
            }

            this.fCanvas.remove(this.ObjectListItem[i]);
            this.ObjectListItem.splice(i, 1);
          }
        }
        this.isOD = false;
        this.isLabelingOn = false;
        this.isClassSettingOn = false;
        this.isToolClassOn = false;
      }
    },
    isToolISOnOff() {
      if (!this.isHosted) {
        return;
      }
      document.body.style.cursor = 'default';
      this.fCanvas.hoverCursor = 'default';
      this.isToolODOn = false;
      this.isToolISOn = !this.isToolISOn;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
      if (this.isToolISOn && !this.isIS) {
        this.getIS();
      } else if (!this.isToolISOn) {
        for (let i = 0; i < this.ObjectListItem.length; i++) {
          if (this.ObjectListItem[i].tool === 'IS') {
            let id = this.ObjectListItem[i].id;

            for (let j = 0; j < this.TagListItem.length; j++) {
              let tag = this.TagListItem[j];
              if (tag.id === id) {
                this.fCanvas.remove(tag);
                this.TagListItem.splice(j, 1);
              }
            }
            for (let k = 0; k < this.InstanceListItem.length; k++) {
              if (this.InstanceListItem[k].id === id) {
                this.InstanceListItem.splice(k, 1);
              }
            }
            for (let l = 0; l < this.AnnotationListItem.length; l++) {
              if (this.AnnotationListItem[l].id === id) {
                if (this.AnnotationListItem[l].annotation.annotation_id) {
                  this.DeleteIDList.push(
                    this.AnnotationListItem[l].annotation.annotation_id,
                  );
                  console.log(
                    this.AnnotationListItem[l].annotation.annotation_id,
                  );
                } else {
                  console.log('no id');
                }
                this.AnnotationListItem.splice(l, 1);
              }
            }

            this.fCanvas.remove(this.ObjectListItem[i]);
            this.ObjectListItem.splice(i, 1);
          }
        }
        this.isIS = false;
        this.isLabelingOn = false;
        this.isClassSettingOn = false;
        this.isToolClassOn = false;
      }
    },
    isToolSESOnOff() {
      if (!this.isHosted) {
        return;
      }
      document.body.style.cursor = 'default';
      this.fCanvas.hoverCursor = 'default';
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = !this.isToolSESOn;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
      if (this.isToolSESOn && !this.isSES) {
        this.getSES();
      } else if (!this.isToolSESOn) {
        for (let i = 0; i < this.ObjectListItem.length; i++) {
          if (this.ObjectListItem[i].tool === 'SES') {
            let id = this.ObjectListItem[i].id;

            for (let j = 0; j < this.TagListItem.length; j++) {
              let tag = this.TagListItem[j];
              if (tag.id === id) {
                this.fCanvas.remove(tag);
                this.TagListItem.splice(j, 1);
              }
            }
            for (let k = 0; k < this.InstanceListItem.length; k++) {
              if (this.InstanceListItem[k].id === id) {
                this.InstanceListItem.splice(k, 1);
              }
            }
            for (let l = 0; l < this.AnnotationListItem.length; l++) {
              if (this.AnnotationListItem[l].id === id) {
                if (this.AnnotationListItem[l].annotation.annotation_id) {
                  this.DeleteIDList.push(
                    this.AnnotationListItem[l].annotation.annotation_id,
                  );
                  console.log(
                    this.AnnotationListItem[l].annotation.annotation_id,
                  );
                } else {
                  console.log('no id');
                }
                this.AnnotationListItem.splice(l, 1);
              }
            }

            this.fCanvas.remove(this.ObjectListItem[i]);
            this.ObjectListItem.splice(i, 1);
          }
        }
        this.isSES = false;
        this.isLabelingOn = false;
        this.isClassSettingOn = false;
        this.isToolClassOn = false;
      }
    },

    isToolMagicwandOnOff() {
      //const _this = this;
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = !this.isToolMagicwandOn;
      /*this.isToolMagicwandOn = true;
      if (this.isToolMagicwandOn) {
        this.fCanvas.defaultCursor = 'pointer';
        this.fCanvas.hoverCursor = 'pointer';
        setInterval(function () {
          _this.hatchTick();
        }, 300);
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }*/
      if (this.isToolMagicwandOn) {
        //this.fCanvas.hoverCursor = 'crosshair';
        if (confirm('준비중입니다.')) {
          this.isToolMagicwandOn = false;
        } else {
          this.isToolMagicwandOn = false;
        }
      }
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolAutopointOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      //this.isToolAutopointOn = !this.isToolAutopointOn;
      this.isToolAutopointOn = true;
      /*if (this.isToolAutopointOn) {
        //this.fCanvas.defaultCursor = 'crosshair';
        //this.fCanvas.hoverCursor = 'crosshair';
        if (confirm('준비중입니다.')) {
          this.isToolAutopointOn = false;
        } else {
          this.isToolAutopointOn = false;
        }
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }*/
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolBoxingOnOff() {
      //document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      //this.isToolBoxingOn = !this.isToolBoxingOn;
      this.isToolBoxingOn = true;
      if (this.isToolBoxingOn) {
        this.fCanvas.defaultCursor = 'crosshair';
        this.fCanvas.hoverCursor = 'crosshair';
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolPolylineOnOff() {
      //document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      //this.isToolPolylineOn = !this.isToolPolylineOn;
      this.isToolPolylineOn = true;
      if (this.isToolPolylineOn) {
        this.fCanvas.defaultCursor = 'crosshair';
        this.fCanvas.hoverCursor = 'crosshair';
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolPolygonOnOff() {
      //document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      //this.isToolPolygonOn = !this.isToolPolygonOn;
      this.isToolPolygonOn = true;
      if (this.isToolPolygonOn) {
        this.fCanvas.defaultCursor = 'crosshair';
        this.fCanvas.hoverCursor = 'crosshair';
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;

      if (this.isToolPolygonOn) {
        this.toggleDrawPolygon();
      }
    },
    isToolPointOnOff() {
      //document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      //this.isToolPointOn = !this.isToolPointOn;
      this.isToolPointOn = true;
      if (this.isToolPointOn) {
        this.fCanvas.defaultCursor = 'crosshair';
        this.fCanvas.hoverCursor = 'crosshair';
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolDrawpenOnOff() {
      //document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      //this.isToolDrawpenOn = !this.isToolDrawpenOn;
      this.isToolDrawpenOn = true;
      if (this.isToolDrawpenOn) {
        //this.fCanvas.hoverCursor = 'brush';
        /*this.fCanvas.freeDrawingCursor = new fabric.Circle({
          left: -100,
          top: -100,
          radius: 10,
          fill: '#ffcc004D',
          stroke: 'black',
          originX: 'center',
          originY: 'center',
        });*/
        /*this.fCanvas.freeDrawingCursor =
          'url(' + this.getDrawCursor() + ') 10 10, crosshair';*/
        //this.fCanvas.hoverCursor = 'crosshair';
        if (confirm('준비중입니다.')) {
          this.isToolDrawpenOn = false;
        } else {
          this.isToolDrawpenOn = false;
        }
      }
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      /*if (this.isToolDrawpenOn) {
        //this.fCanvas.isDrawingMode = true; //1;
      } else {
        this.fCanvas.isDrawingMode = false;
        this.fCanvas.item(0).selectable = false;
      }*/
      //this.setDrawingMode();
    },
    getDrawCursor() {
      const circle = `
        <svg
          height="20"
          fill="#ffcc004D"
          viewBox="0 0 40 40"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r="20"
          />
        </svg>
      `;

      return `data:image/svg+xml;base64,${window.btoa(circle)}`;
    },
    isTool3DCubeOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      //this.isTool3DCubeOn = !this.isTool3DCubeOn;
      this.isTool3DCubeOn = true;
      if (this.isTool3DCubeOn) {
        //this.fCanvas.hoverCursor = 'crosshair';
        if (confirm('준비중입니다.')) {
          this.isTool3DCubeOn = false;
        } else {
          this.isTool3DCubeOn = false;
        }
      }
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolKeypointOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      //this.isToolKeypointOn = !this.isToolKeypointOn;
      this.isToolKeypointOn = true;
      if (this.isToolKeypointOn) {
        //this.fCanvas.hoverCursor = 'crosshair';
        if (confirm('준비중입니다.')) {
          this.isToolKeypointOn = false;
        } else {
          this.isToolKeypointOn = false;
        }
      }
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.fCanvas.isDrawingMode = false;
    },
    isToolSegmentOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      //this.isToolSegmentOn = !this.isToolSegmentOn;
      this.isToolSegmentOn = true;
      if (this.isToolSegmentOn) {
        this.fCanvas.defaultCursor = 'crosshair';
        this.fCanvas.hoverCursor = 'crosshair';
      } else {
        this.fCanvas.defaultCursor = 'default';
        this.fCanvas.hoverCursor = 'default';
      }
      this.fCanvas.isDrawingMode = false;
    },
    clearDatas() {
      this.ObjectListItem = [];
      this.InstanceListItem = [];
      this.AnnotationListItem = [];
      this.instanceClass = '';
      this.instanceGender = '';
      this.instanceAge = '';
    },
    resetTools() {
      document.body.style.cursor = 'default';
      this.fCanvas.isDrawingMode = false;
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = false;
      this.isToolPolylineOn = false;
      this.isToolPolygonOn = false;
      this.isToolPointOn = false;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
      this.isOD = false;
      this.isIS = false;
      this.isSES = false;
      this.isClassSettingOn = false;
    },
    selectImgFunction(index) {
      // save status
      //this.workStateSave();
      // clear instance, annotation
      console.log(index);
      this.clearDatas();
      // reset tools
      this.resetTools();
      let idCnt = 0;
      if (this.filters === '0') {
        if (index < 0) {
          index = this.DataListItem.length - 1;
        } else if (index >= this.DataListItem.length) {
          index = 0;
        }
        idCnt++;
      } else {
        if (this.currentImageIndex > index) {
          if (index >= 0) {
            for (let i = index; i >= 0; i--) {
              if (
                this.DataListItem[
                  i
                ].task_status.task_status_progress.toString() === this.filters
              ) {
                index = i;
                idCnt++;
                break;
              }
            }
          } else {
            for (let j = this.DataListItem.length - 1; j > index; j--) {
              if (
                this.DataListItem[
                  j
                ].task_status.task_status_progress.toString() === this.filters
              ) {
                index = j;
                idCnt++;
                break;
              }
            }
          }
        } else {
          if (index < this.DataListItem.length) {
            for (let k = index; k < this.DataListItem.length; k++) {
              if (
                this.DataListItem[
                  k
                ].task_status.task_status_progress.toString() === this.filters
              ) {
                index = k;
                idCnt++;
                break;
              }
            }
          } else {
            for (let l = 0; l < index; l++) {
              if (
                this.DataListItem[
                  l
                ].task_status.task_status_progress.toString() === this.filters
              ) {
                index = l;
                idCnt++;
                break;
              }
            }
          }
        }
      }
      if (idCnt === 0) {
        return;
      }
      this.selectImg = this.DataListItem[index].task_detail.image_name;
      this.selectImgName = this.DataListItem[index].task_name;
      this.selectImgStatus =
        this.DataListItem[index].task_status.task_status_progress;
      this.currentImageIndex = index;
      this.imgOriginWidth = this.DataListItem[index].task_detail.image_width;
      this.imgOriginHeight = this.DataListItem[index].task_detail.image_height;
      //this.openImage();
      this.openFabImage();
      this.openAssignee(this.currentImageIndex);
      this.setZoomCenter();
      //console.log(this.DataListItem[this.currentImageIndex].task_id);
    },
    async imageStatusWorking() {
      let item = this.DataListItem[this.currentImageIndex];
      let projectId = item.task_project.project_id;
      let taskId = item.task_id;
      await axios
        .post(
          HOST +
            '/rest/api/1/task/status/update?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
          {
            task_status_progress: 2,
            comment_body: '',
          },
        )
        .then(response => {
          console.log('working');
          console.log(response.data);
        });
      this.DataListItem[
        this.currentImageIndex
      ].task_status.task_status_progress = 2;
    },
    async imageStatusComplete() {
      let item = this.DataListItem[this.currentImageIndex];
      let projectId = item.task_project.project_id;
      let taskId = item.task_id;
      await this.workStateSave();
      await axios
        .post(
          HOST +
            '/rest/api/1/task/status/update?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
          {
            task_status_progress: 3,
            comment_body: '',
          },
        )
        .then(response => {
          console.log('complete');
          console.log(response.data);
        });
      this.DataListItem[
        this.currentImageIndex
      ].task_status.task_status_progress = 3;
    },
    taskStatus(progress) {
      let task = '';
      switch (progress) {
        case 1:
          task = '미작업';
          break;
        case 2:
          task = '작업중';
          break;
        case 3:
          task = '완료';
          break;
        case 4:
          task = '반려';
          break;
        default:
          task = '미작업';
          break;
      }
      return task;
    },
    selectLabelingAssigneeFunction(index) {
      let workerId = this.DataListAssignee[index].user_id;
      let workerName = this.DataListAssignee[index].user_display_name;
      let workerMail = this.DataListAssignee[index].user_email;
      if (confirm("라벨링 담당자를 '" + workerName + "'로 변경하시겠습니까?")) {
        let item = this.DataListItem[this.currentImageIndex];
        let taskId = item.task_id;
        let projectId = item.task_project.project_id;
        item.task_worker.user_id = workerId;
        item.task_worker.user_display_name = workerName;
        item.task_worker.user_email = workerMail;
        axios.post(
          HOST +
            '/rest/api/1/task/update?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
          item,
        );
        this.DataListItem[this.currentImageIndex].task_worker.user_id =
          workerId;
        this.DataListItem[
          this.currentImageIndex
        ].task_worker.user_display_name = workerName;
        this.selectCollectAssignee = workerName;
        this.isCollectAssigneeOn = !this.isCollectAssigneeOn;
      }
    },
    selectInspectAssigneeFunction(index) {
      let workerId = this.DataListAssignee[index].user_id;
      let workerName = this.DataListAssignee[index].user_display_name;
      let workerMail = this.DataListAssignee[index].user_email;
      if (confirm("검수 담당자를 '" + workerName + "'로 변경하시겠습니까?'")) {
        let item = this.DataListItem[this.currentImageIndex];
        let taskId = item.task_id;
        let projectId = item.task_project.project_id;
        item.task_validator.user_id = workerId;
        item.task_validator.user_display_name = workerName;
        item.task_validator.user_email = workerMail;
        axios.post(
          HOST +
            '/rest/api/1/task/update?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
          item,
        );
        this.DataListItem[this.currentImageIndex].task_validator.user_id =
          workerId;
        this.DataListItem[
          this.currentImageIndex
        ].task_validator.user_display_name = workerName;
        this.selectInspectAssignee = workerName;
        this.isInspectAssigneeOn = !this.isInspectAssigneeOn;
      }
    },
    imgSize(size) {
      let num = '';
      if (size > 1000) {
        num = Math.floor(size / 1000) + ',' + (size % 1000);
      } else {
        num = size;
      }
      return num + 'KB';
    },
    itemLength() {
      let cnt = 0;
      for (let i = 0; i < this.DataListItem.length; i++) {
        if (this.filters === '0') {
          cnt++;
        } else if (
          this.filters ===
          this.DataListItem[i].task_status.task_status_progress.toString()
        ) {
          cnt++;
        }
      }
      return cnt;
    },
    zoomAdjustment() {
      let zoom = document.getElementById('zoom-range').value;
      console.log('zoom' + zoom + ', ');
      zoom *= this.imgRatio;
      console.log(zoom / 100);
      let width = this.inWidth * (zoom / 100);
      let height = this.inHeight * (zoom / 100);
      this.fCanvas.setWidth(width);
      this.fCanvas.setHeight(height);
      this.fCanvas.setZoom(zoom / 100);
    },
    setZoomCenter() {
      document.getElementById('zoom-range').value = 100;
      this.fCanvas.setWidth(this.inWidth * this.imgRatio);
      this.fCanvas.setHeight(this.inHeight * this.imgRatio);
      this.fCanvas.setZoom(this.imgRatio);
    },
    imgDownload(fileName) {
      const _this = this;
      //let download = document.getElementById('download');
      let download = document.createElement('a');
      /*this.fCanvas.setWidth(this.inWidth);
      this.fCanvas.setHeight(this.inHeight);
      this.fCanvas.setZoom(1);*/
      download.setAttribute(
        'href',
        this.fCanvas.toDataURL({
          format: 'png',
          quality: 1.0,
          multiplier: 1 / _this.imgRatio,
        }),
      );
      download.setAttribute('download', fileName);
      download.click();
      /*this.fCanvas.setWidth(this.inWidth * this.imgRatio);
      this.fCanvas.setHeight(this.inHeight * this.imgRatio);
      this.fCanvas.setZoom(this.imgRatio);*/
    },
    workDataDownload(data, fileName, contentType) {
      let download = document.createElement('a');
      /*download.setAttribute('href', data);
      download.setAttribute(
        'download',
        this.DataListItem[this.currentImageIndex].task_name,
      );*/
      let file = new Blob([data], { type: contentType });
      download.href = URL.createObjectURL(file);
      download.download = fileName;
      download.click();
    },
    async workStateSave() {
      //console.log(JSON.stringify(this.fCanvas));
      let item = this.DataListItem[this.currentImageIndex];
      let projectId = item.task_project.project_id;
      let taskId = item.task_id;
      //const _this = this;
      /*for (let i = 0; i < _this.AnnotationListItem.length; i++) {
        console.log(_this.AnnotationListItem[i].annotation);
      }*/
      for (let i = 0; i < this.DeleteIDList.length; i++) {
        await axios
          .delete(
            HOST +
              '/rest/api/1/task/annotation/delete?project_id=' +
              projectId +
              '&task_id=' +
              taskId +
              '&annotation_id=' +
              this.DeleteIDList[i],
          )
          .then(response => {
            console.log(response.data);
          });
      }
      await axios
        .get(
          HOST +
            '/rest/api/1/task/annotation?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
        )
        .then(async response => {
          //console.log(response.status);
          //console.log(response.data.datas);
          let cnt = response.data.datas.length;
          /*update 할 annotation 찾는 방법?
            1. 서버 데이터 loof - 로컬 데이터 loof 매칭
            -> 같으면 update
            -> 로컬 데이터 남을 경우 create 시점? 서버 데이터 끝난 후?
            -> 매칭 안된 서버 데이터 남을 경우? Delete 시점? 남은 자료 구분 방법?
            2. 로컬 데이터 loof - 서버 데이터 loof 매칭
            -> 같으면 update
            -> 서버 데이터 남을 경우? Delete? 남은 자료 구분 방법?
            -> 매칭 안된 로컬 데이터 남을 경우? create 시점? 남은 자료 구분 방법?
            ***3. Delete 별도로
            -> Save 시, Delete를 1번으로 진행한 후, update 및 create 진행
           */
          for (let i = 0; i < this.AnnotationListItem.length; i++) {
            let data = this.AnnotationListItem[i].annotation;
            //console.log(data);
            if (cnt > 0) {
              //update
              for (let j = 0; j < response.data.datas.length; j++) {
                //console.log('update');
                if (
                  data.annotation_id === response.data.datas[j].annotation_id
                ) {
                  //console.log('match');
                  await axios
                    .post(
                      HOST +
                        '/rest/api/1/task/annotation/update?project_id=' +
                        projectId +
                        '&task_id=' +
                        taskId,
                      data,
                    )
                    .then(response => {
                      console.log('update');
                      console.log(response.data);
                    });
                  cnt--;
                }
              }
            } else {
              console.log('create');
              let url =
                HOST +
                '/rest/api/1/task/annotation/create?project_id=' +
                projectId +
                '&task_id=' +
                taskId;
              //create
              await axios.post(url, data).then(response => {
                console.log('create');
                console.log(response.data);
              });
            }
          }
        });
      await this.imageStatusWorking();
    },
    openFabImage() {
      const _this = this;
      this.fCanvas.clear();
      if (this.isHosted) {
        let item = this.DataListItem[this.currentImageIndex];
        let task_id = item.task_id;
        if (this.isOpen) {
          task_id = this.taskId;
          this.isOpen = false;
        }
        this.imgSrc =
          this.hostUrl +
          '/rest/api/1/task/data?project_id=' +
          item.task_project.project_id +
          '&task_id=' +
          task_id;
        axios
          .get(
            HOST +
              '/rest/api/1/task/annotation?project_id=' +
              item.task_project.project_id +
              '&task_id=' +
              task_id +
              '&maxResults=500',
          )
          .then(response => {
            //console.log(response.status);
            console.log('openImage');
            for (let j = 0; j < response.data.datas.length; j++) {
              let item = response.data.datas[j];
              if (item.annotation_id) {
                //console.log(item);
                /*_this.AnnotationListItem.push({
                  id: _this.objId,
                  annotation: item,
                });
                _this.objId++;*/
                if (item.annotation_type.annotation_type_id === 1) {
                  let coord = {
                    left: item.annotation_data[0],
                    top: item.annotation_data[1],
                    width: item.annotation_data[2],
                    height: item.annotation_data[3],
                  };
                  _this.drawBoxing(
                    'bbox',
                    coord,
                    '#00ffcc',
                    item.annotation_id,
                  );
                } else if (
                  item.annotation_type.annotation_type_id === 2 ||
                  item.annotation_type.annotation_type_id === 3
                ) {
                  let items = item.annotation_data;
                  let coordinates = [];
                  for (let l = 0; l < items.length; l++) {
                    coordinates.push(new fabric.Point(items[l++], items[l]));
                  }
                  console.log(coordinates);
                  _this.drawPolyItem(
                    item.annotation_type.annotation_type_name,
                    coordinates,
                    item.annotation_type.annotation_type_name,
                    '#00ffcc',
                    item.annotation_id,
                    item.annotation_type.annotation_type_id,
                  );
                }
              }
            }
          });
      } else {
        this.imgSrc = require(`@/assets/images/studio/${this.selectImg}`);
      }
      fabric.Image.fromURL(
        this.imgSrc,
        function (oImg) {
          let width = oImg.width;
          let height = oImg.height;
          if (width > height) {
            _this.imgRatio = 810 / width;
            if (height * _this.imgRatio > 540) {
              _this.imgRatio = 540 / height;
            }
          } else {
            _this.imgRatio = 540 / height;
            if (width * _this.imgRatio > 810) {
              _this.imgRatio = 810 / width;
            }
          }
          _this.inWidth = width;
          _this.inHeight = height;
          oImg.selectable = false;
          //_this.fCanvas.add(oImg);
          _this.fCanvas.setBackgroundImage(oImg);
          // Define
          /*canvas.setBackgroundImage(imageUrl, canvas.renderAll.bind(canvas), {
            // Optionally add an opacity lvl to the image
            backgroundImageOpacity: 0.5,
            // should the image be resized to fit the container?
            backgroundImageStretch: true
          });*/
          _this.fCanvas.setWidth(width * _this.imgRatio);
          _this.fCanvas.setHeight(height * _this.imgRatio);
          _this.canvasWidth = width * _this.imgRatio;
          _this.canvasHeight = height * _this.imgRatio;
          _this.fCanvas.setZoom(_this.imgRatio);
        },
        { crossOrigin: 'anonymous' },
      );
    },
    openAssignee(index) {
      if (
        this.DataListItem[index].task_worker != null &&
        this.DataListItem[index].task_worker.user_display_name != null
      ) {
        this.selectLabelingAssignee =
          this.DataListItem[index].task_worker.user_display_name;
      } else {
        this.selectLabelingAssignee = '없음';
      }
      if (
        this.DataListItem[index].task_validator != null &&
        this.DataListItem[index].task_validator.user_display_name != null
      ) {
        this.selectInspectAssignee =
          this.DataListItem[index].task_validator.user_display_name;
      } else {
        this.selectInspectAssignee = '없음';
      }
    },
    setClass(event) {
      let thisBtn = document.getElementById(event.target.id);
      let elseBtn = document.getElementsByClassName('class-contents-obj');
      for (let i = 0; i < elseBtn.length; i++) {
        elseBtn.item(i).classList.remove('active');
      }
      thisBtn.classList.add('active');
      let className = event.target.id;
      let cId = 0;
      //console.log(className);
      //console.log('class: ' + className);
      this.InstanceListItem[this.instanceIndex].className = className;
      let setName;
      switch (className) {
        case 'human':
          setName = '인간';
          cId = 0;
          break;
        default:
          setName = '인간';
          cId = 0;
          break;
      }
      this.InstanceListItem[this.instanceIndex].cId = cId;
      this.AnnotationListItem[
        this.instanceIndex
      ].annotation.annotation_category.annotation_category_id = cId;
      this.instanceClass = setName;
    },
    setGender(event) {
      let thisBtn = document.getElementById(event.target.id);
      let elseBtn = document.getElementsByClassName('class-contents-gender');
      for (let i = 0; i < elseBtn.length; i++) {
        elseBtn.item(i).classList.remove('active');
      }
      thisBtn.classList.add('active');
      let gender = event.target.id;
      //console.log(gender);
      this.InstanceListItem[this.instanceIndex].gender = gender;
      let setGender;
      switch (gender) {
        case 'female':
          setGender = '여자';
          break;
        case 'male':
          setGender = '남자';
          break;
        case 'unknown':
          setGender = '알 수 없음';
          break;
        default:
          setGender = '알 수 없음';
          break;
      }
      this.InstanceListItem[this.instanceIndex].attrs.push({
        attr_id: 1,
        attr_type: 1,
        attr_val: gender,
      });
      this.instanceGender = setGender;
    },
    setAge(event) {
      let thisBtn = document.getElementById(event.target.id);
      let elseBtn = document.getElementsByClassName('class-contents-age');
      for (let i = 0; i < elseBtn.length; i++) {
        elseBtn.item(i).classList.remove('active');
      }
      thisBtn.classList.add('active');
      let age = event.target.id;
      //console.log(age);
      //console.log('age: ' + age);
      this.InstanceListItem[this.instanceIndex].age = age;
      let setAge;
      switch (age) {
        case 'baby':
          setAge = '아기';
          break;
        case 'children':
          setAge = '어린이';
          break;
        case 'teenager':
          setAge = '청소년';
          break;
        case 'youth':
          setAge = '청년';
          break;
        case 'middle':
          setAge = '중년';
          break;
        case 'old':
          setAge = '노년';
          break;
        case 'unknown':
          setAge = '알 수 없음';
          break;
        default:
          setAge = '알 수 없음';
          break;
      }
      this.InstanceListItem[this.instanceIndex].attrs.push({
        attr_id: 2,
        attr_type: 1,
        attr_val: age,
      });
      this.instanceAge = setAge;
    },
    setAnnotation() {
      for (let i = 0; i < this.AnnotationListItem.length; i++) {
        if (
          this.AnnotationListItem[i].id ===
          this.InstanceListItem[this.instanceIndex].id
        ) {
          this.AnnotationListItem[
            i
          ].annotation.annotation_category.annotation_category_attributes =
            this.InstanceListItem[this.instanceIndex].attrs;
        }
      }
      for (let i = 0; i < this.ObjectListItem.length; i++) {
        if (
          this.ObjectListItem[i].id ===
          this.InstanceListItem[this.instanceIndex].id
        ) {
          this.ObjectListItem[i].strokeDashArray = [0, 0];
          this.fCanvas.setActiveObject(this.ObjectListItem[i]);
        } else {
          //this.ObjectListItem[i].strokeDashArray = [5, 5];
        }
      }
      this.fCanvas.renderAll();
    },
    scrollUp() {},
    scrollDown() {
      //select-tool
    },
    beforeDownCanvas(options) {
      console.log('before');
      if (!this.isObjectSelectOn && this.isToolDrawpenOn) {
        console.log(options);
        this.setDrawingMode();
      }
    },
    downCanvas(options) {
      //console.log('down');
      //console.log(this.isMove);
      if (this.isObjectSelectOn || this.isMove) {
        return;
      }
      //let event = options.e;
      let pointer = this.fCanvas.getPointer(options);
      this.startX = pointer.x;
      this.startY = pointer.y;
      //this.stX = pointer.x;
      //this.stY = pointer.y;
      if (this.isToolMoveOn) {
        this.isDown = true;
        //console.log('move');
      } /*else if (this.isToolTagOn) {
      } else if (this.isToolClassOn) {
      } else if (this.isToolResetOn) {
      }*/ else if (this.isToolBoxingOn) {
        this.tempRect = new fabric.Rect({
          left: pointer.x,
          top: pointer.y,
          width: 0,
          height: 0,
          strokeWidth: 2 * (1 / this.imgRatio),
          stroke: 'rgba(0,0,0,0.3)',
          strokeDashArray: [5 * (1 / this.imgRatio), 5 * (1 / this.imgRatio)],
          fill: 'transparent',
        });
        this.fCanvas.add(this.tempRect);
        this.isDown = true;
      } else if (
        this.isToolPolylineOn ||
        //this.isToolPolygonOn ||
        this.isToolSegmentOn
      ) {
        this.isDown = true;
        if (this.isEndPolyline) {
          this.tempLine = new fabric.Polyline(this.polylinePoints, {
            fill: 'transparent',
            selectable: true,
            strokeWidth: 2,
            stroke: 'rgba(0,0,0,0.5)',
            objectCaching: false,
            hoverCursor: 'pointer',
            hasBorders: false,
          });
          this.tmpLine = new fabric.Line(
            [this.startX, this.startY, this.startX, this.startY],
            {
              strokeWidth: 2,
              stroke: 'rgba(0,0,0,0.5)',
            },
          );
          this.fCanvas.add(this.tempLine);
          this.fCanvas.add(this.tmpLine);
          this.isEndPolyline = false;
        }
      } else if (this.isToolPolygonOn) {
        if (this.drawMode) {
          if (options.target && options.target.id === this.pointArray[0].id) {
            // when click on the first point
            this.generatePolygon(this.pointArray);
          } else {
            this.addPoint(options);
          }
        } else {
          this.toggleDrawPolygon();
        }
        /*let evt = options.e;
        if (evt.altKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }*/
      } else if (this.isToolDrawpenOn) {
        console.log(this.fCanvas.isDrawingMode);
        let opt = { pointer, e: {} };
        this.fCanvas.freeDrawingBrush.onMouseDown(pointer, opt);
      } else if (this.isToolMagicwandOn) {
        //console.log(options.e.button);
        if (options.e.button === 0) {
          this.allowDraw = true;
          this.addMode = options.ctrlKey;
          this.downPoint = pointer;
          this.drawMask(this.downPoint.x, this.downPoint.y);
        } else {
          this.allowDraw = false;
          this.addMode = false;
          this.oldMask = null;
        }
      } /*else if (this.isToolPolygonOn) {
        if (this.drawMode) {
          if (options.target && options.target.id === this.pointArray[0].id) {
            // when click on the first point
            generatePolygon(pointArray);
          } else {
            addPoint(options);
          }
        }

        let evt = options.e;
        if (evt.altKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      } /*else if (this.isToolPointOn) {
      } else if (this.isToolPointOn) {
      } else if (this.isTool3DCubeOn) {
      } else if (this.isToolMagicwandOn) {
      } else if (this.isToolKeypointOn) {
      } else if (this.isToolAutopointOn) {
      } else {
      }*/
    },
    // eslint-disable-next-line no-unused-vars
    moveCanvas(options) {
      //let event = options.e;
      if (this.isObjectSelectOn || this.isObjectMoveOn || this.isMove) {
        return;
      }
      let pointer = this.fCanvas.getPointer(options);
      let nowX = pointer.x;
      let nowY = pointer.y;
      //console.log(nowX + ', ' + nowY);
      //this.canvasDraw(nowX, nowY);
      //this.stX = nowX;
      //this.stY = nowY;
      /*this.line.set({ x2: event.screenX, y2: event.screenY });
      this.fCanvas.renderAll();*/
      //const _this = this;
      if (this.isToolMoveOn && this.isDown) {
        /*let centerX = this.fCanvas.getCenter().left;
        let centerY = this.fCanvas.getCenter().top;
        console.log(centerX + centerY);
        console.log(this.fCanvas.getCenter());*/
        /*this.fCanvas.absolutePan({
          x: centerX + (nowX - this.startX),
          y: centerY + (nowY - this.startY),
        });*/
      } else if (this.isToolBoxingOn && this.isDown) {
        this.setDragBox(nowX, nowY);
      } else if (
        (this.isToolPolylineOn ||
          //this.isToolPolygonOn ||
          this.isToolSegmentOn) &&
        this.isDown
      ) {
        this.setDragLine(nowX, nowY);
      } else if (this.isToolPolygonOn) {
        /*if (this.isDragging) {
          let e = options.e;
          this.viewportTransform[4] += e.clientX - this.lastPosX;
          this.viewportTransform[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }*/
        if (this.drawMode) {
          if (this.activeLine && this.activeLine.class === 'line') {
            //const pointer = this.fCanvas.getPointer(options.e);
            this.activeLine.set({
              x2: pointer.x,
              y2: pointer.y,
            });
            const points = this.activeShape.get('points');
            points[this.pointArray.length] = {
              x: pointer.x,
              y: pointer.y,
            };
            this.activeShape.set({
              points,
            });
          }
          this.fCanvas.renderAll();
        }
      } else if (this.isToolDrawpenOn) {
        this.paintPointList.push(new fabric.Point(pointer.x, pointer.y));
      } else if (this.isToolMagicwandOn) {
        if (this.allowDraw) {
          let p = pointer; //this.getMousePosition(options);
          if (p.x !== this.downPoint.x || p.y !== this.downPoint.y) {
            let dx = p.x - this.downPoint.x,
              dy = p.y - this.downPoint.y,
              len = Math.sqrt(dx * dx + dy * dy),
              adx = Math.abs(dx),
              ady = Math.abs(dy),
              sign = adx > ady ? dx / adx : dy / ady;
            sign = sign < 0 ? sign / 5 : sign / 3;
            let thres = Math.min(
              Math.max(this.colorThreshold + Math.floor(sign * len), 1),
              255,
            );
            //var thres = Math.min(colorThreshold + Math.floor(len / 3), 255);
            if (thres !== this.currentThreshold) {
              this.currentThreshold = thres;
              //this.drawMask(this.downPoint.x, this.downPoint.y);
            }
          }
        }
      } /*else if (this.isToolPolygonOn) {
        if (this.isDragging) {
          let e = options.e;
          this.viewportTransform[4] += e.clientX - this.lastPosX;
          this.viewportTransform[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
        if (drawMode) {
          if (activeLine && activeLine.class === 'line') {
            const pointer = canvas.getPointer(options.e);
            activeLine.set({
              x2: pointer.x,
              y2: pointer.y
            });
            const points = activeShape.get('points');
            points[pointArray.length] = {
              x: pointer.x,
              y: pointer.y,
            };
            activeShape.set({
              points
            });
          }
          canvas.renderAll();
        }
      }*/
    },
    upCanvas(options) {
      //let event = options.e;
      console.log('up');
      let pointer = this.fCanvas.getPointer(options);
      if (this.isObjectSelectOn || this.isObjectMoveOn) {
        this.isObjectMoveOn = false;
        return;
      }
      //console.log(this.isMove);
      if (this.isMove) {
        this.isMove = !this.isMove;
        //console.log(this.isMove);
        return;
      }
      this.endX = pointer.x;
      this.endY = pointer.y;
      if (this.isToolMoveOn) {
        this.isDown = false;
      } /*else if (this.isToolTagOn) {
      } else if (this.isToolClassOn) {
      } else if (this.isToolResetOn) {
      } else if (this.isToolODOn) {
      } else if (this.isToolISOn) {
      } else if (this.isToolSESOn) {
      }*/ else if (
        this.isToolBoxingOn &&
        !this.isObjectSelectOn &&
        !this.isObjectMoveOn
      ) {
        if (
          Math.abs(this.endX - this.startX) <= 1 &&
          Math.abs(this.endY - this.startY) <= 1
        ) {
          //this.boxingPoints.push({ x: this.endX, y: this.endY });
          //this.drawPoints();
        } else {
          this.setRect();
          //this.drawBoxing();
        }
        this.isDown = false;
      } else if (
        this.isToolPolylineOn ||
        //this.isToolPolygonOn ||
        this.isToolSegmentOn
      ) {
        //this.polylinePoints.push({ x: this.endX, y: this.endY });
        //this.drawPolyline();
        this.setPolyLine();
        //this.drawPoints();
      } else if (this.isToolPolygonOn) {
        this.isDragging = false;
        this.selection = true;
      } else if (this.isToolDrawpenOn) {
        //console.log(this.fCanvas.isDrawingMode);
        //this.drawBrush();
      } /*else if (this.isToolPolygonOn) {
        this.isDragging = false;
        this.selection = true;
      }*/ else if (this.isToolPointOn) {
        this.drawPoints(pointer);
      } else if (this.isToolKeypointOn) {
        this.drawKeypoint();
      } else if (this.isToolMagicwandOn) {
        this.allowDraw = false;
        this.addMode = false;
        this.oldMask = null;
        this.currentThreshold = this.colorThreshold;
      } else if (this.isToolAutopointOn) {
        //this.autoPointList.push({ x: this.endX, y: this.endY });
        this.drawPoints(pointer);
      } /*else if (this.isTool3DCubeOn) {
      } else if (this.isToolMagicwandOn) {
      } else {
      }*/
    },
    outCanvas() {
      this.fCanvas.discardActiveObject();
    },
    createSelection() {},
    updateSelection() {},
    beforeClearSelection() {},
    clearSelection() {},
    // eslint-disable-next-line no-unused-vars
    movingObject(options) {
      //let event = options.e;
      console.log('moving');
      this.isObjectMoveOn = true;
      this.isMove = true;
      //console.log(options.target.type);
      if (options.target.type === 'rect') {
        this.positionX = options.target.left;
        this.positionY = options.target.top;
        for (let i = 0; i < this.TagListItem.length; i++) {
          let tag = this.TagListItem[i];
          if (tag.id === options.target.id) {
            //tag.left = options.target.left - tag.height / 2;
            //tag.top = options.target.top - tag.width / 2;
            tag.left =
              options.target.left + options.target.width / 2 - tag.width / 2;
            tag.top =
              options.target.top + options.target.height / 2 - tag.height / 2;
          }
        }
        //options.target.setCoords();
        //console.log(this.instanceWidth + ', ' + this.instanceHeight);
        this.setDataImage(options.target);
      } else if (
        options.target.type === 'polygon' ||
        options.target.type === 'segment'
      ) {
        let polygon = options.target;
        let matrix = polygon.calcTransformMatrix();
        let moveX = options.target.left - this.positionX;
        let moveY = options.target.top - this.positionY;
        this.positionX = options.target.left;
        this.positionY = options.target.top;
        const object = options.target;
        object._calcDimensions();
        object.setCoords();
        options.target.pathOffset = {
          x: options.target.left + options.target.width / 2,
          y: options.target.top + options.target.height / 2,
        };
        let transformedPoints = polygon
          .get('points')
          .map(function (p) {
            return new fabric.Point(p.x + moveX, p.y + moveY);
          })
          .map(function (p) {
            return fabric.util.transformPoint(p, matrix, true);
          });
        let circles = transformedPoints.map(function (p) {
          return new fabric.Point(p.x, p.y);
        });
        polygon.set({
          points: circles,
        });
        for (let i = 0; i < this.TagListItem.length; i++) {
          let tag = this.TagListItem[i];
          if (tag.id === options.target.id) {
            //tag.left = options.target.points[0].x - tag.height / 2;
            //tag.top = options.target.points[0].y - tag.width / 2;
            tag.left =
              options.target.left + options.target.width / 2 - tag.width / 2;
            tag.top =
              options.target.top + options.target.height / 2 - tag.height / 2;
          }
        }
        //this.setDataImage(options.target);
      } else if (options.target.tool === 'keypoint') {
        let p = options.target;
        p.line1 && p.line1.set({ x2: p.left, y2: p.top });
        p.line2 && p.line2.set({ x1: p.left, y1: p.top });
        p.line3 && p.line3.set({ x1: p.left, y1: p.top });
        p.line4 && p.line4.set({ x1: p.left, y1: p.top });
      }
      this.fCanvas.renderAll();
    },
    scalingObject(options) {
      console.log('scaling');
      if (options.target.type === 'rect') {
        this.positionX = options.target.left;
        this.positionY = options.target.top;
        this.instanceWidth = options.target.width * options.target.scaleX;
        this.instanceHeight = options.target.height * options.target.scaleY;
        let coords = {
          left: options.target.left,
          top: options.target.top,
          width: options.target.width * options.target.scaleX,
          height: options.target.height * options.target.scaleY,
        };
        options.target.set({
          width: options.target.width * options.target.scaleX,
          height: options.target.height * options.target.scaleY,
          scaleX: 1,
          scaleY: 1,
        });
        for (let i = 0; i < this.AnnotationListItem.length; i++) {
          if (this.AnnotationListItem[i].id === options.target.id) {
            this.AnnotationListItem[i].annotation.annotation_data = [
              coords.left,
              coords.top,
              coords.width,
              coords.height,
            ];
            //console.log(this.AnnotationListItem[i]);
          }
        }
        //console.log(options.target);
        //options.target.strokeWidth = 2 * (1 / this.imgRatio);
        this.setDataImage(coords);
        this.fCanvas.renderAll();
      }
    },
    modifyObject(options) {
      let polygon = options.target;
      let matrix = polygon.calcTransformMatrix();
      let moveX = options.target.left - this.positionX;
      let moveY = options.target.top - this.positionY;
      this.positionX = options.target.left;
      this.positionY = options.target.top;
      const object = options.target;
      object._calcDimensions();
      object.setCoords();
      options.target.pathOffset = {
        x: options.target.left + options.target.width / 2,
        y: options.target.top + options.target.height / 2,
      };
      let transformedPoints = polygon
        .get('points')
        .map(function (p) {
          /*return new fabric.Point(
            p.x - polygon.pathOffset.x,
            p.y - polygon.pathOffset.y,
          );*/
          return new fabric.Point(p.x + moveX, p.y + moveY);
        })
        .map(function (p) {
          return fabric.util.transformPoint(p, matrix, true);
        });
      /*let transformedPoints = polygon
        .get('points')
        .map(function (p) {
          return new fabric.Point(
            (p.x - polygon.pathOffset.x) / polygon.width,
            (p.y - polygon.pathOffset.y) / polygon.height,
          );
        })
        .map(function (p) {
          return fabric.util.transformPoint(p, matrix);
        });*/
      /*let width = polygon.width;
      let height = polygon.height;
      let scaleX = polygon.scaleX;
      let scaleY = polygon.scaleY;

      polygon.set({
        width: width * scaleX,
        height: height * scaleY,
        scaleX: 1,
        scaleY: 1,
      });*/
      /*let circles = transformedPoints.map(function (p) {
        return new fabric.Circle({
          left: p.x,
          top: p.y,
          radius: 3,
          fill: 'transparent',
          originX: 'center',
          originY: 'center',
          hasControls: false,
          hasBorders: false,
          selectable: false,
        });
      });*/
      let circles = transformedPoints.map(function (p) {
        return new fabric.Point(p.x, p.y);
      });
      polygon.set({
        points: circles,
      });
      for (let i = 0; i < this.TagListItem.length; i++) {
        let tag = this.TagListItem[i];
        if (tag.id === options.target.id) {
          for (let j = 0; j < options.target.points.length; j++) {
            //tag.left = options.target.points[0].x - tag.height / 2;
            //tag.top = options.target.points[0].y - tag.width / 2;
            tag.left =
              options.target.left + options.target.width / 2 - tag.width / 2;
            tag.top =
              options.target.top + options.target.height / 2 - tag.height / 2;
          }
        }
      }
      this.fCanvas.renderAll();
      /*this.fCanvas.remove(options.target);
      this.fCanvas
        //.clear()
        .add(polygon)
        .add.apply(this.fCanvas, circles)
        .setActiveObject(polygon)
        .renderAll();*/
    },
    selectObject(options) {
      //let event = options.e;
      //console.log('select');
      //console.log(options.target.type);
      //console.log(options.target);
      this.isObjectSelectOn = true;
      this.objSelected = options.target;
      this.positionX = options.target.left;
      this.positionY = options.target.top;
      this.instanceWidth = options.target.width;
      this.instanceHeight = options.target.height;
      options.target.strokeDashArray = [0, 0];
      let color = options.target.color;
      options.target.stroke = color;
      if (options.target.type === 'rect') {
        this.isBbox = true;
      }
      if (options.target.type === 'polyline') {
        options.target.fill = 'transparent';
      } else {
        //let color = options.target.color;
        //options.target.stroke = color;
        options.target.fill = color + '4D';
      }
      if (options.target.type === 'polygon') {
        //console.log(options.target.edit);
        //console.log(options.target);
        //this.Edit(options.target);
        options.target.hasBorders = true;
        options.target.edit = true;
        options.target.isMoving = true;
        this.editPolygon(options.target);
      }
      if (options.target.tool === 'brush') {
        /*this.fCanvas.isDrawingMode = false;
        this.fCanvas.freeDrawingBrush.width = 0;
        this.fCanvas.freeDrawingBrush.color = 'transparent';*/
        this.fCanvas.clipTo = function (ctx) {
          ctx.save();
          options.target.render(ctx);
          ctx.restore();
        };
      }
      /*if (
        this.isToolBoxingOn ||
        this.isToolODOn ||
        this.isToolISOn ||
        this.isToolSESOn ||
        this.isToolPolygonOn ||
        this.isToolSegmentOn
      ) {*/
      if (options.target.type === 'rect') {
        this.setDataImage(options.target);
      }
      //}
      //this.fCanvas.renderAll();
      //this.setData();

      let index = 0;
      for (let i = 0; i < this.InstanceListItem.length; i++) {
        if (this.InstanceListItem[i].id === options.target.id) {
          index = i;
        }
      }
      let thisBtn = document.getElementById('instance' + index);
      let elseBtn = document.getElementsByClassName('instance-detail');
      if (!this.isClassSettingOn || !this.isToolClassOn) {
        for (let i = 0; i < elseBtn.length; i++) {
          elseBtn.item(i).classList.remove('active');
        }
        if (thisBtn) {
          thisBtn.classList.add('active');
        }
      } else {
        if (thisBtn) {
          thisBtn.classList.remove('active');
        }
      }

      console.log('select: ' + options.target.id);
    },
    deselectObject(options) {
      if (options.target != null) {
        //options.target.fill = 'rgba(0,0,0,0)';
        //options.target.strokeOpacity = '.5';
        let color = options.target.color;
        options.target.stroke = color + '80';
        options.target.fill = 'transparent';
        if (options.target.type === 'segment') {
          options.target.stroke = color;
          //options.target.fill = color;
        }
        if (
          options.target.type === 'polyline' ||
          options.target.type === 'polygon'
        ) {
          options.target.fill = 'transparent';
        } else {
          //let color = options.target.color;
          //options.target.stroke = color;
          options.target.fill = color + '4D';
        }
        if (options.target.type === 'polygon') {
          //console.log(options.target.edit);
          //console.log(options.target);
          //this.Edit(options.target);
          options.target.hasBorders = false;
          options.target.edit = false;
        }
        if (options.target.tool === 'brush') {
          /*this.fCanvas.isDrawingMode = true;
          this.fCanvas.freeDrawingBrush.width = 10;
          this.fCanvas.freeDrawingBrush.color = '#ffcc00';*/
        }
        /*options.target.strokeDashArray = [
          5 * (1 / this.imgRatio),
          5 * (1 / this.imgRatio),
        ];*/
        this.isBbox = false;
        options.target.strokeDashArray = [0, 0];
        console.log('deselect: ' + options.target.id);
      }
      this.dataCtx.clearRect(
        0,
        0,
        this.dataCanvas.width,
        this.dataCanvas.height,
      );
      this.isObjectSelectOn = false;
      this.objSelected = '';
    },
    setDataImage(dataObject) {
      console.log('dataset');
      const _this = this;
      let inImg = new Image();
      inImg.src = this.imgSrc;
      //console.log(this.imgSrc);
      inImg.crossOrigin = 'Anonymous';
      inImg.onload = function () {
        let width = inImg.width;
        let height = inImg.height;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(inImg, 0, 0);
        //console.log(dataObject);
        if (dataObject.type === 'path') {
          console.log('path');
          _this.dataCanvas.clipTo = function (ctx) {
            ctx.save();
            dataObject.render(ctx);
            ctx.restore();
          };
        } else {
          let data = ctx.getImageData(
            dataObject.left,
            dataObject.top,
            dataObject.width,
            dataObject.height,
            /*_this.positionX,
          _this.positionY,
          _this.instanceWidth,
          _this.instanceHeight,*/
          );
          _this.dataCtx.clearRect(
            0,
            0,
            _this.dataCanvas.width,
            _this.dataCanvas.height,
          );
          //console.log(dataObject);
          _this
            .resizeImageData(
              data,
              _this.dataCanvas.width,
              _this.dataCanvas.height,
            )
            .then(value => {
              /*_this.dataCtx.clearRect(
              0,
              0,
              _this.dataCanvas.width,
              _this.dataCanvas.height,
            );*/
              _this.dataCtx.putImageData(value.data, value.dx, value.dy);
            });
        }
      };
    },
    setDragBox(nowX, nowY) {
      let rTop, rLeft, rBottom, rRight;
      if (this.startX > nowX) {
        rLeft = nowX;
        rRight = this.startX;
      } else {
        rLeft = this.startX;
        rRight = nowX;
      }
      if (this.startY > nowY) {
        rTop = nowY;
        rBottom = this.startY;
      } else {
        rTop = this.startY;
        rBottom = nowY;
      }
      this.instanceWidth = rRight - rLeft;
      this.instanceHeight = rBottom - rTop;
      this.positionX = rLeft;
      this.positionY = rTop;

      this.tempRect.set({
        left: this.positionX,
        top: this.positionY,
        width: rRight - rLeft,
        height: rBottom - rTop,
      });
      //this.DragRectListItem.push(rect);
      this.fCanvas.renderAll();
    },
    setRect() {
      let rTop, rLeft, rBottom, rRight;
      if (this.startX > this.endX) {
        rLeft = this.endX;
        rRight = this.startX;
      } else {
        rLeft = this.startX;
        rRight = this.endX;
      }
      if (this.startY > this.endY) {
        rTop = this.endY;
        rBottom = this.startY;
      } else {
        rTop = this.startY;
        rBottom = this.endY;
      }
      this.instanceWidth = rRight - rLeft;
      this.instanceHeight = rBottom - rTop;
      this.positionX = rLeft;
      this.positionY = rTop;
      let coordinate = {
        left: this.positionX,
        top: this.positionY,
        width: rRight - rLeft,
        height: rBottom - rTop,
      };
      console.log(coordinate);
      this.drawBoxing('bbox', coordinate, '#000000');
    },
    drawBoxing(tool, coordinate, color, aId) {
      //const _this = this;
      this.fCanvas.remove(this.tempRect);
      let rect = new fabric.Rect({
        id: this.objId,
        tool: tool,
        color: color,
        left: coordinate.left,
        top: coordinate.top,
        width: coordinate.width,
        height: coordinate.height,
        strokeWidth: 2 * (1 / this.imgRatio),
        //stroke: 'rgba(0,0,0,0.5)',
        stroke: color,
        //strokeOpacity: '.5',
        fill: 'transparent',
        //fill: 'rgba(0,0,0,0.3)',
        //fill: color,
        //fillOpacity: '.3',
        //strokeDashArray: [5, 5],
        hoverCursor: 'pointer',
        objectCaching: false,
        /*lockScalingX: false,
        lockScalingY: false,
        lockUniScaling: false,
        transparentCorners: false,
        borderColor: 'transparent',
        cornerStyle: 'circle',
        cornerColor: 'rgba(0,0,0,0.5)',
        cornerSize: 10,*/
        //hasBorders: true,
        //hasControls: true,
      });
      /*rect.setControlsVisibility({
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mb: true,
        ml: true,
        mr: true,
        mt: true,
        mtr: false,
      });*/
      /*노트북에서 이미지 데이터 좌표 오류 문제 :
      캔버스 사이즈와 이미지 사이즈가 달라지는 문제 발생
      원인 조사 및 해결 필요*/
      /*this.imgData = this.fCtx.getImageData(
        rect.left,
        rect.top,
        rect.width,
        rect.height,
      );
      if (this.imgData != null) {
        this.imgDatas[this.objId] = this.imgData;
        this.isLabelingOn = true;
      }*/
      //rect.hasControls = rect.hasBorders = false;
      //console.log(rect.controls);
      rect.on('selected', this.selectObject);
      rect.on('deselected', this.deselectObject);
      let tag = new fabric.Text('human ' + this.objId, {
        id: this.objId,
        fill: '#ffffff',
        //textBackgroundColor: 'grey',
        fontFamily: 'Comic Sans',
        fontSize: 10 * (1 / this.imgRatio),
        visible: this.isToolTagOn,
      });

      //tag.set('top', rect.top - tag.width / 2);
      //tag.set('left', rect.left - tag.height / 2);
      tag.set('top', rect.top + rect.height / 2 - tag.height / 2);
      tag.set('left', rect.left + rect.width / 2 - tag.width / 2);
      this.ObjectListItem.push(rect);
      this.TagListItem.push(tag);
      this.fCanvas.add(rect);
      this.fCanvas.add(tag);
      //this.fCanvas.setActiveObject(rect);
      this.InstanceListItem.push({
        id: this.objId, //category id
        tool: tool,
        cId: 0, //AnnotationListItem id
        className: 'human',
        gender: '',
        age: '',
        attrs: [],
      });
      //console.log(this.InstanceListItem);
      this.AnnotationListItem.push({
        id: this.objId,
        annotation: {
          annotation_id: aId,
          annotation_type: {
            annotation_type_id: 1,
          },
          annotation_category: {
            annotation_category_id: 0,
            annotation_category_attributes: [],
          },
          annotation_data: [rect.left, rect.top, rect.width, rect.height],
        },
      });
      //console.log(this.AnnotationListItem);
      //this.setDataImage();
      this.objId++;
    },
    setDragLine(nowX, nowY) {
      this.tmpLine.set({ x2: nowX, y2: nowY });
      this.fCanvas.renderAll();
    },
    setPolyLine() {
      let type = '';
      if (this.isToolPolylineOn) {
        type = 'polyline';
      } else if (this.isToolPolygonOn) {
        type = 'polygon';
      } else if (this.isToolSegmentOn) {
        type = 'segment';
      }
      this.polylinePoints.push(new fabric.Point(this.endX, this.endY));
      this.fCanvas.renderAll();
      this.tmpLine.set({ x1: this.endX, y1: this.endY });
      if (this.polylinePoints.length >= 2) {
        let firstX = this.polylinePoints[0].x;
        let lastX = this.polylinePoints[this.polylinePoints.length - 1].x;
        let firstY = this.polylinePoints[0].y;
        let lastY = this.polylinePoints[this.polylinePoints.length - 1].y;
        if (this.isToolPolylineOn) {
          firstX = this.polylinePoints[this.polylinePoints.length - 2].x;
          lastX = this.polylinePoints[this.polylinePoints.length - 1].x;
          firstY = this.polylinePoints[this.polylinePoints.length - 2].y;
          lastY = this.polylinePoints[this.polylinePoints.length - 1].y;
        }
        if (
          Math.abs(lastX - firstX) <= 5 * (1 / this.imgRatio) &&
          Math.abs(lastY - firstY) <= 5 * (1 / this.imgRatio)
        ) {
          if (this.isToolPolygonOn || this.isToolSegmentOn) {
            this.polylinePoints[this.polylinePoints.length - 1].x = firstX;
            this.polylinePoints[this.polylinePoints.length - 1].y = firstY;
          }
          this.isEndPolyline = true;
          this.fCanvas.remove(this.tmpLine);
          this.fCanvas.remove(this.tempLine);
          this.polygonItems[this.objId] = {
            points: this.polylinePoints,
          };
          //console.log(this.polygonItems);
          this.polylinePoints = [];
          this.drawPolyItem(
            type,
            this.polygonItems[this.objId].points,
            type,
            '#000000',
          );
        }
      }
    },
    drawPolyItem(tool, coordinate, type, color, aId, type_id) {
      //console.log(coordinate);

      let fill = 'transparent';
      if (tool === 'IS' || tool === 'SES') {
        fill = color + '4D';
      } else if (tool === 'segment') {
        fill = color;
      }
      if (!type_id) {
        if (type === 'polygon') {
          type_id = 2;
        } else if (type === 'segment') {
          type_id = 3;
        }
      }
      let option = {
        id: this.objId,
        tool: tool,
        type: type,
        color: color,
        fill: fill,
        selectable: true,
        strokeWidth: 2 * (1 / this.imgRatio),
        //strokeLinejoin: 'round',
        //stroke: 'rgba(0,0,0,0.5)',
        stroke: color,
        objectCaching: false,
        //edit: true,
        hoverCursor: 'pointer',
        hasBorders: false,
        //hasControls: false,
      };
      let polyItem = new fabric.Polygon(coordinate, option);
      if (this.isToolPolylineOn) {
        polyItem = new fabric.Polyline(coordinate, option);
      }
      /*const _this = this;
      coordinate.forEach(function (point, index) {
        let circle = new fabric.Circle({
          radius: 5,
          fill: 'green',
          left: point.x,
          top: point.y,
          originX: 'center',
          originY: 'center',
          hasBorders: false,
          hasControls: false,
          name: index,
        });
        _this.fCanvas.add(circle);
      });*/

      let tag = new fabric.Text('human ' + this.objId, {
        id: this.objId,
        fill: '#ffffff',
        //textBackgroundColor: 'grey',
        fontFamily: 'Comic Sans',
        fontSize: 10 * (1 / this.imgRatio),
        visible: this.isToolTagOn,
        selectable: false,
      });
      //console.log(polyItem);
      //tag.set('top', polyItem.points[0].y - tag.width / 2);
      //tag.set('left', polyItem.points[0].x - tag.height / 2);
      tag.set('top', polyItem.top + polyItem.height / 2 - tag.height / 2);
      tag.set('left', polyItem.left + polyItem.width / 2 - tag.width / 2);
      this.fCanvas.add(polyItem);
      this.fCanvas.add(tag);
      polyItem.on('selected', this.selectObject);
      polyItem.on('deselected', this.deselectObject);
      //polyItem.on('modified', this.modifyObject);
      this.ObjectListItem.push(polyItem);
      this.TagListItem.push(tag);
      //this.fCanvas.setActiveObject(polyItem);
      this.InstanceListItem.push({
        id: this.objId, //category id
        tool: tool,
        cId: 0, //AnnotationListItem id
        className: 'human',
        gender: '',
        age: '',
        attrs: [],
      });
      //console.log(this.InstanceListItem);
      console.log(coordinate);
      let cData = [];
      for (let i = 0; i < coordinate.length; i++) {
        cData.push(coordinate[i].x);
        cData.push(coordinate[i].y);
      }
      console.log(cData);
      this.AnnotationListItem.push({
        id: this.objId,
        annotation: {
          annotation_id: aId,
          annotation_type: {
            annotation_type_id: type_id,
            annotation_type_name: type,
          },
          annotation_category: {
            annotation_category_id: 0,
            annotation_category_attributes: [],
          },
          annotation_data: cData,
        },
      });
      if (type === 'polygon' || type === 'segment') {
        this.editPolygon(polyItem);
      }
      this.objId++;
      this.isDown = false;
      //return;
      //const _this = this;
      /*let polygon = new fabric.Polyline(this.polygonPoints, {
        id: this.objId,
        fill: 'rgba(0,0,0,0.3)',
        selectable: true,
        strokeWidth: 2,
        stroke: 'rgba(0,0,0,0.5)',
        opacity: 0.3,
        //hasBorders: false,
        //hasControls: false,
        //originX: 'center',
        //originY: 'center',
        hoverCursor: 'pointer',
        //evented: false,
        objectCaching: false,
      });
      this.fCanvas.add(polygon);
      if (
        this.polygonPoints[0] ===
        this.polygonPoints[this.polygonPoints.length - 1]
      ) {
        this.fCanvas.remove(polygon);
        polygon = new fabric.Polygon(this.polygonPoints, {
          id: this.objId,
          fill: 'rgba(0,0,0,0.3)',
          selectable: true,
          strokeWidth: 2,
          stroke: 'rgba(0,0,0,0.5)',
          opacity: 0.3,
          //hasBorders: false,
          //hasControls: false,
          //originX: 'center',
          //originY: 'center',
          hoverCursor: 'pointer',
          //evented: false,
          objectCaching: false,
        });
        this.fCanvas.add(polygon);
        this.objId++;
      }*/
    },
    setDrawingMode() {
      this.fCanvas.isDrawingMode = !this.fCanvas.isDrawingMode;
      console.log(this.fCanvas.isDrawingMode);
      if (this.fCanvas.isDrawingMode) {
        this.fCanvas.freeDrawingBrush.width = 10;
        this.fCanvas.freeDrawingBrush.color = '#ffcc00';
        /*this.fCanvas.hoverCursor =
          'url(' + this.getDrawCursor() + ') 10 10, crosshair';*/
      } else {
        this.fCanvas.freeDrawingBrush.width = 0;
        this.fCanvas.freeDrawingBrush.color = 'transparent';
      }
    },
    createPath(options) {
      //options.path.set();
      //this.fCanvas.renderAll();
      //this.drawOnCanvas(this.fCanvas.toJSON());
      let path = options.path;
      path.objectCaching = false;
      //console.log(path);
      /*this.fCanvas.isDrawingMode = false;
      this.fCanvas.freeDrawingBrush.width = 0;
      this.fCanvas.freeDrawingBrush.color = 'transparent';*/
      this.setDrawingMode();

      let path2 = options.path.path;
      let points = [];
      for (let i = 0; i < path2.length; i++) {
        let point = {
          x: Math.round(path2[i][1]),
          y: Math.round(path2[i][2]),
        };
        points.push(point);
      }
      //console.log(points);
      this.fCanvas.remove(path);
      this.drawPolyItem('brush', points, 'polygon', '#ffcc00');
      /*path.on('selected', this.selectObject);
      path.on('deselected', this.deselectObject);
      this.paintPathList.push(path);
      this.fCanvas.setActiveObject(path);*/
      /*this.fCanvas.clipTo = function (ctx) {
        ctx.save();
        path.render(ctx);
        ctx.restore();
      };*/
      //this.fCanvas.add(imgInstance);
    },
    drawOnCanvas(json) {
      console.log(json);
      //this.fCanvas.loadFromJSON(json);
    },
    drawPoints(point) {
      const _this = this;
      if (this.isToolPointOn) {
        let boxingPoint = new fabric.Circle({
          id: this.objId,
          radius: 4 * _this.imgRatio,
          stroke: 'black',
          strokeWidth: 1 * _this.imgRatio,
          color: '#ff0000',
          fill: '#ff0000',
          //startAngle: 0,
          //endAngle: 2,
          left: point.x,
          top: point.y,
          hasBorders: false,
          //hasControls: false,
          cornerSize: 5 * _this.imgRatio,
          originX: 'center',
          originY: 'center',
          hoverCursor: 'pointer',
          selectable: true,
        });
        boxingPoint.on('selected', this.selectObject);
        boxingPoint.on('deselected', this.deselectObject);
        this.fCanvas.add(boxingPoint);
        this.ObjectListItem.push(boxingPoint);
        //this.fCanvas.setActiveObject(polyItem);
        this.InstanceListItem.push({
          id: this.objId, //category id
          tool: 'point',
          cId: 0, //AnnotationListItem id
          className: 'human',
          gender: '',
          age: '',
          attrs: [],
        });
        //console.log(this.InstanceListItem);
        this.AnnotationListItem.push({
          id: this.objId,
          annotation: {
            annotation_type: {
              annotation_type_id: 9,
            },
            annotation_category: {
              annotation_category_id: 0,
              annotation_category_attributes: [],
            },
            annotation_data: [point.x, point.y],
          },
        });
        this.objId++;
        this.isDown = false;

        /*let imgData = this.fCtx.getImageData(point.x, point.y, 1, 1);
        let pixelImg = imgData.data;
        console.log(pixelImg);*/
        /*for (let i = 0; i < this.boxingPoints.length; i++) {
        let boxingPoint = new fabric.Circle({
          id: this.objId,
          radius: 3,
          stroke: 'black',
          strokeWidth: 0.5,
          //startAngle: 0,
          //endAngle: 2,
          left: this.boxingPoints[i].x,
          top: this.boxingPoints[i].y,
          //hasBorders: false,
          //hasControls: false,
          originX: 'center',
          originY: 'center',
          hoverCursor: 'pointer',
          selectable: true,
        });
        this.fCanvas.add(boxingPoint);
      }*/
      } else if (this.isToolAutopointOn) {
        let autoPoint = new fabric.Circle({
          id: this.objId,
          radius: 7 * _this.imgRatio,
          stroke: 'black',
          strokeWidth: 1 * _this.imgRatio,
          color: '#999999',
          fill: '#ffcc00',
          //startAngle: 0,
          //endAngle: 2,
          left: point.x,
          top: point.y,
          hasBorders: false,
          hasControls: false,
          cornerSize: 5 * _this.imgRatio,
          originX: 'center',
          originY: 'center',
          hoverCursor: 'pointer',
          selectable: true,
        });
        this.autoPointList.push(autoPoint);
        this.fCanvas.add(autoPoint);
        if (this.autoPointList.length === 2) {
          let ePoint = this.autoPointList.pop();
          let sPoint = this.autoPointList.pop();
          this.startX = sPoint.left;
          this.startY = sPoint.top;
          this.endX = ePoint.left;
          this.endY = ePoint.top;
          //console.log(ePoint);
          //console.log(sPoint);
          this.fCanvas.remove(ePoint);
          this.fCanvas.remove(sPoint);
          this.setRect();
        }
      }
    },
    drawKeypoint() {
      if (this.isToolKeypointOn) {
        // 부위별로 컨트롤 필요
        /*let hcline = keyPoint.makeLine([250, 125, 250, 175]),
          //ncline = keyPoint.makeLine([250, 155, 250, 175]),
          chline = keyPoint.makeLine([250, 175, 250, 250]),
          rhaline = keyPoint.makeLine([250, 250, 300, 350]),
          lhaline = keyPoint.makeLine([250, 250, 200, 350]),
          nlwline = keyPoint.makeLine([250, 175, 175, 225]),
          nrwline = keyPoint.makeLine([250, 175, 325, 225]);*/
        /*let hnLine = keyPoint.makeLine([250, 125, 250, 155]),
          ncLine = keyPoint.makeLine([250, 155, 250, 175]),
          clsLine = keyPoint.makeLine([250, 175, 150, 155]),
          crsLine = keyPoint.makeLine([250, 175, 350, 155]),
          sleLine = keyPoint.makeLine([150, 155, 135, 180]),
          sreLine = keyPoint.makeLine([150, 155, 365, 180]),
          elwLine = keyPoint.makeLine([135, 180, 150, 200]),
          erwLine = keyPoint.makeLine([365, 180, 350, 200]),
          clhLine = keyPoint.makeLine([250, 175, 200, 250]),
          crhLine = keyPoint.makeLine([250, 175, 300, 250]),
          hlkLine = keyPoint.makeLine([200, 250, 200, 275]),
          hrkLine = keyPoint.makeLine([300, 250, 300, 275]),
          klaLine = keyPoint.makeLine([200, 275, 200, 300]),
          kraLine = keyPoint.makeLine([300, 275, 300, 300]),
          altLine = keyPoint.makeLine([200, 300, 190, 300]),
          artLine = keyPoint.makeLine([300, 300, 310, 300]);

        this.fCanvas.add(
          hnLine,
          ncLine,
          clsLine,
          crsLine,
          sleLine,
          sreLine,
          elwLine,
          erwLine,
          clhLine,
          crhLine,
          hlkLine,
          hrkLine,
          klaLine,
          kraLine,
          altLine,
          artLine,
        );

        let headPoint = keyPoint.makeCircle(
            hnline.get('x1'),
            hnline.get('y1'),
            null,
            hnline,
          ),
          chestPoint = keyPoint.makeCircle(
            hcline.get('x2'),
            hcline.get('y2'),
            hcline,
            chline,
            nlwline,
            nrwline,
          ),
          hipPoint = keyPoint.makeCircle(
            chline.get('x2'),
            chline.get('y2'),
            chline,
            rhaline,
            lhaline,
          ),
          lwPoint = keyPoint.makeCircle(
            nlwline.get('x2'),
            nlwline.get('y2'),
            nlwline,
          ),
          rwPoint = keyPoint.makeCircle(
            nrwline.get('x2'),
            nrwline.get('y2'),
            nrwline,
          ),
          laPoint = keyPoint.makeCircle(
            rhaline.get('x2'),
            rhaline.get('y2'),
            rhaline,
          ),
          raPoint = keyPoint.makeCircle(
            lhaline.get('x2'),
            lhaline.get('y2'),
            lhaline,
          );

        this.fCanvas.add(
          headPoint,
          chestPoint,
          hipPoint,
          lwPoint,
          rwPoint,
          laPoint,
          raPoint,
        );*/
      }
    },
    async resizeImageData(imageData, width, height) {
      let resizeWidth = width >> 0;
      let resizeHeight = height >> 0;
      let iw = imageData.width;
      let ih = imageData.height;
      let dX = 0;
      let dY = 0;
      if (iw > ih) {
        ih *= 200 / iw;
        iw = 200;
        if (ih > 150) {
          iw *= 150 / ih;
          ih = 150;
          dX = (200 - iw) / 2;
        } else {
          dY = (150 - ih) / 2;
        }
      } else {
        iw *= 150 / ih;
        ih = 150;
        if (iw > 200) {
          ih *= 200 / iw;
          iw = 200;
          dY = (150 - ih) / 2;
        } else {
          dX = (200 - iw) / 2;
        }
      }
      resizeWidth = iw;
      resizeHeight = ih;
      const iBitmap = await window.createImageBitmap(
        imageData,
        0,
        0,
        imageData.width,
        imageData.height,
        {
          resizeWidth,
          resizeHeight,
        },
      );
      const canvas = document.createElement('canvas');
      canvas.width = resizeWidth;
      canvas.height = resizeHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(iBitmap, 0, 0);
      return {
        data: ctx.getImageData(0, 0, resizeWidth, resizeHeight),
        dx: dX,
        dy: dY,
      };
    },
    getOD() {
      //console.log('od');
      this.isLoading = true;
      axios
        .get(
          this.hostUrl +
            '/rest/api/1/ai/autolabeling?project_id=' +
            this.DataListItem[this.currentImageIndex].task_project.project_id +
            '&task_id=' +
            this.DataListItem[this.currentImageIndex].task_id +
            '&labeling_type=1',
        )
        .then(response => {
          if (response.data.length > 0) {
            this.ODListItem = response.data;
            for (let i = 0; i < this.ODListItem.length; i++) {
              let item = this.ODListItem[i];
              let color = item.annotation_category.annotation_category_color;
              let coordinate = {
                left: item.annotation_data[0],
                top: item.annotation_data[1],
                width: item.annotation_data[2] - item.annotation_data[0],
                height: item.annotation_data[3] - item.annotation_data[1],
              };
              this.positionX = item.annotation_data[0];
              this.positionY = item.annotation_data[1];
              this.instanceWidth =
                item.annotation_data[2] - item.annotation_data[0];
              this.instanceHeight =
                item.annotation_data[3] - item.annotation_data[1];
              this.drawBoxing('OD', coordinate, color);
            }
            this.isOD = true;
            this.isLoading = false;
          } else {
            //???
          }
          //this.openFabImage();
          //this.openAssignee(this.currentImageIndex);
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });
    },
    getIS() {
      this.isLoading = true;
      //console.log('is');
      axios
        .get(
          this.hostUrl +
            '/rest/api/1/ai/autolabeling?project_id=' +
            this.DataListItem[this.currentImageIndex].task_project.project_id +
            '&task_id=' +
            this.DataListItem[this.currentImageIndex].task_id +
            '&labeling_type=2',
        )
        .then(response => {
          if (response.data.length > 0) {
            this.ISListItem = response.data;
            for (let i = 0; i < this.ISListItem.length; i++) {
              let item = this.ISListItem[i];
              //let color = item.annotation_category.annotation_category_color;
              //let color = Math.floor(Math.random() * 16777215).toString(16);
              //0xffffff = 16777215
              let color = '#';
              for (let c = 0; c < 6; c++) {
                color += Math.round(Math.random() * 0xf).toString(16);
              }
              let items = item.annotation_data;
              let coordinates = [];
              for (let i = 0; i < items.length; i++) {
                for (let j = 0; j < items[i].length; j = j + 2) {
                  coordinates.push(
                    new fabric.Point(items[i][j], items[i][j + 1]),
                  );
                }
              }
              this.drawPolyItem('IS', coordinates, 'polygon', color);
            }
            this.isIS = true;
            this.isLoading = false;
          } else {
            //???
          }
          //this.openFabImage();
          //this.openAssignee(this.currentImageIndex);
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });
    },
    getSES() {
      this.isLoading = true;
      //console.log('ses');
      axios
        .get(
          this.hostUrl +
            '/rest/api/1/ai/autolabeling?project_id=' +
            this.DataListItem[this.currentImageIndex].task_project.project_id +
            '&task_id=' +
            this.DataListItem[this.currentImageIndex].task_id +
            '&labeling_type=3',
        )
        .then(response => {
          if (response.data.length > 0) {
            this.SESListItem = response.data;
            for (let i = 0; i < this.SESListItem.length; i++) {
              let item = this.SESListItem[i];
              let color = item.annotation_category.annotation_category_color;
              let items = item.annotation_data;
              let coordinates = [];
              for (let i = 0; i < items.length; i++) {
                for (let j = 0; j < items[i].length; j = j + 2) {
                  coordinates.push(
                    new fabric.Point(items[i][j], items[i][j + 1]),
                  );
                }
              }
              //console.log(item.annotation_type.annotation_type_id);
              this.drawPolyItem('SES', coordinates, 'segment', color);
            }
            this.isSES = true;
            this.isLoading = false;
          } else {
            //???
          }
          //this.openFabImage();
          //this.openAssignee(this.currentImageIndex);
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });
    },
    downloadData() {
      //console.log(this.downloads);
      if (this.downloads === '') {
        return;
      }
      let workDatas = [];
      for (let i = 0; i < this.AnnotationListItem.length; i++) {
        workDatas.push(this.AnnotationListItem[i].annotation);
      }
      console.log(workDatas);
      let workData = JSON.stringify(workDatas);
      let fileName = this.DataListItem[this.currentImageIndex].task_name;
      switch (this.downloads) {
        case 'coco':
          this.workDataDownload(workData, fileName + '.json', 'text/plain');
          break;
        case 'yolo':
          break;
        case 'img':
          this.imgDownload(fileName + '.png');
          break;
        default:
          break;
      }
      this.isDownload = false;
      this.downloads = '';
    },
    isLock(item, index) {
      for (let i = 0; i < this.ObjectListItem.length; i++) {
        if (this.ObjectListItem[i].id === item) {
          this.ObjectListItem[i].selectable =
            !this.ObjectListItem[i].selectable;
          if (!this.ObjectListItem[i].selectable) {
            document.getElementById('lockBtn' + index).classList.add('active');
          } else {
            document
              .getElementById('lockBtn' + index)
              .classList.remove('active');
          }
          this.fCanvas.discardActiveObject();
          this.fCanvas.renderAll();
        }
      }
    },
    isVisible(item, index) {
      for (let i = 0; i < this.ObjectListItem.length; i++) {
        if (this.ObjectListItem[i].id === item) {
          this.ObjectListItem[i].visible = !this.ObjectListItem[i].visible;
          if (!this.ObjectListItem[i].visible) {
            document
              .getElementById('visibleBtn' + index)
              .classList.add('active');
          } else {
            document
              .getElementById('visibleBtn' + index)
              .classList.remove('active');
          }
          this.fCanvas.renderAll();
        }
      }
    },
    isDelete(item) {
      if (confirm('Instance를 삭제하시겠습니까?')) {
        this.deleteItem(item);
        this.isToolODOn = false;
        this.isToolISOn = false;
        this.isToolSESOn = false;
      }
    },
    deleteItem(key) {
      const _this = this;
      //console.log(key);
      /*switch (key) {
        case 'Delete': // delete
          for (let i = 0; i < _this.InstanceListItem.length; i++) {
            if (_this.InstanceListItem[i].id === _this.objSelected.id) {
              _this.InstanceListItem.splice(i, 1);
            }
          }
          for (let i = 0; i < _this.ObjectListItem.length; i++) {
            if (_this.ObjectListItem[i].id === _this.objSelected.id) {
              _this.ObjectListItem.splice(i, 1);
            }
          }
          for (let i = 0; i < _this.AnnotationListItem.length; i++) {
            if (_this.AnnotationListItem[i].id === _this.objSelected.id) {
              _this.AnnotationListItem.splice(i, 1);
            }
          }
          _this.fCanvas.remove(_this.objSelected);
          _this.isLabelingOn = false;
          break;
      }*/
      let check = /^[0-9]+$/;
      if (key === 'Delete') {
        for (let i = 0; i < _this.TagListItem.length; i++) {
          let tag = _this.TagListItem[i];
          if (tag.id === _this.objSelected.id) {
            _this.fCanvas.remove(tag);
            _this.TagListItem.splice(i, 1);
          }
        }
        for (let i = 0; i < _this.InstanceListItem.length; i++) {
          if (_this.InstanceListItem[i].id === _this.objSelected.id) {
            _this.InstanceListItem.splice(i, 1);
          }
        }
        for (let i = 0; i < _this.AnnotationListItem.length; i++) {
          if (_this.AnnotationListItem[i].id === _this.objSelected.id) {
            if (_this.AnnotationListItem[i].annotation.annotation_id) {
              _this.DeleteIDList.push(
                _this.AnnotationListItem[i].annotation.annotation_id,
              );
              console.log(_this.AnnotationListItem[i].annotation.annotation_id);
            } else {
              console.log('no id');
            }
            _this.AnnotationListItem.splice(i, 1);
          }
        }
        for (let i = 0; i < _this.ObjectListItem.length; i++) {
          if (_this.ObjectListItem[i].id === _this.objSelected.id) {
            _this.fCanvas.remove(_this.objSelected);
            _this.ObjectListItem.splice(i, 1);
          }
        }
        _this.isLabelingOn = false;
        _this.isClassSettingOn = false;
        _this.isToolClassOn = false;
      } else if (check.test(key)) {
        for (let i = 0; i < _this.TagListItem.length; i++) {
          let tag = _this.TagListItem[i];
          if (tag.id === key) {
            _this.fCanvas.remove(tag);
            _this.TagListItem.splice(i, 1);
          }
        }
        for (let i = 0; i < _this.InstanceListItem.length; i++) {
          if (_this.InstanceListItem[i].id === key) {
            _this.InstanceListItem.splice(i, 1);
          }
        }
        for (let i = 0; i < _this.AnnotationListItem.length; i++) {
          if (_this.AnnotationListItem[i].id === key) {
            if (_this.AnnotationListItem[i].annotation.annotation_id) {
              _this.DeleteIDList.push(
                _this.AnnotationListItem[i].annotation.annotation_id,
              );
            }
            _this.AnnotationListItem.splice(i, 1);
          }
        }
        for (let i = 0; i < _this.ObjectListItem.length; i++) {
          if (_this.ObjectListItem[i].id === key) {
            _this.fCanvas.remove(_this.ObjectListItem[i]);
            _this.ObjectListItem.splice(i, 1);
          }
        }
        //_this.fCanvas.remove(_this.objSelected);
        _this.isLabelingOn = false;
        _this.isClassSettingOn = false;
        _this.isToolClassOn = false;
      }
      _this.fCanvas.renderAll();
    },

    /*onMouseDown(options) {
      if (this.drawMode) {
        if (options.target && options.target.id === this.pointArray[0].id) {
          // when click on the first point
          this.generatePolygon(this.pointArray);
        } else {
          this.addPoint(options);
        }
      }
      let evt = options.e;
      if (evt.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    },*/
    // eslint-disable-next-line no-unused-vars
    /*onMouseUp(options) {
      this.isDragging = false;
      this.selection = true;
    },*/
    /*onMouseMove(options) {
      if (this.isDragging) {
        let e = options.e;
        this.viewportTransform[4] += e.clientX - this.lastPosX;
        this.viewportTransform[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
      if (this.drawMode) {
        if (this.activeLine && this.activeLine.class === 'line') {
          const pointer = this.fCanvas.getPointer(options.e);
          this.activeLine.set({
            x2: pointer.x,
            y2: pointer.y,
          });
          const points = this.activeShape.get('points');
          points[this.pointArray.length] = {
            x: pointer.x,
            y: pointer.y,
          };
          this.activeShape.set({
            points,
          });
        }
        this.fCanvas.renderAll();
      }
    },*/
    onMouseWheel(options) {
      //console.log('wheel');
      let delta = options.e.deltaY;
      //let pointer = this.fCanvas.getPointer(options.e);
      let zoom = this.fCanvas.getZoom();
      zoom *= 0.999 ** delta;
      //zoom *= this.imgRatio;
      if (delta < 0) {
        zoom += 0.1;
      } else {
        zoom -= 0.1;
      }
      if (zoom > 2 * this.imgRatio) zoom = 2 * this.imgRatio;
      if (zoom < 0.1 * this.imgRatio) zoom = 0.1 * this.imgRatio;
      //zoom *= this.imgRatio;
      let width = this.inWidth * zoom;
      let height = this.inHeight * zoom;
      this.fCanvas.setWidth(width);
      this.fCanvas.setHeight(height);
      /*this.fCanvas.zoomToPoint(
        { x: options.e.offsetX, y: options.e.offsetY },
        zoom,
      );*/
      this.fCanvas.setZoom(zoom);
      let range = document.getElementById('zoom-range');
      range.value = (zoom * 100) / this.imgRatio;
      options.e.preventDefault();
      options.e.stopPropagation();
    },
    /*onObjectMove(option) {
      const object = option.target;
      object._calcDimensions();
      object.setCoords();
      this.fCanvas.renderAll();
    },*/
    // eslint-disable-next-line no-unused-vars
    toggleDrawPolygon(event) {
      console.log(event);
      if (this.drawMode) {
        // stop draw mode
        this.activeLine = null;
        this.activeShape = null;
        this.lineArray = [];
        this.pointArray = [];
        //this.fCanvas.selection = true;
        //this.drawMode = false;
      } else {
        // start draw mode
        this.fCanvas.selection = false;
        this.drawMode = true;
      }
    },
    addPoint(options) {
      let pointer = this.fCanvas.getPointer(options);
      const pointOption = {
        id: new Date().getTime(),
        radius: 5 * (1 / this.imgRatio),
        fill: '#ffffff',
        stroke: '#333333',
        strokeWidth: 0.5,
        left: pointer.x,
        top: pointer.y,
        selectable: false,
        hasBorders: false,
        hasControls: false,
        originX: 'center',
        originY: 'center',
        objectCaching: false,
      };
      const point = new fabric.Circle(pointOption);

      if (this.pointArray.length === 0) {
        // fill first point with red color
        /*point.set({
          fill: 'red',
        });*/
        point.fill = 'red';
      }

      const linePoints = [pointer.x, pointer.y, pointer.x, pointer.y];
      const lineOption = {
        strokeWidth: 2,
        fill: 'transparent',
        stroke: '#999999',
        originX: 'center',
        originY: 'center',
        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,
        objectCaching: false,
      };
      const line = new fabric.Line(linePoints, lineOption);
      line.class = 'line';

      if (this.activeShape) {
        const pos = this.fCanvas.getPointer(options.e);
        const points = this.activeShape.get('points');
        points.push({
          x: pos.x,
          y: pos.y,
        });
        const polygon = new fabric.Polygon(points, {
          stroke: '#333333',
          strokeWidth: 1,
          fill: '#cccccc',
          opacity: 0.3,
          selectable: false,
          hasBorders: false,
          hasControls: false,
          evented: false,
          objectCaching: false,
        });
        this.fCanvas.remove(this.activeShape);
        this.fCanvas.add(polygon);
        this.activeShape = polygon;
        this.fCanvas.renderAll();
      } else {
        const polyPoint = [
          {
            x: pointer.x,
            y: pointer.y,
          },
        ];
        const polygon = new fabric.Polygon(polyPoint, {
          stroke: '#333333',
          strokeWidth: 1,
          fill: '#cccccc',
          opacity: 0.3,
          selectable: false,
          hasBorders: false,
          hasControls: false,
          evented: false,
          objectCaching: false,
        });
        this.activeShape = polygon;
        this.fCanvas.add(polygon);
      }

      this.activeLine = line;
      this.pointArray.push(point);
      this.lineArray.push(line);

      this.fCanvas.add(line);
      this.fCanvas.add(point);
    },
    generatePolygon(pointArray) {
      const points = [];
      // collect points and remove them from canvas
      for (const point of pointArray) {
        points.push({
          x: point.left,
          y: point.top,
        });
        this.fCanvas.remove(point);
      }

      // remove lines from canvas
      for (const line of this.lineArray) {
        this.fCanvas.remove(line);
      }

      // remove selected Shape and Line
      this.fCanvas.remove(this.activeShape).remove(this.activeLine);

      // create polygon from collected points
      //console.log(points);
      /*const polygon = new fabric.Polygon(points, {
        //id: new Date().getTime(),
        id: this.objId,
        color: '#0084ff',
        stroke: '#0084ff',
        strokeWidth: 2 * (1 / this.imgRatio),
        fill: false,
        cornerStyle: 'round',
        objectCaching: false,
        moveable: false,
        hasBorders: false,
        //selectable: false
      });
      let tag = new fabric.Text('human', {
        id: this.objId,
        fill: '#ffffff',
        //textBackgroundColor: 'grey',
        fontFamily: 'Comic Sans',
        fontSize: 10 * (1 / this.imgRatio),
        visible: this.isToolTagOn,
      });

      tag.set('top', polygon.top - tag.width / 2);
      tag.set('left', polygon.left - tag.height / 2);

      this.fCanvas.add(polygon);
      this.fCanvas.add(tag);
      polygon.on('selected', this.selectObject);
      polygon.on('deselected', this.deselectObject);
      this.ObjectListItem.push(polygon);
      this.TagListItem.push(tag);*/

      this.drawPolyItem('polygon', points, 'polygon', '#0084ff');
      this.toggleDrawPolygon();
      //this.editPolygon(polygon);
      /*
      let tag = new fabric.Text('human', {
        id: this.objId,
        fill: '#ffffff',
        //textBackgroundColor: 'grey',
        fontFamily: 'Comic Sans',
        fontSize: 10 * (1 / this.imgRatio),
        visible: this.isToolTagOn,
      });

      tag.set('top', polygon.top - tag.width / 2);
      tag.set('left', polygon.left - tag.height / 2);
      this.fCanvas.add(tag);
      this.TagListItem.push(tag);
      */
      /*this.InstanceListItem.push({
        id: this.objId, //category id
        //tool: tool,
        tool: 'polygon',
        cId: 0, //AnnotationListItem id
        className: 'human',
        gender: '',
        age: '',
        attrs: [],
      });
      //console.log(this.InstanceListItem);
      this.AnnotationListItem.push({
        id: this.objId,
        annotation: {
          annotation_type: {
            annotation_type_id: 1,
          },
          annotation_category: {
            annotation_category_id: 0,
            annotation_category_attributes: [],
          },
          annotation_data: points,
        },
      });
      this.objId++;
      this.isDown = false;*/
    },
    /**
     * define a function that can locate the controls.
     * this function will be used both for drawing and for interaction.
     */
    polygonPositionHandler(dim, finalMatrix, fabricObject) {
      console.log('|');
      console.log(fabricObject);
      let x =
          fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x,
        y = fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y;
      return fabric.util.transformPoint(
        //{ x: x, y: y },
        new fabric.Point(x, y),
        fabric.util.multiplyTransformMatrices(
          fabricObject.canvas.viewportTransform,
          fabricObject.calcTransformMatrix(),
          true,
        ),
      );
    },
    pPositionHandler(pointIndex, fabricObject) {
      let x = fabricObject.points[pointIndex].x - fabricObject.pathOffset.x,
        y = fabricObject.points[pointIndex].y - fabricObject.pathOffset.y;
      return fabric.util.transformPoint(
        //{ x: x, y: y },
        new fabric.Point(x, y),
        fabric.util.multiplyTransformMatrices(
          fabricObject.canvas.viewportTransform,
          fabricObject.calcTransformMatrix(),
          true,
        ),
      );
    },
    /**
     * define a function that will define what the control does
     * this function will be called on every mouse move after a control has been
     * clicked and is being dragged.
     * The function receive as argument the mouse event, the current trasnform object
     * and the current position in canvas coordinate
     * transform.target is a reference to the current object being transformed,
     */
    actionHandler(eventData, transform, x, y) {
      let polygon = transform.target,
        currentControl = polygon.controls[polygon.__corner],
        mouseLocalPosition = polygon.toLocalPoint(
          new fabric.Point(x, y),
          'center',
          'center',
        ),
        polygonBaseSize = polygon._getNonTransformedDimensions(),
        size = polygon._getTransformedDimensions(0, 0);
      polygon.points[currentControl.pointIndex] = {
        x:
          (mouseLocalPosition.x * polygonBaseSize.x) / size.x +
          polygon.pathOffset.x,
        y:
          (mouseLocalPosition.y * polygonBaseSize.y) / size.y +
          polygon.pathOffset.y,
      };
      return true;
    },
    /**
     * define a function that can keep the polygon in the same position when we change its
     * width/height/top/left.
     */
    anchorWrapper(anchorIndex, fn) {
      return function (eventData, transform, x, y) {
        let fabricObject = transform.target,
          absolutePoint = fabric.util.transformPoint(
            {
              x: fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x,
              y: fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y,
            },
            fabricObject.calcTransformMatrix(),
          ),
          actionPerformed = fn(eventData, transform, x, y),
          // eslint-disable-next-line no-unused-vars
          newDim = fabricObject._setPositionDimensions({}),
          polygonBaseSize = fabricObject._getNonTransformedDimensions(),
          newX =
            (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) /
            polygonBaseSize.x,
          newY =
            (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) /
            polygonBaseSize.y;
        fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
        return actionPerformed;
      };
    },
    editPolygon(object) {
      const _this = this;
      let activeObject = object;
      if (object === null || object === undefined) {
        activeObject = this.fCanvas.getActiveObject();
      }
      if (!activeObject) {
        activeObject = this.fCanvas.getObjects()[0];
        this.fCanvas.setActiveObject(activeObject);
      }

      activeObject.edit = true;
      activeObject.objectCaching = false;

      const lastControl = activeObject.points.length - 1;
      activeObject.cornerStyle = 'circle';
      activeObject.controls = activeObject.points.reduce(
        (acc, point, index) => {
          acc['p' + index] = new fabric.Control({
            //positionHandler: _this.polygonPositionHandler,
            actionHandler: _this.anchorWrapper(
              index > 0 ? index - 1 : lastControl,
              _this.actionHandler,
            ),
            actionName: 'modifyPolygon',
            pointIndex: index,
          });
          //console.log(index);
          _this.it = index;
          return acc;
        },
        {},
      );

      activeObject.hasBorders = false;

      this.fCanvas.requestRenderAll();
    },
    /*resizePolygon() {
      let activeObject = this.fCanvas.getActiveObject();
      if (!activeObject) {
        activeObject = this.fCanvas.getObjects()[0];
        this.fCanvas.setActiveObject(activeObject);
      }

      activeObject.edit = false;
      activeObject.objectCaching = false;
      activeObject.controls = fabric.Object.prototype.controls;
      activeObject.cornerStyle = 'rect';
      activeObject.hasBorders = true;

      this.fCanvas.requestRenderAll();
    },
    clearPolygon() {
      this.fCanvas.remove(...this.fCanvas.getObjects());
    },*/
    /*drawMask(x, y) {
      //if (!this.imageInfo) return;
      this.imageInfo = {
        width: this.canvasWidth,
        height: this.canvasHeight,
        context: this.fCtx,
        data: this.fCtx.getImageData(0, 0, this.canvasWidth, this.canvasHeight),
      };
      console.log(this.imageInfo);
      let image = {
        data: this.imageInfo.data.data,
        width: this.imageInfo.width,
        height: this.imageInfo.height,
        bytes: 4,
      };
      console.log(image);
      if (this.addMode && !this.oldMask) {
        this.oldMask = this.mask;
      }

      let old = this.oldMask ? this.oldMask.data : null;

      this.mask = MagicWand.floodFill(
        image,
        x,
        y,
        this.currentThreshold,
        old,
        true,
      );
      console.log(this.mask);
      if (this.mask)
        this.mask = MagicWand.gaussBlurOnlyBorder(
          this.mask,
          this.blurRadius,
          old,
        );

      if (this.addMode && this.oldMask) {
        this.mask = this.mask
          ? this.concatMasks(this.mask, this.oldMask)
          : this.oldMask;
      }
      console.log('mmmmm');
      this.drawBorder();
    },
    hatchTick() {
      this.hatchOffset = (this.hatchOffset + 1) % (this.hatchLength * 2);
      this.drawBorder(true);
    },
    drawBorder(noBorder) {
      if (!this.mask) return;

      let x,
        y,
        i,
        j,
        k,
        w = this.imageInfo.width,
        h = this.imageInfo.height,
        ctx = this.imageInfo.context,
        imgData = ctx.createImageData(w, h),
        res = imgData.data;

      if (!noBorder) this.cacheInd = MagicWand.getBorderIndices(this.mask);

      ctx.clearRect(0, 0, w, h);

      let len = this.cacheInd.length;
      for (j = 0; j < len; j++) {
        i = this.cacheInd[j];
        x = i % w; // calc x by index
        y = (i - x) / w; // calc y by index
        k = (y * w + x) * 4;
        if (
          (x + y + this.hatchOffset) % (this.hatchLength * 2) <
          this.hatchLength
        ) {
          // detect hatch color
          res[k + 3] = 255; // black, change only alpha
        } else {
          res[k] = 255; // white
          res[k + 1] = 255;
          res[k + 2] = 255;
          res[k + 3] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);
    },
    trace() {
      let cs = MagicWand.traceContours(this.mask);
      cs = MagicWand.simplifyContours(
        cs,
        this.simplifyTolerant,
        this.simplifyCount,
      );

      this.mask = null;

      // draw contours
      let ctx = this.imageInfo.context;
      ctx.clearRect(0, 0, this.imageInfo.width, this.imageInfo.height);
      //inner
      ctx.beginPath();
      for (let i = 0; i < cs.length; i++) {
        if (!cs[i].inner) continue;
        let ps = cs[i].points;
        ctx.moveTo(ps[0].x, ps[0].y);
        for (let j = 1; j < ps.length; j++) {
          ctx.lineTo(ps[j].x, ps[j].y);
        }
      }
      ctx.strokeStyle = 'red';
      ctx.stroke();
      //outer
      ctx.beginPath();
      for (let i = 0; i < cs.length; i++) {
        if (cs[i].inner) continue;
        let ps = cs[i].points;
        ctx.moveTo(ps[0].x, ps[0].y);
        for (let j = 1; j < ps.length; j++) {
          ctx.lineTo(ps[j].x, ps[j].y);
        }
      }
      ctx.strokeStyle = 'blue';
      ctx.stroke();
    },
    paint(color, alpha) {
      if (!this.mask) return;

      let rgba = this.hexToRgb(color, alpha);

      let x,
        y,
        data = this.mask.data,
        bounds = this.mask.bounds,
        maskW = this.mask.width,
        w = this.imageInfo.width,
        h = this.imageInfo.height,
        ctx = this.imageInfo.context,
        imgData = ctx.createImageData(w, h),
        res = imgData.data;

      for (y = bounds.minY; y <= bounds.maxY; y++) {
        for (x = bounds.minX; x <= bounds.maxX; x++) {
          if (data[y * maskW + x] === 0) continue;
          let k = (y * w + x) * 4;
          res[k] = rgba[0];
          res[k + 1] = rgba[1];
          res[k + 2] = rgba[2];
          res[k + 3] = rgba[3];
        }
      }

      this.mask = null;

      ctx.putImageData(imgData, 0, 0);
    },
    hexToRgb(hex, alpha) {
      let int = parseInt(hex, 16);
      let r = (int >> 16) & 255;
      let g = (int >> 8) & 255;
      let b = int & 255;

      return [r, g, b, Math.round(alpha * 255)];
    },
    concatMasks(mask, old) {
      let data1 = old.data,
        data2 = mask.data,
        w1 = old.width,
        w2 = mask.width,
        b1 = old.bounds,
        b2 = mask.bounds,
        b = {
          // bounds for new mask
          minX: Math.min(b1.minX, b2.minX),
          minY: Math.min(b1.minY, b2.minY),
          maxX: Math.max(b1.maxX, b2.maxX),
          maxY: Math.max(b1.maxY, b2.maxY),
        },
        w = old.width, // size for new mask
        h = old.height,
        i,
        j,
        k,
        k1,
        k2,
        len;

      let result = new Uint8Array(w * h);

      // copy all old mask
      len = b1.maxX - b1.minX + 1;
      i = b1.minY * w + b1.minX;
      k1 = b1.minY * w1 + b1.minX;
      k2 = b1.maxY * w1 + b1.minX + 1;
      // walk through rows (Y)
      for (k = k1; k < k2; k += w1) {
        result.set(data1.subarray(k, k + len), i); // copy row
        i += w;
      }

      // copy new mask (only "black" pixels)
      len = b2.maxX - b2.minX + 1;
      i = b2.minY * w + b2.minX;
      k1 = b2.minY * w2 + b2.minX;
      k2 = b2.maxY * w2 + b2.minX + 1;
      // walk through rows (Y)
      for (k = k1; k < k2; k += w2) {
        // walk through cols (X)
        for (j = 0; j < len; j++) {
          if (data2[k + j] === 1) result[i + j] = 1;
        }
        i += w;
      }

      return {
        data: result,
        width: w,
        height: h,
        bounds: b,
      };
    },*/
  },
  computed: {},
};
</script>

<style scoped>
@import '../../css/reset.css';
@import '../../css/studiolabel.css';
</style>
