import React, { PropTypes } from 'react'

const Joaquim = ({ joaquim, onClick }) => {
  let userStatus = joaquim.startling ? <h6>You attempted to startle Joaquim...</h6> : ''
  let startleStatus = joaquim.startlePhrase ? <h6>{joaquim.startlePhrase}</h6> : ''
  let joaquimStatus = joaquim.startled ? <h6>Joaquim was startled!</h6>
    : joaquim.focussed ? <h6>Joaquim was too focussed!</h6> : ''
  return (
    <div id="joaquim">
      <img width="300px" src="/joaquim.jpg" className="m-t-1 m-b-1" />
      {userStatus}
      {startleStatus}
      {joaquimStatus}
      {joaquim.startling ? ''
        : <button className="btn btn-primary" type="button" onClick={onClick}>Startle Joaquim</button>}
    </div>
  )
}

Joaquim.propTypes = {
  onClick: PropTypes.func.isRequired,
  joaquim: PropTypes.object.isRequired
}

export default Joaquim
