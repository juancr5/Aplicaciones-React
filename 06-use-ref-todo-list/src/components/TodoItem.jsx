import { useState } from 'react'
import TodoEdit from './forms/todoEdit';

const TodoItem = ({ todo, onEditTodo, onToggleTodo, onDeleteTodo}) => {

    //Condicion para activar el edit del TODO
    const [editEnable, setEditEnable] = useState(false);

    //Habilitar el modo de edicion
    const editMode = () => {
        setEditEnable(true);
    }

    return (
        <li className="list-group-item d-flex justify-content-between mb-2">
            {
                !editEnable ?
                    <>
                        <div
                            className={`align-self-center ${(todo.done) ?
                                'text-decoration-line-through' :
                                'none'}`}
                        >
                            <input
                                className="form-check-input mx-2"
                                type="checkbox"
                                style={{ height: "18px", width: "18px" }}
                                checked={todo.done}
                                onChange={() => onToggleTodo(todo.id)}
                            />
                            {todo.description}
                        </div>

                        <div>
                            <button
                                type="button"
                                className="btn btn-info mx-1"
                                onClick={() => editMode()}
                            >Editar</button>
                            <button
                                type="button"
                                className="btn btn-danger mx-1"
                                onClick={() => onDeleteTodo(todo.id)}
                            >Borrar</button>
                        </div>
                    </>
                    :
                    <TodoEdit 
                    setEditEnable={setEditEnable} 
                    todo={todo}
                    onEditTodo={onEditTodo}
                    />
            }
        </li>
    )
}

export default TodoItem