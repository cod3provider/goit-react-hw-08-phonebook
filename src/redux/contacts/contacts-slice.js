import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAddContact,
  fetchAllContacts,
  fetchDeleteContact
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const idx = store.items.findIndex(item => item.id === payload);
        store.items.splice(idx, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
  },
});

export default contactsSlice.reducer;
