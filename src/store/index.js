import Vuex from 'vuex';
import api from '../api';

export default new Vuex.Store({
    modules: {
        groceries: {
            state: {
                items: [],
                adding: false,
                orderByName: false,
            },

            actions: {
                load({ commit }) {
                    // implement load. Use api.load
                },

                saveItem({ commit }, text) {
                    const data = { name: text };
                    //implement saveItem. Use api.addItem. Note that addItem returns a promise with the id of the saved item.
                },

                
                deleteItem({ commit }, id) {
                    // implement deleteItem. Use api.deleteItem
                }
            },

            mutations: {
                setItems(state, items) {
                    state.items = items;
                },

                setAdding(state, value) {
                    state.adding = value;
                },

                addItem(state, item) {
                    state.items.push(item);
                },

                deleteItem(state, id) {
                    state.items = state.items.filter(item => item.id !== id);
                },

                toggleOrderByName(state, value) {
                    state.orderByName = value;
                }
            },
        },
    }
});