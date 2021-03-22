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

export function createTodo(context,[id,name]){
    
    context.commit('CREATETODO',[id,name])
}

export function deleteTodo(context,[todoListsId,name]){
    context.commit('DELETETODO',[todoListsId,name])
}