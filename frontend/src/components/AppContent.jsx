import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import SortingButtons from "./SortingButtons";

function AppContent() {

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xl py-5">
                <TaskForm />

                <SortingButtons />

                <TasksList />
            </div>
        </div>
    )
}

export default AppContent;