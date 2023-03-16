import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../services/contacts.api';

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async(_, thunkAPI) => {
    try {
      const data = await contactsApi.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  "contacts/add",
  async(data, { rejectWithValue }) => {
    try {
      const result = await contactsApi.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  "contacts/delete",
  async(id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
