export default function updateReportRejected() {
  return (state, action) => {
    state.loadingUpdateReport = false;
    state.state.errorUpdateReport = action.error.message;
  };
}
