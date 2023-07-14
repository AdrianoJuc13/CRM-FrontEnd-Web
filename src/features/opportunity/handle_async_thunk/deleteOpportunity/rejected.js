export default function deleteOpportunityRejected() {
  return (state, action) => {
    state.loadingDeleteOpportunity = false;
    state.errorDeleteOpportunity = action.error.message;
  };
}
