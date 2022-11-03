<template>
  <!--<div class="spinner-container">
    <div class="spinner" />
  </div>-->
  <div class="spinner" />
</template>

<script>
export default {
  name: 'LoadingSpinner',
};
</script>

<style scoped>
/*.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
}*/
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid var(--grey30);
  border-bottom: 8px solid #3498db;
  animation: spin 2s linear infinite;
  position: relative;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
