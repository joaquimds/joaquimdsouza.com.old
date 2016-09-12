import express from 'express'
import path from 'path'
import http from 'http'

const app = express()
const server = http.createServer(app)

const assetPath = path.resolve(__dirname, '..', 'client')
app.use(express.static(assetPath))

export default server
