<template>
  <main id="main">
    <section>
      <article class="align1 button-filter">
        <router-link to="/mypage/member" class="btn-set btn2-1"
          >멤버설정</router-link
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
              placeholder="이름, 이메일로 검색해주세요."
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
            <h2>전체 멤버</h2>
            <b>{{ MemberListItem.length }}</b>
            <h2>명</h2>
          </li>
          <li class="bar"></li>
          <li>
            <button class="btn2-1" @click="isPopUpOnOff()">멤버초대</button>
          </li>
        </ul>
      </article>
      <article class="basic-article">
        <table class="table1">
          <tr class="table1-head">
            <th><span>이메일</span></th>
            <th><span>이름</span></th>
            <th><span>권한</span></th>
            <th><span>조직 가입일</span></th>
            <th><span></span></th>
          </tr>
          <tr v-for="(item, index) in MemberListItem" :key="index">
            <td>
              <span>{{ item.email }}</span>
            </td>
            <td>
              <span>{{ item.name }}</span>
            </td>
            <td>
              <span>{{ item.authority }}</span>
            </td>
            <td>
              <span>{{ item.date }}</span>
            </td>
            <td class="table1-icon">
              <button @click="memberDelete(index)">
                <img
                  src="../../../assets/images/project/icon/icon-delete.svg"
                  alt=""
                />
              </button>
            </td>
          </tr>
        </table>
      </article>
    </section>
    <section>
      <article>
        <ul class="current-bar">
          <li>
            <h2>가입 대기</h2>
            <b>{{ WaitingMemberListItem.length }}</b>
            <h2>명</h2>
          </li>
        </ul>
      </article>
      <article class="basic-article">
        <table class="table1">
          <tr class="table1-head">
            <th><span>이메일</span></th>
            <th><span>조직 가입일</span></th>
            <th><span></span></th>
          </tr>
          <tr v-for="(item, index) in WaitingMemberListItem" :key="index">
            <td>
              <span>{{ item.email }}</span>
            </td>
            <td>
              <span>{{ item.date }}</span>
            </td>
            <td class="table1-icon">
              <button @click="WaitingMemberDelete(index)">
                <img
                  src="../../../assets/images/project/icon/icon-delete.svg"
                  alt=""
                />
              </button>
            </td>
          </tr>
        </table>
      </article>
    </section>
    <div class="project-popup-wrap" v-show="isPopUpOn">
      <ul class="project-popup1">
        <li class="project-popup-title align2">
          <h2>멤버초대</h2>
          <button @click="isPopUpOnOff()">
            <img
              src="../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </li>
        <li class="project-popup-contents">
          <div class="project-popup-inner">
            <h3>초대할 멤버 이메일을 입력하세요.</h3>
            <input
              type="text"
              v-model="inviteEmail"
              v-bind:class="{
                inputcheckstyle1: !isEmailCheck,
                inputcheckstyle2: isEmailCheck,
              }"
            />
          </div>
          <div class="project-popup-inner align6">
            <button class="btn-set btn2-1" @click="inviteEmailComplete()">
              전송
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      isPopUpOn: false,
      inviteEmail: '',
      searchKeyword: '',
      searchedData: [],
      listData: [],
      MemberListItemOrigin: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '강은수',
          authority: '1 Level',
          date: '2022.02.17',
        },
        {
          id: 2,
          email: 'lee241@tbell.co.kr',
          name: '이정호',
          authority: '1 Level',
          date: '2022.02.19',
        },
        {
          id: 3,
          email: 'lloveyou00@tbell.co.kr',
          name: '한은혁',
          authority: '1 Level',
          date: '2021.12.28',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '박은정',
          authority: '1 Level',
          date: '2022.02.25',
        },
      ],
      MemberListItem: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '강은수',
          authority: '1 Level',
          date: '2022.02.17',
        },
        {
          id: 2,
          email: 'lee241@tbell.co.kr',
          name: '이정호',
          authority: '1 Level',
          date: '2022.02.19',
        },
        {
          id: 3,
          email: 'lloveyou00@tbell.co.kr',
          name: '한은혁',
          authority: '1 Level',
          date: '2021.12.28',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '박은정',
          authority: '1 Level',
          date: '2022.02.25',
        },
      ],
      WaitingMemberListItem: [
        {
          id: 1,
          email: 'cw.yoo@tbell.co.kr',
          date: '2022.03.29',
        },
        {
          id: 2,
          email: 'uswes88@tbell.co.kr',
          date: '2022.04.05',
        },
        {
          id: 3,
          email: 'qqqq7401@tbell.co.kr',
          date: '2022.04.07',
        },
      ],
    };
  },
  computed: {
    isEmailCheck() {
      const re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      return re.test(String(this.inviteEmail).toLowerCase());
    },
  },
  created() {
    this.listData = this.MemberListItemOrigin;
  },
  methods: {
    isPopUpOnOff: function () {
      this.isPopUpOn = !this.isPopUpOn;
    },

    memberDelete: function (index) {
      let deleteYN = confirm('정말 삭제하시겠습니까?');
      if (deleteYN) {
        this.MemberListItem.splice(index, 1);
        console.log(this.MemberListItem[index]);
        alert('삭제가 완료되었습니다.');
      }
    },
    WaitingMemberDelete: function (index) {
      let deleteYN = confirm('해당 사용자의 초대를 취소하시겠습니까?');
      if (deleteYN) {
        this.WaitingMemberListItem.splice(index, 1);
        console.log(this.MemberListItem[index]);
        alert('삭제가 완료되었습니다.');
      }
    },
    inviteEmailComplete: function () {
      alert('초대가 전송되었습니다.');
      this.isPopUpOn = !this.isPopUpOn;
    },
    sortedData() {
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
  },
};
</script>

<style></style>
