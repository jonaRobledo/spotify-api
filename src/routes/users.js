import { Router } from 'express'
export const usersRouter = Router()

usersRouter.get('/tracks', (req, res) => {
	const data = ['track 1', 'track 2', 'track 3']
	res.send(data)
})
