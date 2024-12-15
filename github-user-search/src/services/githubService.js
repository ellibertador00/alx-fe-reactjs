import axios from 'axios';

 const fetchUserData = async() =>{
   const response=axios.get("https://api.github.com/users/{username}")
   return  response.data;

}
export { fetchUserData };