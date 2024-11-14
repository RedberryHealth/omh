import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a testimonial
interface Testimonial {
  testimonial: string;
  imageSrc: string;
  name: string;
  title: string;
}

// Define the initial state structure
interface MerchantHubTestimonialsState {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: MerchantHubTestimonialsState = {
  testimonials: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch testimonials data from the API
export const fetchMerchantHubTestimonials = createAsyncThunk(
  'merchantHubTestimonials/fetchMerchantHubTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/merchant-hub-testimonials');
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the merchantHubTestimonials slice
export const merchantHubTestimonialsSlice = createSlice({
  name: 'merchantHubTestimonials',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMerchantHubTestimonials.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMerchantHubTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchMerchantHubTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Export selectors
export const selectTestimonials = (state: {
  merchantHubTestimonials: MerchantHubTestimonialsState;
}) => state.merchantHubTestimonials.testimonials;
export const selectTestimonialsLoading = (state: {
  merchantHubTestimonials: MerchantHubTestimonialsState;
}) => state.merchantHubTestimonials.loading;
export const selectTestimonialsError = (state: {
  merchantHubTestimonials: MerchantHubTestimonialsState;
}) => state.merchantHubTestimonials.error;

// Export the reducer
export default merchantHubTestimonialsSlice.reducer;
