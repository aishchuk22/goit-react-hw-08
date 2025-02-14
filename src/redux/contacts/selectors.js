import { selectFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectEditor = state => state.contacts.editingContact;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      const nameFilter = contact.name.toLowerCase().includes(filter.toLowerCase());
      const numberFilter = contact.number.includes(filter);
      return nameFilter || numberFilter;
    });
  }
);

export const selectEditingContact = createSelector(
  [selectContacts, selectEditor],
  (contacts, editedContactId) => {
    return editedContactId ? contacts.find(contact => contact.id === editedContactId) : null;
  }
);
