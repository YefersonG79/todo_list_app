import { Task } from "../interfaces/tasks";
interface TodoTaskListProps {
    tasks: Task[];
}

export const TodoTaskList = ({tasks} : TodoTaskListProps) => {
  return (
    <div>
      Tasks List
    </div>
  )
}

