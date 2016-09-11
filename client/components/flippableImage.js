import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class FlippableImage extends Component {

  constructor () {
    super()
    this.state = {
      flipped: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.image !== this.props.image) {
      this.setState({ flipped: !this.state.flipped })
    }
  }

  render () {
    let flipped = this.state.flipped
    return (
      <div className="flippable-image m-t-1 m-b-1">
        <div className={'flipper ' + (flipped ? 'flipped' : '')}>
          <ReactCSSTransitionGroup transitionName="flip" transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>
            <div key={this.props.image} style={{backgroundImage: 'url(' + this.props.image + ')'}} className={'img ' + (flipped ? 'back' : 'front')} />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

FlippableImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default FlippableImage
