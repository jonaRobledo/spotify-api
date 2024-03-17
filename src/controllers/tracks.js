import tracksModel from '../models/index.js'

console.log(tracksModel)

export class TrackController {
	static getAllTracks = (req, res) => {
		//
		const data = ['track 1', 'track 2', 'track 3']
		res.send(data)
	}
	static getTrack = (req, res) => {
		//
	}
	static createTrack = (req, res) => {
		//
	}
	static updateTrack = (req, res) => {
		//
	}
	static deleteTrack = (req, res) => {
		//
	}
}
