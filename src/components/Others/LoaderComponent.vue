<template>
    <section class="loader">
        <div class="loader-container">
            <img src="/src/assets/loader.gif" alt="icon de chargement">
        </div>
    </section>
</template>

<script> 
export default {
    name: "LoaderComponent"
}
</script>

<style>

.loader {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>