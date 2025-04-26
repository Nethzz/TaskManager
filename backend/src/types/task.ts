import { z } from 'zod';

export const statusEnum = z.enum(['pending', 'done']);

// define a zod schema
export const baseTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export const fullTaskSchema = baseTaskSchema.extend({
    id: z.string(),
    status: statusEnum,
});

export type Task = z.infer<typeof fullTaskSchema>;
export const taskSchema = baseTaskSchema; 
