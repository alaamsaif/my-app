import { connect } from 'react-redux';
import Student from '../components/student'
import { bindActionCreators } from 'redux'
import { getAllStudents } from '../actions'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

const StudentList = ({ getAllStudents, list, history, searchvalue }) => {
    let [filtterList, setfiltterList] = useState([])
    useEffect(() => {
        getAllStudents()
        setfiltterList(list)
        if(searchvalue)
        {
            let filtered = list.filter((item) => {
                return item.name.includes(searchvalue)
            })
            setfiltterList(filtered)
        }

      
    }, [list,searchvalue])

    /*
    const FiltterdList = useCallback(()=>{
        let filtered = list.filter((item) => {
            return item.name.includes(searchvalue)
        })
        setfiltterList(filtered)
    })*/

    if (filtterList) {
        return (
            <div className="alert ">
                {filtterList.map((student) => {
                    return <Student key={student.id} studentInfo={student} history={history} />
                })}
            </div>)
    }
    /*
    else if (list) {
            return (
                <div className="alert ">
                    {list.map((student) => {
                        return <Student key={student.id} studentInfo={student} history={history}/>
                    })}
                    
                    <button  className="btn btn-danger"
                    onClick={FiltterdList}>wreny</button>
                </div>)
    } */
    return <p>no avalible Students</p>

}
const mapStateToProps = (state) => {
    return {
        list: state.students.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllStudents }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentList)