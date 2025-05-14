<template>
  <div class="video">
    <video src="/src/assets/videos/login-register-bg.mp4" autoplay muted loop></video>
  </div>
  <div class="overlay">
    <section class="forms-container">
      <div class="left_for_text">
        <router-link v-bind:to="{ name: 'Home' }">
          <div class="element">
            <img src="/src/assets/logo.png" alt="Logo de GAMEPALACE" title="Logo de GAMEPALACE" class="logo" />
            <span>GAMEPALACE</span>
          </div>
        </router-link>
        <section class="citation">
          <blockquote>Les bons jeux vidéo sont fondés sur les meilleurs principes d’apprentissage. Ils poussent le joueur à réfléchir, à expérimenter, à apprendre par l’échec.</blockquote>
          <address>James Paul Gee</address>
        </section>
      </div>
      <div class="right_for_form">
        <form class="signin" @submit.prevent="userSignIn">
          <p>Sign in</p>
          <div class="form_element">
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="ex: John Doe"
              v-model="userSignInInfo.name"
              required
            />
          </div>
  
          <div class="form_element">
            <label for="date">Birthdate:</label>
            <input
              type="date"
              name="date"
              id="date"
              v-model="userSignInInfo.birthdate"
              required
            />
          </div>
  
          <div class="form_element">
            <label for="email">Email:</label>
            <input
              type="email"
              name="usermail"
              id="email"
              placeholder="ex: johndoe7@gmail.com"
              v-model="userSignInInfo.email"
              required
            />
          </div>
  
          <div class="form_element">
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
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
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="exemple@gmail.com"
              required
              v-model="userLoginInfo.email"
            />
          </div>
  
          <div class="form_element">
            <label for="password">Password:</label>
            <input type="password" name="password" required v-model="userLoginInfo.password" />
          </div>
  
          <div class="form_action">
            <button type="submit">Submit</button>
            <a href="#" id="link_to_signin">Haven't an account?</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { authenticationStore } from '@/stores/store'

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
            url: `${import.meta.env.VITE_BASE_URL}/user`,
            data: this.userSignInInfo,
            headers: ['Content-Type', 'application/json']
          })
            .then((response) => {
              // ici le statut 201 signifie que l'utilisateur n'était pas dans la liste des utilisateurs que désormais il en fait partie
              if (response.status === 201) {
                window.alert(
                  `Congratulation 🎉, you are signed in. Now, you'll be redirected to homapage!`
                )
                authenticationStore.commit('setUserIsConnected')
                this.$router.push({ name: 'Home' })
                // ici le statut 204 signifie que l'utilisateur existe déjà dans la liste des utilisateurs
              } else if (response.status === 204) {
                window.alert(`An user with email ${this.userSignInInfo.email} already exist 🆔🆔!`)
              }
            })
            .catch((error) => {
              console.log(`Erreur d'inscription: ${error}`)
            })
        } else {
          window.alert('Mot de passe trop court, choisissez au moins 8 caractères 🚫🚫')
        }
      } catch (error) {
        console.log(`Erreur sur l'inscription de l'utilisateur: ${error}`)
      }
    },

    async userLogin(){
      try {
        await axios({
          method: 'POST',
          url: `${import.meta.env.VITE_BASE_URL}/user/login?email=${this.userLoginInfo.email}&password=${this.userLoginInfo.password}`,
          withCredentials: true,
          headers: {
            "Accept" : "*/*",
            "Accept-Encoding" : "gzip, deflate, br",
            "Connection" : "keep-alive"
          }
        }).then((response) => {
          if (response.status == 200) {
            authenticationStore.commit('SET_USER', response.data.user[0])
            authenticationStore.commit('SET_TOKEN', response.data.accessToken)
            this.$router.push({ name: 'Home' })
          } else if (response.status == 204) {
            window.alert('Email or password incorrect ⛔⛔')
          }
        })
      } catch (error) {
        console.log(`Erreur de connexion de l'utilisateur: ${error}`)
      }
    }
  },

  mounted() {
    const link_to_signup = document.getElementById('link_to_signup')

    link_to_signup.addEventListener('click', () => {
      document.querySelector('.right_for_form').style.transform = 'translateY(-490px)'
    })

    const link_to_signin = document.getElementById('link_to_signin')

    link_to_signin.addEventListener('click', () => {
      document.querySelector('.right_for_form').style.transform = 'initial'
    })
  }
}
</script>

<style>
.video {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
}

.video video {
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.forms-container {
  display: flex;
  width: 700px;
  height: 450px;
  margin: 125px auto;
  column-gap: 75px;
  overflow: hidden;
}

.overlay {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #0000007a;
  position: relative;
}

.overlay .left_for_text {
  width: 50%;
  height: 100vh;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
}

.overlay .right_for_form {
  height: 100vh;
  transform: translateY(-490px);
  transition: all 0.69s;
}

.overlay .right_for_form form {
  width: 300px;
  height: max-content;
  background-color: #fff;
  box-shadow: 2px 2px 10px #00000075;
  border-radius: 5px;
  padding: 18px;
}

.signin {
  margin-bottom: 50px;
}

.overlay .right_for_form form .form_element {
  margin-bottom: 15px;
}

.overlay .right_for_form form .form_action {
  margin-top: 25px;
}

.overlay .right_for_form form .form_action button {
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

.overlay .right_for_form form .form_action a {
  font-size: 10px;
  color: #000;
}

.overlay .right_for_form form p {
  width: 100%;
  border-bottom: 2px #333 solid;
  font-size: 25px;
  margin-bottom: 25px;
  color: #333;
}

.overlay .right_for_form form label {
  color: #333;
  font-size: 12px;
}

.overlay .right_for_form form input {
  outline: none;
  width: 100%;
  height: 35px;
  padding-left: 5px;
}

.overlay .left_for_text .element {
  width: inherit;
  height: max-content;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.overlay .left_for_text .element span {
  color: white;
  font-size: 20px;
  margin-left: 10px;
}

.overlay .left_for_text .element img {
  width: 60px;
}

.logo {
  margin-left: -6px;
}

address {
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  
}
</style>
