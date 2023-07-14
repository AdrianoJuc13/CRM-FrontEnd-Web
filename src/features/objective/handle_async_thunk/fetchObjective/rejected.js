export default function fetchObjectiveRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
