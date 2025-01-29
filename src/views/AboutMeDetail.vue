<template>
   <div class="header-container">
     <div class="header" id="header">
        <router-link class="back" to="/">
          <img class="homeIcon" src="../assets/icons/arrow.svg" alt="atras" />
        </router-link >
        <header id="headerDetail">
          <div class="header-title-section">
            <h1 class="header-title uppercase">Sobre mí</h1>
            <div class="linea"></div>
          </div>
        </header>
      </div>
    </div>
    <main class="main">
      <section class="main-aboutMe">
        <h3 class="main-aboutMe-title">Hola, soy Adhara</h3>
        <p class="main-aboutMe-text">Os voy a contar un poco más sobre mi. Me encanta viajar y descubrir nuevos lugares. Me gustan los <strong>idiomas</strong> y la de cosas que nos pueden aportar, nos sólo para comunicarnos, también para poder formar parte y entender otras culturas, por ello he estado viviendo en varíos países, el último fue en Alemania durante 3 años. También me gusta mucho la <strong>música</strong> y toco varios instrumentos y si hay música en directo siempre va a ser un buen plan.</p>
        <p class="main-aboutMe-text">Profesionalmente en el 2020 decidí darle un cambio a mi vida y aposte por reinvertarme tecnológicamente, hice un bootcamp con Adalab, en el que descubrí la programación y asenté las bases para poder crear páginas sencillas. Desde entonces me he seguido formando con cursos y otros bootcamps, ampliando así mis conocimientos en la programación. Me gusta la maquetación y poder aportar un valor añadido al producto, pero sobre todo me gusta la programación. He trabajado con distintos frameworks como <strong>React o Angular</strong>, también he aprendido otros como <strong>Vuejs o Svelte</strong>, usando siempre Typescript.</p>
        <p class="main-aboutMe-text">Laboralmente debido a la pandemia fue más difícil el inicio, pero no por ello tuve menos ganas, de esta manera pude prepararme más y seguir estudiando. Desde julio de 2021 trabajo para NTT DATA, he tenido la oportunidad de trabajar con distintos equipos y clientes, siempre de manera <strong>Agile</strong>. Durante estos año he tenido la oportunidad no sólo de seguir formandome sino de seguir aprendiendo de compañeros senior y desempeñar funciones como realizar desarrollos de componentes reutilizables de código, refactorizar funciones y componenetes, hacer pruebas de calidad de test con <strong>Karma con jasmine</strong>, tipar las aplicaciones con <strong>Typescript</strong>, etc.</p>
      </section>
      <section class="main-section">
        <article class="main-education">
          <h4 class="main-title uppercase">Formación</h4>
          <div class="linea"></div>
          <ul class="education-list">
            <li class="education-list-item" v-for="item in educationList" :key="item.id">
              <div class="education-list-item-timeline">
                <img src="../assets/icons/check.svg" />
              </div>
              <div>
                <h5 class="education-list-item-title">{{item.title}}</h5>
                <small>{{item.dates}}</small>
                <p class="education-list-item-text">{{item.description}}</p>
                <small class="education-list-item-company bold">{{item.compnay}}
                  <img class="education-list-item-icon" :src="getUrl(item.logoName)" :alt="item.logoName"/>
                </small>
              </div>
            </li>
          </ul>
        </article>
        <article class="main-exp-skills">
          <CVComponent />
          <div class="main-skills">
            <h4 class="main-title uppercase">Idiomas</h4>
            <div class="linea"></div>
            <ul class="languajes-list">
              <li v-for="lenguaje in lenguajes" class="languajes-list-item"><strong>{{ lenguaje.name }}: </strong>{{ lenguaje.level }}</li>
            </ul>
          </div>
          <div class="main-skills">
            <h4 class="main-title uppercase">Habilidades</h4>
            <div class="linea"></div>
            <ul class="skills-list">
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-html5"></i>
              </li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-css3-alt"></i></li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-sass"></i>
              </li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-js-square"></i></li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-vuejs"></i>
              </li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-angular"></i>
              </li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-react"></i>
              </li>
              <li class="skills-list-item">
                <img src="../assets/icons/logo-ts.svg" class="skills-list-item-icon icon" />
              </li>
              <li class="skills-list-item">
                <i class="skills-list-item-icon fab fa-git"></i>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CVComponent from '../components/CVComponent.vue';
import lenguajesData from '../data/lenguajes.json';
import educationList from '../data/education.json';
export default defineComponent({
  name: 'Landing',
  components: {
    CVComponent
  },
  data () {
    return {
      lenguajes: lenguajesData,
      educationList: educationList
    }
  },
  methods: {
    getUrl(url: string) {
      const imageUrl = new URL(`../assets/icons/${url}`, import.meta.url).href;
      return imageUrl;
    }
  }
})
</script>

<style lang="css">
.homeIcon {
  width: 30px;
  margin: 20px;
  cursor: pointer;
}
.back {
  color: #ffffff; 
  position: absolute;
  top: 20px;
  left: 40px;
}
.header-container {
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 64%, rgba(67,67,67,1) 91%);
}
#headerDetail {
  height: 50vh;
  background-image: url(../assets/images/aboutMeHeader.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-title {
  text-align: center;
  padding-top: 5.62rem;
  font-weight: normal;
  font-size: 2.87rem;
  color: white;
}
.main-aboutMe {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 4.06rem auto;
}
.main-aboutMe-title {
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.37rem;
}
.main-aboutMe-text {
  text-align: justify;
  font-size: 0.87rem;
  line-height: 1.62rem;
}
.languajes-list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.languajes-list-item {
  margin: 5px 0;
}

/* ESTILOS MAIN */
.main-section {
  display: flex;
  align-items: flex-start;
  margin: 1.25rem;
}
/* ESTILOS MAIN/EDUCACIÓN */
.main-education {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 145%;
  margin-right: 30px;
}
.main-title {
  text-align: center;
}
.education-list {
  list-style: none;
  margin: 0.93rem 2;
}
.education-list-item {
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1.35rem;
}
.education-list-item-timeline {
  margin-right: 0.93rem;
  margin-top: 0.2rem;
}
.education-list-item-title {
  font-size: 0.87rem;
  font-weight: bold;
  line-height: 1.62rem;
}
.education-list-item-text {
  font-size: 0.87rem;
  font-weight: normal;
  line-height: 1.62rem;
}
.education-list-item-icon {
  width: 60px;
  height: auto;
  margin-left: 1.25rem;
  margin-top: 0.31rem;
}
.education-list-item-company {
  display: flex;
  align-items: center;
}
.experience-item {
  margin-top: 1.35rem;
}
.main-exp-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-left: 61px;
}
.main-skills {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 15px;
}
.skills-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 1.25rem 3.75rem;
  grid-row-gap: 1.25rem;
  align-self: center;
  justify-items: center;
  margin-top: 1.35rem;
}
.skills-list-item-icon {
  color: #9bd189;
  font-size: 4.06rem;
} 

.fab:hover {
  color: black !important;
}

.linea {
  width: 4.35rem;
  height: 0.31rem;
  background-color: #9bd189;
  margin-top: 0.62rem;
  align-self: center;
}
.icon {
  margin-top: -4px;
  width: 45px;
}
</style>