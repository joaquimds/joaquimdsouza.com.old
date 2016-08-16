import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { startleAttempt, startleSuccess, startleFailed } from '../actions'
import actionTypes from '../actions/types'

const startleSequence = [ 'Hey Joaquim!', 'Hey!', 'Joaquim!', 'Joaquim!', 'Joaquim!' ]

function * startle () {
  for (let i = 0; i < startleSequence.length; ++i) {
    yield delay(1000)
    const phrase = startleSequence.slice(0, i + 1).join(' ')
    yield put(startleAttempt(phrase))
  }
  yield delay(2000)
  const success = Math.random() > 0.5
  if (success) {
    let startledNoise = new window.Audio('startledNoise.mp3')
    startledNoise.play()
    yield put(startleSuccess())
  } else {
    yield put(startleFailed())
  }
}

function * startleSaga () {
  yield * takeLatest(actionTypes.STARTLE, startle)
}

export default startleSaga
