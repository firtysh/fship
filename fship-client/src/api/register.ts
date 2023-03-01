import axios from 'axios';
import { FormData } from '../types';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const register = async (form: FormData) => {  
  const { data } = await axios.post('http://localhost:5000/api/register', form);
  console.log(data)
  return data;
} 