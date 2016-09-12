import io from 'socket.io'
import server from './server'
import { AUDIO } from './events'

const socket = io(server)
socket.on('connection', (client) => {
  console.log('connected client', client.id)

  client.on(AUDIO, (data) => {
    console.log('event', data)
    client.broadcast.emit(AUDIO, { data })
  })
})
