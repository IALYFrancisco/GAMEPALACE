<template>
    <h1>Game id is : {{ ID }}</h1>
</template>

<script>

export default {
    name: "DetailsGameView",
    data(){
        return {
            ID: this.$route.params.id
        }
    }
}

</script>