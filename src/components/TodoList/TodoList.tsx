import React, { useState } from 'react';
import { ITodo } from '../../@types/entities/ITodo';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/Input/TodoForm';

interface TodoListProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState<ITodo>({
    id: '',
    value: '',
    isCompleted: false,
  });

  if (edit.id) {
    return (
      <TodoForm
        setTodos={setTodos}
        todos={todos}
        edit={edit}
        setEdit={setEdit}
      />
    );
  }

  return (
    <>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          todos={todos}
          setTodos={setTodos}
          setEdit={setEdit}
          todo={todo}
          i={i}
        />
      ))}
    </>
  );
};

export default TodoList;
