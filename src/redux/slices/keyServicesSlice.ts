import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a service item
interface ServiceItem {
  title: string;
  description: string;
  imageSrc: string;
}

// Define the initial state structure
interface KeyServicesState {
  servicesData: ServiceItem[];
  loading: boolean;
  error: string | null;
}

const initialState: KeyServicesState = {
  servicesData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch services data from the API
export const fetchKeyServicesData = createAsyncThunk(
  'keyServices/fetchKeyServicesData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/key-services');
      if (!response.ok) {
        throw new Error('Failed to fetch services data');
      }
      const data: ServiceItem[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the keyServices slice
export const keyServicesSlice = createSlice({
  name: 'keyServices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchKeyServicesData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKeyServicesData.fulfilled, (state, action) => {
        state.loading = false;
        state.servicesData = action.payload;
      })
      .addCase(fetchKeyServicesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the services data from the store
export const selectKeyServicesData = (state: {
  keyServices: KeyServicesState;
}) => state.keyServices.servicesData;
export const selectKeyServicesLoading = (state: {
  keyServices: KeyServicesState;
}) => state.keyServices.loading;
export const selectKeyServicesError = (state: {
  keyServices: KeyServicesState;
}) => state.keyServices.error;

// Export the reducer to be included in the store
export default keyServicesSlice.reducer;
