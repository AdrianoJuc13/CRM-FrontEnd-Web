function addOpportunityPending() {
  return (state, action) => {
    state.loadingAddOpportunity = false;
    state.errorAddOpportunity = "";
    if (action.payload.status !== 200) {
      state.errorAddOpportunity =
        "There was an error while adding your opportunity";
    }
  };
}

export default addOpportunityPending;
