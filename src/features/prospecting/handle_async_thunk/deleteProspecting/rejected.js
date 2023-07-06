export default function deleteProspectingRejected() {
  return (state, action) => {
    state.loadingDeleteProspecting = false;
    state.errorDeleteProspecting = action.error.message;
  };
}
