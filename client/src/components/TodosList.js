const TodosList = ({ todos }) => {
  if (todos.length < 1) {
    return (
      <div className='container'>
        <h2>No todos to display</h2>;
      </div>
    );
  }
  return (
    <div className='container'>
      <div className='todos__list'>
        <h1>React ToDo App</h1>
        {todos.map(todo => {
          return <h2 key={todo._id}>{todo.name}</h2>;
        })}
      </div>
    </div>
  );
};

export default TodosList;
