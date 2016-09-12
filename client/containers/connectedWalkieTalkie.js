import { connect } from 'react-redux'
import {
  sendRecording,
  startRecording,
  stopRecording,
  clearReceivedAudio,
  connectWalkieTalkie,
  disconnectWalkieTalkie
} from '../actions'
import WalkieTalkie from '../components/walkieTalkie'

const mapStateToProps = (state) => {
  return { ...state.walkieTalkie }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connect: () => {
      dispatch(connectWalkieTalkie())
    },
    disconnect: () => {
      dispatch(disconnectWalkieTalkie())
    },
    startRecording: () => {
      dispatch(startRecording())
    },
    stopRecording: () => {
      dispatch(stopRecording())
    },
    sendRecording: (data) => {
      dispatch(sendRecording(data))
    },
    clearReceivedAudio: () => {
      dispatch(clearReceivedAudio())
    }
  }
}

const ConnectedWalkieTalkie = connect(mapStateToProps, mapDispatchToProps)(WalkieTalkie)

export default ConnectedWalkieTalkie
