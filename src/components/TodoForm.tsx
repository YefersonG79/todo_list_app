import { useState } from "react";
import { Task } from "../interfaces/tasks";
import { TodoTaskList } from "./TodoTaskList";

export const TodoForm = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = () => {
        const newTask = {
            id: new Date().getTime(),
            name: "New Task",
        }
        setTasks([newTask]);
    }

    return (
        <>
            <div className="row g-3">
                <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Add new task" />
                </div>
                <div className="col-auto">
                    <button type="button" onClick={addTask} className="btn btn-primary mb-3">Add task</button>
                </div>
            </div>

            <TodoTaskList tasks={tasks} />
        </>

    );
}