import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const sendResponse = async (id:string,response:{name:string,score:number}) => {  
  const { data } = await axios.post('http://localhost:5000/api/response/add', {id,response});
  return data;
} 