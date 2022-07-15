import { useTodos } from "../hooks/useTodos";
import TodoAdd from "./forms/TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {

    const { 
        todos, 
        todosCount, 
        pendingTodosCount, 
        handleNewTodo,
        handleEditTodo,
        handleDeleteTodo, 
        handleToggleTodo, 
        
    } = useTodos();

    return (
        <>
            <h1>Todo App</h1>
            <h3>totales {todosCount}, <small>pendientes: {pendingTodosCount}</small> </h3>
            <hr />

            <div className="row">

                {/*Columna de los TODOS*/}
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onEditTodo={handleEditTodo}
                        onToggleTodo={handleToggleTodo}
                        onDeleteTodo={handleDeleteTodo}
                        
                    />
                </div>

                {/*Columna para agregar la informacion*/}
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onAddTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}

export default TodoApp;