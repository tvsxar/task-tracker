import addIcon from '../assets/add.svg';

import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskForm() {
    const { inputValue, setInputValue, addTask } = useContext(TaskContext);

    function handleInputChange(e) {
        e.preventDefault();

        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        addTask();

        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}
        className='flex items-center overflow-hidden py-3 px-2'>
            <input
            value={inputValue}
            onChange={handleInputChange}
            type="text" required
            placeholder='Add a new task...'
            className='flex-1 px-3 py-2 text-gray-700 text-sm 
            focus:outline-none rounded-md bg-gray-200 placeholder:text-sm 
            focus:outline-none transition duration-300 focus-within:shadow-md' />

            <button type="submit" className='ml-2 p-2 bg-black 
            rounded-md hover:bg-black/80 transition duration-300 
            flex items-center justify-center cursor-pointer active:scale-95'>
                <img src={addIcon} alt="addIcon" className='h-5 w-5' />
            </button>
        </form>
    )
}

export default TaskForm;