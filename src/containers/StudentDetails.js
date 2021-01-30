import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { getStudentDetails, clearStudentDetails, deleteStudent } from '../actions'
const StudentDetails = ({ getStudentDetails, clearStudentDetails, deleteStudent, details, match, history }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        getStudentDetails(id)

        return () => {
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    }, [])

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div className="m-5 p-5">
                    <h4> {details.name}</h4>
                    <h6> age : {details.age}</h6>
                    <h6> email : {details.email}</h6>
                    <h6> phone : {details.phone}</h6>
                    <button className="btn btn-danger"
                        onClick={() => {
                            let c = window.confirm("Are you sure ? ");
                            if (c == true) {
                                deleteStudent(details.id)
                                history.push(`/`)
                            }
                        }}
                    >Delete</button>
                </div>
            )
        }
        return ''
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" class="navbar-brand" href="#">Home</Link>
            </nav>
            <div className="alert alert-light">

                {renderStudentDetails(details)}
            </div></div>)

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails, clearStudentDetails, deleteStudent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)
