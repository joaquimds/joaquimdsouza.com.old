import { connect } from 'react-redux'
import { startle, toggleStartleOptions, changeStartleCount } from '../actions'
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
    changeStartleCount: (count) => {
      dispatch(changeStartleCount(count))
    }
  }
}

const ConnectedStartleControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartleControls)

export default ConnectedStartleControls
