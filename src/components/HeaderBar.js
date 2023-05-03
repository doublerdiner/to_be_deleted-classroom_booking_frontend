import { Link } from "react-router-dom"

const HeaderBar = ()=>{
    return(
        <>
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/joiners">Joiners</Link>
        <Link to="/student">Student</Link>
        </>
    )
}
export default HeaderBar