import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Person } from "../types";

export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  tagTypes: ["People"],
  endpoints: (build) => ({
    getAllPeople: build.query<Person[], void>({
      query: () => "people/",
      // Ensures that the query is re-run when the API cache invalidates
      providesTags: () => [{ type: "People" }],
    }),
    addPerson: build.mutation({
      query: (body: Person) => ({
        url: "people/",
        method: "POST",
        body,
      }),
      // Required to invalidate the API cache on successful mutation
      invalidatesTags: ["People"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPeopleQuery, useAddPersonMutation } = backendApi;
