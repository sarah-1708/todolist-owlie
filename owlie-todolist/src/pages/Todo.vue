<template>
  <q-page class="bg-grey-3 column" style="margin-top: -245px">
    <!--Bouton d'ajout censé faire apparaître l'encadré de la saisie de texte-->
    <!-- <q-page-sticky position="top-left" :offset="[15, -15]">
      <q-btn fab icon="add" color="secondary" />
    </q-page-sticky>-->

    <!--Encadré de saisie de texte-->
    <q-input
      style="position: absolute"
      class="absolute-right"
      filled
      v-model="newTask"
      @keyup.enter="addTask"
      bg-color="dark"
      label="Ajouter un élément"
      stack-label
      :dense="dense"
      label-color="secondary"
    >
      <!--Float button pour ajouter les tâches-->
      <template v-slot:append>
        <q-page-sticky position="top-right" :offset="[18, 6]">
          <q-btn
            @click="addTask"
            round
            fab
            icon="add"
            color="secondary"
            position="absolute"
          />
        </q-page-sticky>
      </template>
    </q-input>

    <q-list class="bg-white" separator bordered>
      <!-- <q-item
        v-for="(task,index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple
      >-->
      <!-- <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary"
          />
        </q-item-section>-->

      <!--Affichage de l'élément ajouté à la todolist-->
      <!--  <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>-->

      <!--Supprime les éléments sélectionnées de la todolist-->
      <!-- <q-item-section v-if="task.done" side>-->
      <!--<q-btn
            @click.stop="deleteTask(index)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />-->
      <!--</q-item-section>-->
      <!--</q-item>-->
    </q-list>

    <!--Affiche le libellé des éléments accordéon-->
    <div class="q-pa-md" style="max-width: 350px; margin-top: 60px">
      <!--accordéon déplié affiche checkbox-->
      <q-expansion-item
        v-for="task in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1': task.done }"
        clickable
        v-ripple
        group="tasks"
        header-class="text-primary"
        label=" "
      >
        <!--Affiche la checkbox-->
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary"
          />
        </q-item-section>

        <!--Descriptif de l'élément-->
        <q-card>
          <q-card-section>
            <q-input v-model="description" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>

    <!--Indique s'il n'y a aucun élément dans la todolist-->
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary"></q-icon>
      <div class="text-h5 text-primary text-center">No task</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoItem',
  data() {
    return {
      //création d'une nouvelle tâche
      newTask: '',
      //paramètres de chaque objet tâche
      tasks: [
        /*{
        title: "Projet Quasar",
        done: false,
      },
      {
        title: "Projet App Desktop Tennis",
        done: true,
      },
      {
        title: "Projet WebApp Jardin Botanique",
        done: false,
      }*/
      ],
    };
  },
  methods: {
    //Effacer une tâche avec affichage de message de confirmation et affichage de l'effacement effectif
    deleteTask(index) {
      //message de confirmation de suppression
      this.$q
        .dialog({
          title: 'Confirmation',
          message: 'Voulez vous vraiment supprimer cette tâche ?',
          cancel: true,
          persistent: true,
        })
        //validation de la suppression
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify('Tâche supprimée');
        });
    },
    //ajouter une tâche de manière automatique
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false,
      });
      this.newTask = '';
    },
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    color: #bbb;
  }
}
.no-task {
  opacity: 0.5;
}
.q-field__native {
  color: white;
  font-size: 23px;
}

.q-field__control {
  height: 68px;
}

/*textarea {
  color: black;
}*/

.q-page-container {
  margin-top: -600px;
}

.q-expansion-item {
  color: black;
}
</style>
