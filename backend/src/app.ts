import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks';
console.log('typeof taskRoutes:', typeof taskRoutes);

const app = express();

// enable CORS
app.use(cors());
// parse incoming json data
app.use(express.json());
// mount the task routes
app.use('/tasks', taskRoutes);

export default app;
