<template>
    <li>
        {{ name }}

        <button @click="$emit('deleteClicked')">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        }
    }
}
</script>

<style>

</style>
