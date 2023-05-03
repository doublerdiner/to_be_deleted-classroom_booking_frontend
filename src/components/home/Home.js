import DateAndPeriod from "./DateAndPeriod"
import HomeTable from "./HomeTable"
import { useState } from "react"
const Home = ({date, updateDate, user})=>{
    const [currentPeriod, setCurrentPeriod] = useState(1)

    return(
        <>
        <h1>Home</h1>
        
        <DateAndPeriod 
            date={date} 
            updateDate={updateDate} 
            currentPeriod={currentPeriod} 
            setCurrentPeriod={setCurrentPeriod}/>
        <HomeTable 
            date={date}
            user={user} 
            currentPeriod={currentPeriod}/>
        </>
    )
}
export default Home