export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const editContact = (contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});
