export function CREATETODOLIST(state,name){

    state.count++;
    state.todoLists.push({
        id: state.count,
        name: name,
        todos: []
      });
    
}

export function CREATETODO(state,[id,name]){

    state.countTodoForId++
    const longueur = state.countTodoForId
    
    state.todoLists.find((todoList) => todoList.id ===id).todos.push({id:longueur,name:name,completed:false}) 
    

}

export function DELETETODO(state,[todoListsId,todo]){
    
    const index = state.todoLists.find((todoList) => todoList.id ===todoListsId).todos.indexOf(todo)
    state.todoLists.find((todoList) => todoList.id ===todoListsId).todos.splice(index,1);

}

