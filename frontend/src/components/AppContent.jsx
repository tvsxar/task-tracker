import TaskForm from "./TaskForm";
import Task from "./Task";
import TaskContext from '../context/TaskContext';

import { useContext } from "react";

function AppContent() {
    const { tasks, error, loading } = useContext(TaskContext);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xl py-5">
                <TaskForm />

                <ul className="flex flex-col px-2 gap-2">
                    {tasks.length === 0 ? (
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
            </div>
        </div>
    )
}

export default AppContent;