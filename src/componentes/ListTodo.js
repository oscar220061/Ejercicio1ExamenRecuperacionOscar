import '../colores.css';
const ListTodo = ({Todos, setTodos}) => {
 
    return (
        <div>
          
          <ul>
            {Todos.map(todo =>
              <li key={todo.id} className={todo}>
                {todo.todo}
                
                <button onClick={() => {
                  let index = Todos.indexOf(todo)
                  Todos.splice(index, 1) 
                  setTodos([...Todos])
                }}>
                Eliminar</button>
                
                <button onClick={()=>{
                 let indice = Todos.indexOf(todo); 
                
                 console.log(indice)
                 const UpdateTodos = Todos.map((todo) => {
                   if(todo.id===indice+1){
                     return{...todo, isCompleted:true};
                   }
                   return todo;
                 
                
                }
                 );
                 setTodos(UpdateTodos)
              }}>Actualizar</button>

                {todo.isCompleted ? <span className="hecho">Hecho</span> : <span className="pendiente">Pendiente</span>}
             

              </li>)}
        </ul>
       </div>
    )
}

export default ListTodo;