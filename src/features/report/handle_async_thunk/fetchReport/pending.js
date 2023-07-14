export default function fetchReportPending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
