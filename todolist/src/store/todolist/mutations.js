
export function CREATETODOLIST(state,name){

    state.count++;
    state.todoLists.push({
        id: state.count,
        name: name,
        todos: []
      });
    
}

export function CREATETODO(state,[id,name]){

   
    // const longueur =  1 + state.todoLists.find((todoList) => todoList.id ===id).todos.length;
    state.countTodo++
    const longueur = state.countTodo
    
    state.todoLists.find((todoList) => todoList.id ===id).todos.push({id:longueur,name:name,completed:false}) 
    

}

export function DELETETODO(state,[todoListsId,name]){
    console.log("on arrive ici ",todoListsId,name)
    // const index = state.todoLists.find((todoList) => todoList.id ===todoListsId).todos.find((todo)=>todo.name===name).id;

    // ici ça ne marche pas et c'est chiant
    const index = state.todoLists.find((todoList) => todoList.id ===todoListsId).todos.indexOf({name:name})
    console.log("on re ici ",index)
    state.todoLists.find((todoList) => todoList.id ===todoListsId).todos.splice(index,1);

}
// export function SUPPTODO(state,todo,id){
//     console.log("on vient cii id=",id)
    
//     const index  = state.todoLists[todo].indexOf(id);

//     console.log("index =",index);
    
    
//     // console.log("index=", index);
//     // console.log(state.todoLists[0].todos.name);
//     state.todoLists[id].todos.splice(index,1)
// }

