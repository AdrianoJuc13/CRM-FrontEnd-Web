function addOpportunityRejected() {
  return (state, action) => {
    state.loadingAddOpportunity = false;
    state.errorAddOpportunity = action.error.message;
  };
}
export default addOpportunityRejected;
