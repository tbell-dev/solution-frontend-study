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
            <button @click="imgDownload()">
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
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolMoveOn,
                }"
              >
                <img
                  v-show="!isToolMoveOn"
                  @click="isToolMoveOnOff"
                  src="../../assets/images/studio/icon/icon-move01.svg"
                  alt="이동"
                />
                <img
                  v-show="isToolMoveOn"
                  src="../../assets/images/studio/icon/icon-move02.svg"
                  alt="이동"
                />
                <span class="tooltip">이동</span>
              </button>
              <p>이동</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolTagOn,
                }"
              >
                <img
                  v-show="!isToolTagOn"
                  @click="isToolTagOnOff"
                  src="../../assets/images/studio/icon/icon-tag01.svg"
                  alt="태그"
                />
                <img
                  v-show="isToolTagOn"
                  @click="isToolTagOnOff"
                  src="../../assets/images/studio/icon/icon-tag02.svg"
                  alt="태그"
                />
                <span class="tooltip">태그</span>
              </button>
              <p>태그</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolClassOn,
                }"
              >
                <img
                  v-show="!isToolClassOn"
                  @click="isToolClassOnOff"
                  src="../../assets/images/studio/icon/icon-class-off.svg"
                  alt="클래스"
                />
                <img
                  v-show="isToolClassOn"
                  @click="isToolClassOnOff"
                  src="../../assets/images/studio/icon/icon-class-on.svg"
                  alt="클래스"
                />
                <span class="tooltip">클래스</span>
              </button>
              <p>클래스</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolResetOn,
                }"
              >
                <img
                  v-show="!isToolResetOn"
                  @click="isToolResetOnOff"
                  src="../../assets/images/studio/icon/icon-reset01.svg"
                  alt="리셋"
                />
                <img
                  v-show="isToolResetOn"
                  src="../../assets/images/studio/icon/icon-reset02.svg"
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
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolODOn,
                }"
              >
                <img
                  v-show="!isToolODOn"
                  @click="isToolODOnOff"
                  src="../../assets/images/studio/icon/icon-OD.svg"
                  alt="OD"
                />
                <img
                  v-show="isToolODOn"
                  src="../../assets/images/studio/icon/icon-OD.svg"
                  alt="OD"
                />
                <span class="tooltip">OD</span>
              </button>
              <p>OD</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolISOn,
                }"
              >
                <img
                  v-show="!isToolISOn"
                  @click="isToolISOnOff"
                  src="../../assets/images/studio/icon/icon-IS.svg"
                  alt="IS"
                />
                <img
                  v-show="isToolISOn"
                  src="../../assets/images/studio/icon/icon-IS.svg"
                  alt="IS"
                />
                <span class="tooltip">IS</span>
              </button>
              <p>IS</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolSESOn,
                }"
              >
                <img
                  v-show="!isToolSESOn"
                  @click="isToolSESOnOff"
                  src="../../assets/images/studio/icon/icon-SES.svg"
                  alt="SES"
                />
                <img
                  v-show="isToolSESOn"
                  src="../../assets/images/studio/icon/icon-SES.svg"
                  alt="SES"
                />
                <span class="tooltip">SES</span>
              </button>
              <p>SES</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolMagicwandOn,
                }"
              >
                <img
                  v-show="!isToolMagicwandOn"
                  @click="isToolMagicwandOnOff"
                  src="../../assets/images/studio/icon/icon-magicwand01.svg"
                  alt="매직완드"
                />
                <img
                  v-show="isToolMagicwandOn"
                  src="../../assets/images/studio/icon/icon-magicwand02.svg"
                  alt="매직완드"
                />
                <span class="tooltip">매직완드</span>
              </button>
              <p>매직완드</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolAutopointOn,
                }"
              >
                <img
                  v-show="!isToolAutopointOn"
                  @click="isToolAutopointOnOff"
                  src="../../assets/images/studio/icon/icon-autopoint01.svg"
                  alt="오토포인트"
                />
                <img
                  v-show="isToolAutopointOn"
                  src="../../assets/images/studio/icon/icon-autopoint02.svg"
                  alt="오토포인트"
                />
                <span class="tooltip">오토포인트</span>
              </button>
              <p>오토포인트</p>
            </li>
            <li>
              <span class="under-bar"></span>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolBoxingOn,
                }"
              >
                <img
                  v-show="!isToolBoxingOn"
                  @click="isToolBoxingOnOff"
                  src="../../assets/images/studio/icon/icon-boxing01.svg"
                  alt="박싱"
                />
                <img
                  v-show="isToolBoxingOn"
                  src="../../assets/images/studio/icon/icon-boxing02.svg"
                  alt="박싱"
                />
                <span class="tooltip">박싱</span>
              </button>
              <p>박싱</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolPolylineOn,
                }"
              >
                <img
                  v-show="!isToolPolylineOn"
                  @click="isToolPolylineOnOff"
                  src="../../assets/images/studio/icon/icon-polyline01.svg"
                  alt="폴리라인"
                />
                <img
                  v-show="isToolPolylineOn"
                  src="../../assets/images/studio/icon/icon-polyline02.svg"
                  alt="폴리라인"
                />
                <span class="tooltip">폴리라인</span>
              </button>
              <p>폴리라인</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolPolygonOn,
                }"
              >
                <img
                  v-show="!isToolPolygonOn"
                  @click="isToolPolygonOnOff"
                  src="../../assets/images/studio/icon/icon-polygon01.svg"
                  alt="폴리곤"
                />
                <img
                  v-show="isToolPolygonOn"
                  src="../../assets/images/studio/icon/icon-polygon02.svg"
                  alt="폴리곤"
                />
                <span class="tooltip">폴리곤</span>
              </button>
              <p>폴리곤</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolPointOn,
                }"
              >
                <img
                  v-show="!isToolPointOn"
                  @click="isToolPointOnOff"
                  src="../../assets/images/studio/icon/icon-point01.svg"
                  alt="포인트"
                /><img
                  v-show="isToolPointOn"
                  src="../../assets/images/studio/icon/icon-point02.svg"
                  alt="포인트"
                />
                <span class="tooltip">포인트</span>
              </button>
              <p>포인트</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolDrawpenOn,
                }"
              >
                <img
                  v-show="!isToolDrawpenOn"
                  @click="isToolDrawpenOnOff"
                  src="../../assets/images/studio/icon/icon-brush01.svg"
                  alt="브러쉬"
                />
                <img
                  v-show="isToolDrawpenOn"
                  src="../../assets/images/studio/icon/icon-brush02.svg"
                  alt="브러쉬"
                />
                <span class="tooltip">브러쉬</span>
              </button>
              <p>브러쉬</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isTool3DCubeOn,
                }"
              >
                <img
                  v-show="!isTool3DCubeOn"
                  @click="isTool3DCubeOnOff"
                  src="../../assets/images/studio/icon/icon-3dcube01.svg"
                  alt="3D 큐브"
                />
                <img
                  v-show="isTool3DCubeOn"
                  src="../../assets/images/studio/icon/icon-3dcube02.svg"
                  alt="3D 큐브"
                />
                <span class="tooltip">3D 큐브</span>
              </button>
              <p>3D 큐브</p>
            </li>
            <li>
              <button
                class="select-tooltip"
                v-bind:class="{
                  'select-tool': this.isToolSegmentOn,
                }"
              >
                <img
                  v-show="!isToolSegmentOn"
                  @click="isToolSegmentOnOff"
                  src="../../assets/images/studio/icon/icon-segment01.svg"
                  alt="세그먼트"
                />
                <img
                  v-show="isToolSegmentOn"
                  src="../../assets/images/studio/icon/icon-segment02.svg"
                  alt="세그먼트"
                />
                <span class="tooltip">세그먼트</span>
              </button>
              <p>세그먼트</p>
            </li>
            <!--<li>
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
              <span class="tooltip">키포인트</span>
              <p>키포인트</p>
            </li>-->
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
        <div class="class-setting" v-show="isClassSettingOn">
          <ul class="class-setting-contents">
            <li>
              <h3>클래스 설정</h3>
            </li>
            <li>
              <button class="class-contents-obj" @click="setClass('human')">
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
                class="class-contents-gender"
                @click="setGender('female')"
              >
                여자
              </button>
              <button class="class-contents-gender" @click="setGender('male')">
                남자
              </button>
              <button
                class="class-contents-gender"
                @click="setGender('unknown')"
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
              <button class="class-contents-age" @click="setAge('baby')">
                아기
              </button>
              <button class="class-contents-age" @click="setAge('children')">
                어린이
              </button>
              <button class="class-contents-age" @click="setAge('teenager')">
                청소년
              </button>
              <button class="class-contents-age" @click="setAge('youth')">
                청년
              </button>
            </li>
            <li>
              <button class="class-contents-age" @click="setAge('middle')">
                중년
              </button>
              <button class="class-contents-age" @click="setAge('old')">
                노년
              </button>
              <button class="class-contents-age" @click="setAge('unknown')">
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
              <h2>Instance</h2>
            </li>
            <li class="studio-contents" v-if="isInstanceOn">
              <div class="top-wrap" v-show="isObjectSelectOn">
                <div class="top">
                  <div class="instance-pic">
                    <!--<canvas
                      v-show="isLabelingOn && isObjectSelectOn"-->
                    <canvas id="dataCanvas" class="data-canvas"></canvas>
                  </div>
                  <table class="instance-table1" v-show="isObjectSelectOn">
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
                <div class="top" v-show="isToolBoxingOn || isToolDrawpenOn">
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
                                  Math.pow(960, 2) + Math.pow(540, 2),
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
                    <li class="instance-detail">
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
                        <b>{{ item.className }}</b>
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
              <div class="studio-contents-element">
                <div class="left-wrap">
                  <b>홍</b>
                </div>
                <div class="right-wrap">
                  <b>클래스 추가</b>
                  <p>2022.01.10 18:43</p>
                </div>
              </div>
              <div class="studio-contents-element">
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

export default {
  mounted: async function () {
    const _this = this;
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
      hoverCursor: 'default',
      selection: false,
    });
    this.fCanvas.on('mouse:down', this.downCanvas);
    this.fCanvas.on('mouse:move', this.moveCanvas);
    this.fCanvas.on('mouse:up', this.upCanvas);
    this.fCanvas.on('object:moving', this.movingObject);
    this.fCanvas.on('selection:created', this.createSelection);
    this.fCanvas.on('selection:updated', this.updateSelection);
    this.fCanvas.on('before:selection:cleared', this.beforeClearSelection);
    this.fCanvas.on('selection:cleared', this.clearSelection);
    this.fCtx = this.fCanvas.getContext();
    /*fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.borderColor = 'transparent';
    fabric.Object.prototype.cornerStyle = 'circle';
    fabric.Object.prototype.cornerColor = 'rgba(0,0,0,0.5)';
    fabric.Object.prototype.cornerSize = 10;*/
    //'/rest/api/1/task/search?project_id=15&task_name&task_worker&task_validator&task_worker_or_validator&task_status_step&task_status_process',
    await axios
      .get(
        this.hostUrl +
          '/rest/api/1/task/search?project_id=4&task_name&task_worker&task_validator&task_worker_or_validator&task_status_step&task_status_process',
      )
      .then(response => {
        if (response.data.datas.length > 0) {
          this.isHosted = true;
          this.DataListItem = response.data.datas;
          console.log(response.data.datas);
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
        switch (key) {
          case 'Delete' || 46: // delete
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
        }
        _this.fCanvas.renderAll();
      }
    };
    //this.customFabric();
    this.openFabImage();
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

      //중앙
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

      //우측
      isLabelingAssigneeOn: false,
      isInspectAssigneeOn: false,
      isGuideOn: true,
      isFileListOn: false,
      isInstanceOn: true,
      isHistoryOn: false,
      isFileInfoOn: false,
      isObjectSelectOn: false,
      isObjectMoveOn: false,
      isOD: false,
      isMove: false,
      isEndPolyline: true,
      isEndPolygon: true,

      isClassSettingOn: false,

      currentImageIndex: 0,
      filters: '0',

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
      AnnotationItem: {},
      AnnotationListItem: [],
      ObjectListItem: [],
      DragRectListItem: [],
      ODListItem: [],
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
      outCanvas: '',
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
      fItemCnt: 0,
      objId: 0,
      instanceImageData: ImageData,
      dataX: 0,
      dataY: 0,
      originImage: Image,
      originImageData: ImageData,
      tempRect: fabric.Rect,
      tmpLine: fabric.Line,
      tempLine: fabric.Polyline,

      tempArr: [],
      tempSubArr: [],
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
    },
    isClassSettingOnOff(index) {
      //console.log(index);
      if (index === null || index === undefined) {
        index = this.instanceIndex;
      }
      if (this.instanceIndex === index) {
        this.isClassSettingOn = !this.isClassSettingOn;
        if (
          (!this.isClassSettingOn && this.isToolClassOn) ||
          (this.isClassSettingOn && !this.isToolClassOn)
        ) {
          this.isToolClassOn = !this.isToolClassOn;
        }
        this.isObjectSelectOn = this.isClassSettingOn;
      } else {
        this.instanceIndex = index;
        this.setAnnotation();
      }
    },
    isToolMoveOnOff() {
      document.body.style.cursor = 'Move';
      this.isToolMoveOn = !this.isToolMoveOn;
      if (this.isToolMoveOn) {
        this.fCanvas.hoverCursor = 'move';
      }
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
    },
    isToolTagOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = !this.isToolTagOn;
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
      this.isTagSettingOnOff();
    },
    isToolClassOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = !this.isToolClassOn;
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
      this.isClassSettingOnOff();
    },
    isToolResetOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = !this.isToolResetOn;
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
      if (confirm('작업 내용이 초기화 됩니다. 초기화 하시겠습니까?')) {
        this.isToolResetOn = false;
        this.fCtx.restore();
      }
    },

    isToolODOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
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
      if (this.isToolODOn && !this.isOD) {
        this.getOD();
      }
    },
    isToolISOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
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
    },
    isToolSESOnOff() {
      document.body.style.cursor = 'default';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
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
    },

    isToolMagicwandOnOff() {
      document.body.style.cursor = 'default';
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
      this.isToolMagicwandOn = !this.isToolMagicwandOn;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolAutopointOnOff() {
      document.body.style.cursor = 'default';
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
      this.isToolAutopointOn = !this.isToolAutopointOn;
      this.isToolSegmentOn = false;
    },
    isToolBoxingOnOff() {
      document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
      this.isToolBoxingOn = !this.isToolBoxingOn;
      if (this.isToolBoxingOn) {
        this.fCanvas.hoverCursor = 'crosshair';
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
    },
    isToolPolylineOnOff() {
      document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
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
      document.body.style.cursor = 'Crosshair';
      this.isToolMoveOn = false;
      this.isToolTagOn = false;
      this.isToolClassOn = false;
      this.isToolResetOn = false;
      this.isToolODOn = false;
      this.isToolISOn = false;
      this.isToolSESOn = false;
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
      document.body.style.cursor = 'Crosshair';
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
      this.isToolPointOn = !this.isToolPointOn;
      this.isToolDrawpenOn = false;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolDrawpenOnOff() {
      document.body.style.cursor = 'default';
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
      this.isToolDrawpenOn = !this.isToolDrawpenOn;
      this.isTool3DCubeOn = false;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isTool3DCubeOnOff() {
      document.body.style.cursor = 'default';
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
      this.isTool3DCubeOn = !this.isTool3DCubeOn;
      this.isToolMagicwandOn = false;
      this.isToolKeypointOn = false;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolKeypointOnOff() {
      document.body.style.cursor = 'default';
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
      this.isToolKeypointOn = !this.isToolKeypointOn;
      this.isToolAutopointOn = false;
      this.isToolSegmentOn = false;
    },
    isToolSegmentOnOff() {
      document.body.style.cursor = 'default';
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
      this.isToolSegmentOn = !this.isToolSegmentOn;
    },
    clearDatas() {
      this.ObjectListItem = [];
      this.InstanceListItem = [];
      this.AnnotationListItem = [];
    },
    resetTools() {
      document.body.style.cursor = 'default';
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
    },
    selectImgFunction(index) {
      // save status
      // clear instance, annotation
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
    },
    imageStatusComplete() {
      let item = this.DataListItem[this.currentImageIndex];
      let projectId = item.task_project.project_id;
      let taskId = item.task_id;
      axios.post(
        HOST +
          '/rest/api/1/task/status/update?project_id=' +
          projectId +
          '&task_id=' +
          taskId,
        {
          task_status_progress: 3,
          comment_body: '',
        },
      );
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
      return size + 'KB';
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
      let width = this.inWidth * (zoom / 100);
      let height = this.inHeight * (zoom / 100);
      this.fCanvas.setWidth(width);
      this.fCanvas.setHeight(height);
      this.fCanvas.setZoom(zoom / 100);
    },
    setZoomCenter() {
      document.getElementById('zoom-range').value = 100;
      this.fCanvas.setWidth(this.inWidth);
      this.fCanvas.setHeight(this.inHeight);
      this.fCanvas.setZoom(1);
    },
    /* 가공스튜디오 이미지 저장?? 라벨링 데이터 저장??*/
    imgDownload() {
      let download = document.getElementById('download');
      let image = document
        .getElementById('fabCanvas')
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      download.setAttribute('href', image);
      download.setAttribute(
        'download',
        this.DataListItem[this.currentImageIndex].task_name,
      );
    },
    workDataDownload() {
      let download = document.getElementById('download');
      let workData = this.AnnotationListItem;
      download.setAttribute('href', workData);
      download.setAttribute(
        'download',
        this.DataListItem[this.currentImageIndex].task_name,
      );
    },
    workStateSave() {
      let item = this.DataListItem[this.currentImageIndex];
      let projectId = item.task_project.project_id;
      let taskId = item.task_id;
      //let annotation = this.InstanceListItem;
      axios
        .get(
          HOST +
            '/rest/api/1/task/annotation?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
        )
        .then(response => {
          console.log(response.status);
          if (response.data.datas.length > 0) {
            console.log('update');
            //update
            /*axios
              .post(
                HOST +
                  '/rest/api/1/task/annotation/update?project_id=' +
                  projectId +
                  '&task_id=' +
                  taskId,
                {
                  annotation_id: '',
                  annotation_type: {
                    annotation_type_id: '',
                  },
                  annotation_category: {
                    annotation_category_id: '',
                  },
                  annotation_data: [],
                },
              )
              .then(response => {
                console.log('save' + response.data);
              });*/
          } else {
            console.log('create');
            //create
            /*axios
              .post(
                HOST +
                  '/rest/api/1/task/annotation/create?project_id=' +
                  projectId +
                  '&task_id=' +
                  taskId,
                {
                  annotation_type: {
                      annotation_type_id : 1,
                      annotation_type_name : 'bbox',
                      annotation_type_desc : 'bbox desc',
                  },
                  annotation_category: {
                      annotation_category_id : 1,
                  },
                  annotation_data: [99.0,10.0,200.0,200.0],
                },
              )
              .then(response => {
                console.log('save' + response.data);
              });*/
          }
          console.log(response.data.datas);
        });
      /*axios
        .post(
          HOST +
            '/rest/api/1/task/annotation/create?project_id=' +
            projectId +
            '&task_id=' +
            taskId,
          {
            task_status_progress: 2,
            comment_body: '',
          },
        )
        .then(response => {
          console.log('save' + response.data);
        });*/
      this.DataListItem[
        this.currentImageIndex
      ].task_status.task_status_progress = 2;
    },
    openFabImage() {
      this.fCanvas.clear();
      if (this.isHosted) {
        this.imgSrc =
          //'https://cors-anywhere.herokuapp.com/' +
          this.hostUrl +
          '/rest/api/1/task/data?project_id=' +
          this.DataListItem[this.currentImageIndex].task_project.project_id +
          '&task_id=' +
          this.DataListItem[this.currentImageIndex].task_id;
      } else {
        this.imgSrc = require(`@/assets/images/studio/${this.selectImg}`);
      }
      const _this = this;
      fabric.Image.fromURL(
        this.imgSrc,
        function (oImg) {
          let width = oImg.width;
          let height = oImg.height;
          if (width > height) {
            height *= 960 / width;
            width = 960;
            if (height > 540) {
              width *= 540 / height;
              height = 540;
            }
          } else {
            width *= 540 / height;
            height = 540;
            if (width > 960) {
              height *= 960 / width;
              width = 960;
            }
          }
          _this.inWidth = width;
          _this.inHeight = height;
          oImg.scaleToWidth(width);
          oImg.scaleToHeight(height);
          _this.fCanvas.setWidth(width);
          _this.fCanvas.setHeight(height);
          //_this.fCanvas.setDimensions({width: width, height: height});
          oImg.selectable = false;
          _this.fCanvas.add(oImg);
          //_this.originImage = oImg;
          //_this.originImageData = _this.fCtx.getImageData(0, 0, width, height);
          /*_this.fCanvas.setBackgroundImage(
            oImg,
            _this.fCanvas.renderAll.bind(_this.fCanvas),
          );*/
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
    setClass(className) {
      console.log('class: ' + className);
      this.InstanceListItem[this.instanceIndex].className = className;
      let setName;
      switch (className) {
        case 'human':
          setName = '인간';
          break;
        default:
          setName = '인간';
          break;
      }
      this.InstanceListItem[this.instanceIndex].id = 1;
      this.AnnotationListItem[
        this.instanceIndex
      ].annotation.annotation_category.annotation_category_id = 1;
      this.instanceClass = setName;
    },
    setGender(gender) {
      console.log('gender: ' + gender);
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
    setAge(age) {
      console.log('age: ' + age);
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
          this.InstanceListItem[this.instanceIndex].pId
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
          this.InstanceListItem[this.instanceIndex].pId
        ) {
          this.ObjectListItem[i].strokeDashArray = [0, 0];
          this.fCanvas.setActiveObject(this.ObjectListItem[i]);
        } else {
          this.ObjectListItem[i].strokeDashArray = [5, 5];
        }
      }
      this.fCanvas.renderAll();
    },
    scrollUp() {},
    scrollDown() {
      //select-tool
    },
    downCanvas(options) {
      console.log('down');
      if (this.isObjectSelectOn) {
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
        console.log('move');
      } /*else if (this.isToolTagOn) {
      } else if (this.isToolClassOn) {
      } else if (this.isToolResetOn) {
      } else if (this.isToolODOn) {
      } else if (this.isToolISOn) {
      } else if (this.isToolSESOn) {
      }*/ else if (this.isToolBoxingOn) {
        this.tempRect = new fabric.Rect({
          left: pointer.x,
          top: pointer.y,
          width: 0,
          height: 0,
        });
        this.fCanvas.add(this.tempRect);
        this.isDown = true;
      } else if (this.isToolPolylineOn) {
        this.isDown = true;
        if (this.isEndPolyline) {
          this.tempLine = new fabric.Polyline(this.polylinePoints, {
            fill: 'transparent',
            selectable: true,
            strokeWidth: 2,
            stroke: 'rgba(0,0,0,0.5)',
            objectCaching: false,
            hoverCursor: 'pointer',
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
        this.isDown = true;
        if (this.isEndPolygon) {
          this.tempLine = new fabric.Polyline(this.polygonPoints, {
            fill: 'transparent',
            selectable: true,
            strokeWidth: 2,
            stroke: 'rgba(0,0,0,0.5)',
            objectCaching: false,
            hoverCursor: 'pointer',
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
          this.isEndPolygon = false;
        }
      } /*else if (this.isToolPointOn) {
      } else if (this.isToolPointOn) {
      } else if (this.isToolDrawpenOn) {
        this.fCanvas.isDrawingMode= 1;
        this.fCanvas.freeDrawingBrush.width = 20;
      } else if (this.isTool3DCubeOn) {
      } else if (this.isToolMagicwandOn) {
      } else if (this.isToolKeypointOn) {
      } else if (this.isToolAutopointOn) {
      } else if (this.isToolSegmentOn) {
      } else {
      }*/
    },
    // eslint-disable-next-line no-unused-vars
    moveCanvas(options) {
      let event = options.e;
      if (this.isObjectSelectOn || this.isObjectMoveOn) {
        return;
      }
      if (this.isToolMoveOn && this.isDown) {
        let moveX = event.clientX;
        let moveY = event.clientY;
        let orgX = this.fCanvas.offset().left;
        let orgY = this.fCanvas.offset().top;
        console.log(moveX + ', ' + moveY);
        console.log(orgX + ', ' + orgY);
        /*this.fCanvas.absolutePan({
          x: orgX + (moveX - orgX),
          y: orgY + (moveY - orgY),
        });*/
      }
      let pointer = this.fCanvas.getPointer(options);
      let nowX = pointer.x;
      let nowY = pointer.y;
      //this.canvasDraw(nowX, nowY);
      //this.stX = nowX;
      //this.stY = nowY;
      /*this.line.set({ x2: event.screenX, y2: event.screenY });
      this.fCanvas.renderAll();*/
      //const _this = this;
      if (this.isToolBoxingOn && this.isDown) {
        this.setDragBox(nowX, nowY);
      } else if (this.isToolPolylineOn && this.isDown) {
        this.setDragLine(nowX, nowY);
      } else if (this.isToolPolygonOn && this.isDown) {
        this.setDragLine(nowX, nowY);
      }
    },
    upCanvas(options) {
      //let event = options.e;
      let pointer = this.fCanvas.getPointer(options);
      if (this.isObjectSelectOn || this.isObjectMoveOn) {
        return;
      }
      if (this.isMove) {
        this.isMove = !this.isMove;
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
      }*/ else if (this.isToolBoxingOn) {
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
      } else if (this.isToolPolylineOn) {
        //this.polylinePoints.push({ x: this.endX, y: this.endY });
        this.drawPolyline();
        //this.drawPoints();
      } else if (this.isToolPolygonOn) {
        //this.polygonPoints.push({ x: this.endX, y: this.endY });
        this.drawPolygon();
        //this.drawPoints();
      } /*else if (this.isToolPointOn) {
      } /*else if (this.isToolDrawpenOn) {
      } else if (this.isTool3DCubeOn) {
      } else if (this.isToolMagicwandOn) {
      } else if (this.isToolKeypointOn) {
      } else if (this.isToolAutopointOn) {
      } else if (this.isToolSegmentOn) {
      } else {
      }*/
    },
    createSelection() {
      //
      console.log('create');
    },
    updateSelection() {
      //
      console.log('update');
    },
    beforeClearSelection() {
      //
      console.log('before');
    },
    clearSelection() {
      //
      console.log('clear');
    },
    // eslint-disable-next-line no-unused-vars
    movingObject(options) {
      //let event = options.e;
      console.log('moving');
      this.isMove = true;
      this.positionX = options.target.left;
      this.positionY = options.target.top;
    },
    selectObject(options) {
      //let event = options.e;
      console.log('select');
      this.isObjectSelectOn = true;
      this.objSelected = options.target;
      options.target.strokeDashArray = [0, 0];
      if (options.target.type === 'polyline') {
        options.target.fill = 'rgba(0,0,0,0)';
      } else {
        options.target.fill = 'rgba(0,0,0,0.3)';
      }
      this.setDataImage();
      this.fCanvas.renderAll();
      //this.setData();
      console.log('select: ' + options.target.id);
    },
    deselectObject(options) {
      if (options.target != null) {
        options.target.fill = 'rgba(0,0,0,0)';
        options.target.strokeDashArray = [5, 5];
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
    setDataImage() {
      const _this = this;
      //this.dataCanvas.clear();
      if (this.imgDatas.length > 0) {
        this.resizeImageData(
          this.imgDatas[this.objSelected.id],
          this.dataCanvas.width,
          this.dataCanvas.height,
        ).then(value => {
          _this.dataCtx.clearRect(
            0,
            0,
            _this.dataCanvas.width,
            _this.dataCanvas.height,
          );
          _this.dataCtx.putImageData(value, _this.dataX, _this.dataY);
          //_this.setImage(value);
        });
        //_this.dataCtx.putImageData(this.imgDatas[this.objSelected.id], 0, 0);
      } else {
        this.isLabelingOn = false;
      }
    },
    setImage() {
      const _this = this;
      let inImg = new Image();
      inImg.src = this.imgSrc;
      inImg.crossOrigin = 'Anonymous';
      inImg.onload = function () {
        let width = inImg.width;
        let height = inImg.height;
        if (width > height) {
          if (width > 960) {
            height *= 960 / width;
            width = 960;
            if (height > 540) {
              width *= 540 / height;
              height = 540;
            }
          }
        } else {
          if (height > 540) {
            width *= 540 / height;
            height = 540;
            if (width > 960) {
              height *= 960 / width;
              width = 960;
            }
          }
        }
        inImg.width = width;
        inImg.height = height;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        console.log(_this.objSelected.left + ', ' + _this.objSelected.top);
        ctx.drawImage(inImg, 0, 0);
        //좌표 오차
        let data = ctx.getImageData(
          _this.objSelected.left,
          _this.objSelected.top,
          _this.objSelected.width,
          _this.objSelected.height,
        );
        //_this.dataCtx.putImageData(data, 0, 0);
        _this
          .resizeImageData(
            data,
            _this.dataCanvas.width,
            _this.dataCanvas.height,
          )
          .then(value => {
            _this.dataCtx.clearRect(
              0,
              0,
              _this.dataCanvas.width,
              _this.dataCanvas.height,
            );
            _this.dataCtx.putImageData(value, _this.dataX, _this.dataY);
          });
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
        strokeWidth: 2,
        stroke: 'rgba(0,0,0,0.3)',
        strokeDashArray: [5, 5],
        fill: 'transparent',
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
      this.drawBoxing(coordinate);
    },
    drawBoxing(coordinate) {
      //const _this = this;
      this.fCanvas.remove(this.tempRect);
      let rect = new fabric.Rect({
        id: this.objId,
        left: coordinate.left,
        top: coordinate.top,
        width: coordinate.width,
        height: coordinate.height,
        strokeWidth: 2,
        stroke: 'rgba(0,0,0,0.5)',
        //fill: 'transparent',
        fill: 'rgba(0,0,0,0.3)',
        //strokeDashArray: [5, 5],
        hoverCursor: 'pointer',
        objectCaching: false,
        lockScalingX: false,
        lockScalingY: false,
        lockUniScaling: false,
        transparentCorners: false,
        borderColor: 'transparent',
        cornerStyle: 'circle',
        cornerColor: 'rgba(0,0,0,0.5)',
        cornerSize: 10,
        //hasBorders: true,
        //hasControls: true,
      });
      rect.setControlsVisibility({
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
      /*노트북에서 이미지 데이터 좌표 오류 문제 :
      캔버스 사이즈와 이미지 사이즈가 달라지는 문제 발생
      원인 조사 및 해결 필요*/
      this.imgData = this.fCtx.getImageData(
        rect.left,
        rect.top,
        rect.width,
        rect.height,
      );
      if (this.imgData != null) {
        this.imgDatas[this.objId] = this.imgData;
        this.isLabelingOn = true;
      }
      //rect.hasControls = rect.hasBorders = false;
      rect.on('selected', this.selectObject);
      rect.on('deselected', this.deselectObject);
      this.ObjectListItem.push(rect);
      this.fCanvas.add(rect);
      this.fCanvas.setActiveObject(rect);
      this.InstanceListItem.push({
        id: 0, //category id
        pId: this.objId, //AnnotationListItem id
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
    drawPolyline() {
      this.polylinePoints.push(new fabric.Point(this.endX, this.endY));
      this.fCanvas.renderAll();
      this.tmpLine.set({ x1: this.endX, y1: this.endY });
      if (this.polylinePoints.length >= 2) {
        let prevX = this.polylinePoints[this.polylinePoints.length - 2].x;
        let nextX = this.polylinePoints[this.polylinePoints.length - 1].x;
        let prevY = this.polylinePoints[this.polylinePoints.length - 2].y;
        let nextY = this.polylinePoints[this.polylinePoints.length - 1].y;
        if (Math.abs(nextX - prevX) <= 1 && Math.abs(nextY - prevY) <= 1) {
          this.isEndPolyline = true;
          this.fCanvas.remove(this.tmpLine);
          this.fCanvas.remove(this.tempLine);
          this.polylineItems[this.objId] = {
            points: this.polylinePoints,
          };
          this.polylinePoints = [];
          let polyLine = new fabric.Polyline(
            this.polylineItems[this.objId].points,
            {
              id: this.objId,
              fill: 'transparent',
              selectable: true,
              strokeWidth: 2,
              stroke: 'rgba(0,0,0,0.5)',
              objectCaching: false,
              hoverCursor: 'pointer',
              //hasBorders: false,
              //hasControls: false,
            },
          );
          this.fCanvas.add(polyLine);
          console.log('end');
          console.log(this.polylinePoints);
          polyLine.on('selected', this.selectObject);
          polyLine.on('deselected', this.deselectObject);
          this.ObjectListItem.push(polyLine);
          this.fCanvas.setActiveObject(polyLine);
          this.InstanceListItem.push({
            id: 0, //category id
            pId: this.objId, //AnnotationListItem id
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
              annotation_data: this.polylineItems[this.objId].points,
            },
          });
          this.objId++;
          this.isDown = false;
          //return;
        }
      }
      //this.polyLine = new fabric.Polyline(this.polylinePoints, {});
      /*let line = new fabric.Polyline(this.polylinePoints, {
        id: this.objId,
        fill: 'transparent',
        selectable: true,
        strokeWidth: 2,
        stroke: 'rgba(0,0,0,0.5)',
        objectCaching: false,
        hoverCursor: 'pointer',
        //hasBorders: false,
        //hasControls: false,
      });
      line.exactBoundingBox = false;
      this.fCanvas.add(line);
      this.objId++;*/
    },
    drawPolygon() {
      this.polygonPoints.push(new fabric.Point(this.endX, this.endY));
      this.fCanvas.renderAll();
      console.log(this.tmpLine);
      this.tmpLine.set({ x1: this.endX, y1: this.endY });
      if (this.polygonPoints.length >= 2) {
        let firstX = this.polygonPoints[0].x;
        let lastX = this.polygonPoints[this.polygonPoints.length - 1].x;
        let firstY = this.polygonPoints[0].y;
        let lastY = this.polygonPoints[this.polygonPoints.length - 1].y;
        console.log(firstX + ', ' + firstY);
        console.log(lastX + ', ' + lastY);
        if (Math.abs(lastX - firstX) <= 3 && Math.abs(lastY - firstY) <= 3) {
          this.polygonPoints[this.polygonPoints.length - 1].x = firstX;
          this.polygonPoints[this.polygonPoints.length - 1].y = firstY;
          this.isEndPolygon = true;
          this.fCanvas.remove(this.tmpLine);
          this.fCanvas.remove(this.tempLine);
          this.polygonItems[this.objId] = {
            points: this.polygonPoints,
          };
          this.polygonPoints = [];
          let polygon = new fabric.Polygon(
            this.polygonItems[this.objId].points,
            {
              id: this.objId,
              fill: 'transparent',
              selectable: true,
              strokeWidth: 2,
              stroke: 'rgba(0,0,0,0.5)',
              objectCaching: false,
              hoverCursor: 'pointer',
              //hasBorders: false,
              //hasControls: false,
            },
          );
          this.fCanvas.add(polygon);
          polygon.on('selected', this.selectObject);
          polygon.on('deselected', this.deselectObject);
          this.ObjectListItem.push(polygon);
          this.fCanvas.setActiveObject(polygon);
          this.InstanceListItem.push({
            id: 0, //category id
            pId: this.objId, //AnnotationListItem id
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
              annotation_data: this.polygonItems[this.objId].points,
            },
          });
          this.objId++;
          this.isDown = false;
          //return;
        }
      }
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
    drawPoints() {
      //polyline
      //polygon
      //autopoint
      for (let i = 0; i < this.boxingPoints.length; i++) {
        let boxingPoint = new fabric.Circle({
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
      }
      /*if (this.boxingPoints.length === 2) {
        let ePoint = this.boxingPoints.pop();
        let sPoint = this.boxingPoints.pop();
        this.startX = sPoint.x;
        this.startY = sPoint.y;
        this.endX = ePoint.x;
        this.endY = ePoint.y;
        this.drawBoxing();
      }*/
    },
    async resizeImageData(imageData, width, height) {
      let resizeWidth = width >> 0;
      let resizeHeight = height >> 0;
      let iw = imageData.width;
      let ih = imageData.height;
      this.dataX = 0;
      this.dataY = 0;
      if (iw > ih) {
        ih *= 200 / iw;
        iw = 200;
        if (ih > 150) {
          iw *= 150 / ih;
          ih = 150;
          this.dataX = (200 - iw) / 2;
        } else {
          this.dataY = (150 - ih) / 2;
        }
      } else {
        iw *= 150 / ih;
        ih = 150;
        if (iw > 200) {
          ih *= 200 / iw;
          iw = 200;
          this.dataY = (150 - ih) / 2;
        } else {
          this.dataX = (200 - iw) / 2;
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
      return ctx.getImageData(0, 0, resizeWidth, resizeHeight);
    },
    getOD() {
      console.log('od');
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
              this.setOdData(i);
            }
            this.isOD = true;
          } else {
            //???
          }
          //this.openFabImage();
          //this.openAssignee(this.currentImageIndex);
        })
        .catch(error => {
          console.log(error);
        });
    },
    setOdData(index) {
      //const this = this;
      let item = this.ODListItem[index];
      let oLeft = item.annotation_data[0];
      let oTop = item.annotation_data[1];
      let oRight = item.annotation_data[2];
      let oBottom = item.annotation_data[3];
      let oWidth = oRight - oLeft;
      let oHeight = oBottom - oTop;
      let wRatio =
        this.inWidth /
        this.DataListItem[this.currentImageIndex].task_detail.image_width;
      let hRatio =
        this.inHeight /
        this.DataListItem[this.currentImageIndex].task_detail.image_height;

      let coordinate = {
        left: oLeft * wRatio,
        top: oTop * hRatio,
        width: oWidth * wRatio,
        height: oHeight * hRatio,
      };
      this.drawBoxing(coordinate);
    },
  },
  computed: {},
};
</script>

<style scoped>
@import '../../css/reset.css';
@import '../../css/studiolabel.css';
</style>
