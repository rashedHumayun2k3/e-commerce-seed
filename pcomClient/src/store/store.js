"use client"
import { configureStore } from '@reduxjs/toolkit'
import { productAPI } from '@/redux/api/productAPI'
import  { categoryAPI } from '@/redux/api/categoryAPI';
import { categoryAttributeAPI } from '@/redux/api/categoryAttributesAPI';
import { authorAPI } from '@/redux/api/authorAPI';
import { routingAPI } from '@/redux/api/routingAPI';
import { colorAPI } from "@/redux/api/colorAPI";

import userReducer from '@/redux/slices/userSlice';
import postReducer from '@/redux/slices/postSlice';
import productReducer from '@/redux/slices/productSlice';
import categoryReducer from '@/redux/slices/categorySlice';
import brandReducer from '@/redux/slices/brandSlice';
import authorReducer from '@/redux/slices/authorSlice';
import productAttribute from '@/redux/slices/productAttributesSlice';
import colorReducer from "@/redux/slices/colorSlice";

const store= configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        [categoryAPI.reducerPath]: categoryAPI.reducer,
        [categoryAttributeAPI.reducerPath]: categoryAttributeAPI.reducer,
        [authorAPI.reducerPath]:authorAPI.reducer,
        [routingAPI.reducerPath]: routingAPI.reducer,
        [colorAPI.reducerPath]: colorAPI.reducer,

        userState: userReducer,
        postState: postReducer,
        productReducer,
        categoryReducer,
        brandReducer,
        authorReducer,
        productAttribute,
        colorReducer
      },
      
      // Adding the api middleware enables caching, invalidation, polling,
      // and other useful features of `rtk-query`.
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().
        concat(productAPI.middleware).
        concat(categoryAPI.middleware).
        concat(categoryAttributeAPI.middleware).
        concat(authorAPI.middleware).
        concat(routingAPI.middleware).
        concat(colorAPI.middleware)
})

export default store;
