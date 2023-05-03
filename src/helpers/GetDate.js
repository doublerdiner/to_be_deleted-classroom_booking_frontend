export const getDate = (dateArgument)=>{
    const returnValue = {}
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const date = dateArgument
    returnValue.dayName = weekdays[date.getDay()]
    returnValue.day = date.getDate();
    returnValue.month = date.getMonth() + 1;
    returnValue.year = date.getFullYear();
    return returnValue
}