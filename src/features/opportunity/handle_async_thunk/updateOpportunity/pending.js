function updateOpportunityPending() {
  return (state) => {
    state.loadingUpdateOpportunity = true;
    state.errorUpdateOpportunity = "";
  };
}
export default updateOpportunityPending;
