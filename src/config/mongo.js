import mongoose from 'mongoose'

export const dbConnect = async () => {
	/*mongoose.connect(   // ! DEPRECATED
		process.env.DB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		(err, res) => {
			if (!err) {
				console.log('>>> CONNECTION SUCCESS <<<')
			} else {
				console.log('>>> CONNECTION FAIL <<<')
			}
		}
	)*/
	try {
		mongoose.set('strictQuery', false)
		await mongoose.connect(process.env.DB_URI)
		console.log('>>> CONNECTION SUCCESS <<<')
	} catch (error) {
		console.log(error)
		console.log('>>> CONNECTION FAIL <<<')
		process.exit()
	}
}
