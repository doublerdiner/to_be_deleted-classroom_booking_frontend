import DateAndPeriod from "./DateAndPeriod"
import HomeTable from "./HomeTable"
const Home = ({date, updateDate})=>{
    return(
        <>
        <h1>Home</h1>
        <DateAndPeriod date={date} updateDate={updateDate}/>
        <HomeTable/>
        </>
    )
}
export default Home