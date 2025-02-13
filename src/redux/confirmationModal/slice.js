import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactId: null,
    isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
        state.contactId = action.payload;
        state.isOpen = true;
    },
    closeModal: state => {
        state.contactId = null;
        state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;