<template>
    <h1>Game id is : {{ gameId }}</h1>
</template>

<script>

export default {
    name: "DetailsGameView",
    data(){
        return {
            gameId: this.$route.params._id
        }
    }
}

</script>