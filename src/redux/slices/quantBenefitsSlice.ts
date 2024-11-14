import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a benefit card
interface BenefitCard {
  image: string;
  title: string;
  description: string;
}

// Define the initial state structure
interface QuantBenefitsState {
  cardsData: BenefitCard[];
  loading: boolean;
  error: string | null;
}

const initialState: QuantBenefitsState = {
  cardsData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch the card data from the API
export const fetchQuantBenefits = createAsyncThunk(
  'quantBenefits/fetchQuantBenefits',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/quant-benefits');
      if (!response.ok) {
        throw new Error('Failed to fetch quant benefits data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the quantBenefits slice
export const quantBenefitsSlice = createSlice({
  name: 'quantBenefits',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuantBenefits.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuantBenefits.fulfilled, (state, action) => {
        state.loading = false;
        state.cardsData = action.payload;
      })
      .addCase(fetchQuantBenefits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Export selectors
export const selectQuantBenefitsData = (state: {
  quantBenefits: QuantBenefitsState;
}) => state.quantBenefits.cardsData;
export const selectQuantBenefitsLoading = (state: {
  quantBenefits: QuantBenefitsState;
}) => state.quantBenefits.loading;
export const selectQuantBenefitsError = (state: {
  quantBenefits: QuantBenefitsState;
}) => state.quantBenefits.error;

// Export the reducer
export default quantBenefitsSlice.reducer;
