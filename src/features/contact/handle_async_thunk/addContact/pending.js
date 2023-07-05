function addContactPending() {
  return (state, action) => {
    state.loadingAddContact = false;
    state.errorAddContact = "";
    if (action.payload.status != 200) {
      state.errorAddContact = "There was an error while adding your contact";
    }
  };
}

export default addContactPending;
