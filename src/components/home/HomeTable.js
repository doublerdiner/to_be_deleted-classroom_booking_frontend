import { Table } from "react-bootstrap"
import TableRow from "./TableRow"
const HomeTable = (user, currentPeriod, date)=>{
    const selectedDay = date
    console.log(user)

    const selectedLesson = user.lessons
    // console.log(user.lessons)

    return(
        <>
        <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
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