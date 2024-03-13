import mongoose from 'mongoose'

const StorageSchema = new mongoose.Schema(
	{
		// Estructura del Objeto
		url: {
			type: String
		},
		filename: {
			type: String
		}
	},
	{
		// asd
		timestamps: true, // createdAt and updatedAt
		versionKey: false
	}
)

export default mongoose.model('storage', StorageSchema)
