<template>

  <header class="header" id="header">
    <router-link class="back" to="/">
          <img class="homeIcon" src="../assets/icons/arrow.svg" alt="atras" />
        </router-link >
    <div class="header-title-section">
      <h1 class="header-title uppercase">Mis proyectos</h1>
      <div class="linea"></div>
    </div>
  </header>
  <main class="main">
    <ul class="main-list">
      <li class="main-list-item">
        <div class="title-container">
          <div class="main-list-item-titleContainer">
            <h4 class="main-list-item-title uppercase" id="laTiendina">La tiendina</h4>
            <div class="linea"></div>
          </div>
          <div class="works-btnContainer">
            <button type="button" class="works-btnContainer--btn" href="https://github.com/adharamonzon/la-tiendina" alt="Ir al repositorio" title="Ir al repositorio" target="_blank"><i class="fab fa-github icon"></i></button>
            <button type="button" class="works-btnContainer--btnWeb" href="https://adharamonzon.github.io/la-tiendina/" target="_blank" title="Ir a la web"><small class="btn">WEB</small> </button>
          </div>
        </div>
        <div class="main-list-item-infoContainer">
          <div class="main-list-item-textContainer">
            <p class="text">La tiendina es una página web con diseño responsive. La estructura está desarrollada con <strong>HTML5</strong>. La maquetación está desarrollada a través de <strong>CSS3 y Bootstrap</strong>. La funcionalidad se ha desarrollado con <strong>JavaScript</strong> basada en un e-commerce en el que se representa toda la funcionalidad de una <strong>tienda virtual</strong>.</p>
            <br />
            <p class="text">Desde la tienda se pueden ver la lista de productos y su precio. Para más información sobre el producto y poder añadirla al carrito se ha creado una <strong>ventana modal</strong>, con el título y fotografía del producto, información extra y los botones para incluir e incrementar y eliminar. Con su descripción y la posibilidad de añadirlo a la cesta de la compra.</p>
            <br />
            <p>Desde la cesta de la compra se pueden sumar y restar elementos ya añadidos previamente de 1 en 1 o borrar por el contrario un producto completamente. El carro de la compra <strong>se actualiza de manera dinámica</strong> el precio total y el precio por producto según el número de productos.</p>
            <p>En la cesta también se encuentra una zona de <strong>Drag & Drop</strong> para poder arrastrar los productos y así añadir y actualizar la cesta.</p>
            <ul class="proyect-list">
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-html5"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-css3-alt"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-js-square"></i></li>
              <li class="skills-list-item"><i class="proyect-list-item-icon fab fa-git"></i></li>
            </ul>
          </div>
          <div class="main-list-item-img">
            <img class="img" src="../assets/images/projects/tiendina.jpg" alt="tiendina" />
          </div>
        </div>
      </li>
      <li class="main-list-item reverse">
        <div class="title-container">
          <div class="main-list-item-titleContainer">
            <h4 class="main-list-item-title uppercase" id="rickMorty">Rick & Morty</h4>
            <div class="linea"></div>
          </div>
          <div class="works-btnContainer">
            <button type="button" class="works-btnContainer--btn" href="https://github.com/adharamonzon/rick-y-morty" alt="Ir al repositorio" title="Ir al repositorio" target="_blank"><i class="fab fa-github icon"></i></button>
            <button type="button" class="works-btnContainer--btnWeb" href="https://adharamonzon.github.io/rick-y-morty/#/" target="_blank" title="Ir a la web"><small class="btn">WEB</small> </button>
          </div>
        </div>
        <div class="main-list-item-infoContainer-reverse">
          <div class="main-list-item-textContainer">
            <p class="text">Rick y Morty es una applicación web con diseño responsive. La estructura está desarrollada con <strong>HTML5</strong>. La maquetación está desarrollada a través de <strong>CSS3, Sass con nomenclatura BEM</strong>. La funcionalidad se ha desarrollado con <strong>JavaScript</strong> utilizando el framework de <strong>React.js</strong>.</p>
            <br />
            <p class="text">Desde la aplicación se pueden ver la lista de personajes. Para más información sobre el personaje se puede pinchar en el que lleva a una nueva venta con <strong> React Router</strong>.</p>
            <br />
            <ul class="proyect-list">
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-html5"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-css3-alt"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-sass"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-js-square"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-react"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-git"></i></li>
            </ul>
          </div>
          <div class="main-list-item-img">
            <img class="img" src="../assets/images/projects/rickymorty.png" alt="rick y morty" />
          </div>
        </div>
      </li>
      <li class="main-list-item">
        <div class="title-container">
          <div class="main-list-item-titleContainer">
            <h4 class="main-list-item-title uppercase" id="series">Buscador de series</h4>
            <div class="linea"></div>
          </div>
          <div class="works-btnContainer">
            <button type="button" class="works-btnContainer--btn" href="https://github.com/adharamonzon/buscador-de-series" alt="Ir al repositorio" title="Ir al repositorio" target="_blank"><i class="fab fa-github icon"></i></button>
            <button type="button" class="works-btnContainer--btnWeb" href="https://adharamonzon.github.io/buscador-de-series/" target="_blank" title="Ir a la web"><small class="btn">WEB</small> </button>
          </div>
        </div>
        <div class="main-list-item-infoContainer">
          <div class="main-list-item-textContainer">
            <p class="text" style="padding-right: 10px">El buscador de series es una página web con diseño responsive. La estructura está desarrollada con <strong>HTML5</strong>. La maquetación está desarrollada a través de <strong>CSS3</strong>con el preprocesador de <strong>Sass</strong> y nomenclatura <strong>BEM</strong>. La funcionalidad se ha desarrollado con <strong>JavaScript</strong>.</p>
            <br />
            <p class="text">Desde el buscador de series aparece un navegador en el que buscar la serie, se puede lanzar la búsqueda a través del boton de buscar o pulsando intro. Se mostrará la lista de las series encontradas según el nombre. Como funcionalidad extra se puede marcar las series favoritas. Para una mejor experiencia de usuario al tener una película como favorita se marcará un sombreado en rojo y unas palomitas, a la vez que se incluirá a la lista en la izquierda de la pantalla.</p>
            <br />
            <p>En la lista de favoritos se pueden quitar las series de una en una con el botón de papelera o se puede eliminar toda la lista con el botón de papelera al inicio de la lista.</p>
            <ul class="proyect-list">
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-html5"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-css3-alt"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-sass"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-js-square"></i></li>
              <li class="skills-list-item"><i class="proyect-list-item-icon fab fa-git"></i></li>
            </ul>
          </div>
          <div class="main-list-item-img">
            <img class="img" src="../assets/images/projects/series.png" alt="series" />
          </div>
        </div>
      </li>
      <li class="main-list-item reverse">
        <div class="title-container">
          <div class="main-list-item-titleContainer">
            <h4 class="main-list-item-title uppercase" id="awesomecards">Awesome Cards</h4>
            <div class="linea"></div>
          </div>
          <div class="works-btnContainer">
            <button type="button" class="works-btnContainer--btn" href="https://github.com/adharamonzon/awasome-cards-react" alt="Ir al repositorio" title="Ir al repositorio" target="_blank"><i class="fab fa-github icon"></i></button>
            <button type="button" class="works-btnContainer--btnWeb" href="https://beta.adalab.es/project-promo-i-module-3-team-4-morning/#/" target="_blank" title="Ir a la web"><small class="btn">WEB</small> </button>
          </div>
        </div>
        <div class="main-list-item-infoContainer-reverse">
          <div class="main-list-item-textContainer">
            <p class="text">Awesome Cards es una aplicación web con diseño responsive. La estructura está desarrollada con <strong>HTML5</strong>. La maquetación está desarrollada a través de <strong>CSS3, Sass con nomenclatura BEM</strong>. La funcionalidad se ha desarrollado con <strong>JavaScript</strong>.</p>
            <br />
            <p class="text">Esta aplicación web sirve para crear tarjetas profesionales personalizadas. Con una primera página landing, que nos explica el proyecto y nos lleva a la aplicación.</p>
            <p>En la aplicación contamos con una vista previa de nuestra tarjeta profesional que se actualiza de manera automática según las opciones que marquemos en el menú colapsable de la izquierda. En este menú podemos elegir la paleta de colores para nuestra tarjeta. Rellenar un formulario completo para que aparezcan nuestro datos y datos de contacto interactivos, este formulario tiene controlador de errores, que evitará la creación de una tarjeta a la que le falten datos obligatorios. Por último una sección de compartir en la que nos generará el enlace de la tarjeta.</p>
            <p>Este proyecto se ha creado directamente con JavaScript pero en una segunda fase se ha refactorizado utilzando <strong> React</strong>.</p>
            <br />
            <br />
            <p>En el proyecto se han utilizado una filosofía agile, con sprints semanales. Organizando el trabajo de manera agile bajo la metodología Scrum.</p>
            <ul class="proyect-list">
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-html5"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-css3-alt"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-sass"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-js-square"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-react"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-git"></i></li>
            </ul>
          </div>
          <div class="main-list-item-img">
            <img class="img" src="../assets/images/projects/awesomecards.png" alt="awesome cardas" />
          </div>
        </div>
      </li>
      <li class="main-list-item">
        <div class="title-container">
          <div class="main-list-item-titleContainer">
            <h4 class="main-list-item-title uppercase" id="frontrunners">Front Runners</h4>
            <div class="linea"></div>
          </div>
          <div class="works-btnContainer">
            <button type="button" class="works-btnContainer--btn" href="https://github.com/adharamonzon/Front-Runners" alt="Ir al repositorio" title="Ir al repositorio" target="_blank"><i class="fab fa-github icon"></i></button>
            <button type="button" class="works-btnContainer--btnWeb" href="https://adharamonzon.github.io/Front-Runners/" target="_blank" title="Ir a la web"><small class="btn">WEB</small> </button>
          </div>
        </div>
        <div class="main-list-item-infoContainer">
          <div class="main-list-item-textContainer">
            <p class="text" style="padding-right: 10px">Front Runners una página web con diseño responsive. La estructura está desarrollada con <strong>HTML5</strong>. La maquetación está desarrollada a través de <strong>CSS3</strong>con el preprocesador de <strong>Sass</strong> y nomenclatura <strong>BEM</strong>. Utilizando <strong>grid</strong> y <strong>flexbox</strong> para la distribución del contenido.</p>
            <br />
            <p class="text">Esta página web con diseño responsive, es la primera página web que hice cuando comencé con la programación. Es una página web sencilla, marcada la estructura con HTML haciendo especial incapié en el uso correcto de las etiquetas y poniendo en valor la accesibilidad de la web. También es el primer ejercicio de maquetación, el proyecto se ha hecho al pixel con un diseño dado a través de Zepelin y utlizando distintas propiedades y preprocesadores para poder realizar un buen trabajo.</p>
            <br />
            <p>En el proyecto se han utilizado una filosofía agile, con sprints semanales. Organizando el trabajo de manera agile bajo la metodología Scrum.</p>
            <ul class="proyect-list">
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-html5"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-css3-alt"></i></li>
              <li class="proyect-list-item"><i class="proyect-list-item-icon fab fa-sass"></i></li>
              <li class="skills-list-item"><i class="proyect-list-item-icon fab fa-git"></i></li>
            </ul>
          </div>
          <div class="main-list-item-img">
            <img class="img" src="../assets/images/projects/frontrunners.png" alt="front runners" />
          </div>
        </div>
      </li>
      <li class="main-list-item">
        <div class="title-container">
          <div class="main-list-item-titleContainer">
            <h4 class="main-list-item-title uppercase" id="others">Otros proyectos</h4>
            <div class="linea"></div>
          </div>
        </div>
        <div class="main-list-item-infoContainer">
          <div class="main-list-item-textContainer">
            <p class="text" style="padding-right: 10px">
              En github verás otros proyectos que he ido realizando, de cursos que he realizado para seguir formandome en <strong>JavaScript</strong>, <strong>TypeScript</strong> o <strong>Angular</strong> y proyectos personales.
              <a class="githubLink" href="https://github.com/adharamonzon/" alt="Ir a GitHub" target="_blank"><i class="fab fa-github icon"></i></a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
.homeIcon {
  width: 40px;
  margin: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
}
.header {
  height: 70vh;
  background-image: url(../assets/images/projects/agile.jpg);
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  background: rgb(9, 9, 9);
  background: radial-gradient(circle, rgba(9, 9, 9, 1) 0%, rgba(7, 7, 7, 1) 36%, rgba(0, 0, 0, 1) 44%, rgba(217, 217, 217, 1) 100%);
}
.header-title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-title {
  font-size: 2.5rem;
}

/* ESTILOS MAIN */
.main-list {
  list-style: none;
  padding-left: 0;
}
.main-list-item-infoContainer {
  display: flex;
  margin-top: 20px;
}
.main-list-item-infoContainer-reverse{
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
}
.main-list-item-titleContainer {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5.62rem;
  font-weight: normal;
  font-size: 2rem;
  margin-left: 25px;
}
.main-list-item-textContainer {
  width: 48.12rem;
  margin-left: 1.87rem;
  font-size: 0.87rem;
  line-height: 1.62rem;
}
.title-container {
  display: flex;
  align-items: baseline;
}
.main-list-item-img {
  width: 600px;
}
.proyect-list {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;
}
.proyect-list-item-icon {
  color: #9bd189;
  font-size: 4.06rem;
}

.works-btnContainer {
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  &--btn {
  font-size: 25px;
  text-decoration: none;
  font-weight: 600;
  color: black;
  border: none;
    background: transparent;
  }
  &--btnWeb {
    color: black !important;
    cursor: pointer;
    background-color: white !important;
    border: none !important;
  }
}
.linea {
  display: inline-block;
  width: 4.35rem;
  height: 0.31rem;
  background-color: #9bd189;
  margin-top: 0.62rem;
  align-self: center;
}
.text {
  text-indent: justify;
}
.img {
  width: 100%;
}
.icon{
  color: black;
  font-size: 30px;
}
.reverse{
  background-color: #f7f7f7;
}
.githubLink {
  border: none;
  background-color: transparent;
}
</style>
