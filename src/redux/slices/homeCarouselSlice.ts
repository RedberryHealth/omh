import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a carousel item
interface HomeCarouselItem {
  title: string;
  description: string;
  image: string;
}

// Define the initial state structure
interface HomeCarouselState {
  carouselData: HomeCarouselItem[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeCarouselState = {
  carouselData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch carousel data from the API
export const fetchHomeCarouselData = createAsyncThunk(
  'homeCarousel/fetchHomeCarouselData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/home-carousel');
      if (!response.ok) {
        throw new Error('Failed to fetch carousel data');
      }
      const data: HomeCarouselItem[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the homeCarousel slice
export const homeCarouselSlice = createSlice({
  name: 'homeCarousel',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHomeCarouselData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeCarouselData.fulfilled, (state, action) => {
        state.loading = false;
        state.carouselData = action.payload;
      })
      .addCase(fetchHomeCarouselData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the carousel data from the store
export const selectHomeCarouselData = (state: {
  homeCarousel: HomeCarouselState;
}) => state.homeCarousel.carouselData;
export const selectHomeCarouselLoading = (state: {
  homeCarousel: HomeCarouselState;
}) => state.homeCarousel.loading;
export const selectHomeCarouselError = (state: {
  homeCarousel: HomeCarouselState;
}) => state.homeCarousel.error;

// Export the reducer to be included in the store
export default homeCarouselSlice.reducer;
