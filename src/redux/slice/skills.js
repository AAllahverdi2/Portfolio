import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const skillsApi = createApi({
    reducerPath: 'skillsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-backend-api-indol.vercel.app/portfolio/' }), // Baz URL
    endpoints: (builder) => ({
        getSkillsByName: builder.query({
            query: (name) => `skills`,
        }),
    }),
});

export const { useGetSkillsByNameQuery } = skillsApi;
