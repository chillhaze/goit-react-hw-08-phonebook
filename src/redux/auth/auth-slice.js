import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations.js';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset(token) {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com/',
//   }),
//   tagTypes: ['users'],
//   endpoints: builder => ({
//     // Создание нового пользователя
//     createUser: builder.mutation({
//       query: newUser => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: newUser,
//       }),
//       invalidatesTags: ['users'],
//     }),
//     logInUser: builder.mutation({
//       query: user => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: user,
//       }),
//       invalidatesTags: ['users'],
//     }),
//     logOutUser: builder.mutation({
//       query: user => ({
//         url: `users/signup`,
//         method: 'POST',
//         body: user,
//         header: {
//           Authorization: token,
//         },
//       }),
//       invalidatesTags: ['users'],
//     }),
//     // Удаление контакта
//     // deleteContact: builder.mutation({
//     //   query: id => ({
//     //     url: `/contacts/${id}`,
//     //     method: 'DELETE',
//     //   }),
//     //   invalidatesTags: ['Contacts'],
//     // }),
//     // Фильтр по имени
//     // getContactByName: builder.query({
//     //   query: id => `/contacts/${id}`,
//     // }),
//   }),
// });

// export const { useCreateUserMutation, useCreateUserMutation } = authApi;
