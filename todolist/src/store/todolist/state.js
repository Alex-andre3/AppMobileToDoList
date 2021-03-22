export default function () {
    return {
      
      count:2,
      countTodo:5,
      filter:"all",
      todoLists: [
        {
          id:1,
          name:"liste 1",
          todos: [

        
        {
          id: 1,
          name: 'Faire la vaisselle',
          completed : false 
        },
        {
          id: 2,
          name : 'Aller manger',
          completed: true
        }]},
        {
          id:2,
          name: "liste 2",
          todos:[
        {
          id: 3,
          name : 'Casser une télé',
          completed: true
        },
        {
          id: 4,
          name : 'Courir car c\'est bon pour la santé',
          completed: false
        },
        {
          id:5,
          name:"regarder dehors",
          completed:false
        }
        ]}
      ]
            
    }
}