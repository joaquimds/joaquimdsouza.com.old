import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

const startleSequence = [ 'Hey Joaquim!', 'Hey!', 'Joaquim!', 'Joaquim!', 'Joaquim!' ]

function * startle () {
  for (let i = 0; i < startleSequence.length; ++i) {
    yield delay(1000)
    const text = startleSequence.slice(0, i + 1).join(' ')
    yield put({ type: 'STARTLE_ATTEMPT', text })
  }
  yield delay(3000)
  const success = Math.random() > 0.5
  if (success) {
    let startledNoise = new window.Audio('startledNoise.mp3')
    startledNoise.play()
    yield put({ type: 'STARTLE_SUCCESS' })
  } else {
    yield put({ type: 'STARTLE_FAILED' })
  }
}

function * startleSaga () {
  yield * takeLatest('STARTLE', startle)
}

export default startleSaga
