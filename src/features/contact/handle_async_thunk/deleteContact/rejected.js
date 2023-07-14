export default function deleteContactRejected() {
  return (state, action) => {
    state.loadingDeleteContact = false;
    state.errorDeleteContact = action.error.message;
  };
}
