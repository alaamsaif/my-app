import axios from 'axios'
const URL = "http://localhost:3001/students";
export const getAllStudents = async () => {
    let payload;
    try {
        let response = await fetch(`${URL}`);
        payload = await response.json()

    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }

}
export const getStudentDetails = async (id) => {
    let payload;
    try {
        let response = await fetch(`${URL}/${id}`);
        payload = await response.json()

    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }
}
export const clearStudentDetails = () => {
    return {
        type: 'CLEAR_STUDENT_DETAILS',
        payload: null
    }
}

export const addStudent = async (student) => {
    let payload = student;
    try {
        axios.post(`${URL}`, student)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'ADD_STUDENT',
        payload
    }
}
export const deleteStudent = (id)=>{
    let payload =null;
    axios.delete(`${URL}/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    return {
        type: 'DELETE_STUDENT',
        payload
    }
}
