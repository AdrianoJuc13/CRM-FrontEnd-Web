export default function deleteReportRejected() {
  return (state, action) => {
    state.loadingDeleteReport = false;
    state.errorDeleteReport = action.error.message;
  };
}
