import {useEffect, useState} from 'react'
import AddStudentFormComponent from '../components/AddStudentFormComponent'
function StudentsPage(){
    const [students, setStudents] = useState([])

    const addStudentToState = (student_obj) => {
        setStudents([...students, student_obj])
    }
    useEffect(()=>{
        setTimeout(()=>{
            let student = {
                rollnumber: 2341,
                studentname: "Subhan"
            }
            setStudents([...students,student])
        },5000)
    },[])

    const deleteHandler = (rollnumber) => {
        let std = null
        std = students.find((obj) => obj.rollnumber == rollnumber )

        if(std == null){
           alert('student not found');
           return 
        }
        // let remainingStudents = students.filter(student => student.rollnumber != rollnumber)
        // setStudents(prev => prev.filter() )

        setStudents(stds => stds.filter(student => student.rollnumber != rollnumber))

    }

    return (
        <center>

            <AddStudentFormComponent addStudentToState={addStudentToState} />
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
                    <td>{std.rollnumber}</td>
                    <td>{std.studentname}</td>
                    <td>
                        <button onClick={() => deleteHandler(std.rollnumber)}>Delete</button>
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