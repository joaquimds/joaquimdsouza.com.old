import { connect } from 'react-redux'
import { startle } from '../actions'
import Joaquim from '../components/joaquim'

const mapStateToProps = (state) => {
  return {
    joaquim: state.joaquim
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(startle())
    }
  }
}

const ConnectedJoaquim = connect(
  mapStateToProps,
  mapDispatchToProps
)(Joaquim)

export default ConnectedJoaquim
