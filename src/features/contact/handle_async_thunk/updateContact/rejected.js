export default function updateContactRejected() {
  return (state, action) => {
    state.loadingUpdateContact = false;
    state.state.errorUpdateContact = action.error.message;
  };
}
