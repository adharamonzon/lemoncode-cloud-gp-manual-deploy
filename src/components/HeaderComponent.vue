<template>
  <header class="header" id="home-header">
      <div class="header-titleContainer">
        <img class="header-logo" src="../assets/icons/amv.svg" alt="AMV" />
        <h1 class="header-title">Adhara Monzón</h1>
        <h2 class="header-subtitle">Front End developer</h2>
      </div>
      <nav class="nav">
        <ul class="nav-list uppercase">
          <li class="nav-list-item"><a class="nav-item-item-link" href="#aboutMe">Sobre mí</a></li>
          <li class="nav-list-item"><a class="nav-item-item-link" href="#projects">Proyectos</a></li>
          <li class="nav-list-item"><a class="nav-item-item-link" href="#contact">Contaco</a></li>
          <li class="nav-list-item"><a class="nav-item-item-link" href="#followMe">RR.SS</a></li>
        </ul>
      </nav>
    </header>
</template>

<style lang="css">
#home-header {
  height: 100vh;
  background-image: url('../assets/images/header.jpg') !important;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.header-titleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8.12rem;
}
.header-logo {
  width: 18.87rem;
  height: 9.37rem;
}
.header-title {
  font-size: 5rem;
  font-weight: normal;
  color: white;
  margin-top: 1.75rem;
  letter-spacing: 0.56rem;
}
.header-subtitle {
  font-size: 1.87rem;
  font-weight: normal;
  color: white;
  margin-top: 1.75rem;
  line-height: 1.07;
  letter-spacing: 1.125rem;
}
.nav {
  width: 70%;
  justify-content: center;
}
.nav-list {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.25rem;
  padding: 0.31rem;
  cursor: pointer;
  width: 55%;
}
.nav-item-item-link {
  text-decoration-line: none;
  color: white;
  border: 0.18rem solid transparent;
}
.nav-item-item-link:hover {
  border-bottom: 0.18rem solid #9bd189;
  color: white;
}
</style>