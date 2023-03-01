export type FormData = {
	username: string,
	questions: {
		question: string,
		options: {
			option: string,
			image: string,
			isCorrect: boolean,
		}[],
	}[]
}