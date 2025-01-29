<template>
  <HeaderComponent/>
  <AboutMeComponent />
  <ProjectsMenu />
  <SocialMedia />
  <ContactComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import AboutMeComponent from '../views/AboutMeComponent.vue';
import ProjectsMenu from './ProjectsMenu.vue';
import SocialMedia from './SocialMedia.vue';
import ContactComponent from './ContactComponent.vue';

export default defineComponent({
  name: 'Landing',
  components: {
    HeaderComponent,
    AboutMeComponent,
    ProjectsMenu,
    SocialMedia,
    ContactComponent
  }
})
</script>
