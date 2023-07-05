function updateContactPending() {
  return (state) => {
    state.loadingUpdateContact = true;
    state.errorUpdateContact = "";
  };
}
export default updateContactPending;
