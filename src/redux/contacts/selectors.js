import { createSelector } from "@reduxjs/toolkit";

import { selectFilter } from "../filters/selectors";

export const selectEditor = state => state.contacts.editingContact;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;
export const selectContacts = state => state.contacts.items;
export const selectEditingContact = createSelector(
  [selectContacts, selectEditor],
  (contacts, editedId) => {
    return editedId ? contacts.find(contact => contact.id === editedId) : null;
  }
);
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterInput) => {
    return contacts.filter(contact => {
      const filteredName = contact.name.toLowerCase().includes(filterInput.toLowerCase());
      const filteredNumber = contact.number.includes(filterInput);
      return filteredName || filteredNumber;
    });
  }
);