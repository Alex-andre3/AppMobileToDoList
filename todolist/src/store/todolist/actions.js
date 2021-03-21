import axios from 'axios';

export function load({ commit }){
    axios.get('json/immo.json')
            .then(response => {
                commit("load", response.data);
            })

}


// export function suppTodo(context,todo,id){
    
//     context.commit('SUPPTODO',todo,id)
// }

// export function createTodolist(context){

// }