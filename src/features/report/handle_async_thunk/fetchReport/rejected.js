export default function fetchReportRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
