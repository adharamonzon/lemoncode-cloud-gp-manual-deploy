<template>
  <section class="contact" id="contact">
    <div class="contact-title-section">
      <h2 class="contact-title uppercase">Contacto</h2>
      <div class="linea"></div>
      <p class="contact-subtitle">Rellena el formulario para ponerte en contacto conmigo</p>
    </div>
    <form class="form" :action="`mailto:adharamonzon@gmail.com?CC=${email}&subject=${name}${message}`" method="POST" enctype="text/plain">
      <input class="form-input" v-model="name" required type="text" placeholder=" Nombre *" name="name" id="name" />
      <input class="form-input" v-model="email" required type="text" placeholder="  Dirección de correo electrónico *" name="email" id="email" />
      <input class="form-textarea" v-model="message" required type="text-area" placeholder=" Mensaje *" name="text" id="text" />
      <div class="form-submitsection">
        <small class="form-text">Los campos marcados con un asterisco(*) son obligatorios</small>
        <button class="btn uppercase" :disabled="!name || !email || !message">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  }
})
</script>

<style lang="css">
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-title-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-title {
  text-align: center;
  padding-top: 5.62rem;
  font-weight: normal;
  font-size: 1.87rem;
}
.contact-subtitle {
  margin-top: 2.5rem;
}
.form-btn {
  color: white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
}
/* FORM */
.form {
  margin-top: 3.43rem;
  display: flex;
  flex-direction: column;
  width: 36.12rem;
}
.form-input {
  height: 3.12rem;
  margin-bottom: 1rem;
  border: 0.06rem solid #9bd189;
}
.form-textarea {
  height: 8.75rem;
  border: 0.06rem solid #9bd189;
  display: block;
}
.form-submitsection {
  display: flex;
  justify-content: space-between;
  width: 36.25rem;
  margin-top: 1.87rem;
  margin-bottom: 6.25rem;
}
.form-text {
  font-size: 0.87rem;
  font-weight: 200;
}
</style>