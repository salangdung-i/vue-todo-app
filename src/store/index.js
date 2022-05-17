import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: []
  },

  mutations: {
    // 3. mutations에서  state에 넣어줌 
    SET_NEWS(state, data){
      state.news = data;
    }
  },
  // 비동기 호출 하는 것 
  actions: {
    FETCH_NEWS(context) {
      // 1. api 호출 
      fetchNewsList()
        .then(response => {
          console.log(response.data);
          // 2. mutations 에 넣어줌 
          context.commit('SET_NEWS', response.data);// api 이용해서 muations에 data 넣어줌. 
        })
        .catch(error => console.log(error));
    }
  }
  
});

