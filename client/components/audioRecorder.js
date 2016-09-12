import React, { Component, PropTypes } from 'react'

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
const mimeType = 'audio/ogg'

class AudioRecorder extends Component {

  constructor () {
    super()
    this.startRecording = this.startRecording.bind(this)
    this.stopRecording = this.stopRecording.bind(this)
    this.saveRecordingLocal = this.saveRecordingLocal.bind(this)
    this.saveRecordingRemote = this.saveRecordingRemote.bind(this)
    this.resetMediaRecorder = this.resetMediaRecorder.bind(this)
    this.getButtonBar = this.getButtonBar.bind(this)
    this.render = this.render.bind(this)
    this.state = { recording: false, audioUrl: null }
  }

  componentWillMount () {
    this.resetMediaRecorder()
  }

  resetMediaRecorder () {
    const successCallback = (stream) => {
      const mediaRecorder = new window.MediaRecorder(stream)
      this.setState({ mediaRecorder })
    }
    const errorCallback = (err) => {
      console.log('The following gUM error occured: ', err)
    }

    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, successCallback, errorCallback)
    } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(successCallback, errorCallback)
    }
  }

  startRecording () {
    this.chunks = []
    this.state.mediaRecorder.ondataavailable = (e) => {
      this.chunks.push(e.data)
      if (!this.state.recording) {
        this.saveRecordingLocal()
      }
    }
    this.setState({ recording: true })
    this.state.mediaRecorder.start()
  }

  stopRecording () {
    this.state.mediaRecorder.stop()
    if (this.chunks.length) {
      this.saveRecordingLocal()
    }
    this.setState({ recording: false })
  }

  // called from two places as 'ondataavailable' event has unreliable timing
  saveRecordingLocal () {
    const blob = new window.Blob(this.chunks, { type: mimeType })
    const audioUrl = window.URL.createObjectURL(blob)
    this.setState({ audioUrl, audioData: blob })
  }

  saveRecordingRemote () {
    this.props.saveRecording(this.state.audioData)
  }

  getButtonBar () {
    const onClick = this.state.recording ? this.stopRecording : this.startRecording
    let elements = []
    let audio
    if (this.state.mediaRecorder) {
      elements.push(<button key="record" onClick={onClick} className="btn btn-danger">{this.state.recording ? 'Recording' : 'Record'}</button>)
    } else {
      elements.push(<button key="unavailable" className="btn btn-secondary" onClick={this.resetMediaRecorder}>Recording Unavailable - Retry?</button>)
    }
    if (this.state.audioUrl) {
      elements.push(<audio key="audio" ref={function (node) { audio = node }} src={this.state.audioUrl} />)
      elements.push(<button key="play" onClick={function () { audio.play() }} className="btn btn-success">Play</button>)
      elements.push(<button key="save" onClick={this.saveRecordingRemote} className="btn btn-primary">{this.props.saved ? 'Saved' : 'Save'}</button>)
    }
    if (this.props.receivedAudioUrl) {
      elements.push(<audio key="received" src={this.props.receivedAudioUrl} ref={function (node) { if (node) { node.play() } }} />)
    }
    return elements
  }

  render () {
    let elements = this.getButtonBar()
    return (
      <div className="audio-recorder">
        <div className="buttons">
          {elements}
        </div>
      </div>
    )
  }
}

AudioRecorder.propTypes = {
  saveRecording: PropTypes.func.isRequired,
  saved: PropTypes.bool,
  receivedAudioUrl: PropTypes.string
}

export default AudioRecorder
