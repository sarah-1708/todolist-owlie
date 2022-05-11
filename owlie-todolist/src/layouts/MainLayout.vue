<!--App sous format Iphone 12 Pro
dimensions: 390*844-->

<template>
  <!--Header-->
  <!--Menu burger qui conduit à la navigation latérale par un clic
et la fait disparaître avec un nouveau clic-->
  <!--Titre de l'app-->
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          exact
          clickable
          v-ripple
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <q-toolbar-title class="q-px-xl q-pt-xl q-mb-md">
        Owlie Todolist
      </q-toolbar-title>
    </q-header>

    <!--barre d'icônes du header-->
    <q-layout view="hHr lpR fFr">
      <q-header bordered class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />

          <q-btn-group>
            <q-btn to="/login" color="primary" icon="notifications" />
            <q-btn to="/logout" color="primary" icon="share" />
            <q-btn to="/todo" color="primary" icon="search" />
          </q-btn-group>
        </q-toolbar>
      </q-header>

      <!-- bloc navigation latérale droite-->
      <q-drawer
        v-model="rightDrawerOpen"
        side="right"
        color="primary"
        overlay
        bordered
        width="50px"
      >
        <!-- barre latérale de menu avec
        les différentes icônes cliquables:
        pour se connecter, se déconnecter et attérir
        sur la page de création de la todolist -->
        <q-btn class="q-px-md q-pt-xl q-mb-xl" color="primary" icon="search" />
        <q-button-group class="flex flex-center column">
          <q-btn
            to="/login"
            exact
            clickable
            v-ripple
            flat
            color="primary"
            icon="login"
          />
          <q-btn
            to="/logout"
            exact
            clickable
            v-ripple
            flat
            color="primary"
            icon="logout"
          />
          <q-btn
            to="/todo"
            exact
            clickable
            v-ripple
            flat
            color="primary"
            icon="note"
          />
        </q-button-group>
      </q-drawer>
    </q-layout>

    <template>
      <q-page style="margin-top: -220px">
        <div class="text-subtitle1">
          Afin d'accéder à votre Todolist,<br />merci de bien vouloir vous
          authentifier.
        </div>

        <q-btn class="center" color="secondary" label="M'authentifier" />
      </q-page>
    </template>

    <!--Redirection vers les différentes pages-->
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';

//import TodoItem from 'pages/Todo.vue';


export default {
  //barre de menu latérale droite cachée par défaut
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
.center {
  margin-left: 32.5%;
  margin-top: 20px;
}
.q-btn-group {
  margin-left: 40%;
  box-shadow: none;
}

.text-subtitle1 {
  color: darkgray;
  font-size: 13px;
  line-height: 20px;
}

q-layout {
  min-height: 0;
}
</style>
