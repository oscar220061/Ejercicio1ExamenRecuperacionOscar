import { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';


const initialTodo = [{id: 1, todo: "Todo1", isCompleted: false},
{id: 2, todo: "Todo2", isCompleted: false}]
const Todo = () => {

    const [todos, addTodos] = useState(initialTodo);
    const [value, setValue] = useState("");

    function saveValue(event) {
        setValue(event.target.value);
    }


  

    function addList(){
        if(value.length > 20 || value.length < 2){
            alert("La longitud de la tarea no puede ser inferior a 2 ni superior a 30 caracteres")
        }else{
            addTodos([...todos, {id: todos.length + 1, todo : value, isCompleted: false}])
        }
        
        
    
    }

    return (
        <div>
            <InputTodo ChangeInput={saveValue} Value={value}   ClickButton={addList}/>
            <ListTodo Todos={todos} setTodos={addTodos}/>
        </div>
    )
}


export default Todo;