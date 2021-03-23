export function createTodolist(context,name){
        context.commit('CREATETODOLIST',name)
}

export function createTodo(context,[id,name]){
    
    context.commit('CREATETODO',[id,name])
}

export function deleteTodo(context,[todoListsId,todo]){
    context.commit('DELETETODO',[todoListsId,todo])
}