import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class FlippableImage extends Component {

  constructor (props) {
    super(props)
    this.flipped = false
  }

  componentWillUpdate (nextProps) {
    if (nextProps.image !== this.props.image) {
      this.flipped = !this.flipped
    }
  }

  render () {
    return (
      <div className="flippable-image m-t-1 m-b-1">
        <div className={'flipper ' + (this.flipped ? 'flipped' : '')}>
          <ReactCSSTransitionGroup transitionName="flip" transitionEnterTimeout={1500} transitionLeaveTimeout={1500}>
            <div key={this.props.image} style={{backgroundImage: 'url(' + this.props.image + ')'}} className={'img ' + (this.flipped ? 'back' : 'front')} />
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

FlippableImage.propTypes = {
  image: PropTypes.string.isRequired
}

module.exports = FlippableImage
