<template>
  <footer class="footer">
      <a href="#header">
        <i class="fas fa-chevron-up"></i>
      </a>
      <a href="./index.html">
        <img class="footer-logo" src="../assets/icons/amv.svg" alt="Adhara Monzón" />
      </a>
      <small class="footer-small">© Copyright {{year}} Adhara Monzón</small>
    </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    let year = ref(new Date().getFullYear());
    return{
      year
    }
  },
})
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  width: 100%;
  height: 10rem;
  scroll-behavior: smooth;
}
.fas {
  color: #adadad;
  width: 1rem;
  height: 1rem;
}
.footer-logo {
  width: 4.87rem;
  height: 3.12rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.footer-small {
  color: #adadad;
  font-size: 0.75rem;
}
</style>