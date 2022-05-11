import { defineStore} from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    email: 'Jordan@owlie.xyz',
    motDePasse: 'owlie',
  }),

  actions: {
    logout() {
      this.$patch({
        email: '',
        motDePasse: '',
      });
    },
  },
});
