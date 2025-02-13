import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
    deleteContact,
    fetchContacts,
    editContact,
    addContact,
} from "./operations";
import { logOut } from "../auth/operations";


const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  editedContact: null,
};

const slice = createSlice({
  name: "contacts",
    initialState,
  
    reducers: {
    setEditedContact: (state, action) => {
      state.editedContact = action.payload;
        },
    clearEditedContact: (state) => {
      state.editedContact = null;
        },
    },
    
    extraReducers: builder => {
      builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => item.id !== action.payload.id
        );
        state.editedContact = null;
        state.isLoading = false;
      })
          
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.editedContact = null;
        state.isLoading = false;
      })
          
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
          
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
          
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          editContact.pending,
          addContact.pending,
          logOut.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
          
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          editContact.rejected,
          addContact.rejected,
          logOut.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
export const { setEditedContact, clearEditedContact } = slice.actions;