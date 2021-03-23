export function getTodoLists  (state)  {
    return state.todoLists;
}

export const remainingTodosByList = (state) => (id) => {
    
    return state.todoLists.find((todoList) => todoList.id ===id).todos.filter(todo => !todo.completed).length 

}

    