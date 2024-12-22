import { useState } from "react";
import { addTodo } from "../Service/todoService";

const AddTodo = ({onAdd}) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (title.trim() == "")
            return;
        const response = await addTodo({
            title,
            completed: false
        });
        console.log(response.data)
        onAdd(response.data);
        setTitle("");
    }

    return <form    onSubmit={handleSubmit}    >
        <input type="text" placeholder="Add a new Todo"
            onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
}

export default AddTodo;