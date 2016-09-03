import React, { PropTypes } from 'react'
import joaquimUrl from '../assets/images/joaquim.jpg'
import startledJoaquimUrl from '../assets/images/startledJoaquim.jpg'
import ConnectedStartleControls from '../containers/connectedStartleControls'
import FlippableImage from './flippableImage'

const Joaquim = ({ joaquim }) => {
  let userStatus = joaquim.startling ? <h6>You attempted to startle Joaquim...</h6> : ''
  let startleStatus = joaquim.startlePhrase ? <h6>{joaquim.startlePhrase}</h6> : ''
  let joaquimStatus = joaquim.startled ? <h6>Joaquim was startled!</h6>
    : joaquim.notStartledReason ? <h6>{joaquim.notStartledReason}</h6> : ''
  let image = joaquim.startled ? startledJoaquimUrl : joaquimUrl
  return (
    <div id="joaquim">
      <FlippableImage image={image} />
      {userStatus}
      {startleStatus}
      {joaquimStatus}
      {joaquim.startling ? '' : <ConnectedStartleControls />}
    </div>
  )
}

Joaquim.propTypes = {
  joaquim: PropTypes.object.isRequired
}

export default Joaquim
