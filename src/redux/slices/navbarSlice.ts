import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Service {
  title: string;
  description: string;
  href: string;
}

interface Resource {
  title: string;
  description: string;
  href: string;
}

interface NavbarState {
  serviceData: Service[];
  resourceData: Resource[];
  loading: boolean;
  error: string | null;
}

const initialState: NavbarState = {
  serviceData: [],
  resourceData: [],
  loading: false,
  error: null
};

export const fetchNavbarData = createAsyncThunk(
  'navbar/fetchNavbarData',
  async (_, { rejectWithValue }) => {
    try {
      const serviceResponse = await fetch('/api/service');
      const resourceResponse = await fetch('/api/resource');
      const services = await serviceResponse.json();
      const resources = await resourceResponse.json();
      return { serviceData: services, resourceData: resources };
    } catch (error) {
      return rejectWithValue('Failed to fetch navbar data' + error);
    }
  }
);

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNavbarData.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchNavbarData.fulfilled,
        (
          state,
          action: PayloadAction<{
            serviceData: Service[];
            resourceData: Resource[];
          }>
        ) => {
          state.loading = false;
          state.serviceData = action.payload.serviceData;
          state.resourceData = action.payload.resourceData;
        }
      )
      .addCase(fetchNavbarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch navbar data';
      });
  }
});

export const selectServiceData = (state: { navbar: NavbarState }) =>
  state.navbar.serviceData;
export const selectResourceData = (state: { navbar: NavbarState }) =>
  state.navbar.resourceData;

export default navbarSlice.reducer;
