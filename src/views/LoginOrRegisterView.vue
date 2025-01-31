<template>
    <div class="video">
        <video src="/src/assets/videos/NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS - Trailer de la date de sortie - PS5, PS4.mp4" autoplay muted loop></video>
    </div>
    <div class="signin_signup_page_container">
        <div class="left_for_text">
            <div class="element">
                <img src="/src/assets/logo.png" alt="logo" title="logo" class="logo">
                <span>GamePalace</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse fugiat, soluta ad quae natus nobis tempore numquam officiis sunt possimus officia suscipit nam repellat qui. Quaerat totam, dolor iure neque maxime laudantium ullam, ea, quidem nobis eius voluptas quae sapiente a? Fuga aperiam in eum, eos temporibus nam dignissimos.</p>
        </div>
        <div class="right_for_form">
            <form class="signin" action="" method="post">
                <p>Sign in</p>
                <div class="form_element">
                    <label for="username">Type your full name:</label>
                    <input type="text" name="username" id="username" placeholder="ex: IALY Francisco Raymond">
                </div>

                <div class="form_element">
                    <label for="userbirthdate">Type your birthdate:</label>
                    <input type="date" name="userbirthdate" id="userbirthdate">
                </div>

                <div class="form_element">
                    <label for="usermail">Type your email:</label>
                    <input type="email" name="usermail" id="usermail" placeholder="ex: ialyfrancisco7@gmail.com">
                </div>

                <div class="form_element">
                    <label for="userpassword">Type your password:</label>
                    <input type="password" name="userpassword" id="userpassword" placeholder="Choose a strong password">
                </div>
                
                <div class="form_action">
                    <button v-on:submit.prevent="" type="submit">Submit</button>
                    <a href="#" id="link_to_signup">Have already an account?</a>
                </div>

            </form>

            <form class="signup" action="" v-on:submit.prevent="user_auth()" method="post">  
                <p>Sign up</p>

                <div class="form_element">
                    <label for="usermail">Type your email:</label>
                    <input type="email" name="usermail" placeholder="ex: ialyfrancisco7@gmail.com">
                </div>

                <div class="form_element">
                    <label for="userpassword">Type your password:</label>
                    <input type="password" name="userpassword" placeholder="Choose a strong password">
                </div>
                
                <div class="form_action">
                    <button type="submit">Submit</button>
                    <a href="#" id="link_to_signin">Haven't an account?</a>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
export default {

    name: "login-or-register",

    data:function(){
        return {   
        }
    },

    methods : {
      user_auth() {

        const all_input_in_user_signup_form = document.querySelectorAll('.signup input');

        const tabUserConnexion = new Array()

        tabUserConnexion.push(JSON.parse(localStorage.getItem("user")));

        console.log(all_input_in_user_signup_form[0].value)
        

        if(all_input_in_user_signup_form[0].value != tabUserConnexion[0]['email'] || all_input_in_user_signup_form[1].value != tabUserConnexion[0]['password']){
            window.alert("Email incorrect ❌❌!")
        }

        if(all_input_in_user_signup_form[0].value == tabUserConnexion[0]['email'] && all_input_in_user_signup_form[1].value == tabUserConnexion[0]['password']){
            window.alert("Email incorrect ✔✔!")
            console.log(tabUserConnexion)
        }

      }
    },

    mounted() {
        const form = document.querySelector("form.signin");
        const all_input = document.querySelectorAll("form.signin input");

        // eslint-disable-next-line no-unused-vars
        form.addEventListener("submit", (event) => {
                localStorage.setItem(`key${localStorage.length}`, JSON.stringify({username: `${all_input[0].value}`,
                    userBirthdate : `${all_input[1].value}`,
                    usermail : `${all_input[2].value}`,
                    userpassword : `${all_input[3].value}`}))
        }
            
        );


        const link_to_signup = document.getElementById("link_to_signup");

        link_to_signup.addEventListener('click', () => { 

            document.querySelector(".right_for_form").style.transform = "translateY(-450px)";

        })

        const link_to_signin = document.getElementById("link_to_signin");

        link_to_signin.addEventListener('click', () => { 

            document.querySelector(".right_for_form").style.transform = "translateY(150px)";

        })

    }
}
</script>

<style>

    div.video {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: absolute;
    }
    
    div.video video {
        width: 100%;
    }
    
    div.signin_signup_page_container {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background-color: #0000007a;
        background-size: cover;
        display: flex;
        position: relative;
    }

    div.signin_signup_page_container div.left_for_text{
        width: 50%;
        height: 100vh;
        padding: 100px;
        text-align: justify;
        color:#fff;
    }

    div.signin_signup_page_container div.right_for_form{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transform: translateY(-450px);
        transition: all 0.69s;
    }

    div.signin_signup_page_container div.right_for_form form{
        width: 300px;
        height: max-content;
        background-color: #fff;
        box-shadow: 2px 2px 10px #00000075;
        border-radius: 5px;
        padding: 18px;
        margin-top: 200px;
    }

    div.signin_signup_page_container div.right_for_form form div.form_element{
        margin-bottom: 15px;
    }

    div.signin_signup_page_container div.right_for_form form div.form_action{
        margin-top: 25px;
    }

    div.signin_signup_page_container div.right_for_form form div.form_action button {
        cursor: pointer;
        background: #ff0000;
        height: 30px;
        border-radius: 4px;
        color: white;
        outline: none;
        width: 100px;
        margin-right: 30px;
        border: none;
        box-shadow: 2px 2px 5px #3333336b;
    }

    div.signin_signup_page_container div.right_for_form form div.form_action a{
        font-size: 10px;
        color: #000;
    }

    
    div.signin_signup_page_container div.right_for_form form p{
        width: 100%;
        border-bottom: 2px #333 solid;
        font-size: 25px;
        margin-bottom: 25px;
        color: #333;
    }
    
    div.signin_signup_page_container div.right_for_form form label{
        color: #333;
        font-size: 12px;
    }

    div.signin_signup_page_container div.right_for_form form input{
        outline: none;
        width: 100%;
        height: 35px;
        padding-left: 5px;
    }

div.signin_signup_page_container div.left_for_text div.element {
    width: inherit;
    height: max-content;
    display: flex;
    align-items: center;
}

div.signin_signup_page_container div.left_for_text div.element span {
    color: white;
    font-size: 20px;
    margin-left: 10px;
}
 
div.signin_signup_page_container div.left_for_text div.element img {
    width: 60px;
}


</style>