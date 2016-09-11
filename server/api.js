import { Router } from 'express'
import Busboy from 'busboy'
import { socket } from './server'
import { AUDIO } from './events'

const router = Router()
let sound

router.post('/audio', (req, res, next) => {
  sound = null
  let busboy = new Busboy({ headers: req.headers })
  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    file.on('data', function (data) {
      if (sound) {
        sound = sound.concat(data)
      } else {
        sound = data
      }
    })
    file.on('end', function () {
      socket.emit(AUDIO, { data: sound })
    })
  })
  busboy.on('finish', function () {
    res.sendStatus(200)
  })
  req.pipe(busboy)
})

export default router
