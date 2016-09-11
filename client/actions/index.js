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

export const saveRecording = (audio) => ({ type: types.SAVE_RECORDING, audio })
export const hideRecordingSaved = (audio) => ({ type: types.HIDE_RECORDING_SAVED, audio })
export const showRecordingSaved = (audio) => ({ type: types.SHOW_RECORDING_SAVED, audio })
export const newAudioMessage = (audioUrl) => ({ type: types.NEW_AUDIO_MESSAGE, audioUrl })
