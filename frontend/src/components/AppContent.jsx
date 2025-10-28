import TaskForm from "./TaskForm";
import Task from "./Task";

function AppContent() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <TaskForm />

                <div className="flex flex-col px-2 gap-2">
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>
    )
}

export default AppContent;