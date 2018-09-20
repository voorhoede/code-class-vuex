<template>
    <div>
        <h1>Awesome Grocery List</h1>
        <input type="checkbox" v-model="orderByName"> Order by name<br>
        <grocery-list @deleteItem="deleteItem" :items="orderedItems"></grocery-list>
        <grocery-input v-if="adding" @add="addItem"></grocery-input>
        <button v-else @click="setAdding(true)">Add grocery</button>
    </div>
</template>

<script>
import GroceryList from './components/GroceryList';
import GroceryInput from './components/GroceryInput';
import GrocerySearch from './components/GrocerySearch';
import { mapState, mapMutations } from 'vuex';

export default {

    computed: {
        orderedItems() {
            return this.orderByName
                ? this.items.slice().sort((a, b) => a.name.localeCompare(b.name))
                : this.items;
        },

        //use mapState to get items, adding and orderByName from the store
        ...mapState({
            items: (state) => state.groceries.items,
            adding: (state) => state.groceries.adding,
        }),

        orderByName: {
            get() {
                return this.$store.state.groceries.orderByName;
            },
            set(value) {
                this.$store.commit('toggleOrderByName', value);
            }
        }
    },

    methods: {
        ...mapMutations([
            'setAdding',
            'addItem',
            'deleteItem'
        ]),
    },

    components: {
        GroceryList,
        GroceryInput,
    }
}
</script>

<style>

</style>
