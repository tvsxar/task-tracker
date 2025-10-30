import { createContext, useState, useEffect } from 'react';
import api from '../utilities/api';

const TaskContext = createContext();

function TaskProvider({children}) {
    const [allTasks, setAllTasks] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [mode, setMode] = useState('all'); // 'all', 'pending', 'completed'

    useEffect(() => {
        getTasks();
    }, []);

    useEffect(() => {
        filterTasks();
    }, [mode, allTasks]);

    async function getTasks() {
        try {
            setLoading(true);
            const { data } = await api.get('/tasks');
            setAllTasks(data.tasks);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            console.error('Error fetching tasks:', err);
        }
    }

    async function addTask() {
        const taskData = {
            text: inputValue,
            completed: false
        }
        
        try {
            const { data } = await api.post('/tasks', taskData);
            setAllTasks(prevTasks => [data.task, ...prevTasks]);
        } catch (err) {
            setError(err.message);
            console.error('Error adding task:', err);
        }
    }

    async function deleteTask(taskId) {
        try {
            await api.delete('/tasks/' + taskId);
            setAllTasks(prevTasks => prevTasks.filter(task => task._id != taskId));
        } catch (err) {
            setError(err.message);
            console.error('Error deleting task:', err);
        }
    }

    async function updateTask(taskId, updatedData) {
        try {
            const { data } = await api.put('/tasks/' + taskId, updatedData);
            setAllTasks(prevTasks => prevTasks.map(task => {
                return task._id === taskId ? data.task : task;
            }))
        } catch (err) {
            setError(err.message);
            console.error('Error updating task:', err);
        }
    }

    function filterTasks() {
        if (mode === 'all') {
            setTasks(allTasks);
        } else if (mode === 'pending') {
            setTasks(allTasks.filter(task => !task.completed));
        } else if (mode === 'completed') {
            setTasks(allTasks.filter(task => task.completed));
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks, setTasks,
            loading, setLoading,
            error, setError,
            inputValue, setInputValue,
            mode, setMode,
            addTask, deleteTask, updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskProvider };
export default TaskContext;