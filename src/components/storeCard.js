import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    cardList: [
        {id:0, designation:"Avatar", prix:150, description:"je suis avatar",dateCreate: "22/10/2018"},
        {id:1, designation:"Avatar", prix:150, description:"je suis avatar",dateCreate: "22/10/2018"},
        {id:2, designation:"Avatar", prix:150, description:"je suis avatar",dateCreate: "22/10/2018"},
        {id:3, designation:"Avatar", prix:150, description:"je suis avatar",dateCreate: "22/10/2018"}
    ]
}

const getters = {
    getCardList:(state)=> state.cardList,
    getNombre: (state)=> state.cardList.length
}

const mutations = {
    ADD_NEW_CARD: (state,card)=>{     
        card.id = Math.random();    
        state.cardList.push(card);        
    }
}

const actions = {
    addNewCard:(state,card)=>{        
        store.commit("ADD_NEW_CARD", card);
    }
}

const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations:mutations,
    actions:actions,
    strict: true
})

export default store;