export default function updateProspectingRejected() {
  return (state, action) => {
    state.loadingUpdateProspecting = false;
    state.state.errorUpdateProspecting = action.error.message;
  };
}
