const baseURL = 'http://localhost:8080/'

export const getUsers = ()=>{
    return fetch(baseURL + 'users')
    .then(res=>res.json())
}

export const getStudentsForLesson = (firstName, lastName, dayOfTheWeek, period)=>{
    return fetch(baseURL + `students?userfirstname=${firstName}&userlastname=${lastName}&day=${dayOfTheWeek}&period=${period}`)
    .then(res=>res.json())
}

export const getStudent = (id)=>{
    return fetch(baseURL + `students/${id}`)
    .then(res=>res.json())
}

export const postAbsence = (data)=>{
    return fetch(baseURL + `absences`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type' : 'application/json'}
    })
    .then(res=>res.json())

}