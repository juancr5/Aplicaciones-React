import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onEditTodo, onToggleTodo, onDeleteTodo,  }) => {

    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onEditTodo={onEditTodo}
                            onDeleteTodo={onDeleteTodo}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;