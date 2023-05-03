import { useState } from "react";
import { Dropdown, DropdownButton} from "react-bootstrap";


const DateAndPeriod = ({date, updateDate, currentPeriod, setCurrentPeriod})=>{
    
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
        <DropdownButton id="dropdown-basic-button" title="Select Period">
        <Dropdown.Item href="#/action-1" onClick={()=>{setCurrentPeriod(1)}}>1</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>{setCurrentPeriod(2)}}>2</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>{setCurrentPeriod(3)}}>3</Dropdown.Item>
        </DropdownButton>
        <p>Period: {currentPeriod}</p>
        <i class="bi bi-arrow-right-circle" onClick={()=>{forwardOneDay()}}></i>
        </>

    )
}
export default DateAndPeriod