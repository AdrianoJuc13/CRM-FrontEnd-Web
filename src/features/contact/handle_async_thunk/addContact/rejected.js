function addContactRejected() {
  return (state, action) => {
    state.loadingAddContact = false;
    state.errorAddContact = action.error.message;
  };
}
export default addContactRejected;
