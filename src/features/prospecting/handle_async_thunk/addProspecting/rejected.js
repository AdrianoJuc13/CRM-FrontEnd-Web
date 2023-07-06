function addProspectingRejected() {
  return (state, action) => {
    state.loadingAddProspecting = false;
    state.errorAddProspecting = action.error.message;
  };
}
export default addProspectingRejected;
