import { Table } from "react-bootstrap"
import TableRow from "./TableRow"
import { useState } from "react"
const HomeTable = ({date, user, currentPeriod})=>{
    const selectedDay = date.dayName

    const lesson = user.lessons.filter((lesson)=>{
        return lesson.dayType === selectedDay && lesson.period === currentPeriod
    })
    console.log(lesson)


    return(
        <>
        {lesson.length > 0?
        <aside>
            <p>{lesson[0].name}</p>
            <p>Year:</p>
            <p>{lesson[0].yearGroup}</p>
        </aside>
        :<></>}
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Student Year</th>
            <th scope="col">Absences</th>
            <th scope="col">Demerits</th>
            <th scope="col">Absence Flag</th>
            <th scope="col">Demerit Flag</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
                <TableRow/>
            </tr>
        </tbody>
        </table>
        </>
    )
}
export default HomeTable