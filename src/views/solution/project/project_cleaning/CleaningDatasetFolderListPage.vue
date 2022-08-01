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
                  <option value="">폴더명 검색</option>
                </select>
                <input
                  type="search"
                  placeholder="폴더명을 입력해주세요."
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
                <h2>전체 폴더</h2>
                <b>{{ DatasetListItem.length }}</b>
                <h2>건</h2>
              </li>
              <li class="bar"></li>
              <li>
                <button class="btn1-2">데이터 불러오기</button>
                <div class="file-wrap">
                  <input
                    type="file"
                    id="purification-file"
                    ref="selectFile"
                    webkitdirectory
                    @change="uploadFolder"
                  />
                  <label for="purification-file" class="btn-set btn1-1"
                    >업로드</label
                  >
                </div>
                <router-link
                  to="/allProject/project_cleaning/foldermanage"
                  class="btn1-2 btn-set"
                  target="_blank"
                  >데이터셋 관리</router-link
                >
                <button class="btn2-1" @click="isPopUpAssignmentOnOff()">
                  할당하기
                </button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th><span>데이터셋 명</span></th>
                <th><span>전체 작업 진행률</span></th>
                <th><span>정제</span></th>
                <th><span>검수</span></th>
                <th><span>최종(완료)</span></th>
              </tr>
              <tr v-for="(item, index) in DatasetListItem" :key="index">
                <td>
                  <router-link to="/allProject/project_cleaning/filelist">{{
                    item.datasetName
                  }}</router-link>
                </td>
                <td>
                  <div class="progress-wrap">
                    <progress
                      min="0"
                      max="100"
                      :value="(item.progressCount / item.allCount) * 100"
                    ></progress>
                    <p>
                      {{ (item.progressCount / item.allCount) * 100 }}%
                      <span
                        >({{ item.progressCount }}/{{ item.allCount }})</span
                      >
                    </p>
                  </div>
                </td>
                <td>
                  <span>{{ item.workingCount }}</span>
                </td>
                <td>
                  <span>{{ item.inspectionCount }}</span>
                </td>
                <td>
                  <span>{{ item.completeCount }}</span>
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
              <!-- <li>
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
              </li> -->
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
    <div
      class="project-popup-wrap"
      v-show="isPopUpAssignmentOn || isPopUpFolderSelectOn"
    >
      <ul class="project-popup2" v-show="isPopUpAssignmentOn">
        <li class="project-popup-title align2">
          <h2>할당하기</h2>
          <button @click="isPopUpAssignmentOn = false">
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
              <h4>
                Total File <span>{{ this.AssignmentDataCountList }}</span>
              </h4>
            </div>
            <div class="align1">
              <button
                class="btn2-2 select-data"
                @click="isPopUpFolderSelectOnOff()"
              >
                <span>데이터 선택</span>
              </button>
              <input type="text" v-model="AssignmentDataList" />
            </div>
          </div>
          <div class="project-popup-inner align1">
            <ul class="align1">
              <li class="radio-wrap">
                <input
                  type="radio"
                  id="collect-folder-assignment-all"
                  name="collect-folder-assignment"
                  v-model="numberOfAssignment"
                  value="allFile"
                />
                <label for="collect-folder-assignment-all"
                  ><span> 전체파일</span></label
                >
              </li>
              <li class="radio-wrap">
                <input
                  type="radio"
                  id="collect-folder-assignment-set"
                  name="collect-folder-assignment"
                  v-model="numberOfAssignment"
                  value="numberInput"
                />
                <label for="collect-folder-assignment-set"
                  ><span> 개수 설정</span></label
                >
              </li>
              <li>
                <input
                  type="text"
                  v-show="this.numberOfAssignment == 'numberInput'"
                  v-model="numberInput"
                  @change="isNumberInputValid"
                />
              </li>
            </ul>
          </div>
          <div class="project-popup-inner">
            <div class="align0">
              <h3>담당자</h3>
              <h4>담당자 수 <span>0명</span></h4>
            </div>
            <input
              type="text"
              placeholder="이름 또는 이메일로 검색해주세요."
              v-model="PopUpsearchKeyword"
              @change="popUpSortedData()"
            />
          </div>
          <div class="project-popup-inner align5">
            <div class="table-wrap">
              <table class="table3">
                <tr class="table3-head">
                  <th>
                    <input
                      type="checkbox"
                      v-model="allOrganizationChecked"
                      @click="organizationcheckedAll($event.target.checked)"
                    />
                  </th>
                  <th><span>멤버 이메일</span></th>
                  <th><span>멤버명</span></th>
                </tr>
                <tr
                  v-for="(item, index) in organizationMemberListItem"
                  :key="index"
                >
                  <td>
                    <input
                      type="checkbox"
                      v-model="organizationMemberCheck"
                      id="'organizationMemberCheck' + index"
                      :value="index"
                      @click="memberAdd(index, $event.target.checked)"
                    />
                  </td>
                  <td>
                    <span>{{ item.name }}</span>
                  </td>
                  <td>
                    <span>{{ item.email }}</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="manager-box purification-dataset-list.html align3">
              <span
                class="align1"
                v-for="(item, index) in CheckOrganizationMemberListItem"
                :key="index"
              >
                {{ item }}
                <!-- <img
                  src="../../../../assets/images/project/icon/icon-close03.svg"
                  alt=""
              /> -->
              </span>
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
              <button class="btn2-1" @click="workAssignment()">
                <span>작업할당</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <ul class="project-popup1" v-show="isPopUpFolderSelectOn">
        <li class="project-popup-title align2">
          <h2>폴더선택</h2>
          <button @click="isPopUpFolderSelectOn = false">
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </li>
        <li class="project-popup-contents">
          <table class="table4">
            <tr v-for="(item, index) in DatasetListItem" :key="index">
              <td>
                <input
                  type="checkbox"
                  v-model="AssignmentDataCheck"
                  id="'AssignmentDataCheck' + index"
                  :value="index"
                  @click="AssignmentDataAdd(index, $event.target.checked)"
                />
              </td>
              <td>
                <span
                  ><img
                    src="../../../../assets/images/project/icon/icon-folder.svg"
                    alt=""
                  />{{ item.datasetName }}</span
                >
              </td>
              <td>
                <span>{{ item.allCount }}</span>
              </td>
            </tr>
          </table>
          <div class="align6">
            <button class="btn1-1" @click="isPopUpFolderSelectOn = false">
              취소
            </button>
            <button class="btn2-1" @click="AssignmentDataAddComplete()">
              선택
            </button>
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

//import ProjectDatasetFolder from '../../../../api/ProjectDatasetFolder.json';
import axios from 'axios';

export default {
  components: {
    MainMenu,
    SubMenu,
    Header,
  },
  mounted: function () {
    axios.get('./ProjectDatasetFolder.json').then(response => {
      console.log(response.data);
      this.DatasetListItem = response.data;
      this.DatasetListItemOrigin = response.data;
    });
    // axios
    //   .post('./ProjectDatasetFolder.json', 'this is string')
    //   .then(res => {
    //     console.log(res);
    //     console.log('된거?');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     console.log('안된거?');
    //   });
  },
  data: function () {
    return {
      //검색
      searchKeyword: '',

      isPopUpAssignmentOn: false,
      isPopUpFolderSelectOn: false,
      DatasetListItem: [],
      DatasetListItemOrigin: [],
      files: [],

      //할당하기 팝업
      numberOfAssignment: 'allFile',
      AssignmentDataList: '',
      AssignmentDataCheck: [],
      AssignmentDataCheckList: [],
      AssignmentDataCountList: 0,
      numberInput: 0,
      PopUpsearchKeyword: '',
      organizationMemberCheck: [],
      organizationMemberListItemOrigin: [
        {
          id: 1,
          email: 'yang73@tbell.co.kr',
          name: '양성현',
          authority: '1 Level',
          date: '2022.02.17',
          workStep: '검수',
        },
        {
          id: 2,
          email: 'lee420@tbell.co.kr',
          name: '이상훈',
          authority: '1 Level',
          date: '2022.02.19',
          workStep: '검수',
        },
        {
          id: 3,
          email: 'park5642@tbell.co.kr',
          name: '박은지',
          authority: '1 Level',
          date: '2021.12.28',
          workStep: '검수',
        },
        {
          id: 4,
          email: 'kim414@tbell.co.kr',
          name: '김현정',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
        {
          id: 5,
          email: 'u8427@tbell.co.kr',
          name: '유정식',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
        {
          id: 6,
          email: 'sogn875@tbell.co.kr',
          name: '송하윤',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
      ],
      organizationMemberListItem: [
        {
          id: 1,
          email: 'yang73@tbell.co.kr',
          name: '양성현',
          authority: '1 Level',
          date: '2022.02.17',
          workStep: '검수',
        },
        {
          id: 2,
          email: 'lee420@tbell.co.kr',
          name: '이상훈',
          authority: '1 Level',
          date: '2022.02.19',
          workStep: '검수',
        },
        {
          id: 3,
          email: 'park5642@tbell.co.kr',
          name: '박은지',
          authority: '1 Level',
          date: '2021.12.28',
          workStep: '검수',
        },
        {
          id: 4,
          email: 'kim414@tbell.co.kr',
          name: '김현정',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
        {
          id: 5,
          email: 'u8427@tbell.co.kr',
          name: '유정식',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
        {
          id: 6,
          email: 'sogn875@tbell.co.kr',
          name: '송하윤',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
      ],
      CheckOrganizationMemberListItem: [],
    };
  },
  computed: {},
  methods: {
    isPopUpAssignmentOnOff: function () {
      this.isPopUpAssignmentOn = !this.isPopUpAssignmentOn;
    },
    isPopUpFolderSelectOnOff: function () {
      this.isPopUpFolderSelectOn = !this.isPopUpFolderSelectOn;
    },
    uploadFolder() {
      // 선택된 파일이 있는가?
      if (0 < this.$refs.selectFile.files.length) {
        // 0 번째 파일을 가져 온다.
        this.selectFile = this.$refs.selectFile.files[0];
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
          reader.readAsDataURL(this.selectFile);
        } else if (this.selectFile.size <= 1048576) {
          // 이미지외 파일
          this.previewImgUrl = null;
        } else {
          alert('파일을 다시 선택해 주세요.');
          this.selectFile = null;
          this.previewImgUrl = null;
        }
        this.files = [
          ...this.files,
          //이미지 업로드
          {
            //실제 파일
            datasetName: this.selectFile.name,
            //이미지 프리뷰
            projectType: this.selectFile.type,

            //img: this.selectFile.src,
          },
        ];
        //console.log('imgUrl : ' + this.files.imgUrl);
      } else {
        // 파일을 선택하지 않았을때
        this.selectFile = null;
        this.previewImgUrl = null;
      }
      // console.log(this.selectFile);
      // console.log(this.files);
      //  console.log(this.files.length);
      let dataset_name = this.selectFile.webkitRelativePath.split('/', 1);

      this.DatasetListItem.push({
        datasetName: dataset_name[0],
        projectType: '데이터 가공',
        progressCount: '0',
        allCount: this.$refs.selectFile.files.length,
        projectTypeLink: '/project_cleaning',
        workingCount: '0',
        inspectionCount: '0',
        completeCount: '0',
      });
    },

    isNumberInputValid() {
      if (this.numberInput > this.AssignmentDataCountList) {
        this.numberInput = 0;
        return alert('선택한 대상 데이터보다 많이 입력되었습니다.');
      } else {
        this.AssignmentDataCountList =
          this.AssignmentDataCountList - this.numberInput;
      }
    },
    organizationcheckedAll(checked) {
      if (checked == true) {
        for (let i in this.organizationMemberListItem) {
          this.organizationMemberCheck.push(i);
          this.CheckOrganizationMemberListItem.push(
            this.organizationMemberListItem[i].name,
          );

          this.CheckOrganizationMemberListItem =
            this.CheckOrganizationMemberListItem.filter((element, index) => {
              return (
                this.CheckOrganizationMemberListItem.indexOf(element) === index
              );
            });
        }
      } else if (checked == false) {
        for (let i in this.organizationMemberListItem) {
          this.organizationMemberCheck.splice(i);
          this.CheckOrganizationMemberListItem.splice(i);
        }
      }
    },
    popUpSortedData() {
      if (this.PopUpsearchKeyword) {
        this.searchedData1 = this.organizationMemberListItemOrigin.filter(
          data => {
            return data.email
              .toLowerCase()
              .includes(this.PopUpsearchKeyword.toLowerCase());
          },
        );
        this.searchedData2 = this.organizationMemberListItemOrigin.filter(
          data => {
            return data.name
              .toLowerCase()
              .includes(this.PopUpsearchKeyword.toLowerCase());
          },
        );

        const newArr = [...this.searchedData1, ...this.searchedData2];

        return (this.organizationMemberListItem = newArr);
      } else {
        //데이터가 없을 경우, 전체 리스트 출력
        return (this.organizationMemberListItem =
          this.organizationMemberListItemOrigin);
      }
    },
    memberAdd(index, checked) {
      if (checked == true) {
        this.organizationMemberCheck.push(index);

        this.CheckOrganizationMemberListItem.push(
          this.organizationMemberListItem[index].name,
        );

        this.CheckOrganizationMemberListItem =
          this.CheckOrganizationMemberListItem.filter((element, index) => {
            return (
              this.CheckOrganizationMemberListItem.indexOf(element) === index
            );
          });
      } else if (checked == false) {
        // console.log(this.organizationMemberCheck);
        for (let i = 0; i < this.CheckOrganizationMemberListItem.length; i++) {
          if (
            this.CheckOrganizationMemberListItem[i] ===
            this.organizationMemberListItem[index].name
          ) {
            this.CheckOrganizationMemberListItem.splice(i, 1);
            this.organizationMemberCheck.splice(i);

            i--;
          }
        }
      }
    },
    AssignmentDataAdd(index, checked) {
      if (checked == true) {
        this.AssignmentDataCheck.push(index);
        this.AssignmentDataCheckList.push({
          name: this.DatasetListItem[index].datasetName,
          allCount: this.DatasetListItem[index].allCount,
        });
        //console.log(this.AssignmentDataCheckList);
      } else if (checked == false) {
        //console.log(this.AssignmentDataCheck);
        this.AssignmentDataCheck.splice(index, 1);
        // console.log(this.AssignmentDataCheck);

        for (let i = 0; i < this.AssignmentDataCheckList.length; i++) {
          if (
            this.AssignmentDataCheckList[i].name ===
            this.DatasetListItem[index].datasetName
          ) {
            // this.DatasetListItem.splice(i, 1);
            this.AssignmentDataCheckList.splice(i, 1);
            i--;
          }
        }
      }
    },
    AssignmentDataAddComplete() {
      this.AssignmentDataList = [];
      this.AssignmentDataCountList = 0;
      this.AssignmentDataCountList = Number(this.AssignmentDataCountList);
      for (let i = 0; i < this.AssignmentDataCheckList.length; i++) {
        if (i == 0) {
          this.AssignmentDataList =
            this.AssignmentDataList + this.AssignmentDataCheckList[i].name;
          this.AssignmentDataCountList =
            this.AssignmentDataCountList +
            this.AssignmentDataCheckList[i].allCount;
        } else {
          this.AssignmentDataList =
            this.AssignmentDataList +
            ', ' +
            this.AssignmentDataCheckList[i].name;
          this.AssignmentDataCountList =
            this.AssignmentDataCountList +
            this.AssignmentDataCheckList[i].allCount;
        }
        // console.log(this.AssignmentDataList + '\n');
      }
      this.isPopUpFolderSelectOn = false;
    },
    workAssignment() {
      console.log(this.AssignmentDataList);
      if (this.AssignmentDataCheckList.length <= 0) {
        alert('대상 데이터를 선택해주세요.');
      } else if (this.CheckOrganizationMemberListItem.length <= 0) {
        alert('담당자를 선택해주세요.');
      } else {
        this.isPopUpAssignmentOn = false;
        alert('작업할당이 완료되었습니다.');
      }
    },
    sortedData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.DatasetListItem.filter(data => {
          return data.datasetName
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });
      } else {
        this.searchedData1 = this.DatasetListItemOrigin;
      }
      return (this.DatasetListItem = this.searchedData1);
    },
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
