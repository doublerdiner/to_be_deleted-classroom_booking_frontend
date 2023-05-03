import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const HeaderBar = ({user})=>{
    return(
        <>
        <h1>Registration System</h1>
        <Link to="/"><Button><i class="bi bi-house"/></Button></Link>
        <Link to="/joiners">Joiners</Link>
        <Link to="/student">Student</Link>
        <h3>Hi {user.firstName}</h3>
        </>
    )
}
export default HeaderBar