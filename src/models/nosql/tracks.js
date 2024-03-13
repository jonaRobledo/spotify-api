import mongoose from 'mongoose'

const TrackSchema = new mongoose.Schema(
	{
		// Estructura del Objeto
		name: {
			type: String
		},
		album: {
			type: String
		},
		cover: {
			type: String,
			validate: {
				validator: (req) => {
					return true
				},
				message: 'ERROR_URL'
			}
		},
		artist: {
			name: {
				type: String
			},
			nickname: {
				type: String
			},
			Nationality: {
				type: String
			}
		},
		duration: {
			start: {
				type: Number
			},
			end: {
				type: Number
			}
		},
		mediaId: {
			type: mongoose.Types.ObjectId
		}
	},
	{
		// asd
		timestamps: true, // createdAt and updatedAt
		versionKey: false
	}
)

export default mongoose.model('tracks', TrackSchema)
