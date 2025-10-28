import { TaskProvider } from './context/TaskContext';
import AppContent from './components/AppContent';

function App() {

  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  )
}

export default App
