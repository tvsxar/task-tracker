import { createContext, useState, useEffect } from 'react';
import api from '../utilities/api';

const TaskContext = createContext();

function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <TaskContext.Provider value={{
            tasks, setTasks,
            loading, setLoading,
            error, setError,
            inputValue, setInputValue
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskProvider };
export default TaskContext;