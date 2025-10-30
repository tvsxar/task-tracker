import { useContext } from "react";

import Task from "./Task";
import TaskContext from '../context/TaskContext';

function TasksList() {
    const { tasks, error, loading } = useContext(TaskContext);

    return (
        <ul className="flex flex-col px-2 gap-2">
            {!tasks ? (
                <p className="text-center text-gray-500 
                mt-5">No tasks available. Add a new task!</p>
            ) : error ? (
                <p className="text-center text-red-500 
                mt-5">Error: {error}</p>
            ) : loading ? (
                <p className="text-center text-gray-500
                mt-5">Loading tasks...</p>
            ) : (
                tasks.map(task => (
                    <Task key={task._id} task={task} />
                ))
            )}
        </ul>
    )
}

export default TasksList;