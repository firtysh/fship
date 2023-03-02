import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const getQuestions = async (id:string) => {  
  const { data } = await axios.post('https://fship-backend.onrender.com/api/questions', {id});
  return data;
} 