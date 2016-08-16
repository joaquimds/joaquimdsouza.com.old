import { connect } from 'react-redux'
import { startle, toggleStartleOptions, chooseStartleCount } from '../actions'
import StartleControls from '../components/startleControls'

const mapStateToProps = (state) => {
  return {
    startleOptions: state.startleOptions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doStartle: (count) => {
      dispatch(startle(count))
    },
    toggleStartleOptions: (show) => {
      dispatch(toggleStartleOptions(show))
    },
    onChange: (count) => {
      dispatch(chooseStartleCount(count))
    }
  }
}

const ConnectedStartleControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartleControls)

export default ConnectedStartleControls
