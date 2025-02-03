<template>
  <div class="video">
    <video src="/src/assets/videos/login-register-bg.mp4" autoplay muted loop></video>
  </div>
  <div class="signin_signup_page_container">
    <div class="left_for_text">
      <div class="element">
        <img src="/src/assets/logo.png" alt="logo" title="logo" class="logo" />
        <span>GamePalace</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse fugiat, soluta
        ad quae natus nobis tempore numquam officiis sunt possimus officia suscipit nam repellat
        qui. Quaerat totam, dolor iure neque maxime laudantium ullam, ea, quidem nobis eius voluptas
        quae sapiente a? Fuga aperiam in eum, eos temporibus nam dignissimos.
      </p>
    </div>
    <div class="right_for_form">
      <form class="signin" @submit.prevent="userSignIn">
        <p>Sign in</p>
        <div class="form_element">
          <label for="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="ex: John Doe"
            v-model="userSignInInfo.name"
            required
          />
        </div>

        <div class="form_element">
          <label for="userbirthdate">Birthdate:</label>
          <input
            type="date"
            name="userbirthdate"
            id="userbirthdate"
            v-model="userSignInInfo.birthdate"
            required
          />
        </div>

        <div class="form_element">
          <label for="usermail">Email:</label>
          <input
            type="email"
            name="usermail"
            id="usermail"
            placeholder="ex: johndoe7@gmail.com"
            v-model="userSignInInfo.email"
            required
          />
        </div>

        <div class="form_element">
          <label for="userpassword">Password:</label>
          <input
            type="password"
            name="userpassword"
            id="userpassword"
            placeholder="Choose a strong password"
            v-model="userSignInInfo.password"
            required
          />
        </div>

        <div class="form_action">
          <button v-on:submit.prevent="" type="submit">Submit</button>
          <a href="#" id="link_to_signup">Have already an account?</a>
        </div>
      </form>

      <form class="signup" action="" method="post" @submit.prevent="userLogin">
        <p>Sign up</p>

        <div class="form_element">
          <label for="usermail">Email:</label>
          <input type="email" name="usermail" placeholder="exemple@gmail.com" required v-model="userLoginInfo.email"/>
        </div>

        <div class="form_element">
          <label for="userpassword">Password:</label>
          <input type="password" name="userpassword" required v-model="userLoginInfo.password"/>
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
import axios from 'axios'

export default {
  name: 'login-or-register',

  data() {
    return {
      userSignInInfo: {
        name: '',
        birthdate: '',
        email: '',
        password: ''
      },
      userLoginInfo: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async userSignIn() {
      try {
        if (this.userSignInInfo.password.length > 8) {
          await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/user',
            data: this.user,
            headers: ['Content-Type', 'application/json']
          })
            .then((response) => {
              if(response.status === 201){
                this.$router.push({name: "Login-or-register"})
              }
              console.log(response)
            })
            .catch((error) => {
              console.log(`Erreur d'inscription: ${error}`)
            })
        } else {
          window.alert('Mot de passe trop court, choisissez au moins 8 caractères')
        }
      }catch(error){
        console.log(`Erreur sur l'inscription de l'utilisateur: ${error}`)
      }
    },

    async userLogin(){
      console.log(this.userLoginInfo)
      try {
        await axios({
          method: 'POST',
          url: `http://127.0.0.1:3000/user/login?email=${this.userLoginInfo.email}&?password=${this.userLoginInfo.password}`,
          headers: ['Content-Type', 'application/json']
        }).then((response) => {
          console.log(response)
        })
      }catch(error){
        console.log(`Erreur de connexion de l'utilisateur: ${error}`)
      }
    }
  },

  mounted() {
    const link_to_signup = document.getElementById('link_to_signup')

    link_to_signup.addEventListener('click', () => {
      document.querySelector('.right_for_form').style.transform = 'translateY(-450px)'
    })

    const link_to_signin = document.getElementById('link_to_signin')

    link_to_signin.addEventListener('click', () => {
      document.querySelector('.right_for_form').style.transform = 'translateY(150px)'
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

div.signin_signup_page_container div.left_for_text {
  width: 50%;
  height: 100vh;
  padding: 100px;
  text-align: justify;
  color: #fff;
}

div.signin_signup_page_container div.right_for_form {
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateY(-450px);
  transition: all 0.69s;
}

div.signin_signup_page_container div.right_for_form form {
  width: 300px;
  height: max-content;
  background-color: #fff;
  box-shadow: 2px 2px 10px #00000075;
  border-radius: 5px;
  padding: 18px;
  margin-top: 200px;
}

div.signin_signup_page_container div.right_for_form form div.form_element {
  margin-bottom: 15px;
}

div.signin_signup_page_container div.right_for_form form div.form_action {
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

div.signin_signup_page_container div.right_for_form form div.form_action a {
  font-size: 10px;
  color: #000;
}

div.signin_signup_page_container div.right_for_form form p {
  width: 100%;
  border-bottom: 2px #333 solid;
  font-size: 25px;
  margin-bottom: 25px;
  color: #333;
}

div.signin_signup_page_container div.right_for_form form label {
  color: #333;
  font-size: 12px;
}

div.signin_signup_page_container div.right_for_form form input {
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
