const InputTodo = (props) => {
    return (
        <div>
             <input type="text" onChange={props.ChangeInput} value={props.Value}/>
            <button onClick={props.ClickButton}>Añadir Todo</button>
        </div>
    )
}

export default InputTodo;