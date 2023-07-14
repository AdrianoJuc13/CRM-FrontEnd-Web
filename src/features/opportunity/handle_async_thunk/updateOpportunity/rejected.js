export default function updateOpportunityRejected() {
  return (state, action) => {
    state.loadingUpdateOpportunity = false;
    state.state.errorUpdateOpportunity = action.error.message;
  };
}
