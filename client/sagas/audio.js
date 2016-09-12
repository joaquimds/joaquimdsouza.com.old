import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { newAudioMessage } from '../actions'
import actionTypes from '../actions/types'
import socket from '../websocket'
import { AUDIO } from '../../server/events'
const mimeType = 'audio/ogg'

function * socketSaga () {
  let _resolve
  socket.on(AUDIO, (event) => {
    if (_resolve) {
      _resolve(event.data)
    }
  })
  while (true) {
    let promise = new Promise((resolve) => {
      _resolve = resolve
    })
    const data = yield promise
    const dataView = new window.DataView(data)
    const blob = new window.Blob([dataView], { type: mimeType })
    const audioUrl = window.URL.createObjectURL(blob)
    yield put(newAudioMessage(audioUrl))
  }
}

const sendRecording = (action) => {
  socket.emit(AUDIO, action.data)
}

function * saveRecordingSaga () {
  yield * takeLatest(actionTypes.SEND_RECORDING, sendRecording)
}

function * audioSaga () {
  yield [saveRecordingSaga(), socketSaga()]
}

export default audioSaga
