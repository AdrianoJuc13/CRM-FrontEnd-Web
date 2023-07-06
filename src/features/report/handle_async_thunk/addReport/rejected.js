function addReportRejected() {
  return (state, action) => {
    state.loadingAddReport = false;
    state.errorAddReport = action.error.message;
  };
}
export default addReportRejected;
