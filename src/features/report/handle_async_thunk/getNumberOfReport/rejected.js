export default function fetchNumberOfReportRejected() {
  return (state, action) => {
    state.numberOfTotalPagesLoading = true;
    state.numberOfTotalPagesError = "An error occurred while fetching data";
  };
}
