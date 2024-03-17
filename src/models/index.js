export const models = async () => {
	return {
		usersModel: await import('./nosql/users.js'),
		tracksModel: await import('./nosql/tracks.js'),
		storageModel: await import('./nosql/storage.js')
	}
}
