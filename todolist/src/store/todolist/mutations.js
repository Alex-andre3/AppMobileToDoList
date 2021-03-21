export function addTodo(state, data) {
    console.log(data);
    state.todos.push({
        id: 5,
        name : data.name,
        completed : false

    })
}

export function CREATETODOLIST(state,name){

    state.count++;
    state.todoLists.push({
        id: state.count,
        name: name,
        todos: []
      });
    
}

export function CREATETODO(state,id,name){

    const longueur =  state.todoLists.find((todoList) => todoList.id ===id).todos.length;
    
    state.todoLists.find((todoList) => todoList.id ===id).todos.push({id:longueur,name:name,completed:false}) 
    console.log(name);

}
 
// export function SUPPTODO(state,todo,id){
//     console.log("on vient cii id=",id)
    
//     const index  = state.todoLists[todo].indexOf(id);

//     console.log("index =",index);
    
    
//     // console.log("index=", index);
//     // console.log(state.todoLists[0].todos.name);
//     state.todoLists[id].todos.splice(index,1)
// }

