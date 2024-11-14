import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a contact information item and marker item
interface ContactInfo {
  title: string;
  description: string;
  icon: string;
  contactText: string;
}

interface Marker {
  coordinates: [number, number];
  name: string;
  address: string;
  img: string;
  alt: string;
}

// Define the initial state structure
interface WorldMapState {
  contactInfo: ContactInfo[];
  markers: Marker[];
  loading: boolean;
  error: string | null;
}

const initialState: WorldMapState = {
  contactInfo: [],
  markers: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch contact information and markers data from the API
export const fetchWorldMapData = createAsyncThunk(
  'worldMap/fetchWorldMapData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/world-map');
      if (!response.ok) {
        throw new Error('Failed to fetch world map data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the worldMap slice
export const worldMapSlice = createSlice({
  name: 'worldMap',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWorldMapData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorldMapData.fulfilled, (state, action) => {
        state.loading = false;
        state.contactInfo = action.payload.contactInfo;
        state.markers = action.payload.markers;
      })
      .addCase(fetchWorldMapData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the contact information and markers data from the store
export const selectContactInfo = (state: { worldMap: WorldMapState }) =>
  state.worldMap.contactInfo;
export const selectMarkers = (state: { worldMap: WorldMapState }) =>
  state.worldMap.markers;
export const selectWorldMapLoading = (state: { worldMap: WorldMapState }) =>
  state.worldMap.loading;
export const selectWorldMapError = (state: { worldMap: WorldMapState }) =>
  state.worldMap.error;

// Export the reducer to be included in the store
export default worldMapSlice.reducer;
