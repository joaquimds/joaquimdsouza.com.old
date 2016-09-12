import types from '../actions/types'

const walkieTalkie = (state = {}, action) => {
  switch (action.type) {
    case types.CONNECT_WALKIE_TALKIE:
      return { connected: true }
    case types.DISCONNECT_WALKIE_TALKIE:
      return {}
    case types.START_RECORDING:
      return { ...state, recording: true, audioUrl: null }
    case types.STOP_RECORDING:
      return { ...state, recording: false, audioUrl: null }
    case types.CLEAR_RECEIVED_AUDIO:
      return { ...state, audioUrl: null }
    case types.NEW_AUDIO_MESSAGE:
      if (state.recording || !state.connected) {
        return state
      } else {
        return { ...state, audioUrl: action.audioUrl }
      }
    default:
      return state
  }
}

export default walkieTalkie
