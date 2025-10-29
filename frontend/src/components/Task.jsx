import doneIcon from "../assets/done.svg";
import deleteIcon from "../assets/trash.svg";
import editIcon from "../assets/edit.svg";

function Task() {
    return (
        <div className="rounded-md border border-gray-200 p-3">
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                    <button className="cursor-pointer bg-black rounded-md p-1">
                        <img 
                        src={doneIcon} alt="doneIcon"
                        className="w-4 h-4" />
                    </button>

                    <div className="">
                        <p>Sample Task</p>

                        <span 
                        className="text-xs text-gray-400">Date</span>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <button className="cursor-pointer hover:bg-gray-200 
                    p-1 rounded-md transition duration-300">
                        <img 
                        src={editIcon} alt="editIcon"
                        className="w-5 h-5" />
                    </button>

                    <button className="cursor-pointer hover:bg-gray-200 
                    p-1 rounded-md transition duration-300">
                        <img 
                        src={deleteIcon} alt="deleteIcon"
                        className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task;