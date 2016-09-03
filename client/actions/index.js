import types from './types'

export const startle = (count) => ({ type: types.STARTLE, count })
export const startleWithPhrase = (phrase) => ({ type: types.STARTLE_ATTEMPT, phrase })
export const startleSuccess = () => ({ type: types.STARTLE_SUCCESS })
export const startleFailed = (reason) => ({ type: types.STARTLE_FAILED, reason })
export const startleReset = (reason) => ({ type: types.STARTLE_RESET, reason })

export const changeStartleCount = (count) => ({ type: types.CHOOSE_STARTLE_COUNT, count })
export const toggleStartleOptions = (show) => {
  return show ? { type: types.SHOW_STARTLE_OPTIONS } : { type: types.HIDE_STARTLE_OPTIONS }
}
