// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'; // Keep services slice
import navbarReducer from './slices/navbarSlice'; // Add the new navbar slice
import homeCarouselReducer from './slices/homeCarouselSlice'; // Import the  // Add the new navbar slice
import keyServicesReducer from './slices/keyServicesSlice'; // Import the keyServices slice
import testimonialsReducer from './slices/testimonialsSlice'; // Import the testimonials slice
import coreValuesReducer from './slices/coreValuesSlice'; // Import the coreValues slice
import teamMembersReducer from './slices/teamMembersSlice'; // Import the teamMembers slice
import contactSectionReducer from './slices/contactSectionSlice'; // Import the contactSection slice
import worldMapReducer from './slices/worldMapSlice'; // Import the worldMap slice
import merchantHubReducer from './slices/merchantHubSlice'; // Import the merchantHub slice
import merchantHubTestimonialsReducer from './slices/merchantHubTestimonialsSlice'; // Import the merchantHubTestimonials slice
import quantStrategiesReducer from './slices/quantStrategiesSlice'; // Import the quantStrategies slice
import quantBenefitsReducer from './slices/quantBenefitsSlice'; // Import the quantBenefits slice
import quantFundTestimonialsReducer from './slices/quantFundTestimonialsSlice'; // Import the quantFundTestimonials slice
import registerReducer from './slices/registerSlice'; // Import the register slice
import subscriptionReducer from './slices/subscriptionSlice';

// Combine the slices into the store
export const store = configureStore({
  reducer: {
    navbar: navbarReducer, // Add the new navbar slice
    homeCarousel: homeCarouselReducer, // Add the homeCarousel slice
    keyServices: keyServicesReducer, // Add the keyServices slice
    testimonials: testimonialsReducer, // Add the testimonials slice
    coreValues: coreValuesReducer, // Add the coreValues slice
    teamMembers: teamMembersReducer, // Add the teamMembers slice
    contactSection: contactSectionReducer, // Add the contactSection slice
    worldMap: worldMapReducer, // Add the worldMap slice
    merchantHub: merchantHubReducer, // Add the merchantHub slice
    merchantHubTestimonials: merchantHubTestimonialsReducer, // Add the merchantHubTestimonials slice
    quantStrategies: quantStrategiesReducer, // Add the quantStrategies slice
    quantBenefits: quantBenefitsReducer, // Add the quantBenefits slice
    quantFundTestimonials: quantFundTestimonialsReducer, // Add the quantFundTestimonials slice
    register: registerReducer, // Add register reducer here
    subscription: subscriptionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
