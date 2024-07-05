import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logout } from '../auth/operations'; 

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token; 

      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }

      setAuthToken(token); 

      const response = await axios.get('/contacts'); 
      return response.data; 
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        
        thunkAPI.dispatch(logout()); 
      }
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token; 

      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }

      setAuthToken(token); 

      const response = await axios.post('/contacts', contact); 
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
      
        thunkAPI.dispatch(logout()); 
      }
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token; 

      if (!token) {
        return thunkAPI.rejectWithValue('No token found');
      }

      setAuthToken(token); 

      await axios.delete(`/contacts/${contactId}`); 
      return contactId; 
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        
        thunkAPI.dispatch(logout()); 
      }
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);

