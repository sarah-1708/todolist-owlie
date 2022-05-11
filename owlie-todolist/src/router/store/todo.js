import { defineStore, acceptHMRUpdate } from 'pinia';
import { useUserStore } from './user';

export const todoStore = defineStore({
  id: 'todo',
  state: () => ({
    /** @type {string[]} */
    rawItems: [],
  }),
  getters: {
    /**
     * @returns {Array<{ title: string; description:string  }>}
     */
    items: (state) =>
      state.rawItems.reduce((items, item) => {
        const existingItem = items.find((it) => it.title === item);

        if (!existingItem) {
          items.push({ title: item, description: text });
        } else {
          existingItem++;
        }

        return items;
      }, []),
  },
  actions: {
    /**
     * Add item to the cart
     * @param {string} title
     */
    addItem(title) {
      this.rawItems.push(title);
    },

    /**
     * Remove item from the cart
     * @param {string} title
     */
    removeItem(title) {
      const i = this.rawItems.lastIndexOf(title);
      if (i > -1) this.rawItems.splice(i, 1);
    },

    async purchaseItems() {
      const user = useUserStore();
      if (!user.email) return;

      console.log('Purchasing', this.items);
      const n = this.items.length;
      this.rawItems = [];

      return n;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(todoStore, import.meta.hot));
}
