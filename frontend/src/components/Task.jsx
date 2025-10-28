import doneIcon from "../assets/done.svg";
import deleteIcon from "../assets/trash.svg";

function Task() {
    return (
        <div className="rounded-md border border-gray-200 p-3">
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <button className="cursor-pointer bg-black rounded-md p-1">
                        <img 
                        src={doneIcon} alt="doneIcon"
                        className="w-3 h-3" />
                    </button>

                    <div className="">
                        <p>Sample Task</p>

                        <span 
                        className="text-xs text-gray-400">Date</span>
                    </div>
                </div>

                <button className="cursor-pointer hover:bg-gray-200 
                p-1 rounded-md transition duration-300">
                    <img 
                    src={deleteIcon} alt="deleteIcon"
                    className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default Task;