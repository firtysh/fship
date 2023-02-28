import React from 'react'
import { Link } from 'react-router-dom'
function LoginForm() {
  return (
    <>
    <form className='w-full md:p-0 p-6 mx-auto'>
        <div className='mb-4'>
            <label className='block text-gray-700 text-base font-bold mb-2' htmlFor='username'>
               Enter Your Full Name
            </label>
            <input className='shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700 leading-tight' id='username' type='text' placeholder='Full Name' />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700 text-base font-bold mb-2' htmlFor='password'>
               Password
            </label>
            <input className='shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700 leading-tight' id='password' type='password' placeholder='Enter Password' />
        </div>
        <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full outline-none ' type='button'>
                Login
            </button>
        </div>
        <div className='mt-4 text-blue-700 underline'>
            <Link to="/register">Don't have an account? Click Here.</Link>
        </div>
    </form>
    </>
  )
}

export default LoginForm