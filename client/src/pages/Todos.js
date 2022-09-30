import { useState, useEffect } from 'react';
import axios from 'axios';

import TodosList from '../components/TodosList';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const {
          data: { tasks },
        } = await axios.get('/api/v1/tasks');

        setTodos(tasks);

        console.log(tasks);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    getTodos();
  }, []);
  return <TodosList todos={todos} />;
};

export default Todos;
