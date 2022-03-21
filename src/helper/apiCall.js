const apiUrl="https://randomuser.me/api/";
const axios = require('axios')
export const fetchUsers = (args="?results=12")=>{
  return axios.get(apiUrl+args).then(res=>res.data)
}