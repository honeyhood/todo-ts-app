import React, { useState, useRef, useEffect } from 'react';
import s from './TodoForm.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../../../@types/entities/ITodo';

interface TodoFormProps {
  edit?: ITodo;
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  setEdit?: (todo: ITodo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  edit,
  todos,
  setTodos,
  setEdit,
}) => {
  const [inputValue, setInputValue] = useState(edit ? edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleCreateSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        { id: uuidv4(), value: inputValue, isCompleted: false },
      ]);
      setInputValue('');
    }
  };

  const handleEditSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (edit) {
      const editedTodos = todos.map((todo: ITodo) => {
        return todo.id === edit.id ? { ...todo, value: inputValue } : todo;
      });
      setTodos(editedTodos);
    }
    if (setEdit) {
      setEdit({
        id: '',
        value: '',
        isCompleted: false,
      });
    }
  };

  return (
    <>
      {edit ? (
        <form className={s.form} onSubmit={handleEditSubmit}>
          <div className={s.inputWrapper}>
            <input
              ref={inputRef}
              className={s.todoInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
            />
            <button className={s.formButton}>Edit</button>
          </div>
        </form>
      ) : (
        <form className={s.form} onSubmit={handleCreateSubmit}>
          <div className={s.inputWrapper}>
            <input
              ref={inputRef}
              placeholder="Learn React && Next.JS"
              className={s.todoInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
            />
            <button className={s.formButton}>Create</button>
          </div>
        </form>
      )}
    </>
  );
};

export default TodoForm;
