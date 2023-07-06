export default function deleteReportPending() {
  return (state) => {
    state.loadingDeleteReport = true;
    state.errorDeleteReport = "";
  };
}
