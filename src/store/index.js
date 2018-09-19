import Vuex from 'vuex';

export default new Vuex.Store({
    modules: {
        groceries: {
            state: {
                items: [
                    {
                        id: 0,
                        name: 'Milk',
                    },
    
                    {
                        id: 1,
                        name: 'Bread',
                    }
                ],
                adding: false,
                orderByName: false,
            },

            mutations: {
                setAdding(state, value) {
                    state.adding = value;
                },

                addItem(state, text) {
                    if(!text) {
                        return;
                    }
                    state.items.push({
                        id: state.items.length,
                        name: text,
                    });
                },

                deleteItem(state, id) {
                    state.items = state.items.filter(item => item.id !== id);
                },

                toggleOrderByName(state, value) {
                    state.orderByName = value;
                }
            }
        },
    }
});