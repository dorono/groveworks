import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated async fetch for demo purposes
export const fetchMetrics = createAsyncThunk('metrics/fetch', async () => {
  // In a real app, replace with fetch()/axios call
  const data = await new Promise((res) =>
    setTimeout(
      () =>
        res({
          revenue: '$12.4k',
          activeUsers: '3,412',
          conversion: '4.2%',
        }),
      300
    )
  );
  return data;
});

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: { data: {}, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default metricsSlice.reducer;
