export default function deleteProspectingPending() {
  return (state) => {
    state.loadingDeleteProspecting = true;
    state.errorDeleteProspecting = "";
  };
}
