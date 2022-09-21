import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { resolve } from 'path'

const getDemoData = createAsyncThunk('demo/getData', async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        msg: '请求到的数据'
      })
    }, 200)
  })
  // @ts-ignore
  return data?.msg
})

const demoReducer = createSlice({
  name: 'demo',
  initialState: {
    content: '默认数据'
  },
  // 同步reducer
  reducers: {},
  // 异步reducer
  extraReducers(build) {
    build
      .addCase(getDemoData.pending, (state, action) => {
        state.content = 'pending'
      })
      .addCase(getDemoData.fulfilled, (state, action) => {
        state.content = action.payload
      })
      .addCase(getDemoData.rejected, (state, action) => {
        state.content = 'rejected'
      })
  }
})

export { demoReducer, getDemoData }
