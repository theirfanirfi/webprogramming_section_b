import {useEffect, useState} from 'react'

function TodosPage(){
    const [todos, setTodos] = useState([])

    const getTodos = () => {
        fetch("https://jsonplaceholder.typicode.com/todos", 
            {
                method: "GET"
            }
        ).then(res => res.json()).then( res => {
            setTodos(res);
        } ).catch(e => console.log(e)).finally(e => console.log(e));
    }

    useEffect(()=>{

        getTodos();

    },[])

    return (
        <center>

        <table>
            <thead>
                <th>Id</th>
                <th>title</th>
                <th>Completed</th>
            </thead>
            {todos.length > 0 ? 
            <tbody>
                {todos.map((todo, index)=>{
                    return (
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>
                        {todo.completed ? "Completed" : "Incomplete"}
                    </td>
                </tr>
                    )
                }
                
                )}

            </tbody>
            : 
            <h1>No Records Found</h1>
}
        </table>
        </center>

    )
}

export default TodosPage;