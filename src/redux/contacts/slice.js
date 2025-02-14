import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  editingContact: null,
  isLoading: false,
  isError: false,
  items: [],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setEditingContact: (state, action) => {
      state.editingContact = action.payload;
    },
    clearEditingContact: state => {
      state.editingContact = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.editingContact = null;
        state.isLoading = false;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })

      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.isLoading = false;
        state.editingContact = null;
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

export const { setEditingContact, clearEditingContact } = slice.actions;
