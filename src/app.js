import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Pay rent", priority: "!!!"},
        {name: "Take out rubbish", priority: "!!"},
        {name: "Buy new shirt", priority: "!"},
      ],
      newItem:  {}
    },
    methods: {
      saveNewItem: function(){
        const itemToAdd = {
          name: this.newItem.name,
          priority: this.newItem.priority
        }
        this.items.push(itemToAdd);
        this.newItem = {}
      }
    }
  });
});
