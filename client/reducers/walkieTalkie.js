import types from '../actions/types'

const walkieTalkie = (state = {}, action) => {
  switch (action.type) {
    case types.START_RECORDING:
      return { recording: true }
    case types.STOP_RECORDING:
      return { recording: false }
    case types.CLEAR_RECEIVED_AUDIO:
      return {}
    case types.NEW_AUDIO_MESSAGE:
      if (state.recording) {
        return state
      } else {
        return { audioUrl: action.audioUrl }
      }
    default:
      return state
  }
}

export default walkieTalkie
