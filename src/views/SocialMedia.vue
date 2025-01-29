<template>
  <section class="followMe" id="followMe">
    <div class="followMe-title-section">
      <h2 class="followMe-title uppercase">Redes sociales</h2>
      <div class="linea"></div>
    </div>
    <div class="followMe-rrss">
      <div class="icon-container">
        <a class="icon-link" href="https://www.linkedin.com/in/adharamonzonvarillas/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="icon-container">
        <a class="icon-link" href="https://github.com/adharamonzon" target="_blank"><i class="fab fa-github"></i></a>
      </div>
      <div class="icon-container">
        <a class="icon-link" href="https://twitter.com/MonzonAdhara"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </section>
</template>

<style lang="css">
.followMe {
  background-color: #f7f7f7;
  padding-bottom: 9.37rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.followMe-title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.followMe-title {
  text-align: center;
  padding-top: 5.62rem;
  font-weight: normal;
  font-size: 1.87rem;
}
.followMe-rrss {
  width: 40%;
  margin-top: 5.62rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.fab {
  font-size: 2rem;
  color: black;
  align-self: center;
}
.icon-container {
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  border: solid 0.06rem transparent;
  border-radius: 56%;
  justify-content: center;
  align-items: center;
}
.icon-link {
  border-radius: 50%;
  background: transparent;
  width: 2.81rem;
  height: 2.81rem;
  display: flex;
  justify-content: center;
  color: white;
  text-decoration: none;
}
.icon-container:hover {
  border: solid 0.06rem #9bd189;
}

.icon-link:hover {
  background: #9bd189;
}
.fab:hover {
  color: white;
}
</style>