<template>
    <div>
        <input type="checkbox" v-model="orderByName"> Order by name<br>
        <grocery-list @deleteItem="onDeleteItem" :items="orderedItems"></grocery-list>
        <grocery-input v-if="adding" @add="onAdd"></grocery-input>
        <button v-else @click="onClickAdd">Add grocery</button>
    </div>
</template>

<script>
import GroceryList from './components/GroceryList';
import GroceryInput from './components/GroceryInput';
import GrocerySearch from './components/GrocerySearch';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            // move this state to the store
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
        }
    },

    computed: {
        orderedItems() {
            return this.orderByName
                ? this.items.slice().sort((a, b) => a.name.localeCompare(b.name))
                : this.items;
        },

        //use mapState to get items, adding and orderByName from the store
        ...mapState({

        }),
    },

    methods: {
        onClickAdd() {
            this.adding = true;
        },

        onAdd(text) {
            if(!text) {
                return;
            }
            this.items.push({
                id: this.items.length,
                name: text,
            });
        },

        onDeleteItem(id) {
            this.items = this.items.filter(item => item.id !== id);
        }
    },

    components: {
        GroceryList,
        GroceryInput,
    }
}
</script>

<style>

</style>
