import React, { PropTypes } from 'react'
import joaquimUrl from '../assets/joaquim.jpg'
import ConnectedStartleControls from '../containers/connectedStartleControls'

const Joaquim = ({ joaquim }) => {
  let userStatus = joaquim.startling ? <h6>You attempted to startle Joaquim...</h6> : ''
  let startleStatus = joaquim.startlePhrase ? <h6>{joaquim.startlePhrase}</h6> : ''
  let joaquimStatus = joaquim.startled ? <h6>Joaquim was startled!</h6>
    : joaquim.notStartledReason ? <h6>{joaquim.notStartledReason}</h6> : ''
  return (
    <div id="joaquim">
      <img width="300px" src={joaquimUrl} className="m-t-1 m-b-1" />
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
