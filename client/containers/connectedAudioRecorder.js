import { connect } from 'react-redux'
import { saveRecording } from '../actions'
import AudioRecorder from '../components/audioRecorder'

const mapStateToProps = (state) => {
  return {
    saved: state.audioRecorder.saved
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveRecording: (audio) => {
      dispatch(saveRecording(audio))
    }
  }
}

const ConnectedAudioRecorder = connect(mapStateToProps, mapDispatchToProps)(AudioRecorder)

export default ConnectedAudioRecorder
