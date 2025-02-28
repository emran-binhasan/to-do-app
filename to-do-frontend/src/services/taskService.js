import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/tasks",
  withCredentials: true, // ✅ Important for cookies
});

// ✅ CREATE task
export const createTask = (taskData) => API.post("/", taskData);

// ✅ READ all tasks
export const getTasks = () => API.get("/");

// ✅ UPDATE task
export const updateTask = (id, updates) => API.put(`/${id}`, updates);

// ✅ DELETE task
export const deleteTask = (id) => API.delete(`/${id}`);
