import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTasks, deleteTask, updateStatus } from '../services/taskService';
import { toast } from 'react-hot-toast';

interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'done';
}

export default function TaskList() {
    const queryClient = useQueryClient();

    // fetch tasks
    const { data: tasks = [] } = useQuery<Task[]>({
        queryKey: ['tasks'],
        queryFn: getTasks,
    });
    // delete task mutation
    const delMutation = useMutation({
        mutationFn: (id: string) => deleteTask(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success('Task deleted!');
        },
        onError: () => {
            toast.error('Failed to delete task');
        },
    });

    // update task status mutation
    const statusMutation = useMutation({
        mutationFn: ({ id, status }: { id: string; status: 'pending' | 'done' }) => updateStatus(id, status),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success('Status updated!');
        },
        onError: () => {
            toast.error('Failed to update status');
        },
    });

    return (
        <ul className="space-y-3">
            {tasks.map((task) => (
                <li key={task.id} className="p-4 bg-white shadow rounded flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-sm mt-1">
                            Status:{' '}
                            <span className={task.status === 'done' ? 'text-green-500' : 'text-yellow-500'}>
                                {task.status}
                            </span>
                        </p>
                    </div>
                    <div className="space-x-2">
                        <button
                            className="text-green-600"
                            onClick={() => statusMutation.mutate({ id: task.id, status: task.status === 'pending' ? 'done' : 'pending' })}
                        >
                            Toggle
                        </button>
                        <button
                            className="text-red-500"
                            onClick={() => delMutation.mutate(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
