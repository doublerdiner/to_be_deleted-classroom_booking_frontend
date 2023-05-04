import { Table } from "react-bootstrap"
import TableRow from "./TableRow"
import { useEffect, useState } from "react"
import { getStudentsForLesson } from "../../containers/Service"
const HomeTable = ({date, user, currentPeriod, submitAbsence})=>{
    const [lesson, setLesson] = useState()
    const [students, setStudents] = useState([])
    const selectedDay = date.dayName

    useEffect(()=>{
        const thisLesson = user.lessons.filter((lesson)=>{
            return lesson.dayType === selectedDay && lesson.period === currentPeriod
        })
        setLesson(thisLesson[0])

        getStudentsForLesson(user.firstName, user.lastName, selectedDay, currentPeriod).then(allStudents=>{
            setStudents(allStudents)
        })
    },[user, date, currentPeriod])

    const studentList = students.map((student)=>{
        return(
            <TableRow student={student} key={student.id} submitAbsence={submitAbsence}/>
        )
    })  

    return(
        <>
        {lesson ?
        <aside>
            <p>{lesson.name}</p>
            <p>Year:</p>
            <p>{lesson.yearGroup}</p>
        </aside>
        :<></>}
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Student Year</th>
            <th scope="col">Absences</th>
            <th scope="col">Add Absence</th>
            <th scope="col">Demerits</th>
            <th scope="col">Add Demerit</th>
            <th scope="col">Settings</th>
            </tr>
        </thead>
        <tbody>
            {studentList}
        </tbody>
        </table>
        </>
    )
}
export default HomeTable