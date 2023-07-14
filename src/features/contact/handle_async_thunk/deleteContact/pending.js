export default function deleteContactPending() {
  return (state) => {
    state.loadingDeleteContact = true;
    state.errorDeleteContact = "";
  };
}
