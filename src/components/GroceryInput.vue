<template>
    <form @submit.prevent="onSubmit">
        <input type="text" name="name" v-model="text">
        <input type="submit">
    </form>
</template>

<script>
import GroceryItem from './GroceryItem';

export default {
    data() {
        return {
            text: ''
        }
    },

    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        onSubmit() {
            this.$emit('add', this.text);
            this.text = '';
        }
    },

    components: {
        GroceryItem,
    }
}
</script>

<style>

</style>
