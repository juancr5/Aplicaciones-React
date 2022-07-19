import { useEffect, useReducer } from 'react';
import { todoReducer } from '../components/todoReducer';

//Trae todos los todos que encuentre en el Local Storage y si es nulo regresa un arreglo vacio
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

    //const [state, dispatch] = useReducer(reducer, initialArg, init);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //Guarda los TODOS en el Local Storage cada vez que hay un cambio en el objeto TODO
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    //Dispara la funcion de añadir un TODO
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        //funcion para mandar una accion al reducer.
        dispatch(action);
    }

     //Dispara la funcion de editar un TODO
     const handleEditTodo = (id, newValue) => {
        const action = {
            type: '[TODO] Edit Todo',
            payload: {id: id , newValue : newValue}
        }

        dispatch(action);
    }

    //Dispara la funcion de cambiar el checkbox
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    //Dispara la funcion de borrar un TODO
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

        handleNewTodo,
        handleEditTodo,
        handleDeleteTodo,
        handleToggleTodo,

    }

}