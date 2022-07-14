
export const todoReducer = (initialState = [], action) => {

    //action.type es la orden a ejecutar
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Edit Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload.id) {// id
                    return {
                        ...todo,
                        description: action.payload.newValue
                    }
                }

                return todo;
            });


        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        default:
            //en caso de no recibir nada retorna el arreglo vacio
            return initialState;
    }


}