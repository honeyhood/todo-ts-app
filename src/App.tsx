import './App.scss';
import TodoForm from './components/TodoForm/Input/TodoForm';
import TodoList from './components/TodoList/TodoList';
import useLocalStorage from './hooks/useLocalStorage';
import { ITodo } from './@types/entities/ITodo';

const App = () => {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);

  return (
    <div className="App">
      <div className="heading-wrapper">
        <p className="heading-wrapper__heading">Create a task</p>
      </div>
      <div className="createTodo">
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
