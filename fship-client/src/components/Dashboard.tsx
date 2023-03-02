import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { getResponse } from '../api/getResponse';
function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState([{ name: "", score: 0 }])
  const urlId = useParams().id;
  const { auth } = useAuth()
  useEffect(() => { //for fetching and setting Response
    getResponse(auth.id, auth.password).then((res) => {
      setResponse(res.message)
      setLoading(false)
    }).catch((e) => {
      console.log(e);

    })
  }, [])
  if (auth.id !== urlId) {
    return <Navigate to={`/user/${auth.id}`} />
  }
  return (
    <>
      <div className='mx-auto bg-slate-300  p-3 '>
        <div className='mx-auto md:w-1/2 border p-6 my-4 rounded-lg bg-slate-100'>
          <div className='border rounded'>
            <div className=' text-center text-blue-700 p-3 break-words' id='link'>
              {`${window.location.origin}/quiz/${urlId}`}
            </div>
            <div className='text-center bg-blue-600 text-white hover:bg-blue-800 cursor-pointer rounded py-3'>
              Copy Link
            </div>
          </div>
          <a href={`whatsapp://send?text=🤗 ${auth.name} has sent you Dare of 2021 👸🤴. *Let's test how much we know each other!! Share your friends also* 👇👇👇👇 ${window.location.origin}/quiz/${urlId}`}>
            <div className='text-center my-4 rounded p-4 border bg-[#25D366] hover:bg-[#1da34e] cursor-pointer text-[#075E54]'>
              Put on your whatsapp status.
            </div>
          </a>
        </div>
        <div className="mx-auto text-xl font-bold md:w-1/2 border p-6 my-4 mt-10 rounded-lg bg-slate-100" id="result">
          <div className="text-center">
            Who is your best friend?
          </div>
          <div className='my-4'>
            <div className='text-center text-slate-600'>
              Your results will appear here.
            </div>
            <table className='w-full border rounded border-separate text-center'>
              <thead className='bg-blue-500 rounded-md border-separate text-white font-bold'>
                <tr className='table-row'>
                  <th scope='col' className='p-3 '>
                    Name
                  </th>
                  <th scope='col'>
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className='text-slate-600 '>
                {loading ? <tr className='table-row'><th scope='row' className='p-3  '>
                  Loading...
                </th>
                  <td className='p-3 '>
                    Loading...
                  </td></tr>
                  : response.map((res,index) => {
                    return <tr className='table-row'key={index}><th scope='row' className='p-3  '>
                    {res.name}
                  </th>
                    <td className='p-3 '>
                      {res.score}
                    </td></tr>
                  })
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}
export default Dashboard