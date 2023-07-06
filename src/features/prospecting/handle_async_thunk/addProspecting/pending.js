function addProspectingPending() {
  return (state, action) => {
    state.loadingAddProspecting = false;
    state.errorAddProspecting = "";
    if (action.payload.status !== 200) {
      state.errorAddProspecting =
        "There was an error while adding your Prospecting";
    }
  };
}

export default addProspectingPending;
