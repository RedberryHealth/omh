import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a core value item
interface CoreValueItem {
  icon: string;
  title: string;
  description: string;
}

// Define the initial state structure
interface CoreValuesState {
  coreValuesData: CoreValueItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CoreValuesState = {
  coreValuesData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch core values data from the API
export const fetchCoreValuesData = createAsyncThunk(
  'coreValues/fetchCoreValuesData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/core-values');
      if (!response.ok) {
        throw new Error('Failed to fetch core values data');
      }
      const data: CoreValueItem[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the coreValues slice
export const coreValuesSlice = createSlice({
  name: 'coreValues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCoreValuesData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoreValuesData.fulfilled, (state, action) => {
        state.loading = false;
        state.coreValuesData = action.payload;
      })
      .addCase(fetchCoreValuesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the core values data from the store
export const selectCoreValuesData = (state: { coreValues: CoreValuesState }) =>
  state.coreValues.coreValuesData;
export const selectCoreValuesLoading = (state: {
  coreValues: CoreValuesState;
}) => state.coreValues.loading;
export const selectCoreValuesError = (state: { coreValues: CoreValuesState }) =>
  state.coreValues.error;

// Export the reducer to be included in the store
export default coreValuesSlice.reducer;
