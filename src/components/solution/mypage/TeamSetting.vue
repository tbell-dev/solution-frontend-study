<template>
  <div id="main-wrap">
    <ul class="project-popup-wrap" v-show="isPopUpOn">
      <li class="project-popup3">
        <div class="project-popup-title align2">
          <h2>조직 나가기</h2>
          <button @click="PopUpOnOff()">
            <img
              src="../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </div>
        <div class="project-popup-contents">
          <h3>
            회원 탈퇴 시 모든 데이터가 삭제되며, <br />
            서비스 이용이 불가합니다.<br />
            현재 소속된 조직에서 나가시겠습니까?
          </h3>
          <div class="align6">
            <button class="btn2-1" @click="PopUpOnOff()">확인</button>
          </div>
        </div>
      </li>
    </ul>
    <main id="main">
      <div>
        <section>
          <article class="align1 button-filter">
            <button
              @click="TeamSettingOnOff()"
              v-bind:class="{
                'btn-set btn1-1': !isTeamSettingOn,
                'btn-set btn2-1': isTeamSettingOn,
              }"
            >
              조직설정
            </button>
            <button
              @click="UsageStatusOnOff()"
              v-bind:class="{
                'btn-set btn1-1': !isUsageStatusOn,
                'btn-set btn2-1': isUsageStatusOn,
              }"
            >
              사용현황
            </button>
          </article>
        </section>
        <section v-show="isTeamSettingOn">
          <article>
            <table class="table2">
              <tr>
                <th><span>아이디</span></th>
                <td>
                  <span>{{ this.id }}</span>
                </td>
              </tr>
              <tr>
                <th><span>이름</span></th>
                <td><input type="text" v-model="name" /></td>
              </tr>
              <tr>
                <th><span>대표 이미지</span></th>
                <td class="align4">
                  <span
                    ><img :src="files[0].preview" alt="" id="preview-img"
                  /></span>
                  <div class="file-wrap">
                    <input
                      type="file"
                      id="profile-image"
                      ref="files"
                      @change="imageAddUpload"
                    />
                    <label for="profile-image" class="btn-set btn2-1"
                      ><span>파일선택</span></label
                    >
                  </div>
                </td>
              </tr>
            </table>
          </article>
        </section>
        <div class="button-align1" v-show="isTeamSettingOn">
          <button class="btn2-1" @click="submitForm()">저장</button>
        </div>
      </div>
      <div>
        <section v-show="isUsageStatusOn">
          <article>
            <h2>조직 사용 현황</h2>
          </article>
          <article>
            <table class="table2">
              <tr>
                <th><span>전체 멤버 수</span></th>
                <td>
                  <span>{{ this.allMember }} / 무제한(미정)</span>
                </td>
              </tr>
              <tr>
                <th><span>전체 프로젝트 수</span></th>
                <td>
                  <span>{{ this.allProject }} / 무제한(미정)</span>
                </td>
              </tr>
              <tr>
                <th><span>사용용량</span></th>
                <td>
                  <span>{{ this.useVolume }} / 무제한(미정)</span>
                </td>
              </tr>
              <tr>
                <th><span>사용 파일 수</span></th>
                <td>
                  <span>{{ this.useFile }} / 무제한(미정)</span>
                </td>
              </tr>
            </table>
          </article>
          <article>
            <h2>조직 사용 현황</h2>
          </article>
          <article>
            <table class="table2">
              <tr>
                <th><span>제공하는 기능</span></th>
                <td>
                  <span>
                    수집 : 자체 데이터 셋, 크롤링, 오프라인 <br />
                    정제 : 영상프레임 추출, 중복 이미지 제거 전처리 :
                    그레이스케일, 이진화, 밝기/대비, 회전, 변환, 노이즈 제거,
                    배경제거, 비식별화….
                    <br />가공 : Boxing, polygon, polyline, point, 3dcube, magic
                    wand, …
                  </span>
                </td>
              </tr>
              <tr>
                <th><span>제한된 기능</span></th>
                <td><span>가공 : 3D Cube, Magic Wand</span></td>
              </tr>
            </table>
          </article>
        </section>
        <div class="button-align1" v-show="isUsageStatusOn">
          <router-link to="/sslo/price"
            ><button class="btn2-3">서비스 업그레이드</button></router-link
          >
        </div>
      </div>
    </main>
    <footer id="footer" class="align1" v-show="isTeamSettingOn">
      <h3>현재 소속된 조직에서 나가시겠습니까?</h3>
      <button class="btn4-1" @click="PopUpOnOff">조직 나가기</button>
    </footer>
  </div>
</template>

<script>
import OrganizationData from '@/assets/OrganizationData.json';

export default {
  data: function () {
    return {
      isTeamSettingOn: true,
      isUsageStatusOn: false,
      isPopUpOn: false,
      //조직설정 데이터
      id: 'O453214',
      name: 'tbell', // 조직설정 - 이름 입력 데이터
      files: [
        {
          file: File,
          preview:
            'blob:http://localhost:8081/cdc5f562-c14c-46cd-9d14-c08b0e611db6',
        },
      ], //업로드용 파일
      filesPreview: [],
      //사용현황
      allMember: '1',
      allProject: '50',
      useVolume: '100MB',
      useFile: '10,000개',
      providedFunction: '',
      notProvidedFunction: '',
      Organization: OrganizationData,
    };
  },
  computed: {},
  methods: {
    TeamSettingOnOff: function () {
      if (!this.isTeamSettingOn) {
        this.isUsageStatusOn = !this.isUsageStatusOn;
        this.isTeamSettingOn = !this.isTeamSettingOn;
      }
    },
    UsageStatusOnOff: function () {
      if (!this.isUsageStatusOn) {
        this.isUsageStatusOn = !this.isUsageStatusOn;
        this.isTeamSettingOn = !this.isTeamSettingOn;
      }
    },
    PopUpOnOff: function () {
      this.isPopUpOn = !this.isPopUpOn;
    },
    imageAddUpload() {
      if (this.files.length >= 1) {
        this.files.length = 0;
      }

      this.files = [
        ...this.files,
        //이미지 업로드
        {
          //실제 파일
          file: this.$refs.files.files[0],
          //이미지 프리뷰
          preview: URL.createObjectURL(this.$refs.files.files[0]),
        },
      ];
      console.log(this.files[0]);
      //console.log(this.uploadImageIndex);
    },
    async submitForm() {
      const loginData = {
        name: this.name,
        file: this.files,
      };
      console.log(this.files.length);
      if (this.name.length <= 0) {
        alert('이름을 입력해주세요.');
        this.name = '';
      } else if (this.files[0] == 0) {
        alert('대표 이미지를 등록해주세요.');
        this.files = '';
      } else {
        console.log(loginData);
        alert('조직설정 변경이 완료되었습니다.');
      }

      // const { data } = await registerUser(userData);
      // if (data.result === 'success') {
      //   this.initForm();
      //   alert(data.message);
      //   this.$router.push('/main');
      // } else if (data.result === 'fail') {
      //   this.initForm();
      //   alert(data.message);
      // }
    },
    initForm() {
      this.name = '';
    },
  },
};
</script>

<style></style>
