import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { loginSlice } from "../features/loginSlice";
import { searchDomainSlice } from "../features/searchDomainSlice";
import { signupSlice } from "../features/signupSlice";
import { cartSlice } from "../features/cartSlice";

export const store = configureStore({
    reducer: {
        [signupSlice.reducerPath]: signupSlice.reducer,
        [loginSlice.reducerPath]: loginSlice.reducer,
        [searchDomainSlice.reducerPath]: searchDomainSlice.reducer,
        [cartSlice.reducerPath] : cartSlice.reducer
    },
    //its create automatically 
    //its povide the information of caching, store and poling and provide some of other feature of rtk query 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signupSlice.middleware, loginSlice.middleware, searchDomainSlice.middleware, cartSlice.middleware),
})

//its enable the refatch for some certain events
setupListeners(store.dispatch)
