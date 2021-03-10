export function addTodo(state, data) {
    console.log(data);
    state.todos.push({
        id: 5,
        name : data.name,
        completed : false

    })
}