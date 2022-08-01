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
    </ul>
    <div class="studio-pic">
      <img src="../../../../assets/images/studio/sample-image.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
