import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { startleWithPhrase, startleSuccess, startleFailed } from '../actions'
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
  for (let i = 0; i < action.count; ++i) { // each iteration adds a phrase into the parts
    yield delay(1000) // delay 1s between displaying new phrase
    if (i < startleSequence.length) {
      phraseParts.push(startleSequence[i]) // have a couple of unique phrases at the start to make it more interesting
    } else {
      phraseParts.push('Joaquim!')
    }
    yield put(startleWithPhrase(phraseParts.join(' '))) // display new phrase to user
    if (phraseParts.length > 7) {
      yield delay(500)  // quit loop if it's about to go into its 9th iteration
      annoyed.play()
      return yield put(startleFailed('Joaquim got annoyed!'))
    }
  }
  yield delay(2000) // wait 2s before displaying whether joaquim was startled or not
  const test = Math.random()
  const threshold = action.count / 10
  const success = test < threshold // higher chance of success if count is higher
  if (success) {
    startledNoise.play()
    yield put(startleSuccess())
  } else {
    oneSec.play()
    yield put(startleFailed('Joaquim was too focussed!'))
  }
}

function * startleSaga () {
  yield * takeLatest(actionTypes.STARTLE, startle)
}

export default startleSaga
