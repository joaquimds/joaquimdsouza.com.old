import React, { PropTypes } from 'react'
import joaquimUrl from '../assets/images/joaquim.jpg'
import startledJoaquimUrl from '../assets/images/startledJoaquim.jpg'
import annoyedJoaquimUrl from '../assets/images/annoyedJoaquim.jpg'
import startledNoiseUrl from '../assets/sounds/startledNoise.mp3'
import oneSecUrl from '../assets/sounds/oneSec.mp3'
import annoyedNoiseUrl from '../assets/sounds/annoyed.mp3'
import ConnectedStartleControls from '../containers/connectedStartleControls'
import FlippableImage from './flippableImage'

const Joaquim = ({ joaquim }) => {
  let userStatus = joaquim.startling ? <h6>You attempted to startle Joaquim...</h6> : ''
  let startleStatus = joaquim.startlePhrase ? <h6>{joaquim.startlePhrase}</h6> : ''
  let joaquimStatus
  let image = joaquimUrl
  let audioUrl = null
  if (joaquim.startled) {
    joaquimStatus = 'Joaquim was startled!'
    image = startledJoaquimUrl
    audioUrl = startledNoiseUrl
  } else if (joaquim.focussed) {
    joaquimStatus = 'Joaquim was too focussed!'
    audioUrl = oneSecUrl
  } else if (joaquim.annoyed) {
    joaquimStatus = 'Joaquim got annoyed!'
    image = annoyedJoaquimUrl
    audioUrl = annoyedNoiseUrl
  }
  return (
    <div className="joaquim">
      <FlippableImage image={image} />
      {userStatus}
      {startleStatus}
      <h6>{joaquimStatus}</h6>
      {joaquim.startling ? '' : <ConnectedStartleControls />}
      {audioUrl ? <audio src={audioUrl} ref={function (node) { if (node) { node.play() } }} /> : ''}
    </div>
  )
}

Joaquim.propTypes = {
  joaquim: PropTypes.object.isRequired
}

export default Joaquim
