#######  Task Manager ########



A simple, fullstack Task Management App built with React, TypeScript, Express.js, React Query, and Tailwind CSS.

Create, view, delete, and update tasks — fast and clean.

 Features
 Display list of tasks (GET /tasks)

 Add a new task (POST /tasks)

 Delete a task (DELETE /tasks/:id)

 Update task status: Pending | Done (PATCH /tasks/:id)

 Full TypeScript (frontend + backend)

 Real-time UI updates with React Query

 Toast notifications (success and error)

 Clean and responsive Tailwind CSS design

 Tech Stack

Frontend	Backend
React + TypeScript	Express.js + TypeScript
Vite	Zod Validation
Tailwind CSS	UUID for IDs
React Query	
React Hot Toast	


#########   How to Run the Project Locally  ##########
1. Clone the Repository
bash
Copy
Edit

git clone  https://github.com/Nethzz/TaskManager.git
cd TaskManager
3. Start the Backend

cd backend
npm install
npx ts-node-dev src/index.ts
The backend server will start on:
http://localhost:3001

3. Start the Frontend
cd frontend
npm install
npm run dev
The frontend will start on:
http://localhost:5173

Screenshots

Home Screen
<img width="1437" alt="Screenshot 2025-04-26 at 5 03 32 PM" src="https://github.com/user-attachments/assets/8aaaa330-395a-4291-9123-2b0056bfa9f5" />



Technical Choices
React Query simplifies server state management.

Axios for HTTP requests.

Zod for strict backend validation.


TailwindCSS for fast, responsive design.

Toast notifications for a better UX.

Future Improvements

Add authentication (login/signup)

User accounts and roles


Author
Made with ❤️ by Neethu Vasundharan Sheeja
