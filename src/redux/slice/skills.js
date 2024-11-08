import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API yaradılması
export const skillsApi = createApi({
    reducerPath: 'skillsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-back-e3bx.onrender.com/portfolio/' }), // Baz URL
    endpoints: (builder) => ({
        getSkillsByName: builder.query({
            query: (name) => `skills`, 
        }),
    }),
});

export const { useGetSkillsByNameQuery } = skillsApi;
