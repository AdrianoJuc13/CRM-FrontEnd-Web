export default function fetchOpportunitiesRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
