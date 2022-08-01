<template>
  <div id="project-wrap">
    <div class="left-wrap"><MainMenu /><SubMenu /></div>
    <div class="right-wrap">
      <Header />
      <main id="main">
        <section>
          <article class="align1 button-filter">
            <button
              @click="isLabelingOnOff"
              :class="{
                'btn-set btn2-1': isLabelingOn,
                'btn-set btn1-1': !isLabelingOn,
              }"
            >
              가공
            </button>
            <button
              @click="isInspectionOnOff"
              :class="{
                'btn-set btn2-1': isInspectionOn,
                'btn-set btn1-1': !isInspectionOn,
              }"
            >
              검수
            </button>
            <button
              @click="isFinalOnOff"
              :class="{
                'btn-set btn2-1': isFinalOn,
                'btn-set btn1-1': !isFinalOn,
              }"
            >
              최종
            </button>
          </article>
        </section>
        <div v-show="isLabelingOn">
          <section>
            <article>
              <ul class="search-filter">
                <li class="search-title">
                  <h2>검색어</h2>
                </li>
                <li class="search-contents">
                  <input
                    type="search"
                    placeholder="이름, 이메일로 검색하세요."
                    v-model="searchKeyword"
                  />
                  <button class="btn2-1" @click="SortedLabelingData()">
                    검색
                  </button>
                </li>
              </ul>
            </article>
          </section>
          <section>
            <article>
              <ul class="current-bar">
                <li>
                  <button class="btn2-2" @click="LabelingExcelDownload()">
                    <span>엑셀 다운로드</span>
                  </button>
                </li>
              </ul>
            </article>
            <article class="basic-article">
              <table class="table1">
                <tr class="table1-head">
                  <th><input type="checkbox" /></th>
                  <th><span>작업자명</span></th>
                  <th><span>작업자 메일</span></th>
                  <th><span>가공</span></th>
                  <th><span>검수</span></th>
                  <th><span>최종</span></th>
                  <th><span>마지막 업데이트</span></th>
                </tr>
                <tr
                  v-for="(item, index) in LabelingMemberListItem"
                  :key="index"
                >
                  <td><input type="checkbox" /></td>
                  <td>
                    <span>{{ item.name }}</span>
                  </td>
                  <td>
                    <span>{{ item.email }}</span>
                  </td>
                  <td>
                    <span>{{ item.LabelingCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.inspectionCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.finalCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.upDate }}</span>
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
              </ul>
              <button class="page-next">
                <img
                  src="../../../../assets/images/project/icon/icon-page-next.svg"
                  alt=""
                />
              </button>
            </article>
          </section>
        </div>
        <div v-show="isInspectionOn">
          <section>
            <article>
              <ul class="search-filter">
                <li class="search-title">
                  <h2>검색어</h2>
                </li>
                <li class="search-contents">
                  <input
                    type="search"
                    placeholder="이름, 이메일로 검색하세요."
                    v-model="searchKeyword"
                  />
                  <button class="btn2-1" @click="SortedInspectionData()">
                    검색
                  </button>
                </li>
              </ul>
            </article>
          </section>
          <section>
            <article>
              <ul class="current-bar">
                <li>
                  <button class="btn2-2" @click="inspectionExcelDownload()">
                    <span>엑셀 다운로드</span>
                  </button>
                </li>
              </ul>
            </article>
            <article class="basic-article">
              <table class="table1">
                <tr class="table1-head">
                  <th><input type="checkbox" /></th>
                  <th><span>작업자명</span></th>
                  <th><span>작업자 메일</span></th>
                  <th><span>가공</span></th>
                  <th><span>검수</span></th>
                  <th><span>최종</span></th>
                  <th><span>마지막 업데이트</span></th>
                </tr>
                <tr
                  v-for="(item, index) in InspectionMemberListItem"
                  :key="index"
                >
                  <td><input type="checkbox" /></td>
                  <td>
                    <span>{{ item.name }}</span>
                  </td>
                  <td>
                    <span>{{ item.email }}</span>
                  </td>
                  <td>
                    <span>{{ item.LabelingCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.inspectionCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.finalCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.upDate }}</span>
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
              </ul>
              <button class="page-next">
                <img
                  src="../../../../assets/images/project/icon/icon-page-next.svg"
                  alt=""
                />
              </button>
            </article>
          </section>
        </div>
        <div v-show="isFinalOn">
          <section>
            <article>
              <ul class="search-filter">
                <li class="search-title">
                  <h2>검색어</h2>
                </li>
                <li class="search-contents">
                  <input
                    type="search"
                    placeholder="이름, 이메일로 검색하세요."
                    v-model="searchKeyword"
                  />
                  <button class="btn2-1" @click="SortedFinalData()">
                    검색
                  </button>
                </li>
              </ul>
            </article>
          </section>
          <section>
            <article>
              <ul class="current-bar">
                <li>
                  <button class="btn2-2" @click="finalExcelDownload()">
                    <span>엑셀 다운로드</span>
                  </button>
                </li>
              </ul>
            </article>
            <article class="basic-article">
              <table class="table1">
                <tr class="table1-head">
                  <th><input type="checkbox" /></th>
                  <th><span>작업자명</span></th>
                  <th><span>작업자 메일</span></th>
                  <th><span>가공</span></th>
                  <th><span>검수</span></th>
                  <th><span>최종</span></th>
                  <th><span>마지막 업데이트</span></th>
                </tr>
                <tr v-for="(item, index) in FinalMemberListItem" :key="index">
                  <td><input type="checkbox" /></td>
                  <td>
                    <span>{{ item.name }}</span>
                  </td>
                  <td>
                    <span>{{ item.email }}</span>
                  </td>
                  <td>
                    <span>{{ item.LabelingCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.inspectionCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.finalCount }}</span>
                  </td>
                  <td>
                    <span>{{ item.upDate }}</span>
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
              </ul>
              <button class="page-next">
                <img
                  src="../../../../assets/images/project/icon/icon-page-next.svg"
                  alt=""
                />
              </button>
            </article>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
//import XLSX from 'xlsx';

// const fs = require('fs');
// let cars = [
//   {
//     Name: 'chevrolet chevelle malibu',
//     Miles_per_Gallon: 18,
//     Cylinders: 8,
//     Displacement: 307,
//     Horsepower: 130,
//     Weight_in_lbs: 3504,
//     Acceleration: 12,
//     Year: '1970-01-01',
//     Origin: 'USA',
//   },
//   {
//     Name: 'buick skylark 320',
//     Miles_per_Gallon: 15,
//     Cylinders: 8,
//     Displacement: 350,
//     Horsepower: 165,
//     Weight_in_lbs: 3693,
//     Acceleration: 11.5,
//     Year: '1970-01-01',
//     Origin: 'USA',
//   },
// ];
// cars.forEach(car => {
//   car.price = 12000;
// });
// let data = JSON.stringify(cars);
// fs.writeFileSync('data.json', data);

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
      isLabelingOn: true,
      isInspectionOn: false,
      isFinalOn: false,

      LabelingMemberListItemOrigin: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '강은수',
          LabelingCount: '14',
          inspectionCount: '23',
          finalCount: '8',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 2,
          email: 'lloveu00@tbell.co.kr',
          name: '한은혁',
          LabelingCount: '14',
          inspectionCount: '47',
          finalCount: '42',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 3,
          email: 'lee241@tbell.co.kr',
          name: '이정호',
          LabelingCount: '14',
          inspectionCount: '84',
          finalCount: '29',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '박은정',
          LabelingCount: '14',
          inspectionCount: '75',
          finalCount: '34',
          upDate: '2022.02.17 11:27:14',
        },
      ],
      LabelingMemberListItem: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '강은수',
          LabelingCount: '14',
          inspectionCount: '23',
          finalCount: '8',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 2,
          email: 'lloveu00@tbell.co.kr',
          name: '한은혁',
          LabelingCount: '14',
          inspectionCount: '47',
          finalCount: '42',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 3,
          email: 'lee241@tbell.co.kr',
          name: '이정호',
          LabelingCount: '14',
          inspectionCount: '84',
          finalCount: '29',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '박은정',
          LabelingCount: '14',
          inspectionCount: '75',
          finalCount: '34',
          upDate: '2022.02.17 11:27:14',
        },
      ],
      InspectionMemberListItemOrigin: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '윤지원',
          LabelingCount: '14',
          inspectionCount: '23',
          finalCount: '8',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 2,
          email: 'lloveu00@tbell.co.kr',
          name: '이지민',
          LabelingCount: '14',
          inspectionCount: '47',
          finalCount: '42',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 3,
          email: 'lee241@tbell.co.kr',
          name: '신민정',
          LabelingCount: '14',
          inspectionCount: '84',
          finalCount: '29',
          upDate: '2022.02.17 11:27:14',
        },
      ],
      InspectionMemberListItem: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '윤지원',
          LabelingCount: '14',
          inspectionCount: '23',
          finalCount: '8',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 2,
          email: 'lloveu00@tbell.co.kr',
          name: '이지민',
          LabelingCount: '14',
          inspectionCount: '47',
          finalCount: '42',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 3,
          email: 'lee241@tbell.co.kr',
          name: '신민정',
          LabelingCount: '14',
          inspectionCount: '84',
          finalCount: '29',
          upDate: '2022.02.17 11:27:14',
        },
      ],
      FinalMemberListItemOrigin: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '이영선',
          LabelingCount: '14',
          inspectionCount: '23',
          finalCount: '8',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 2,
          email: 'lloveu00@tbell.co.kr',
          name: '강영호',
          LabelingCount: '14',
          inspectionCount: '47',
          finalCount: '42',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 3,
          email: 'lee241@tbell.co.kr',
          name: '조지훈',
          LabelingCount: '14',
          inspectionCount: '84',
          finalCount: '29',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '양지혜',
          LabelingCount: '14',
          inspectionCount: '75',
          finalCount: '34',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 5,
          email: 'park99@tbell.co.kr',
          name: '오은주',
          LabelingCount: '14',
          inspectionCount: '75',
          finalCount: '34',
          upDate: '2022.02.17 11:27:14',
        },
      ],
      FinalMemberListItem: [
        {
          id: 1,
          email: 'wlkd2058@tbell.co.kr',
          name: '이영선',
          LabelingCount: '14',
          inspectionCount: '23',
          finalCount: '8',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 2,
          email: 'lloveu00@tbell.co.kr',
          name: '강영호',
          LabelingCount: '14',
          inspectionCount: '47',
          finalCount: '42',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 3,
          email: 'lee241@tbell.co.kr',
          name: '조지훈',
          LabelingCount: '14',
          inspectionCount: '84',
          finalCount: '29',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 4,
          email: 'park99@tbell.co.kr',
          name: '양지혜',
          LabelingCount: '14',
          inspectionCount: '75',
          finalCount: '34',
          upDate: '2022.02.17 11:27:14',
        },
        {
          id: 5,
          email: 'park99@tbell.co.kr',
          name: '오은주',
          LabelingCount: '14',
          inspectionCount: '75',
          finalCount: '34',
          upDate: '2022.02.17 11:27:14',
        },
      ],
      excel: [],
    };
  },
  methods: {
    isLabelingOnOff: function () {
      this.isLabelingOn = !this.isLabelingOn;
      this.isInspectionOn = false;
      this.isFinalOn = false;
    },
    isInspectionOnOff: function () {
      this.isLabelingOn = false;
      this.isInspectionOn = !this.isInspectionOn;
      this.isFinalOn = false;
    },
    isFinalOnOff: function () {
      this.isLabelingOn = false;
      this.isInspectionOn = false;
      this.isFinalOn = !this.isFinalOn;
    },
    SortedLabelingData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.LabelingMemberListItemOrigin.filter(data => {
          return data.email
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });
        this.searchedData2 = this.LabelingMemberListItemOrigin.filter(data => {
          return data.name
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });

        const newArr = [...this.searchedData1, ...this.searchedData2];

        return (this.LabelingMemberListItem = newArr);
      } else {
        //데이터가 없을 경우, 전체 리스트 출력
        return (this.LabelingMemberListItem =
          this.LabelingMemberListItemOrigin);
      }
    },

    SortedInspectionData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.InspectionMemberListItemOrigin.filter(
          data => {
            return data.email
              .toLowerCase()
              .includes(this.searchKeyword.toLowerCase());
          },
        );
        this.searchedData2 = this.InspectionMemberListItem.filter(data => {
          return data.name
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });

        const newArr = [...this.searchedData1, ...this.searchedData2];

        return (this.InspectionMemberListItem = newArr);
      } else {
        //데이터가 없을 경우, 전체 리스트 출력
        return (this.InspectionMemberListItem =
          this.InspectionMemberListItemOrigin);
      }
    },
    SortedFinalData() {
      if (this.searchKeyword) {
        this.searchedData1 = this.FinalMemberListItemOrigin.filter(data => {
          return data.email
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });
        this.searchedData2 = this.FinalMemberListItemOrigin.filter(data => {
          return data.name
            .toLowerCase()
            .includes(this.searchKeyword.toLowerCase());
        });

        const newArr = [...this.searchedData1, ...this.searchedData2];

        return (this.FinalMemberListItem = newArr);
      } else {
        //데이터가 없을 경우, 전체 리스트 출력
        return (this.FinalMemberListItem = this.FinalMemberListItemOrigin);
      }
    },
    LabelingExcelDownload() {
      var XLSX = require('xlsx');
      for (const excel of this.LabelingMemberListItem) {
        const excelLogs = {
          No: '',
          이름: '',
          이메일: '',
          가공: '',
          검수: '',
          최종: '',
          마지막업데이트: '',
        };
        excelLogs.No = excel.id;
        excelLogs.이름 = excel.name;
        excelLogs.이메일 = excel.email;
        excelLogs.가공 = excel.labelngCount;
        excelLogs.검수 = excel.inspectionCount;
        excelLogs.최종 = excel.finalCount;
        excelLogs.마지막업데이트 = excel.upDate;

        this.excel.push(excelLogs);
      }

      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate(); // 날짜s

      const dataWS = XLSX.utils.json_to_sheet(this.excel); // 엑셀 워크시트로 json 내보내기, 배열만 가능

      const wb = XLSX.utils.book_new(); // 엑셀의 workbook(엑셀파일에 지정된 이름)을 만든다

      XLSX.utils.book_append_sheet(wb, dataWS, '멤버작업현황(가공)'); // workbook에 워크시트 추가, 시트명은 'peopleData'

      XLSX.writeFile(
        wb,
        'tbell_멤버 작업현황_가공_' + year + '.' + month + '.' + date + '.xlsx',
      ); // 엑셀 파일을 내보낸다. 엑셀 파일 저장명은 'people.xlsx'
      this.excel.length = 0;
    },
    inspectionExcelDownload() {
      var XLSX = require('xlsx');
      for (const excel of this.InspectionMemberListItem) {
        const excelLogs = {
          No: '',
          이름: '',
          이메일: '',
          가공: '',
          검수: '',
          최종: '',
          마지막업데이트: '',
        };
        excelLogs.No = excel.id;
        excelLogs.이름 = excel.name;
        excelLogs.이메일 = excel.email;
        excelLogs.가공 = excel.labelngCount;
        excelLogs.검수 = excel.inspectionCount;
        excelLogs.최종 = excel.finalCount;
        excelLogs.마지막업데이트 = excel.upDate;

        this.excel.push(excelLogs);
      }

      const dataWS = XLSX.utils.json_to_sheet(this.excel); // 엑셀 워크시트로 json 내보내기, 배열만 가능

      const wb = XLSX.utils.book_new(); // 엑셀의 workbook(엑셀파일에 지정된 이름)을 만든다

      XLSX.utils.book_append_sheet(wb, dataWS, '멤버작업현황(검수)'); // workbook에 워크시트 추가, 시트명은 'peopleData'

      XLSX.writeFile(wb, '멤버 작업현황_검수.xlsx'); // 엑셀 파일을 내보낸다. 엑셀 파일 저장명은 'people.xlsx'
    },
    finalExcelDownload() {
      var XLSX = require('xlsx');
      for (const excel of this.FinalMemberListItem) {
        const excelLogs = {
          No: '',
          이름: '',
          이메일: '',
          가공: '',
          검수: '',
          최종: '',
          마지막업데이트: '',
        };
        excelLogs.No = excel.id;
        excelLogs.이름 = excel.name;
        excelLogs.이메일 = excel.email;
        excelLogs.가공 = excel.labelngCount;
        excelLogs.검수 = excel.inspectionCount;
        excelLogs.최종 = excel.finalCount;
        excelLogs.마지막업데이트 = excel.upDate;

        this.excel.push(excelLogs);
      }

      const dataWS = XLSX.utils.json_to_sheet(this.excel); // 엑셀 워크시트로 json 내보내기, 배열만 가능

      const wb = XLSX.utils.book_new(); // 엑셀의 workbook(엑셀파일에 지정된 이름)을 만든다

      XLSX.utils.book_append_sheet(wb, dataWS, '멤버작업현황(최종)'); // workbook에 워크시트 추가, 시트명은 'peopleData'

      XLSX.writeFile(wb, '멤버 작업현황_최종.xlsx'); // 엑셀 파일을 내보낸다. 엑셀 파일 저장명은 'people.xlsx'
    },
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>
