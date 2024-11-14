import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the shape of a team member item
interface TeamMember {
  imgSrc: string;
  name: string;
  position: string;
}

// Define the initial state structure
interface TeamMembersState {
  teamMembersData: TeamMember[];
  loading: boolean;
  error: string | null;
}

const initialState: TeamMembersState = {
  teamMembersData: [],
  loading: false,
  error: null
};

// Define the async thunk to fetch team members data from the API
export const fetchTeamMembersData = createAsyncThunk(
  'teamMembers/fetchTeamMembersData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/team-members');
      if (!response.ok) {
        throw new Error('Failed to fetch team members data');
      }
      const data: TeamMember[] = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the teamMembers slice
export const teamMembersSlice = createSlice({
  name: 'teamMembers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTeamMembersData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamMembersData.fulfilled, (state, action) => {
        state.loading = false;
        state.teamMembersData = action.payload;
      })
      .addCase(fetchTeamMembersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Selector to access the team members data from the store
export const selectTeamMembersData = (state: {
  teamMembers: TeamMembersState;
}) => state.teamMembers.teamMembersData;
export const selectTeamMembersLoading = (state: {
  teamMembers: TeamMembersState;
}) => state.teamMembers.loading;
export const selectTeamMembersError = (state: {
  teamMembers: TeamMembersState;
}) => state.teamMembers.error;

// Export the reducer to be included in the store
export default teamMembersSlice.reducer;
