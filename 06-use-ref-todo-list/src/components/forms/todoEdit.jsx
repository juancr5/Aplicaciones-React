import { useForm } from '../../hooks/useForm'

const TodoEdit = ({ setEditEnable, todo, onEditTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length > 2) {
            onEditTodo(todo.id, description);
            setEditEnable(false);
        }

        onResetForm();
    }


    return (
        <>
            <form className="w-100 d-flex justify-content-between" onSubmit={onFormSubmit}>
        
                <input
                    type="text"
                    className="form-control w-75"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-success"
                >
                    Listo
                </button>
     
            </form>

        </>
    )

}

export default TodoEdit;