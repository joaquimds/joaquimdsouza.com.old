import types from '../actions/types'

const audioRecorder = (state = {}, action) => {
  switch (action.type) {
    case types.SHOW_RECORDING_SAVED:
      return { saved: true }
    case types.HIDE_RECORDING_SAVED:
      return {}
    default:
      return state
  }
}

export default audioRecorder
