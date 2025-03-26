import React, { useState } from 'react'

const AddStudent = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        age: '',
        grade: ''
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(studentData.name);
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Name' value={studentData.name} onChange={(e) => setStudentData({ ...studentData, name: e.target.value })} />
                <input type="number" name="" id="" placeholder='Age' value={studentData.age} onChange={(e) => setStudentData({ ...studentData, age: e.target.value })} />
                <input type="text" name="" id="" placeholder='Grade' value={studentData.grade} onChange={(e) => setStudentData({ ...studentData, grade: e.target.value })} />
            </form>
        </div>
    )
}

export default AddStudent
