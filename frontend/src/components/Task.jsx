import doneIcon from "../assets/done.svg";
import deleteIcon from "../assets/trash.svg";
import editIcon from "../assets/edit.svg";
import closeIcon from "../assets/close.svg";

import { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const { deleteTask, updateTask } = useContext(TaskContext);

    function handleDelete() {
        deleteTask(task._id);
    }

    function toggleEdit() {
        setEditedText(task.text);

        setIsEditing(!isEditing);
    }

    function handleSubmit(e) {
        e.preventDefault();

        updateTask(task._id, { text: editedText, completed: false });

        setIsEditing(false);

        setEditedText(task.text);
    }

    function handleComplete() {
        updateTask(task._id, { text: task.text, completed: !task.completed });
    }

    return (
        <li className="rounded-md border border-gray-200 p-3 transition duration-300 hover:shadow-sm">
            {isEditing ? (
                <form onSubmit={handleSubmit}
                className="flex gap-4 items-center justify-between">
                    <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    type="text" className="flex-1 min-w-0 px-2 py-1 
                    border border-gray-300 rounded-md focus:outline-none" />

                    <div className="flex items-center gap-1">
                        <button 
                        type='submit'
                        className="cursor-pointer bg-green-500 rounded-md p-1 mr-2 hover:bg-green-600">
                            <img src={doneIcon} alt="doneIcon"
                            className="w-4 h-4" />
                        </button>

                        <button onClick={toggleEdit}
                        className="cursor-pointer bg-gray-200 rounded-md p-1 mr-2 hover:bg-gray-300">
                            <img src={closeIcon} alt="closeIcon"
                            className="w-4 h-4" />
                        </button>
                    </div>
                </form>
            ) : (
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <button onClick={handleComplete}
                        className={`shrink-0 cursor-pointer border border-gray-300 rounded-md p-1 
                        ${task.completed ? 'bg-black' : 'bg-white hover:bg-gray-100'}`}>
                            {task.completed ? (
                                <img 
                            src={doneIcon} alt="doneIcon"
                            className="w-4 h-4" />
                            ) : (
                                <div className="w-4 h-4"></div>
                            )}
                        </button>

                        <div className="min-w-0">
                            {task.completed ? (
                                <p className='text-gray-600 line-through'>{task.text}</p>
                            ) : (
                                <p>{task.text}</p>
                            )}

                            <span 
                            className="text-xs text-gray-400">Created: {new Date(task.createdAt).toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <button onClick={toggleEdit}
                        className="cursor-pointer hover:bg-gray-200 
                        p-1 rounded-md transition duration-300">
                            <img 
                            src={editIcon} alt="editIcon"
                            className="w-5 h-5" />
                        </button>

                        <button onClick={handleDelete}
                        className="cursor-pointer hover:bg-gray-200 
                        p-1 rounded-md transition duration-300">
                            <img 
                            src={deleteIcon} alt="deleteIcon"
                            className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </li>
    )
}

export default Task;