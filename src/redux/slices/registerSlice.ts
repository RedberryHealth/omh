// src/redux/slices/registerSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the structure of the form data and state
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  businessPurpose: string;
  privacyPolicy: boolean;
}

interface RegisterState {
  loading: boolean;
  error: string | null;
  registeredUser: RegisterFormData | null; // To store registered data if needed
}

// Define the structure of the root state
interface RootState {
  register: RegisterState; // Ensure this matches your overall state structure
}

const initialState: RegisterState = {
  loading: false,
  error: null,
  registeredUser: null // Initialize with null, to be updated after successful submission
};

// Thunk to handle form submission
export const submitRegisterForm = createAsyncThunk(
  'register/submitForm',
  async (formData: RegisterFormData) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit the form');
    }

    return formData; // Return the submitted form data
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(submitRegisterForm.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitRegisterForm.fulfilled, (state, action) => {
        state.loading = false;
        state.registeredUser = action.payload; // Store the submitted form data in Redux
      })
      .addCase(submitRegisterForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to submit the form';
      });
  }
});

// Update selectors to use RootState
export const selectRegisterLoading = (state: RootState) =>
  state.register.loading;
export const selectRegisterError = (state: RootState) => state.register.error;
export const selectRegisteredUser = (state: RootState) =>
  state.register.registeredUser;

export default registerSlice.reducer;
