import { useForm } from '../../hooks/useForm'

const TodoAdd = ({ onAddTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });


    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length > 2) {

            const newTodo = {
                id: new Date().getTime(),
                done: false,
                description: description,
            }

            onAddTodo(newTodo);
            onResetForm();
        }
    }


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese una tarea"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-3"
                >
                    Agregar
                </button>
            </form>
        </>
    )

}

export default TodoAdd;