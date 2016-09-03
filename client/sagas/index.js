import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { startleWithPhrase, startleSuccess, startleFailed, startleReset } from '../actions'
import actionTypes from '../actions/types'
import startledNoiseUrl from '../assets/sounds/startledNoise.mp3'
import oneSecUrl from '../assets/sounds/oneSec.mp3'
import annoyedUrl from '../assets/sounds/annoyed.mp3'

const startleSequence = [ 'Hey Joaquim!', 'Hey!' ]
const startledNoise = new window.Audio(startledNoiseUrl)
const oneSec = new window.Audio(oneSecUrl)
const annoyed = new window.Audio(annoyedUrl)

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
        annoyed.play()
        yield put(startleFailed('Joaquim got annoyed!'))
      } else {
        startledNoise.play()
        yield put(startleSuccess())
      }
      break;
    }
  }
  if (!success) {
    oneSec.play()
    yield put(startleFailed('Joaquim was too focussed!'))
  }
  yield delay(3000)
  yield put(startleReset())
}

function * startleSaga () {
  yield * takeLatest(actionTypes.STARTLE, startle)
}

export default startleSaga
