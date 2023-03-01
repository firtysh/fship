import React from 'react'

function Dashboard() {
  return (
    <>
      <div className='mx-auto bg-slate-300  p-3 '>
        <div className='mx-auto md:w-1/2 border p-6 my-4 rounded-lg bg-slate-100'>
          <div className='border rounded'>
            <div className=' text-center text-blue-700 p-3 break-words' id='link'>
              http://localhost:3000/quiz/63ff7ac6a92f10d9559a13e3
            </div>
            <div className='text-center bg-blue-600 text-white hover:bg-blue-800 cursor-pointer rounded py-3'>
              Copy Link
            </div>
          </div>
          <div className='text-center my-4 rounded p-4 border bg-[#25D366] hover:bg-[#1da34e] cursor-pointer text-[#075E54]'>
            Put on your Whatsapp Status
          </div>
        </div>
          <div className="mx-auto text-xl font-bold md:w-1/2 border p-6 my-4 mt-10 rounded-lg bg-slate-100" id="result">
            <div className="text-center">
              Who is your best friend?
            </div>

          </div>
      </div>
    </>
  )
}

export default Dashboard