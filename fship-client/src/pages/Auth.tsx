import React from 'react';
import friendimg from '../assets/svg/friends.svg'

function Auth({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex bg-slate-300 justify-center flex-col items-center p-6'>
        <div className=' md:w-1/2 border p-6 my-4 rounded-lg bg-slate-100'>
          <h1 className='xl:text-4xl md:text-xl   text-center py-6 font-sans'>🤜 Dare to test your friendship? 🤛</h1>
          <img className='max-h-96 md:h-96 h-60 py-6 mx-auto' src={friendimg} alt='fship logo' />
          {children}
        </div>
      </div>
    </>
  )
}

export default Auth