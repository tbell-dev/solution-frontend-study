<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />

      <main id="main">
        <section>
          <article class="align1 button-filter">
            <router-link
              to="/allProject/project_cleaning/setting/cleaning"
              class="btn-set btn1-2"
              >프로젝트 정보</router-link
            >
            <router-link
              to="/allProject/project_cleaning/membersetting/cleaning"
              class="btn-set btn2-2"
              >프로젝트 멤버</router-link
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
                  v-model="searchKeyword"
                />
                <button class="btn2-1" @click="SortedData()">검색</button>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <ul class="current-bar">
              <li>
                <h2>전체 멤버</h2>
                <b>{{ MemberListItem.length }}</b>
                <h2>명</h2>
              </li>
              <li class="bar"></li>
              <li>
                <button class="btn2-2" @click="isPopUpOnOff">
                  <span> 작업자 추가하기</span>
                </button>
                <button class="btn1-1"><span> 삭제</span></button>
                <button class="btn1-3 work-stage">
                  <span> 작업단계 변경</span>
                  <img
                    src="../../../../assets/images/project/icon/icon-dropdown.svg"
                    alt=""
                  />
                  <ul class="filter-more" v-show="isWorkStepPopUpOn">
                    <li class="align1">
                      <input type="checkbox" id="table1-filter1" />
                      <label for="table1-filter1"><span>정제</span></label>
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
                </button>
              </li>
            </ul>
          </article>
          <article class="basic-article">
            <table class="table1">
              <tr class="table1-head">
                <th>
                  <input
                    type="checkbox"
                    v-model="allChecked"
                    @click="checkedAll($event.target.checked)"
                  />
                </th>
                <th><span>이메일</span></th>
                <th><span>이름</span></th>
                <th><span>작업단계</span></th>
              </tr>
              <tr v-for="(item, index) in MemberListItem" :key="index">
                <td>
                  <input
                    type="checkbox"
                    v-model="MemberCheck"
                    id="'MemberCheck' + index"
                    :value="index"
                  />
                </td>
                <td>
                  <span>{{ item.email }}</span>
                </td>
                <td>
                  <span>{{ item.name }}</span>
                </td>
                <td><span>검수</span></td>
              </tr>
            </table>
          </article>
        </section>
      </main>
    </div>
    <div class="project-popup-wrap" v-show="isPopUpOn">
      <div class="project-popup2">
        <div class="project-popup-title align2">
          <h2>프로젝트 멤버 추가</h2>
          <button @click="isPopUpOn = false">
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </div>
        <div class="project-popup-contents">
          <div class="project-popup-inner align1">
            <input
              type="text"
              placeholder="이름 또는 이메일로 검색해주세요."
              v-model="PopUpsearchKeyword"
            />
            <button class="btn2-0" @click="popUpSortedData()">
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
                  <th>
                    <input
                      type="checkbox"
                      v-model="allOrganizationChecked"
                      @click="organizationcheckedAll($event.target.checked)"
                    />
                  </th>
                  <th><span>멤버명</span></th>
                  <th><span>멤버 이메일</span></th>
                  <th><span>작업단계</span></th>
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
                  <td><span>검수</span></td>
                </tr>
              </table>
            </div>
            <div class="right">
              <div class="member-board align3">
                <span
                  v-for="(item, index) in CheckOrganizationMemberListItem"
                  :key="index"
                  >{{ item }}</span
                >
              </div>
              <select name="" id="">
                <option value="">검수</option>
                <option value="">최종</option>
              </select>
            </div>
          </div>
          <div class="project-popup-inner align6">
            <button class="btn2-1" @click="OrganizationMemberAdd()">
              추가
            </button>
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
  data: function () {
    return {
      isPopUpOn: false,
      isWorkStepPopUpOn: false,
      searchKeyword: '',
      PopUpsearchKeyword: '',
      allChecked: false,
      allOrganizationChecked: false,
      MemberCheck: [],
      MemberListItemOrigin: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '강은수',
          authority: '1 Level',
          date: '2022.02.17',
          workStep: '검수',
        },
        {
          id: 2,
          email: 'lee241@tbell.co.kr',
          name: '이정호',
          authority: '1 Level',
          date: '2022.02.19',
          workStep: '검수',
        },
        {
          id: 3,
          email: 'lloveu00@tbell.co.kr',
          name: '한은혁',
          authority: '1 Level',
          date: '2021.12.28',
          workStep: '검수',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '박은정',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
      ],
      MemberListItem: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '강은수',
          authority: '1 Level',
          date: '2022.02.17',
          workStep: '검수',
        },
        {
          id: 2,
          email: 'lee241@tbell.co.kr',
          name: '이정호',
          authority: '1 Level',
          date: '2022.02.19',
          workStep: '검수',
        },
        {
          id: 3,
          email: 'lloveu00@tbell.co.kr',
          name: '한은혁',
          authority: '1 Level',
          date: '2021.12.28',
          workStep: '검수',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '박은정',
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        },
      ],
      CheckMemberListItem: [],
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
  methods: {
    isPopUpOnOff() {
      this.isPopUpOn = !this.isPopUpOn;
    },
    isWorkStepPopUpOnOff() {
      this.isWorkStepPopUpOn = !this.isWorkStepPopUpOn;
    },
    // checkedAll(checked) {
    //   console.log('오는건 맞음?');
    //   if (checked == true) {
    //     for (let i in this.MemberListItem) {
    //       this.MemberCheck.push(i);
    //       console.log('테스트다용' + this.MemberCheck);
    //     }
    //   } else if (checked == false) {
    //     for (let i in this.MemberListItem) {
    //       this.MemberCheck.splice(i);
    //     }
    //   }
    //   console.log(this.MemberCheck);
    // },
    checkedAll(checked) {
      if (checked == true) {
        for (let i in this.MemberListItem) {
          this.MemberCheck.push(i);
        }
      } else if (checked == false) {
        for (let i in this.MemberListItem) {
          this.MemberCheck.splice(i);
        }
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
    SortedData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.MemberListItemOrigin.filter(data => {
          return data.email
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });
        this.searchedData2 = this.MemberListItemOrigin.filter(data => {
          return data.name
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });

        const newArr = [...this.searchedData1, ...this.searchedData2];

        return (this.MemberListItem = newArr);
      } else {
        //데이터가 없을 경우, 전체 리스트 출력
        return (this.MemberListItem = this.MemberListItemOrigin);
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
        console.log(this.organizationMemberCheck);
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
    OrganizationMemberAdd() {
      for (let i in this.CheckOrganizationMemberListItem) {
        this.MemberListItem.push({
          id: 4,
          email: 'park99@tbell.co.kr',
          name: this.CheckOrganizationMemberListItem[i],
          authority: '1 Level',
          date: '2022.02.25',
          workStep: '검수',
        });
      }
      console.log(this.CheckOrganizationMemberListItem);
      console.log(this.MemberListItem);
    },
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
