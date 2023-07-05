export default function updateOpportunityFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateOpportunity = false;
    state.errorUpdateOpportunity = "";
    if (action.payload.status !== 200) {
      state.errorUpdateOpportunity =
        "There was an error while updating your opportunity";
    }
  };
}
