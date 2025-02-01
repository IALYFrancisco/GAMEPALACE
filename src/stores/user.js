import { createStore } from "vuex"


const userStore = createStore({
    state(){
        return {
            userIsConnected: false
        }
    },
})

export default userStore