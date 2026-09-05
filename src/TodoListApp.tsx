import {TodoForm} from './components/TodoForm';
import { TodoTaskList } from './components/TodoTaskList';

const TodoListApp = () => {
    return (
        <div className="container">
            <h1> My Todo List App</h1>
            <TodoForm />
            <TodoTaskList tasks={[]} />
        </div>
    );
};

export default TodoListApp;