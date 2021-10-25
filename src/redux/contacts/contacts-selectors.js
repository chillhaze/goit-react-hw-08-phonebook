export const getFiltered = state => state.filtered;
// Code without RTK-----------------------------------
// export const getFiltered = state => state.phonebook.filtered;
export const getAllContacts = state => state.contacts.allContacts;
export const isLoading = state => state.contacts.isLoading;
