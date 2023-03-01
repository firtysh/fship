import React, { useState } from 'react'
import { questionsData } from '../data/questionsData'
import { useNavigate, Navigate } from 'react-router-dom'
import { FormData } from '../types'
import { register } from '../api/register';
import useAuth from '../hooks/useAuth';
function QuestionForm({ data, setData }: { data: FormData, setData: React.Dispatch<React.SetStateAction<FormData>> }) {
	const {setAuth}= useAuth()

	const [qindex, setqIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	if (data.username === "") {
		return <Navigate to="/register" />
	}
	function updateData(q: { question: string, options: { option: string, image: string }[] }, index: number, o: { option: string, image: string }) {
		setData((prev) => {
			const opt = q.options.map((opt) => {
				return {
					...opt,
					isCorrect: opt.option === o.option
				}
			})
			return {
				...prev,
				questions: [
					...prev.questions,
					{
						question: q.question,
						options: [
							...opt
						]

					}
				]
			}
		})
	}
	function next(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		if(qindex === 9){
			register(data).then((res)=>{
				console.log(res);
				setAuth(res.user)
				navigate(`/user/${res.user.id}`)
			}).catch((err)=>{
				console.log(err);
			})
			setLoading(true)
		}
		setqIndex((prev) => {
			if (prev === 9) {
				return prev
			}
			return prev + 1
		})
	}
	return (
		loading? <div className="flex justify-center items-center h-screen">Loading</div>:
		<>
			<div className='flex bg-slate-300 justify-center flex-col items-center p-3 '>
				<div className='md:w-1/2 border w-full p-4 my-6 rounded-lg bg-slate-100' id="question-title">
					<h1 className='xl:text-xl md:text-lg text-center py-5 font-sans'>{questionsData[qindex].question}</h1>
					<div className='flex items-center flex-wrap p-3 border'>
						{questionsData[qindex].options.map((option) => {
							return (
								<button onClick={(e) => { updateData(questionsData[qindex], qindex, option); next(e); }} key={option.option} className=' min-w-fit w-full shadow-lg flex rounded bg-blue-100 text-blue-700 font-bold  outline-none my-2' type='button'>
									{(option.image !== "") && <img className='rounded max-w-[110px] max-h-[70px] h-[70px]' src={option.image} alt="" />}

									<div className='m-auto p-3'>{option.option}</div>
								</button>
							)
						})}

					</div>
				</div>
			</div>
		</>
	)
}

export default QuestionForm