function updateProspectingPending() {
  return (state) => {
    state.loadingUpdateProspecting = true;
    state.errorUpdateProspecting = "";
  };
}
export default updateProspectingPending;
