import types from './types'

export const startle = (count) => ({ type: types.STARTLE, count })
export const startleWithPhrase = (phrase) => ({ type: types.STARTLE_ATTEMPT, phrase })
export const startleSuccess = () => ({ type: types.STARTLE_SUCCESS })
export const startleFailed = (reason) => ({ type: types.STARTLE_FAILED })
export const startleReset = () => ({ type: types.STARTLE_RESET })
export const startleAnnoyed = () => ({ type: types.STARTLE_ANNOYED })

export const changeStartleCount = (count) => ({ type: types.CHOOSE_STARTLE_COUNT, count })
export const toggleStartleOptions = (show) => {
  return show ? { type: types.SHOW_STARTLE_OPTIONS } : { type: types.HIDE_STARTLE_OPTIONS }
}

export const startRecording = () => ({ type: types.START_RECORDING })
export const stopRecording = () => ({ type: types.STOP_RECORDING })
export const sendRecording = (data) => ({ type: types.SEND_RECORDING, data })
export const clearReceivedAudio = () => ({ type: types.CLEAR_RECEIVED_AUDIO })
export const newAudioMessage = (audioUrl) => ({ type: types.NEW_AUDIO_MESSAGE, audioUrl })
