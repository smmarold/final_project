import { configureStore } from '@reduxjs/toolkit'

import queueReducer from '../features/queue/queueSlice'

export default configureStore({
  reducer: {
    queue: queueReducer
  }
})