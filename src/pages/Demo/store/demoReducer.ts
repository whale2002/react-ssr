import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
  initialState:
    typeof window !== 'undefined'
      ? (window as any)?.context?.state?.demo
      : {
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
