import { connect } from 'react-redux'
import { sendRecording, startRecording, stopRecording, clearReceivedAudio } from '../actions'
import WalkieTalkie from '../components/walkieTalkie'

const mapStateToProps = (state) => {
  return { ...state.walkieTalkie }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
