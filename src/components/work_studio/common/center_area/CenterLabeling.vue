<template>
  <div class="studio-center">
    <ul class="option-bar">
      <li>
        <button class="return">
          <img
            src="../../../../assets/images/studio/icon/icon-refresh.svg"
            alt=""
          />
        </button>
      </li>
      <li>
        <button class="undo">
          <img
            src="../../../../assets/images/studio/icon/icon-undo.svg"
            alt=""
          />
        </button>
      </li>
      <li>
        <button class="redo">
          <img
            src="../../../../assets/images/studio/icon/icon-redo.svg"
            alt=""
          />
        </button>
      </li>
      <li class="zoom">
        <img
          src="../../../../assets/images/studio/icon/icon-minus.svg"
          alt=""
        />
        <input type="range" min="-100" max="100" value="0" />
        <img src="../../../../assets/images/studio/icon/icon-plus.svg" alt="" />
      </li>
      <li class="brightness">
        <img
          src="../../../../assets/images/studio/icon/icon-brightness.svg"
          alt=""
        />
        <input type="range" min="0" max="100" value="0" />
        <input type="number" />
      </li>
      <li class="contrast">
        <img
          src="../../../../assets/images/studio/icon/icon-contrast.svg"
          alt=""
        />
        <input type="range" min="0" max="100" value="0" />
        <input type="number" />
      </li>
      <li>
        <button class="view-class">클래스</button>
      </li>
    </ul>
    <div class="class-setting">
      <button class="close">
        <img
          src="../../../../assets/images/studio/icon/icon-close.svg"
          alt=""
        />
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
      <img src="../../../../assets/images/studio/sample-image.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
