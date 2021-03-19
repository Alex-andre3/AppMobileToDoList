export function addTodo(state, data) {
    console.log(data);
    state.todos.push({
        id: 5,
        name : data.name,
        completed : false

    })
}

export function INCREMENT(state){
    state.count += 1;
}

export function DECREMENT(state){
    state.count--;
}


// export function COLORFORTODO(state){
//     if(state.todo.completed == true){
//         return "color:green";
//                         }
//     else{
//         return "color:red";
// }
// }

// export function SUPPTODO(state,index){
//     state.todos.splice(index,1)
// }