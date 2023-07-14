function updateReportPending() {
  return (state) => {
    state.loadingUpdateReport = true;
    state.errorUpdateReport = "";
  };
}
export default updateReportPending;
