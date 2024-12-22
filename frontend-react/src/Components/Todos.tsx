import axios from "axios";
import { useEffect, useState } from "react"


function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/api/todos")
            .then(response => {
                setTodos(response.data.todos);
            })
    }, [])

    return <>
        <h3>Todos</h3>
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    </>
}

function Todo({ todo }: any) {
    return <div style={{ padding: '5px' }}>
        <div style={{ backgroundColor: 'lightblue', padding: '2px', borderRadius: '4px' }}>
            <div>Title: {todo.title}</div>
            <div>Completed: {todo.completed.toString()}</div>
            <div>
                <button>Delete</button>
                <button>Done</button>
            </div>
        </div>
    </div>
}

export default Todos;