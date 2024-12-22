import { deleteTodo } from "../Service/todoService";

const TodoItem = ({ todo, onDelete}) => {

    const handleDelete = async () => {
        await deleteTodo(todo.id);
        onDelete(todo.id);
    }

    return <div style={{ padding: '5px' }}>
        <div style={{ backgroundColor: 'lightblue', padding: '2px', borderRadius: '4px' }}>
            <div>Title: {todo.title}</div>
            <div>Completed: {todo.completed.toString()}</div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
}

export default TodoItem;