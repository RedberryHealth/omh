import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a contact method and social link item
interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  contactInfo: string;
}

interface SocialLink {
  icon: string;
  link: string;
}

// Define the initial state structure
interface ContactSectionState {
  contactMethods: ContactMethod[];
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactSectionState = {
  contactMethods: [],
  socialLinks: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch contact methods and social links data from the API
export const fetchContactSectionData = createAsyncThunk(
  'contactSection/fetchContactSectionData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/contact-section');
      if (!response.ok) {
        throw new Error('Failed to fetch contact section data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the contactSection slice
export const contactSectionSlice = createSlice({
  name: 'contactSection',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContactSectionData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactSectionData.fulfilled, (state, action) => {
        state.loading = false;
        state.contactMethods = action.payload.contactMethods;
        state.socialLinks = action.payload.socialLinks;
      })
      .addCase(fetchContactSectionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the contact methods and social links data from the store
export const selectContactMethods = (state: {
  contactSection: ContactSectionState;
}) => state.contactSection.contactMethods;
export const selectSocialLinks = (state: {
  contactSection: ContactSectionState;
}) => state.contactSection.socialLinks;
export const selectContactSectionLoading = (state: {
  contactSection: ContactSectionState;
}) => state.contactSection.loading;
export const selectContactSectionError = (state: {
  contactSection: ContactSectionState;
}) => state.contactSection.error;

// Export the reducer to be included in the store
export default contactSectionSlice.reducer;
