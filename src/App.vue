<script lang="ts">
import LandingComponent from './views/LandingComponent.vue';
import AboutMeDetail from './views/AboutMeDetail.vue';
import FooterComponent
 from './components/FooterComponent.vue';
import { defineComponent } from 'vue';

 export default defineComponent({
  components: {
    LandingComponent,
    AboutMeDetail,
    FooterComponent
  }
 })
</script>

<template>
  <!-- <LandingComponent /> -->
 <!--  <AboutMeDetail /> -->
  <router-view></router-view>
  <FooterComponent />
</template>

<style scoped>
</style>
