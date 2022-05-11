<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px; margin-top: -1100px">
      <q-form @submit="connexion" class="q-gutter-md">
        <div class="q-p-md">
          <!--Phrase de bienvenue appelant de manière dynamique
l'email de l'utilisateur connecté-->
          <div class="text-h5">Bonjour {{ user.email }} !</div>

          <q-btn label="ME DECONNECTER" type="submit" color="secondary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'logOut',
  data() {
    return {
      //création d'un nouvel utilisateur
      newUser: '',
      //paramètres nécessaires de l'utilisateur
      user: [
        {
          email: 'Jordan@owlie.xyz',
          motDePasse: 'owlie',
          done: false,
        },
      ],
    };
  },
});
</script>

<style>
.text-h5 {
  text-align: center;
  padding: 20px 0;
}
</style>
