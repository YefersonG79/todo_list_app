interface TodoTaskListProps {
    tasks: Task[];
}

interface Task {
    id: number;
    name: string;
}

export const TodoTaskList = ({tasks} : TodoTaskListProps) => {
  return (
    <div>
      Tasks List
    </div>
  )
}

