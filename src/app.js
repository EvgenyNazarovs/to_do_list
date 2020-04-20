import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: ["Clean flat", "Take out rubbish", "Pay rent"],
      newItem:  ""
    },
    methods: {
      saveNewItem: function(){
        const itemToAdd = this.newItem;
        this.items.push(itemToAdd);
        this.newItem = "";
      }
    }
  });
});
