export default function fetchNumberOfReportFulfilled() {
  return (state, action) => {
    state.numberOfTotalPagesLoading = false;
    const numberOfItems = action.payload.numberOfItems;

    var numberOfPages = numberOfItems / state.itemsPerPage;
    const numberOfRemainingItems = numberOfItems % state.itemsPerPage;
    if (numberOfRemainingItems !== 0) {
      numberOfPages++;
    }
    state.numberOfTotalItems = numberOfItems;
    state.numberOfPages = numberOfPages;
  };
}
