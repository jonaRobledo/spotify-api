import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		// Estructura del Objeto
		name: {
			type: String
		},
		age: {
			type: Number
		},
		email: {
			type: String,
			unique: true
		},
		password: {
			type: String
		},
		role: {
			type: ['user', 'admin'],
			default: 'user'
		}
	},
	{
		// asd
		timestamps: true, // createdAt and updatedAt
		versionKey: false
	}
)

export default mongoose.model('users', UserSchema)
