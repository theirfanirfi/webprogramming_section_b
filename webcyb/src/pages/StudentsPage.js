import {useEffect, useState} from 'react'
function StudentsPage(){
    const [students, setStudents] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            let student = {
                roll_number: 2341,
                student_name: "Subhan"
            }
            setStudents([...students,student])
        },5000)
    },[])

    return (
        <center>
        <table>
            <thead>
                <th>Roll Number</th>
                <th>Student Name</th>
                <th>Delete</th>
            </thead>
            {students.length > 0 ? 
            <tbody>
                {students.map((std, index)=>{
                    return (
                <tr>
                    <td>{std.roll_number}</td>
                    <td>{std.student_name}</td>
                    <td>
                        <button>Delete</button>
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

export default StudentsPage;