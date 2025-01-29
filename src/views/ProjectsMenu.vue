<template>
  <section class="works" id="projects">
    <div class="works-title-section">
      <h2 class="works-title uppercase">Proyectos  
        <a href="https://github.com/adharamonzon" target="_blank" class="btn-github" title="Más proyectos en GitHub"type="button">
          <img src="../assets/icons/github.svg">
        </a>
      </h2>
      <div class="linea"></div>
    </div>
    <ul class="works-list">
      <li v-for="work in works" :key="work.id" class="work-list-item">
        <router-link class="work-list-item-link" :to="`/projects#${work.hash}`" :key="$route.fullpath">
        <h4 class="work-list-item-name uppercase">{{ work.name }}</h4>
        <h6 class="work-list-item-subtitle">{{ work.subtitle }}</h6>
      </router-link>
      </li>
    </ul>
  
  </section>
</template>

<script lang="ts">
import sourceData from '../data/data.json';

export default {
  data() {
    return {
      works: sourceData
    }
  }
}

</script>

<style>
.works {
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -8.12rem;
}
.works-title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.works-title {
  text-align: center;
  padding-top: 5.62rem;
  font-weight: normal;
  font-size: 1.87rem;
}
.works-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 15.75rem);
  grid-template-rows: repeat(3, 13.25rem);
  justify-content: center;
  margin: 4rem 0px;
  cursor: pointer;
}
.work-list-item {
  color: white;
  border: solid 0.06rem black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.work-list-item:nth-child(even) {
  background-image: url(../assets/images/fotoA.jpg);
  background-size: cover;
  background-position: left;
  filter: grayscale(1);
  transition: all 1s ease;
}
.work-list-item:nth-child(odd) {
  background-image: url(../assets/images/fotoB.jpg);
  background-size: cover;
  filter: grayscale(1);

  transition: all 1s ease;
}
.work-list-item:hover {
  transform: scale(1.01);
  filter: grayscale(0);

  text-decoration: none;
}
.work-list-item-link {
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.work-list-item-link:hover {
  color: white;
}
.work-list-item-name {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.93rem;
}
.work-list-item-subtitle {
  font-size: 0.87rem;
  font-weight: 600;
  margin-bottom: 0.93rem;
  padding: 0.12rem;
  text-align: center;
}
.work-list-item-btn {
  color: white;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 3px;
  border-radius: 0.12rem;
  border: none;
  background-color: transparent;
}
.work-list-item-btn:hover {
  font-size: 1.125rem;
}
.works-button {
  color: white;
  background-color: #9bd189;
  width: 11.25;
  height: 3.12rem;
  padding: 1rem 1.56rem;
  cursor: pointer;
}
.btn-github {
  width: 30px;
  border: none;
  background-color: transparent;
}
.linea {
  margin-right: 35px;
  width: 6.25rem;
  height: 0.31rem;
  background-color: #9bd189;
  margin-top: 0.62rem;
}
</style>