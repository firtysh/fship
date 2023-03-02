import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const getResponse = async (id:string,password:string) => {  
  const { data } = await axios.post('https://fship-backend.onrender.com/api/response', {id,password});
  return data;
} 