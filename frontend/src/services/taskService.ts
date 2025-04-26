import axios from 'axios';

// base api url
const API = 'http://localhost:3001/tasks';

export const getTasks = () => axios.get(API).then(res => res.data); // get all task 
export const createTask = (data: any) => axios.post(API, data).then(res => res.data); // create new task 
export const deleteTask = (id: string) => axios.delete(`${API}/${id}`); // delete task 
export const updateStatus = (id: string, status: 'pending' | 'done') =>
    axios.patch(`${API}/${id}`, { status }).then(res => res.data);      // update task 
