fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const numberOfCompletedTodos = json.reduce((total, todo) => {
        return todo.completed ? total + 1 : total
    }, 0)
    console.log(numberOfCompletedTodos)
  })
  .catch(function(err) { 
    console.log(err);
  });