import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import Home from "../components/home/Home"
import Joiners from "../components/joiners/Joiners"
import Student from "../components/student/Student"
import { useEffect, useState } from "react"
import { getDate } from "../helpers/GetDate"
import { getUsers } from "./Service"
import { getStudent } from "./Service"
import { postAbsence } from "./Service"


const ClassroomBooking = ()=>{
    const [date, setDate] = useState({})
    const [user, setUser] = useState()

    useEffect(()=>{
        const today = getDate(new Date)
        setDate(today)

        getUsers().then(allUsers=>{
            setUser(allUsers[0])
        })
    },[])

    const updateDate = (date)=>{
        const newDate = getDate(date)
        setDate(newDate)
    }

    const submitAbsence = (data, studentId)=>{
        console.log(studentId)
        const student = getStudent(studentId)
        console.log(student)
        data.student.id = studentId
        postAbsence(data)
        console.log(data)
        // getUsers().then(allUsers=>{
        //     setUser(allUsers[0])
        // })
    }

return(
    <>
    {user? 
    <Router>
        <HeaderBar user={user}/>
        <Routes>
            <Route path="/" element={<Home date={date} updateDate={updateDate} user={user} submitAbsence={submitAbsence}/>}></Route>
            <Route path="/joiners" element={<Joiners/>}></Route>
            <Route path="/student" element={<Student/>}></Route>
        </Routes>
    </Router>
    : <p>Loading</p>}
    </>
)    
}
export default ClassroomBooking