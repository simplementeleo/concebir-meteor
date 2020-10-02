import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 0,
    user: {
        username: 'admin',
        pass: 'admin'
    },


  },
  mutations: {
    _Login(state, data) {
      if (state.user.username == data.user && state.user.pass == data.pass) {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
        });
        localStorage.setItem('start','input');
        router.push({name: 'Home'})

      }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos...',
        });
      }
    }
  },
  mounted(){}
})