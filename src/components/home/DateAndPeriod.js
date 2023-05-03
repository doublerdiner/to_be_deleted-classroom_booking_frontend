
const DateAndPeriod = ({date})=>{
    let currentDate = `${date.dayName} ${date.day}/${date.month}/${date.year}`;

    return(
        <>
        <i class="bi bi-arrow-left-circle"></i>
        <h2>{currentDate}</h2>
        </>

    )
}
export default DateAndPeriod