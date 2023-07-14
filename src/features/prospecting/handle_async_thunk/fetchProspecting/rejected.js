export default function fetchProspectingRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
