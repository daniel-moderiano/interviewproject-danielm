// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Person } from "../types";

// Define a service using a base URL and expected endpoints
export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    getAllPeople: builder.query<Person[], void>({
      query: () => "people/",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPeopleQuery } = backendApi;
