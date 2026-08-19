import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from '../features/metrics/metricsSlice';

export const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

export default store;
