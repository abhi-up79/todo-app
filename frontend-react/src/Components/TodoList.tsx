import TodoItem from "./TodoItem";

//@ts-ignore
const TodoList = ({todos, onDelete}) => {

    return <>
        <h3>Todos</h3>
        <div>
            {todos.map((todo: any) => (<TodoItem key={todo.id} todo={todo} onDelete={onDelete} />))}
        </div>
    </>
}

export default TodoList;