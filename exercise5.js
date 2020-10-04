fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((total, todo) => {
        todo.completed ? total : total.push({userId: todo.userId, title: todo.title});
        return total;
    }, []);
      console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });