import {useEffect, useState} from 'react'
import AddStudentFormComponent from '../components/AddStudentFormComponent'
function StudentsPage(){
    const [students, setStudents] = useState([])

    const addStudentToState = (student_obj) => {
        setStudents([...students, student_obj])
    }
    useEffect(()=>{
        // setTimeout(()=>{
        //     let student = {
        //         rollnumber: 2341,
        //         studentname: "Subhan"
        //     }
        //     setStudents([...students,student])
        // },5000)
    },[students])

    const getStudentByRollNumber = (student, rollnumber) => {
        if (student.rollnumber == rollnumber){
            return student
        }
    }
    const handleDeleteStudent = (rollnumber, index) => {
        // let std = students.find((obj)=> getStudentByRollNumber(obj, rollnumber))
        let std = null
        std = students.find((obj)=> obj.rollnumber == rollnumber)
        if(std == null) {
            alert('student not found');
            return
        }
        setStudents(prev => prev.filter(obj => obj.rollnumber != rollnumber))
        // let std = {}
        // for(let i =0; i< students.length; i++){
        //     if(students[i].rollnumber == rollnumber){
        //         std = students[i]
        //         break
        //     }
        // }



        // let studentsArray  = students
        // console.log('before splice', students)
        
        // let deletedStudent = studentsArray.splice(index,1)


        // setStudents(studentsArray);
        // console.log('After splice', studentsArray)

        // console.log('state students', students)


        // console.log('deletedStudent', deletedStudent)

        // console.log('std', std);
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
                        <button onClick={() => handleDeleteStudent(std.rollnumber, index)}>Delete</button>
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