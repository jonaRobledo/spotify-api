import { Router } from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const PATH_ROUTES = path.dirname(fileURLToPath(import.meta.url))
export const router = Router()

const removeExtension = (fileName) => fileName.split('.').shift()

const routeFiles = fs.readdirSync(PATH_ROUTES)

routeFiles.forEach((file) => {
	if (file.endsWith('.js')) {
		const routeName = removeExtension(file)
		const routeFile = import(`./routes/${file}`).default
		router.use(`/${routeName}`, routeFile)
	}
})

// ! No funciona la carga dinámica de rutas con ES Modules
