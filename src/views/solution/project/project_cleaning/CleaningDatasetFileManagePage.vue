<template>
  <div id="dataset-wrap">
    <div class="project-popup-wrap" v-show="isPopUpOn">
      <ul class="project-popup1">
        <li class="project-popup-title align2">
          <h2>이름변경</h2>
          <button>
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </li>
        <li class="project-popup-contents">
          <div class="project-popup-inner">
            <h3>새로운 이름</h3>
            <input type="text" />
          </div>
          <div class="project-popup-inner align6">
            <button class="btn-set btn2-1">수정</button>
            <button class="btn-set btn1-1">취소</button>
          </div>
        </li>
      </ul>
    </div>
    <Header />

    <main id="main">
      <div class="left">
        <div class="folder-list-nav align1">
          <a href="collect-folder-list.html">
            <img
              src="../../../../assets/images/project/icon/icon-home.svg"
              alt=""
            />
          </a>
          <b>></b>
          <h3>폴더명</h3>
        </div>
        <ul class="folder-list align3">
          <li class="file-list-wrap">
            <a href="collect-file-list.html">
              <span class="file-list-img">
                <img
                  class="folder-basic"
                  src="../../../../assets/images/studio/sample-image.png"
                  alt=""
                />
              </span>
              <span class="folder-list-title">
                <span>무료 이미지</span>
              </span>
            </a>
            <ul class="folder-list-more">
              <li>
                <button><span>정보보기</span></button>
              </li>
              <li>
                <button><span>이동</span></button>
              </li>
              <li>
                <button><span>삭제</span></button>
              </li>
              <li>
                <button><span>이름변경</span></button>
              </li>
            </ul>
            <div class="folder-list-move">
              <div class="folder-list-move-title align4">
                <div class="align1">
                  <button>
                    <img
                      src="../../../../assets/images/project/icon/icon-back.svg"
                      alt=""
                    />
                  </button>
                  <h3>/</h3>
                </div>
                <h3>루트 폴더 선택</h3>
              </div>
              <div class="folder-list-move-contents">
                <ul class="list">
                  <li class="align1">
                    <img
                      src="../../../../assets/images/project/icon/icon-folder.svg"
                      alt=""
                    />
                    <h3>무료 이미지</h3>
                  </li>
                  <li class="align1">
                    <img
                      src="../../../../assets/images/project/icon/icon-folder.svg"
                      alt=""
                    />
                    <h3>무료 이미지</h3>
                  </li>
                </ul>
                <div class="align6">
                  <button class="btn2-1"><span>이동하기</span></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="folder-info-top align1">
          <img
            src="../../../../assets/images/project/icon/icon-folder.svg"
            alt=""
          />
          <h3>무료 이미지</h3>
          <button class="close">
            <img
              src="../../../../assets/images/project/icon/icon-close03.svg"
              alt=""
            />
          </button>
        </div>
        <div class="folder-info-image align2">
          <img src="../../../../assets/images/studio/sample-image.png" alt="" />
        </div>
        <div class="folder-info-btn align6">
          <a
            href="../../../studio/collect-Inspection-studio.html"
            class="btn-set btn3-2"
            >STUDIO</a
          >
        </div>
        <div class="folder-info-detail">
          <table class="table6">
            <tr>
              <th><span>파일개수</span></th>
              <td><span>파일200개</span></td>
            </tr>
            <tr>
              <th><span>경로</span></th>
              <td><span>/무료이미지</span></td>
            </tr>
            <tr>
              <th><span>용량</span></th>
              <td><span>10MB</span></td>
            </tr>
            <tr>
              <th><span>생성일시</span></th>
              <td><span>2022-01-01 14:58</span></td>
            </tr>
          </table>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
// 헤더
import Header from '../../../../components/solution/project/common/dataset_manage/Header.vue';
// 푸터
import Footer from '../../../../components/solution/project/common/dataset_manage/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import '../../../../css/reset.css';
@import '../../../../css/common.css';
</style>

<style></style>
