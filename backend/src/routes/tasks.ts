import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { taskSchema, fullTaskSchema, Task, statusEnum } from '../types/task';

const router = Router();
let tasks: Task[] = [];

// get all tasks
router.get('/', (_req: Request, res: Response) => {
    res.json(tasks);
});

// post new task
router.post('/', (req: Request, res: Response) => {
    const result = taskSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ error: result.error });
    }

    const newTask: Task = {
        ...result.data,
        id: uuidv4(),
        status: 'pending',
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// delete a task
router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);

    if (tasks.length === initialLength) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.status(204).send();
});

// patch task status
router.patch('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const result = statusEnum.safeParse(req.body.status);
    if (!result.success) {
        return res.status(400).json({ error: 'Invalid status value' });
    }

    task.status = result.data;
    res.json(task);
});

export default router;
