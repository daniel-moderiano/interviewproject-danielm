import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { backendApi } from "./services/backendApi";

export const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
});

// required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
