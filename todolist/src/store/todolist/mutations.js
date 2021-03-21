export function addTodo(state, data) {
    console.log(data);
    state.todos.push({
        id: 5,
        name : data.name,
        completed : false

    })
}

// export function SUPPTODO(state,todo,id){
//     console.log("on vient cii id=",id)
    
//     const index  = state.todoLists[todo].indexOf(id);

//     console.log("index =",index);
    
    
//     // console.log("index=", index);
//     // console.log(state.todoLists[0].todos.name);
//     state.todoLists[id].todos.splice(index,1)
// }

