import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	questions: [
		{
			question: {
				type: String,
			},
			options: [
				{
					option: {
						type: String,
					},
					image: {
						type: String,
					},
					isCorrect: {
						type: Boolean,
					},
				},
			],
		}
	],
	response: [
		{
			name: {
				type: String,
			},
			score: {
				type: Number,
			},
			timestamp: {
				type: Date,
				default: Date.now,
			}
		},
	],
});

const User = mongoose.model("User", userSchema);
export default User;