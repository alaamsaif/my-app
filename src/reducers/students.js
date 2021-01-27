export const students = (state={},action)=>{
    console.log(state)
    switch(action.type){
        case 'STUDENTS_LIST':{
            return {...state,list:action.payload}
        }
        case 'STUDENT_DETAILS':{    
            return {...state,details:action.payload}
        }
        case 'CLEAR_STUDENT_DETAILS':{
            return{...state,details:action.payload}
        }
        case 'ADD_STUDENT':{
            return{...state,details:action.payload}
        }
        case 'DELETE_STUDENT':{
            return{...state,details:action.payload}
        }
    }

    return state
}