import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StudentList from '../containers/StudentList'
import { addStudent } from '../actions'
import { useRef } from 'react'
import { useState } from 'react'
const Home = ({ history, addStudent }) => {
    let [input, setInput] = useState("")
    let [isDisable, setisDisable] = useState(true)
    let [nameIsValid, setnameIsValid] = useState(false)
    let [ageIsValid, setageIsValid] = useState(false)
    let [phoneIsValid, setphoneIsValid] = useState(false)
    let [emailIsValid, setemailIsValid] = useState(false)

    const name = useRef()
    const age = useRef()
    const email = useRef()
    const phone = useRef()
    const searchValue = useRef()

    const keywordsChanged = () => {
        setInput(searchValue.current.value)
        console.log(input)
    }
    /*
    const vaildation = () => {
        if (nameIsValid == true && ageIsValid == true && phoneIsValid == true)
            setisDisable(false)
        else
            setisDisable(true)

    }*/

    const Validatename = () => {
        var nameregx = new RegExp(/^[a-zA-Z ]+$/)
        var nametext = name.current.value;
        var boolname = nameregx.test(nametext);
        if (boolname) {
            document.getElementById("namevalidation").className = "invisible";
            setnameIsValid(true)
            if (nameIsValid == true && ageIsValid == true && phoneIsValid == true)
                setisDisable(false)
        }
        else {
            document.getElementById("namevalidation").className = "visible alert alert-danger"
        }

    }

    const ValidateAge = () => {
        if (age.current.value < 18 || age.current.value > 60) {
            document.getElementById("agevalidation").className = "visible alert alert-danger"

        }
        else {
            document.getElementById("agevalidation").className = "invisible"
            setageIsValid(true)
            if (nameIsValid == true && ageIsValid == true && phoneIsValid == true)
                setisDisable(false)
        }
    }
    const Validatephone = () => {
        var phonenoregx = new RegExp(/^(011|012|010)[0-9]{8}$/, "ig");
        var phonetext = phone.current.value;
        var bool = phonenoregx.test(phonetext)
        console.log(bool)
        if (bool) {
            document.getElementById("phonevalidation").className = "invisible";
            setphoneIsValid(true)
            if (nameIsValid == true && ageIsValid == true && phoneIsValid == true)
                setisDisable(false)
        }
        else {
            document.getElementById("phonevalidation").className = "visible alert alert-danger"
        }

    }
    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-5 py-3 mb-5">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Add Student
            </button>

        </nav>
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Add Student</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input required onBlur={Validatename} ref={name}
                                    type="text" class="form-control" id="name" placeholder="Enter name" />
                                <div id="namevalidation" className="invisible" > please enter a valid name</div>

                            </div>
                            <div className="form-group">
                                <label for="age">Age</label>
                                <input required ref={age}
                                    onBlur={ValidateAge}
                                    type="number" class="form-control" id="age" placeholder="Enter age" />
                                <div id="agevalidation" className="invisible" > please enter a valid age number</div>
                            </div>
                            <div className="form-group">
                                <label for="phonenumber">Phone Number</label>
                                <input onBlur={Validatephone}
                                    required ref={phone} type="text" class="form-control" id="phonenumber" placeholder="Enter phone" />
                                <div id="phonevalidation" className="invisible" > please enter a valid phone number</div>

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    required ref={email} type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button onClick={() => {
                                addStudent({ "name": name.current.value, "age": age.current.value, "email": email.current.value, "phone": phone.current.value })
                            }} disabled={isDisable} type="button" class="btn btn-danger" data-dismiss="modal">Add</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <div className="container">
            <input type="text" className="form-control text-center rounded-pill" placeholder="Search"
                ref={searchValue} onChange={keywordsChanged}
            />
            <h1 className="my-3">List of Students</h1>
            <StudentList searchvalue={input} history={history} />

        </div>
    </div>
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addStudent }, dispatch)
}
export default connect(null, mapDispatchToProps)(Home)