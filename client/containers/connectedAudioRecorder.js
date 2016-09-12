import { connect } from 'react-redux'
import { saveRecording } from '../actions'
import AudioRecorder from '../components/audioRecorder'

const mapStateToProps = (state) => {
  return {
    saved: state.audioRecorder.saved,
    receivedAudioUrl: state.audioRecorder.audioUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveRecording: (data) => {
      dispatch(saveRecording(data))
    }
  }
}

const ConnectedAudioRecorder = connect(mapStateToProps, mapDispatchToProps)(AudioRecorder)

export default ConnectedAudioRecorder
