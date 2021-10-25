// // Code without RTK-----------------------------------
// import * as actions from './contacts-actions';
// import * as contactsAPI from 'services/contacts-api';
// // import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// // вариант с createAsyncThunk (actions создаются под капотом, автоматически)
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContactsStatus',
//   async () => {
//     const contacts = await contactsAPI.fetchContacts();
//     return contacts;
//   },
// );

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getAllContacts = createAsyncThunk(
  'contacts/get-contacts',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts', credentials);

      return data;
    } catch (error) {}
  },
);

export const createContact = createAsyncThunk(
  'contacts/create-contact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);

      return data;
    } catch (error) {}
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/delete-contact',
  async credentials => {
    try {
      const { data } = await axios.delete(
        `/contacts/${credentials}`,
        credentials,
      );

      return data;
    } catch (error) {}
  },
);

export const updateContact = createAsyncThunk(
  'contacts/update-contact',
  async credentials => {
    try {
      await axios.patch(`/contacts/${credentials.id}`, credentials);
    } catch (error) {}
  },
);
