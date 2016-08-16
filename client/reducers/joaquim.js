import types from '../actions/types'

const joaquim = (state = {}, action) => {
  switch (action.type) {
    case types.STARTLE:
      return { startling: true }
    case types.STARTLE_ATTEMPT:
      return { startling: true, startlePhrase: action.phrase }
    case types.STARTLE_SUCCESS:
      return { startled: true }
    case types.STARTLE_FAILED:
      return { notStartledReason: action.reason }
    default:
      return state
  }
}

export default joaquim
