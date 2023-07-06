function addProspectingFulfilled() {
  return (state, action) => {
    state.loadingAddProspecting = false;
    state.errorAddProspecting = "";
    if (action.payload.status !== 200) {
      state.errorAddProspecting =
        "There was an error while adding your prospecting visit";
    }
  };
}
export default addProspectingFulfilled;
