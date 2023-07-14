export default function deleteOpportunityFulfilled() {
  return (state, action) => {
    state.loadingDeleteOpportunity = false;
    state.errorDeleteOpportunity = "";
    if (action.payload.status !== 200) {
      state.errorDeleteOpportunity =
        "There was an error while deleting your opportunity";
    }
  };
}
