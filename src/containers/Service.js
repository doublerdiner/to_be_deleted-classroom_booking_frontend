const baseURL = 'http://localhost:8080/'

export const getUsers = ()=>{
    return fetch(baseURL + 'users')
    .then(res=>res.json())
}