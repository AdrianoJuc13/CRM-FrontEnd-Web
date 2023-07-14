export default function updateProspectingFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateProspecting = false;
    state.errorUpdateProspecting = "";
    if (action.payload.status !== 200) {
      state.errorUpdateProspecting =
        "There was an error while updating your prospecting";
    }
  };
}
