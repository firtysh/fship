import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormData } from '../types'
  
function RegistrationForm({ data,setData }: { data: FormData, setData: React.Dispatch<React.SetStateAction<FormData>> }) {
    const navigate = useNavigate()
    function handleStart(){
        if(data.username===""){
            console.log(data);
            
            alert("Please enter your name")
        }else{
            navigate('/questions')
        }
    }
    function updateData(e: React.ChangeEvent<HTMLInputElement>){
        setData((prev)=>{
            return {
                ...prev,
                username: e.target.value
            }
        })
    }
  return (
    <>
    <form className='w-full md:p-0 p-6 mx-auto'>
        <div className='mb-4'>
            <label className='block text-gray-700 text-base font-bold mb-2' htmlFor='username'>
               Enter Your Full Name
            </label>
            <input onChange={updateData} className='shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700 leading-tight' id='username' type='text' placeholder='Full Name' />
        </div>
        <div className='flex items-center justify-between'>
            <button onClick={handleStart} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full outline-none ' type='button'>
                Start
            </button>
        </div>
        <div className='mt-4 text-blue-700 underline'>
            <Link to="/login">Alredy have an account? Click Here.</Link>
        </div>
    </form>
    </>
  )
}

export default RegistrationForm