import { createContext, useState, useEffect } from 'react';
import api from '../utilities/api';

const TaskContext = createContext();

function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getTasks();
    }, []);

    async function getTasks() {
        try {
            setLoading(true);
            const { data } = await api.get('/tasks');
            setTasks(data.tasks);
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
            setTasks(prevTasks => [data.task, ...prevTasks]);
        } catch (err) {
            setError(err.message);
            console.error('Error adding task:', err);
        }
    }

    async function deleteTask(taskId) {
        try {
            await api.delete('/tasks/' + taskId);
            setTasks(prevTasks => prevTasks.filter(task => task._id != taskId));
        } catch (err) {
            setError(err.message);
            console.error('Error deleting task:', err);
        }
    }

    async function updateTask(taskId, updatedData) {
        try {
            const { data } = await api.put('/tasks/' + taskId, updatedData);
            setTasks(prevTasks => prevTasks.map(task => {
                return task._id === taskId ? data.task : task;
            }))
        } catch (err) {
            setError(err.message);
            console.error('Error updating task:', err);
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks, setTasks,
            loading, setLoading,
            error, setError,
            inputValue, setInputValue,
            addTask, deleteTask, updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskProvider };
export default TaskContext;