<template>
  <section class="aboutMe" id="aboutMe">
        <div class="aboutMe-title-section">
          <h2 class="aboutMe-title uppercase">Sobre mí</h2>
          <div class="linea"></div>
        </div>
        <section class="aboutMe-content">
          <div class="aboutMe-imgContainer">
            <img class="aboutMe-imgContainer back-img" src="../assets/images/meImage.png" alt="Adhara Monzón" />
          </div>
          <div class="aboutMe-textContainer">

            <p class="aboutMe-text">¡Hola! Soy Adhara y en 2020 decidí darle un cambio a mi vida profesional y comencé a estudiar programación, buscando nuevos retos y un nuevo camino profesional.</p>
            <p class="aboutMe-text">De mi anterior etapa como terapeuta ocupacional me llevo el <strong>trabajo en equipos multidisciplinares</strong>, la <strong>capacidad de adaptación</strong> a nuevos retos y la <strong>creatividad</strong> para alcanzar los objetivos siempre desde la <strong>resolución de problemas.</strong></p>
            <p class="aboutMe-text" style="margin-bottom: 15px">En esta nueva etapa como programadora he aprendido a hacer páginas web sencillas basadas en HTML y CSS con diseño responsive, pero también he aprendido a desarrollar aplicaciones web más complejas maquetándolas al pixel a través de diseños y utilizando Sass y la nomenclatura BEM, utilizando JavaScript y frameworks como React o Angular para dotarlas de funcionalidad. </p>
            <CVComponent />
            <div class="btn-container">
              <router-link class="btn uppercase" to="/aboutMeDetail" :key="$route.fullpath">Más sobre mi</router-link>
            </div>
          </div>
        </section>
      </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CVComponent from '../components/CVComponent.vue';
import AboutMeDetail from './AboutMeDetail.vue';

export default defineComponent({
  name: 'AboutMe',
  components: { CVComponent, AboutMeDetail}
})
</script>

<style lang="scss">
.aboutMe {
  height: 100%;
  padding-bottom: 1.25rem;
  margin-bottom: 0;
  background-color: #f7f7f7;
}
.aboutMe-title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aboutMe-subtitle-section {
  display: inline-flex;
  align-items: center;
  flex-direction: column;
}
.aboutMe-title {
  text-align: center;
  padding-top: 2.62rem;
  font-weight: normal;
  font-size: 1.87rem;
}

.aboutMe-content {
  display: flex;
  justify-content: center;
  margin: 0.75rem 3.43rem;
}
.aboutMe-textContainer {
  width: 48.12rem;
  margin-left: 1.87rem;
  font-size: 0.87rem;
  line-height: 1.62rem;
}
.aboutMe-text {
  margin-bottom: 1rem;
  text-align: justify;
}
.btn {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  background-color: #9bd189;
  border: solid 0.12rem transparent;
  padding: 1rem 2.5rem;
}
.btn:hover {
  border: solid 0.12rem #1f4413;
  color: #1f4413;
}
.btn-container {
  margin-top: -0.5rem;
  text-align: center;
}
.linea {
  width: 6.25rem;
  height: 0.31rem;
  background-color: #9bd189;
  margin-top: 0.62rem;
}
</style>