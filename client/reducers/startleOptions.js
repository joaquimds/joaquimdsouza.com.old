import types from '../actions/types'

const startleOptions = (state = { count: 3 }, action) => {
  switch (action.type) {
    case types.SHOW_STARTLE_OPTIONS:
      return { ...state, show: true }
    case types.HIDE_STARTLE_OPTIONS:
      return { ...state, show: false }
    case types.CHOOSE_STARTLE_COUNT:
      return { ...state, count: action.count }
    default:
      return state
  }
}

export default startleOptions
