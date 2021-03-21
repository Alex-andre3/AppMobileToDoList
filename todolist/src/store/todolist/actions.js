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

export function createTodolist(context,name){
        context.commit('CREATETODOLIST',name)
}

export function createTodo(context,id,name){
    console.log("name =",name)
    context.commit('CREATETODO',id,name)
}