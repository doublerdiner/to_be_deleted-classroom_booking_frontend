import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import Home from "../components/home/Home"
import Joiners from "../components/joiners/Joiners"
import Student from "../components/student/Student"
import { useEffect, useState } from "react"
import { getDate } from "../helpers/GetDate"


const ClassroomBooking = ()=>{
    const [date, setDate] = useState({});

    useEffect(()=>{
        const today = getDate(new Date)
        setDate(today)
    },[])

    

return(
    <Router>
        <HeaderBar/>
        <Routes>
            <Route path="/" element={<Home date={date}/>}></Route>
            <Route path="/joiners" element={<Joiners/>}></Route>
            <Route path="/student" element={<Student/>}></Route>
        </Routes>
    </Router>
)    
}
export default ClassroomBooking