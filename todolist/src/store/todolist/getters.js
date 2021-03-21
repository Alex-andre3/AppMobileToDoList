
export function getTodoLists  (state)  {
    return state.todoLists;
}

export const remainingTodosByList = (state) => (id) => {
    

    return state.todoLists.find((todoList) => todoList.id ===id).todos.filter(todo => !todo.completed).length 

}

// export const remainingTodos = (state) => {
//     var i = 0;
//     state.todoLists.forEach(list => {
//         console.log(list.name)
//         i = i+ list.todos.filter(todo => !todo.completed).length
//     });
//     return i

// }

// export const getListByID = (state) => (id) => {
//     console.log(id);
//     console.log("on vient ici", state.todoLists.find((todoList) => todoList.id ===id), id);
//     return state.todoLists.find((todoList) => todoList.id ===id);

// }

