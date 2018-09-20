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
                    api.load()
                        .then(items => {
                            commit('setItems', items);
                        });
                },

                saveItem({ commit }, text) {
                    const data = { name: text };

                    api.addItem(data)
                        .then(id => {
                            commit('addItem', Object.assign(data, { id }));
                        });
                },

                deleteItem({ commit }, id) {
                    api.deleteItem(id)
                        .then(() => {
                            commit('deleteItem', id);
                        }); 
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