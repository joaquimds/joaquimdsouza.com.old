import React, { Component, PropTypes } from 'react'

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
const mimeType = 'audio/ogg'

class WalkieTalkie extends Component {

  constructor () {
    super()
    this.startRecording = this.startRecording.bind(this)
    this.stopRecording = this.stopRecording.bind(this)
    this.sendRecording = this.sendRecording.bind(this)
    this.resetMediaRecorder = this.resetMediaRecorder.bind(this)
    this.playOnce = this.playOnce.bind(this)
    this.getButtonBar = this.getButtonBar.bind(this)
    this.render = this.render.bind(this)
    this.state = { mediaRecorder: null }
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
      if (this.state.mediaRecorder.state !== 'recording') {
        this.sendRecording()
      }
    }
    this.state.mediaRecorder.start()
    this.props.startRecording()
  }

  stopRecording () {
    this.state.mediaRecorder.stop()
    this.props.stopRecording()
  }

  sendRecording () {
    const blob = new window.Blob(this.chunks, { type: mimeType })
    this.props.sendRecording(blob)
  }

  playOnce (node) {
    if (node) {
      node.play()
      node.addEventListener('ended', () => {
        this.props.clearReceivedAudio()
      })
    }
  }

  getButtonBar () {
    const onClick = this.props.recording ? this.stopRecording : this.startRecording
    let elements = []
    let audio
    if (this.state.mediaRecorder) {
      elements.push(<button key="record" onClick={onClick} className="btn btn-danger">{this.props.recording ? 'Recording' : 'Record'}</button>)
    } else {
      elements.push(<button key="unavailable" className="btn btn-secondary" onClick={this.resetMediaRecorder}>Recording Unavailable - Retry?</button>)
    }
    if (this.props.audioUrl) {
      elements.push(<audio key="received" src={this.props.audioUrl} ref={this.playOnce} />)
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

WalkieTalkie.propTypes = {
  recording: PropTypes.bool,
  startRecording: PropTypes.func.isRequired,
  stopRecording: PropTypes.func.isRequired,
  clearReceivedAudio: PropTypes.func.isRequired,
  sendRecording: PropTypes.func.isRequired,
  audioUrl: PropTypes.string
}

export default WalkieTalkie
