import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a testimonial
interface Testimonial {
  testimonial: string;
  imageSrc: string;
  name: string;
  title: string;
}

// Define the initial state structure
interface QuantFundTestimonialsState {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: QuantFundTestimonialsState = {
  testimonials: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch the testimonials data from the API
export const fetchQuantFundTestimonials = createAsyncThunk(
  'quantFundTestimonials/fetchQuantFundTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/quant-fund-testimonials');
      if (!response.ok) {
        throw new Error('Failed to fetch quant fund testimonials data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the quantFundTestimonials slice
export const quantFundTestimonialsSlice = createSlice({
  name: 'quantFundTestimonials',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuantFundTestimonials.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuantFundTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchQuantFundTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Export selectors
export const selectQuantFundTestimonialsData = (state: {
  quantFundTestimonials: QuantFundTestimonialsState;
}) => state.quantFundTestimonials.testimonials;
export const selectQuantFundTestimonialsLoading = (state: {
  quantFundTestimonials: QuantFundTestimonialsState;
}) => state.quantFundTestimonials.loading;
export const selectQuantFundTestimonialsError = (state: {
  quantFundTestimonials: QuantFundTestimonialsState;
}) => state.quantFundTestimonials.error;

// Export the reducer
export default quantFundTestimonialsSlice.reducer;
