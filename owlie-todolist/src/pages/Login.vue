<template>
  <q-page>
    <div class="q-pa-md" style="max-width: 400px; margin-top: -200px">
      <div class="text-h5">Me Connecter</div>
      <div class="text-subtitle1">
        Entrez vos identifiants pour vous connecter
      </div>

      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="Email"
          label="Email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="motDePasse"
          v-model="motDePasse"
          label="Mot de passe"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') ||
              'Saississez un mot de passe valide',
          ]"
        />

        <q-btn label="Submit" type="submit" color="primary" />

        <p class="btnCreateCount">Créer un compte</p>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'indexPage',
});
</script>

<style>
.btnCreateCount {
  color: #12384e;
}
</style>
