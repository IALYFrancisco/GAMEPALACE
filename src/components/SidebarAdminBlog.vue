<template>
    <div class="sidebar">
        <div class="sidebar-head">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/logo.png" alt="Logo de gamepalace" title="Logo de gamepalace">
            </router-link>
        </div>
        <hr>
        <div class="sidebar-body">
            <ul>
                <li>Utilisateurs</li>
                <li>Produits</li>
                <li>Statistiques</li>
                <li>Paramètres</li>
            </ul>
        </div>
    </div>
</template>

<style>

div.sidebar {
    width: 150px;
    height: 100vh;
    background-color: #333;
    box-shadow: 1px 1px 3px #9493935E;
}

div.sidebar hr {
    width: 90%;
    margin: auto;
    height: 0.1px;
    border: none;
    background: rgb(78, 77, 77);
}

div.sidebar div.sidebar-head {
    width: 100%;
    text-align: center;
    height: max-content;
    padding-left: 10px;
    padding-top: 10px;
}

div.sidebar div.sidebar-head img{
    width: 45px;
    cursor: pointer;
    margin-left: -20px;
}

li {
    color: white;
    font-size: 13px;
}

div.sidebar div.sidebar-body {
    padding: 40px 0px 5px 15px;
}

div.sidebar div.sidebar-body ul {
    list-style-type: none;
}

div.sidebar div.sidebar-body ul li {
    margin-bottom: 30px;
}

</style>

<script>

export default {
    name: "SidebarDashboardComponent"
}

</script>