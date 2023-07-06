export default function deleteProspectingFulfilled() {
  return (state, action) => {
    state.loadingDeleteProspecting = false;
    state.errorDeleteProspecting = "";
    if (action.payload.status !== 200) {
      state.errorDeleteProspecting =
        "There was an error while deleting your prospecting";
    }
  };
}
