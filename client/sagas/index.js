import startleSaga from './startle'
import audioSaga from './audio'

const root = function * () {
  yield [ startleSaga(), audioSaga() ]
}

export default root
