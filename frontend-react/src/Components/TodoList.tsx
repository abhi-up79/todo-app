import TodoItem from "./TodoItem";

const TodoList = ({todos, onDelete}) => {

    return <>
        <h3>Todos</h3>
        <div>
            {todos.map((todo) => (<TodoItem key={todo.id} todo={todo} onDelete={onDelete} />))}
        </div>
    </>
}

export default TodoList;