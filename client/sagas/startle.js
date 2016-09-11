import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { startleWithPhrase, startleSuccess, startleFailed, startleAnnoyed, startleReset } from '../actions'
import actionTypes from '../actions/types'

const startleSequence = [ 'Hey Joaquim!', 'Hey!' ]

function * startle (action) {
  let phraseParts = [] // contains an array of phrases said to joaquim
  let success = false
  const joaquimsFocus = Math.random()
  yield delay(1000)
  for (let i = 0; i < action.count; ++i) { // each iteration adds a phrase into the parts
    if (i < startleSequence.length) {
      phraseParts.push(startleSequence[i]) // have a couple of unique phrases at the start to make it more interesting
    } else {
      phraseParts.push('Joaquim!')
    }
    yield put(startleWithPhrase(phraseParts.join(' '))) // display new phrase to user
    yield delay(1000)
    const distractingPower = (i + 1) / 10 // chance of success gets higher each iteration
    success = distractingPower > joaquimsFocus
    if (success) {
      yield delay(500)
      const annoyedTest = Math.random()
      if (annoyedTest < 0.5) {
        yield put(startleAnnoyed())
      } else {
        yield put(startleSuccess())
      }
      break
    }
  }
  if (!success) {
    yield put(startleFailed())
  }
  yield delay(3000)
  yield put(startleReset())
}

function * startleSaga () {
  yield * takeLatest(actionTypes.STARTLE, startle)
}

export default startleSaga
