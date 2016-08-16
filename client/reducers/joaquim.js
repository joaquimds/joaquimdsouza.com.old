const joaquim = (state = {}, action) => {
  switch (action.type) {
    case 'STARTLE':
      return { startling: true }
    case 'STARTLE_ATTEMPT':
      return { startling: true, startleText: action.text }
    case 'STARTLE_SUCCESS':
      return { startled: true }
    case 'STARTLE_FAILED':
      return { focussed: true }
    default:
      return state
  }
}

export default joaquim
