import { Router } from 'express'
import { TrackController } from '../controllers/tracks.js'
export const tracksRouter = Router()

// * GET ALL TRACKS
tracksRouter.get('/', TrackController.getAllTracks)

// * GET A TRACK
tracksRouter.get('/:id', (req, res) => {})

// * CREATE A TRACK
tracksRouter.post('/', (req, res) => {})

// * UPDATE A TRACK
tracksRouter.patch('/:id', (req, res) => {})

// * DELETE A TRACK
tracksRouter.delete('/:id', (req, res) => {})
