<template>
    <form>
        Search: <input @input="$emit('search', searchInput)" v-model="searchInput" />
    </form>
</template>

<script>
export default {
    data() {
        return {
            searchInput: ''
        }
    }
}
</script>

<style>

</style>
