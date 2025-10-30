import { useContext } from "react";

import TaskContext from '../context/TaskContext';

function SortingButtons() {
    const { mode, setMode } = useContext(TaskContext);

    const activeButton = 'bg-black text-white';

    function setModeHandler(e) {
        e.preventDefault();

        setMode(e.target.value);
    }

    return (
        <div className="flex gap-4 mb-4 justify-center">
            <button 
            value={'all'}
            onClick={setModeHandler}
            className={`cursor-pointer rounded-md border border-gray-200 py-0.5 px-2 text-sm font-medium ${mode === 'all' ? activeButton : ''}`}>
                All
            </button>

            <button 
            value={'pending'}
            onClick={setModeHandler}
            className={`cursor-pointer rounded-md border border-gray-200 py-0.5 px-2 text-sm font-medium ${mode === 'pending' ? activeButton : ''}`}>
                Pending
            </button>

            <button 
            value={'completed'}
            onClick={setModeHandler}
            className={`cursor-pointer rounded-md border border-gray-200 py-0.5 px-2 text-sm font-medium ${mode === 'completed' ? activeButton : ''}`}>
                Completed
            </button>
        </div>
    );
}

export default SortingButtons;