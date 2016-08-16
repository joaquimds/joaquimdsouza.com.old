import { connect } from 'react-redux'
import Joaquim from '../components/joaquim'

const mapStateToProps = (state) => {
  return {
    joaquim: state.joaquim,
    startleOptions: state.startleOptions
  }
}

const ConnectedJoaquim = connect(mapStateToProps)(Joaquim)

export default ConnectedJoaquim
