import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a strategy card
interface StrategyCard {
  title: string;
  description: string;
  image: string;
  icon: string;
}

// Define the initial state structure
interface QuantStrategiesState {
  cardData: StrategyCard[];
  loading: boolean;
  error: string | null;
}

const initialState: QuantStrategiesState = {
  cardData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch the card data from the API
export const fetchQuantStrategies = createAsyncThunk(
  'quantStrategies/fetchQuantStrategies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/quant-strategies');
      if (!response.ok) {
        throw new Error('Failed to fetch quant strategies data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the quantStrategies slice
export const quantStrategiesSlice = createSlice({
  name: 'quantStrategies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuantStrategies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuantStrategies.fulfilled, (state, action) => {
        state.loading = false;
        state.cardData = action.payload;
      })
      .addCase(fetchQuantStrategies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Export selectors
export const selectQuantStrategiesData = (state: {
  quantStrategies: QuantStrategiesState;
}) => state.quantStrategies.cardData;
export const selectQuantStrategiesLoading = (state: {
  quantStrategies: QuantStrategiesState;
}) => state.quantStrategies.loading;
export const selectQuantStrategiesError = (state: {
  quantStrategies: QuantStrategiesState;
}) => state.quantStrategies.error;

// Export the reducer
export default quantStrategiesSlice.reducer;
