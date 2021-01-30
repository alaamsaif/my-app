const Student = ({ studentInfo, history }) => {
    const goToDetails = () => {
        history.push(`/students/${studentInfo.id}`)
    }
    if (studentInfo) {
        return <div className="alert alert-info d-flex justify-content-between">
            <div className="align-self-center">
                <p>{studentInfo.name}</p>
                <input type="button"
                    className="btn btn-primary"
                    value="Details"
                    onClick={goToDetails}/>
            </div>

        </div>
    }
}
export default Student
