export default function deleteOpportunityPending() {
  return (state) => {
    state.loadingDeleteOpportunity = true;
    state.errorDeleteOpportunity = "";
  };
}
