


const DateAndPeriod = ({date, updateDate})=>{
    let currentDate = `${date.dayName} ${date.day}/${date.month}/${date.year}`;
    const day = new Date(`${date.year}/${date.month}/${date.day}`);

    const backOneDay = ()=>{
        const previousDay = day.setDate(day.getDate() -1)
        updateDate(new Date(previousDay))
    }
    const forwardOneDay = ()=>{
        const nextDay = day.setDate(day.getDate() +1)
        updateDate(new Date(nextDay))
    }


    return(
        <>
        <i class="bi bi-arrow-left-circle" onClick={()=>{backOneDay()}}></i>
        <h2>{currentDate}</h2>
        <i class="bi bi-arrow-right-circle" onClick={()=>{forwardOneDay()}}></i>
        </>

    )
}
export default DateAndPeriod