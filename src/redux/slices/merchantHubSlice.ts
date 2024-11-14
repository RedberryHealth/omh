import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of the data
interface ImageData {
  src: string;
  width: number;
  height: number;
  className: string;
}

interface BenifitsCardData {
  image: string;
  title: string;
  description: string;
}

interface CardData {
  title: string;
  description: string;
  image: string;
}

interface PartnerData {
  src: string;
  alt: string;
}

interface MerchantHubState {
  imageData: ImageData[];
  benifitsCardData: BenifitsCardData[];
  cardData: CardData[];
  partnersData: PartnerData[];
  loading: boolean;
  error: string | null;
}

const initialState: MerchantHubState = {
  imageData: [],
  benifitsCardData: [],
  cardData: [],
  partnersData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch the data from the API
export const fetchMerchantHubData = createAsyncThunk(
  'merchantHub/fetchMerchantHubData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/merchant-hub');
      if (!response.ok) {
        throw new Error('Failed to fetch merchant hub data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the merchantHub slice
export const merchantHubSlice = createSlice({
  name: 'merchantHub',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMerchantHubData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMerchantHubData.fulfilled, (state, action) => {
        state.loading = false;
        state.imageData = action.payload.imageData;
        state.benifitsCardData = action.payload.benifitsCardData;
        state.cardData = action.payload.cardData;
        state.partnersData = action.payload.partnersData;
      })
      .addCase(fetchMerchantHubData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Export selectors
export const selectImageData = (state: { merchantHub: MerchantHubState }) =>
  state.merchantHub.imageData;
export const selectBenifitsCardData = (state: {
  merchantHub: MerchantHubState;
}) => state.merchantHub.benifitsCardData;
export const selectCardData = (state: { merchantHub: MerchantHubState }) =>
  state.merchantHub.cardData;
export const selectPartnersData = (state: { merchantHub: MerchantHubState }) =>
  state.merchantHub.partnersData;
export const selectMerchantHubLoading = (state: {
  merchantHub: MerchantHubState;
}) => state.merchantHub.loading;
export const selectMerchantHubError = (state: {
  merchantHub: MerchantHubState;
}) => state.merchantHub.error;

// Export the reducer
export default merchantHubSlice.reducer;
