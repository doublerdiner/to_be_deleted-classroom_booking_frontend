import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import Home from "../components/home/Home"
import Joiners from "../components/joiners/Joiners"
import Student from "../components/student/Student"
import { useEffect, useState } from "react"
import { getDate } from "../helpers/GetDate"
import { getUsers } from "./Service"


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

    // console.log(user)

return(
    <>
    {user? 
    <Router>
        <HeaderBar user={user}/>
        <Routes>
            <Route path="/" element={<Home date={date} updateDate={updateDate} user={user}/>}></Route>
            <Route path="/joiners" element={<Joiners/>}></Route>
            <Route path="/student" element={<Student/>}></Route>
        </Routes>
    </Router>
    : <p>Loading</p>}
    </>
)    
}
export default ClassroomBooking