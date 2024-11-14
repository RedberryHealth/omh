import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a testimonial item
interface TestimonialItem {
  id: number;
  text: string;
  name: string;
  title: string;
  imgSrc: string;
}

// Define the initial state structure
interface TestimonialsState {
  testimonialsData: TestimonialItem[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialsState = {
  testimonialsData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch testimonials data from the API
export const fetchTestimonialsData = createAsyncThunk(
  'testimonials/fetchTestimonialsData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/testimonials');
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials data');
      }
      const data: TestimonialItem[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the testimonials slice
export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTestimonialsData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonialsData.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonialsData = action.payload;
      })
      .addCase(fetchTestimonialsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the testimonials data from the store
export const selectTestimonialsData = (state: {
  testimonials: TestimonialsState;
}) => state.testimonials.testimonialsData;
export const selectTestimonialsLoading = (state: {
  testimonials: TestimonialsState;
}) => state.testimonials.loading;
export const selectTestimonialsError = (state: {
  testimonials: TestimonialsState;
}) => state.testimonials.error;

// Export the reducer to be included in the store
export default testimonialsSlice.reducer;
