import axios from 'axios';

export function load({ commit }){
    axios.get('json/immo.json')
            .then(response => {
                commit("load", response.data);
            })

}

export function increment (context){
    context.commit('INCREMENT')
}

export function decrement (context){
    context.commit('DECREMENT')
}

export function colorForTodo(context){
    console.log("on va jusqu'ici chackal");
    context.commit('COLORFORTODO')
}

export function suppTodo(context){
    context.commit('SUPPTODO')
}