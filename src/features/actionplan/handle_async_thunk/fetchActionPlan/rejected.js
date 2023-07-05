export default function fetchActionPlanRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
