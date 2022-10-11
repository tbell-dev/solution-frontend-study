<template>
  <div id="studio-wrap">
    <header id="header">
      <ul class="header-top">
        <li class="ht-left">
          <div>
            <router-link to="/allproject/allprojectlist"
              ><img
                src="../../assets/images/studio/header/icon-home-dark.svg"
                alt=""
            /></router-link>
          </div>
          <a
            v-if="isHosted"
            :href="
              hostUrl +
              '/rest/api/1/task/data?project_id=' +
              DataListItem[currentImageIndex].task_project.project_id +
              '&task_id=' +
              DataListItem[currentImageIndex].task_id
            "
            download
          >
            <button>
              <img
                src="../../assets/images/studio/header/icon-down-dark.svg"
                alt="Down"
              />
            </button>
          </a>
          <a
            v-else
            :href="require(`@/assets/images/studio/${selectImg}`)"
            download
          >
            <button>
              <img
                src="../../assets/images/studio/header/icon-down-dark.svg"
                alt="Down"
              />
            </button>
          </a>
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
            <p>수집</p>
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
          <div class="zoom">
            <img
              src="../../assets/images/studio/icon/icon-minus-dark.svg"
              alt=""
            />
            <input
              type="range"
              min="10"
              max="300"
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
      <div class="studio-center">
        <div class="studio-pic">
          <img
            v-if="isHosted"
            id="main-img"
            class="studio-img"
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
            id="main-img"
            class="studio-img"
            :src="require(`@/assets/images/studio/${selectImg}`)"
            alt=""
          />
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
                        <img
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
                            item.task_project.project_id +
                            '&task_id=' +
                            item.task_id
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
              @click="isCollectAssigneeOnOff"
            >
              <div class="studio-contents-assignee">
                <b>수집 담당자</b>
                <span class="bar-left"></span>
                <p>{{ selectCollectAssignee }}</p>
              </div>
              <img
                v-show="isCollectAssigneeOn"
                src="../../assets/images/studio/icon/icon-up-dark.svg"
                alt=""
              />
              <img
                v-show="!isCollectAssigneeOn"
                src="../../assets/images/studio/icon/icon-down-dark.svg"
                alt=""
              />
            </li>
            <li class="file-list-contents" v-if="isCollectAssigneeOn">
              <div
                class="file-list-contents-element"
                v-for="(item, index) in DataListAssignee"
                :key="index"
                @click="selectCollectAssigneeFunction(index)"
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
            <div v-show="!isCollectAssigneeOn" style="height: 10px"></div>
            <li
              class="studio-title"
              style="border: 1px solid var(--grey50); cursor: pointer"
              @click="isInspectAssigneeOnOff"
            >
              <div class="studio-contents-assignee">
                <b>검수 담당자</b>
                <span class="bar-left"></span>
                <p>{{ selectInspectAssignee }}</p>
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
              <h2>File Info.</h2>
            </li>
            <li class="studio-contents" v-if="isFileInfoOn">
              <div class="top-wrap">
                <div class="top">
                  <table class="file-info-table">
                    <tr>
                      <th><b>파일명</b></th>
                      <td>
                        <p>
                          {{
                            DataListItem[currentImageIndex].task_detail
                              .image_name
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
              </div>
            </li>
          </ul>
        </div>
        <div class="studio-right-bottom" v-show="isInspect">
          <button class="finish2" @click="imageStatusComplete()">완료</button>
          <button class="return" @click="isCompanionOnOff">반려</button>
        </div>
        <div class="studio-right-bottom" v-show="!isInspect">
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
          <textarea name="comp-comment" id="comp-comment"></textarea>
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
    </main>
  </div>
</template>

<script>
//import { onMounted, ref } from 'vue';
import axios from 'axios';
import { HOST } from '@/main';
//let idList = new Array();
//let DataListItem = new Array();

export default {
  /*setup() {
    const ids = ref('');
    onMounted(async () => {
      const res = await axios.get(
        HOST +
          '/rest/api/1/task/search?project_id=15&task_name&task_worker&task_validator&task_worker_or_validator&task_status_step&task_status_process',
      );
      ids.value = res.data.datas;
      if (ids.value.length > 0) {
        for (let i = 0; i < ids.value.length; i++) {
          idList[i] = ids.value[i];
          //DataListItem[i] = idList[i];
          //console.log(DataListItem[i].project_id);
        }
      }
    });
    // eslint-disable-next-line no-unused-vars
    const updateTask = async () => {
      confirm('작업을 저장하시겠습니까?');
      await axios.post(HOST, {});
    };
  },*/
  mounted: function () {
    axios
      .get(
        HOST +
          '/rest/api/1/task/search?project_id=15&task_name&task_worker&task_validator&task_worker_or_validator&task_status_step&task_status_process',
      )
      .then(response => {
        if (response.data.datas.length > 0) {
          this.hostUrl = HOST;
          this.isHosted = true;
          this.DataListItem = response.data.datas;
        } else {
          this.isHosted = false;
        }
        console.log(response.data.datas);
        this.openImage();
        this.openAssignee(this.currentImageIndex);
      });
    axios.get(HOST + '/rest/api/1/auth/user/search').then(response => {
      if (response.data.datas.length > 0) {
        this.isWorkers = true;
        this.DataListAssignee = response.data.datas;
      } else {
        this.isWorkers = false;
      }
    });
  },
  data: function () {
    return {
      isInspect: true,
      isHosted: false,
      isWorkers: false,
      hostUrl: '',

      //중앙
      selectImg: 'file-list1.png',
      selectImgName: 'person_0001.png',
      selectImgStatus: 1,
      selectCollectAssignee: '홍길동',
      selectInspectAssignee: '홍길동',
      imgOriginWidth: 0,
      imgOriginHeight: 0,

      //우측
      isCollectAssigneeOn: false,
      isInspectAssigneeOn: false,
      isFileListOn: false,
      isHistoryOn: false,
      isCompanionOn: false,
      isFileInfoOn: false,

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
            user_display_name: '사용자_01',
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
    };
  },

  methods: {
    FullScreenOnOff() {
      const documentElement = document.documentElement;
      if (document.fullscreenElement === null) {
        //전체화면 아닌 상태
        documentElement.requestFullscreen();
      } else {
        //전체화면 상태
        document.exitFullscreen();
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
    isCollectAssigneeOnOff() {
      this.isCollectAssigneeOn = !this.isCollectAssigneeOn;
    },
    isInspectAssigneeOnOff() {
      this.isInspectAssigneeOn = !this.isInspectAssigneeOn;
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
      let item = this.DataListItem[this.currentImageIndex];
      let projectId = item.task_project.project_id;
      let taskId = item.task_id;
      let comment = document.getElementById('comp-comment').value;
      axios.post(
        HOST +
          '/rest/api/1/task/status/update?project_id=' +
          projectId +
          '&task_id=' +
          taskId,
        {
          task_status_progress: 4,
          comment_body: comment,
        },
      );
      this.isCompanionOn = !this.isCompanionOn;
      this.DataListItem[
        this.currentImageIndex
      ].task_status.task_status_progress = 4;
    },
    selectImgFunction(index) {
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
      this.openImage();
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
    selectCollectAssigneeFunction(index) {
      let workerId = this.DataListAssignee[index].user_id;
      let workerName = this.DataListAssignee[index].user_display_name;
      let workerMail = this.DataListAssignee[index].user_email;
      if (confirm("수집 담당자를 '" + workerName + "'로 변경하시겠습니까?")) {
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
    openImage() {
      let img = document.getElementById('main-img');
      let width =
        this.DataListItem[this.currentImageIndex].task_detail.image_width;
      let height =
        this.DataListItem[this.currentImageIndex].task_detail.image_height;
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
      console.log(width + ', ' + height);
      this.imgOriginWidth = width;
      this.imgOriginHeight = height;
      img.width = this.imgOriginWidth;
      img.height = this.imgOriginHeight;
    },
    openAssignee(index) {
      if (
        this.DataListItem[index].task_worker != null &&
        this.DataListItem[index].task_worker.user_display_name != null
      ) {
        this.selectCollectAssignee =
          this.DataListItem[index].task_worker.user_display_name;
      } else {
        this.selectCollectAssignee = '없음';
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
      }
      return task;
    },
    imgSize(size) {
      return size + 'KB';
    },
    zoomAdjustment() {
      let zoom = document.getElementById('zoom-range').value;
      let img = document.getElementById('main-img');
      let width = img.clientWidth;
      let height = img.clientHeight;
      if (this.imgOriginWidth === 0 || this.imgOriginHeight === 0) {
        this.imgOriginWidth = width;
        this.imgOriginHeight = height;
      }
      img.width = this.imgOriginWidth * (zoom / 100);
      img.height = this.imgOriginHeight * (zoom / 100);
    },
    setZoomCenter() {
      document.getElementById('zoom-range').value = 100;
      let img = document.getElementById('main-img');
      img.width = this.imgOriginWidth;
      img.height = this.imgOriginHeight;
    },
  },
  computed: {},
};
</script>

<style>
@import '../../css/reset.css';
@import '../../css/common.css';
</style>
