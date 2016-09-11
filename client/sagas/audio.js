import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { showRecordingSaved, hideRecordingSaved, newAudioMessage } from '../actions'
import actionTypes from '../actions/types'
import socket from '../websocket'
import { AUDIO } from '../../server/events'
const mimeType = 'audio/ogg'

function * socketSaga () {
  let _resolve
  socket.on(AUDIO, (event) => {
    console.log('got websocket audio event', event)
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

function * saveRecording (action) {
  const oReq = new window.XMLHttpRequest()
  const formData = new window.FormData()
  oReq.open('POST', '/api/audio', true)
  formData.append('audio', action.audio)
  oReq.send(formData)
  yield put(showRecordingSaved())
  yield delay(1000)
  yield put(hideRecordingSaved())
}

function * saveRecordingSaga () {
  yield * takeLatest(actionTypes.SAVE_RECORDING, saveRecording)
}

function * audioSaga () {
  yield [saveRecordingSaga(), socketSaga()]
}

export default audioSaga
