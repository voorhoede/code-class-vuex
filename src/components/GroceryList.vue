<template>
    <ul v-if="items.length">
        <grocery-item 
            v-for="item of items" 
            :name="item.name"
            :key="item.id"
            @deleteClicked="$emit('deleteItem', item.id)"
            >
        </grocery-item>
    </ul>

    <p v-else>Nothing to display</p>
</template>

<script>
import GroceryItem from './GroceryItem';

export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    components: {
        GroceryItem,
    }
}
</script>

<style>

</style>
