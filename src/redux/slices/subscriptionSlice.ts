import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the structure of the subscription state
interface SubscriptionState {
  loading: boolean;
  success: boolean;
  error: string | null;
  message: string | null; // To store API messages
}

// Define the structure of the root state
interface RootState {
  subscription: SubscriptionState; // Ensure this matches your overall state structure
}

const initialState: SubscriptionState = {
  loading: false,
  success: false,
  error: null,
  message: null // Initialize message
};

// Async action to submit the subscription
export const submitSubscription = createAsyncThunk(
  'subscription/submit',
  async (email: string) => {
    const response = await fetch('/api/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to subscribe');
    }

    return data.message; // Return success message
  }
);

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(submitSubscription.pending, state => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(submitSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload; // Store the message from API
      })
      .addCase(submitSubscription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to subscribe';
        state.message = null;
      });
  }
});

// Update selectors to use RootState
export const selectSubscriptionStatus = (state: RootState) =>
  state.subscription.success;
export const selectSubscriptionError = (state: RootState) =>
  state.subscription.error;
export const selectSubscriptionMessage = (state: RootState) =>
  state.subscription.message; // Selector for API message

export default subscriptionSlice.reducer;
