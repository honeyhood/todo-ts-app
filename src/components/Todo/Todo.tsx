import { ITodo } from '../../@types/entities/ITodo';
import s from './Todo.module.scss';

interface TodoProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
  setEdit: (todo: ITodo) => void;
  todo: ITodo;
  i: number;
}

const Todo: React.FC<TodoProps> = ({ todos, setTodos, setEdit, todo, i }) => {
  const handleDeleteTodo = (id: string): void => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const toggleTodo = (id: string): void => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className={s.todoItem}>
      <p
        onClick={() => toggleTodo(todo.id)}
        className={todo.isCompleted ? s.todoTitle__toggled : s.todoTitle}
        key={todo.id}
      >
        {i + 1}. {todo.value}
      </p>
      <button
        onClick={() =>
          setEdit({ id: todo.id, value: todo.value, isCompleted: false })
        }
        className={s.editButton}
      >
        Edit
      </button>
      <button
        onClick={() => handleDeleteTodo(todo.id)}
        className={s.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
