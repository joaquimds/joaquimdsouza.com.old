import types from './types'

export const startle = () => ({ type: types.STARTLE })
export const startleAttempt = (phrase) => ({ type: types.STARTLE_ATTEMPT, phrase })
export const startleSuccess = () => ({ type: types.STARTLE_SUCCESS })
export const startleFailed = () => ({ type: types.STARTLE_FAILED })
