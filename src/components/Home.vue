<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header id="bannier">
        <div class="element">
            <img v-bind:src="imgLogo" alt="logo" title="logo" class="logo">
            <span>GamePalace</span>
        </div>
    </header>
    <nav class="home">
        <ul>
            <li>Tous les jeux</li>
            <li>Consoles</li>
            <li>Gratuits</li>
            <li>Jeux à venir</li>
        </ul>
    </nav>

    <section id="all_games">
        <div class="card">
            <div class="img">
                <img v-bind:src="img1Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img2Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img3Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img4Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img5Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img6Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img7Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img8Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img9Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img10Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img11Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img12Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img13Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img14Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img15Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
        <div class="card">
            <div class="img">
                <img v-bind:src="img16Url" alt="">
            </div>
            <span class="name">
            </span>
            <span class="rate"></span>
            <span class="action"></span>
        </div>
    </section>

    <vary-mangoli></vary-mangoli>

</template>

<script>

export default {

    data:function(){
        return {
            img1Url : 'src/assets/image (1).gif',
            img2Url : 'src/assets/image (2).webp',
            img3Url : 'src/assets/image (3).webp',
            img4Url : 'src/assets/image (4).jpg',
            img5Url : 'src/assets/image (5).jpg',
            img6Url : 'src/assets/image (6).jpg',
            img7Url : 'src/assets/image (7).jpg',
            img8Url : 'src/assets/image (8).jpg',
            img9Url : 'src/assets/image (9).webp',
            img10Url : 'src/assets/image (10).jpg',
            img11Url : 'src/assets/image (11).webp',
            img12Url : 'src/assets/image (12).jpg',
            img13Url : 'src/assets/image (13).webp',
            img14Url : 'src/assets/image (14).jpg',
            img15Url : 'src/assets/image (15).jpg',
            img16Url : 'src/assets/image (16).jpg',
            imgLogo : 'src/assets/logo.png',
            

        }
    },

    components: {
        
    },

    mounted() {

        const img_bannier_tab = [
            'bannier (2).jpg',
            'bannier (3).jpg',
            'bannier (4).jpg',
            'bannier (5).jpg',
            'bannier (6).jpg',
            'bannier (7).jpg'
        ];


        let counter = 0;

        setInterval(function(){
    
            const bannier_container = document.querySelector("header#bannier")
            
            bannier_container.setAttribute('style', `background-image: url('src/assets/${img_bannier_tab[counter]}')`);

            console.log(bannier_container)

            counter++;

            if(counter==img_bannier_tab.length) {
                counter = 0;
            }     

        }, 10000);

    }

}

</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}

a {
    color: #333;
    text-decoration: none;
}

header {
    width: 100%;
    height: 300px;
    background-image: url('/src/assets/bannier (1).jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 10px #33333356;
    transition: 0.5s;
}

header div.element {
    width: inherit;
    height: max-content;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
}

header div.element span {
    color: white;
    font-size: 20px;
    margin-left: 10px;
}

header div.element img {
    width: 60px;
    
}

nav.home {
    width: 100%;
    height: 55px;
}

nav.home ul {
    width: 500px;
    height: inherit;
    margin: auto;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
}

nav.home ul li {
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    color: #333;
}

nav.home ul li::before {
    position: absolute;
    content: '';
    width: 0%;
    height: 2px;
    background: #333;
    bottom: 0;
    transition: 0.3s;
}

nav.home ul li:hover::before {
    width: 100%;
    transition: 0.3s;
}

section#all_games {
    width: 100%;
    height: max-content;
    padding: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: center;
    gap: 40px;
}

section#all_games div.card {
    width: 200px;
    height: 300px;
    box-shadow: 1px 1px 5px #3333332a;
    border-radius: 3px;
    transition: 0.3s;
    padding-top: 2px;
    background: #00000028;
}

section#all_games div.card:hover {
    margin-top: -10px;
    transition: 0.3s;
    cursor: pointer;
}

section#all_games div.card div.img {
    width: 98%;
    height: 100%;
    margin: auto;
    border-radius: 3px;
    position: relative;
}

section#all_games div.card div.img::before {
    position: absolute;
    content: '';
    background: #33333375;
    width: 100%;
    height: 0;
    bottom: 0;
    transition: 0.4s;
}

section#all_games div.card:hover div.img::before {
    position: absolute;
    content: '';
    background: #33333375;
    width: 100%;
    height: 100%;
    bottom: 0;
    transition: 0.4s;
}

section#all_games div.card div.img img {
    width: 100%;
    height: 100%;
    display: flex;
    object-fit: cover;
}
</style>