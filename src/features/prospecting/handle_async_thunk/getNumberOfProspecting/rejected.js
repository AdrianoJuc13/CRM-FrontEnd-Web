export default function fetchNumberOfProspectingRejected() {
  return (state, action) => {
    state.numberOfTotalPagesLoading = true;
    state.numberOfTotalPagesError = "An error occurred while fetching data";
  };
}
