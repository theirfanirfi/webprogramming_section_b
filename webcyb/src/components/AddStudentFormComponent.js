import { useState } from "react";

function AddStudentFormComponent(props){
    // const [rollnumber, setRollNumber] = useState(0)
    // const [studentname, setStudentName] = useState('')
    const [student, setStudent] = useState({
        rollnumber: 0,
        studentname: ''
    })

    const addValueToState = (value, field_name) => {
        console.log('before state update ',student)
        setStudent({
            ...student,
            [field_name]: value,
        })

        console.log('after state update ',student)

        // if(field_name == "rollnumber"){
        //     setStudent({
        //         ...student,
        //         rollnumber: value
        //     })
        // }else {
        //     setStudent({
        //         ...student,
        //         studentname: value
        //     }) 
        // }
    }
    return(
        <center style={styles.center}>
            <h1>RollNumber: {student.rollnumber}</h1>
            <h1>studentname: {student.studentname}</h1>
            <div>
                <label>Roll Number:</label>
                <input style={styles.inputFields} type="text" placeholder="Roll Number"
                onChange={(event) => addValueToState(event.target.value,"rollnumber")}
                />
            </div>

            <div>
                <label>Student Name:</label>
                <input style={styles.inputFields} type="text" placeholder="Student Name"
                                onChange={(event) => addValueToState(event.target.value,"studentname")}
                />
            </div>

            <div>
                <button onClick={
                  () => props.addStudentToState(student)
                }>Add Student</button>
            </div>
        </center>
    )
}

const styles = {
    "center": {
                backgroundColor: "yellow",
                marginTop: 20,
            },
    "inputFields": {
        padding: 8,
        width: "40%",
        margin:8,
    }
}

export default AddStudentFormComponent;
