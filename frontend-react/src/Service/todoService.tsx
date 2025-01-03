import axios from "axios";

const API_URL = "http://localhost:8081/api/todos";

export const getTodos = () => axios.get(API_URL);
export const addTodo = (todo: any) => axios.post(API_URL, todo);
export const updateTodo = (id: any, todo: any) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id: Number) => axios.delete(`${API_URL}/${id}`);