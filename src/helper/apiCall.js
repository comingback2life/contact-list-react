const apiUrl="https://randomuser.me/api/?results=10";
const axios = require('axios')
export const fetchUsers = ()=>{
  return axios.get(apiUrl).then(res=>res.data)
}