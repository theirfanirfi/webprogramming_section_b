import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
function TodosPage(){
    const [todos, setTodos] = useState([])


    const get_todos = async () => {
   let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET"
    })

    if(response.ok){
        console.log('response',response)
       let  res = await response.json()
    //    res.then(r => setTodos(r))
    //    console.log('res json',res)
       setTodos(res);
    }


    console.log('after fetch')
    }


    useEffect(()=>{
        get_todos()
        console.log('after get_todods')
    },[])



    return (
        <center>
        <table>
            <thead>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </thead>
            {todos.length > 0 ? 
            <tbody>
                {todos.map((todo, index)=>{
                    return (
                <tr>
                        <Link to={`/todo/${todo.id}`}>

                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>
                        {todo.completed ? "Completed" : "Incomplete"}
                    </td>
                </Link>

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