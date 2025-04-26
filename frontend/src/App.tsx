import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <header className="w-full max-w-3xl mb-6 flex items-center justify-center space-x-4">
          <img
            src="/task.png"
            alt="Task Icon"
            style={{ width: '40px', height: '40px' }}
          />
          <h1 className="text-3xl font-bold text-center">Task Manager</h1>
        </header>
        <main className="w-full max-w-3xl flex-1 overflow-y-auto">
          <TaskForm />
          <TaskList />
        </main>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />

    </QueryClientProvider>
  );
}
