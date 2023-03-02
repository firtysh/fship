import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { getQuestions } from '../api/getQuestions';
import { sendResponse } from '../api/sendResponse';
import friendimg from '../assets/svg/friends.svg'
// import { getQuestions } from '../api/getResponse';
function Quiz() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [qindex, setqIndex] = useState(-1);
  const [questionsData, setQuestionsData] = useState([{ question: "", options: [{ option: "", isCorrect: false, image: "" }] }]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [response, setResponse] = useState({ name: "", score: score })
  const urlId = useParams().id || "";
  const { auth } = useAuth()
  
  useEffect(() => {
    if (showResult) {
      sendResponse(urlId, { ...response, score }).then((res) => {
        console.log(res);
      })
    }
  }, [showResult])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setResponse({ ...response, name: e.target.value })
  }
  function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
  }
  const handleNext = (correct: Boolean) => {

    if (correct) {
      setScore((prev) => prev + 1);

    }
    if (qindex < questionsData.length - 1) {
      setqIndex((prev) => prev + 1);
    } else {
      setqIndex((prev) => prev);
      setShowResult(true);
    }

  }

  useEffect(() => { //for fetching and setting questions
    getQuestions(urlId).then((res) => {
      setQuestionsData(res.message)
      setLoading(false)
    })
  }, [])
  if (urlId === auth.id) {
    return <Navigate to={`/user/${auth.id}`}/>
  }
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading</div>
  }


  return (
    <>{qindex === -1 ?
      <div className='flex bg-slate-300 justify-center flex-col items-center p-3'>
        <div className=' md:w-1/2 border p-6 my-4 rounded-lg bg-slate-100'>
          <h1 className='xl:text-4xl md:text-xl   text-center py-6 font-sans'>How well do you know your friend?</h1>
          <img className='max-h-96 md:h-96 h-60 py-6 mx-auto' src={friendimg} alt='fship logo' />
          <form className='w-full md:p-0 p-6 mx-auto' onSubmit={(e) => { handleNext(false) }}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-base font-bold mb-2' htmlFor='username'>
                Enter Your Full Name
              </label>
              <input required onChange={(e) => { handleChange(e) }} className='shadow appearance-none border rounded w-full outline-none py-2 px-3 text-gray-700 leading-tight' id='username' type='text' placeholder='Full Name' />
            </div>
            <div className='flex items-center justify-between'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full outline-none ' type='submit'>
                Start
              </button>
            </div>
          </form>
        </div>
      </div>
      : <>{!showResult && <div className='flex bg-slate-300 justify-center flex-col items-center p-3 '>
        <div className='md:w-1/2 border w-full p-4 my-6 rounded-lg bg-slate-100' id="question-title">
          <h1 className='xl:text-xl md:text-lg text-center py-5 font-sans'>{questionsData[qindex].question}</h1>
          <div className='flex items-center flex-wrap p-3 border'>
            {questionsData[qindex].options.map((option) => {
              return (
                <button onClick={(e) => { handleNext(option.isCorrect) }} key={option.option} className={`min-w-fit w-full shadow-lg flex rounded bg-blue-100 text-blue-700 font-bold outline-none my-2`} type='button'>
                  {(option.image !== "") && <img className='rounded max-w-[110px] max-h-[70px] h-[70px]' src={option.image} alt="" />}

                  <div className='m-auto p-3'>{option.option}</div>
                </button>
              )
            })}

          </div>
        </div>
      </div>}
        {showResult && <div className='flex bg-slate-300 justify-center flex-col items-center p-3'>
          <div className=' md:w-1/2 border p-6 my-4 rounded-lg bg-slate-100'>
            <h1 className='xl:text-4xl md:text-xl   text-center py-6 font-sans'>Want to know how much you scored?</h1>
            <img className='max-h-96 md:h-96 h-60 py-6 mx-auto' src={friendimg} alt='fship logo' />
            <div className='w-full md:p-0 p-6 mx-auto' >
              <div className='mb-4 font-bold text-3xl text-center'>
                <h2>Your Score is</h2>
              </div>
              <div id="score" className='font-extrabold text-4xl text-center mb-5'>
                <h1>{score}</h1>
              </div>
              <div className='flex items-center justify-between'>
                <button onClick={() => { navigate('/register') }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full outline-none ' type='button'>
                  Create Your Own Quiz
                </button>
              </div>
            </div>
          </div>
        </div>}

      </>
    }
    </>
  )
}

export default Quiz