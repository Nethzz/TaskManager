import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../services/taskService';
import { toast } from 'react-hot-toast';

interface CreateTaskData {
    title: string;
    description: string;
}

export default function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const queryClient = useQueryClient();

    // mutation to create a task
    const mutation = useMutation({
        mutationFn: (data: CreateTaskData) => createTask(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setTitle('');
            setDescription('');
            toast.success('Task created successfully!');
        },
        onError: () => {
            toast.error('Failed to create task');
        },
    });

    return (
        <div className="mb-4 flex flex-col gap-2">
            <input
                className="border p-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="border p-2"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white p-2 rounded"
                onClick={() => mutation.mutate({ title, description })}
            >
                Add Task
            </button>
        </div>
    );
}
