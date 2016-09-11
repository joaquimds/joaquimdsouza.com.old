import express from 'express'
import path from 'path'
import http from 'http'
import io from 'socket.io'
import api from './api'

const app = express()
export const server = http.createServer(app)

export const socket = io(server)
socket.on('connection', (client) => {
  console.log('connected client', client.id)
})

app.use('/api', api)

const assetPath = path.resolve(__dirname, '..', 'client')
app.use(express.static(assetPath))
