import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleToggleTodo = (todo) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const pendingTodosCount = todos.filter(todo => !todo.done).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount, 
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
