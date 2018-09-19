import Vuex from 'vuex';

export default new Vuex.Store({
    modules: {
        groceries: {
            state: {
                items: [
                    {
                        id: 1,
                        name: 'Milk',
                    },
    
                    {
                        id: 2,
                        name: 'Bread',
                    }
                ],
                adding: false,
                orderByName: false,
            },

            mutations: {
                
            }
        },
    }
});