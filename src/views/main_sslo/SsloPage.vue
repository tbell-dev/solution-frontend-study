<template>
  <div id="sslo-wrap">
    <SsloHeader />
    <router-view />
    <SsloFooter />
  </div>
</template>

<script>
import SsloHeader from '../../components/main_sslo/common/SsloHeader.vue';
import SsloFooter from '../../components/main_sslo/common/SsloFooter.vue';

export default {
  components: {
    SsloHeader,
    SsloFooter,
  },
};
</script>

<style scoped>
@import url('../../css/sslo/sslo_common.css');
</style>
