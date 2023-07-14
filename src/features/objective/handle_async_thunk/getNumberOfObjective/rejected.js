export default function fetchNumberOfObjectiveRejected() {
  return (state, action) => {
    state.numberOfTotalPagesLoading = true;
    state.numberOfTotalPagesError = "An error occurred while fetching data";
  };
}
