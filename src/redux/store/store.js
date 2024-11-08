import { configureStore } from '@reduxjs/toolkit'
import { skillsApi } from '../slice/skills'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [skillsApi.reducerPath]: skillsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(skillsApi.middleware),
})

setupListeners  (store.dispatch);
