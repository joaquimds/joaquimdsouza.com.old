import React, { PropTypes } from 'react'
import _ from 'lodash'

const StartleControls = ({ startleOptions, doStartle, toggleStartleOptions, changeStartleCount }) => {
  let count = startleOptions.count
  let onClickToggle = (e) => {
    e.preventDefault() // stop default link clicking behaviour
    toggleStartleOptions(!startleOptions.show) // hide if shown and vice versa
  }
  let onClickStartle = () => {
    doStartle(count)  // startle joaquim with the selected startle count
  }
  let onChangeStartleCount = (e) => {
    changeStartleCount(e.target.value)  // update state with new startle count
  }
  return (
    <div id="startle-controls">
      <button className="btn btn-primary" type="button" onClick={onClickStartle}>Startle Joaquim</button>
      <a className="btn btn-link" href="#" onClick={onClickToggle}>
        {startleOptions.show ? 'Hide advanced options' : 'Show advanced options'}
      </a>
      {startleOptions.show ? (
        <div className="form-group">
          <label htmlFor="startleCount" className="m-r-1">Times to call Joaquim: </label>
          <select className="form-control" id="startleCount" onChange={onChangeStartleCount} value={count}>
            {_.range(1, 11).map((i) => <option key={i}>{i}</option>)}
          </select>
        </div>
      ) : ''}
    </div>
  )
}

StartleControls.propTypes = {
  doStartle: PropTypes.func.isRequired,
  toggleStartleOptions: PropTypes.func.isRequired,
  startleOptions: PropTypes.object.isRequired,
  changeStartleCount: PropTypes.func.isRequired
}

export default StartleControls
