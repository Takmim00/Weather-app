// weatherSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WeatherData } from "../weatherType";


const apiKey = import.meta.env.NEXT_PUBLIC_VITE_APIkEY as string;
const url = import.meta.env.NEXT_PUBLIC_VITE_ENDPOINT as string;

// Define the state type for Redux slice
interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await axios.get(
      `${url}?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  }
);

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default weatherSlice.reducer;
