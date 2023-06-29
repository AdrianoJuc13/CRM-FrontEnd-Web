function pageUp(state, action) {
  if (state.currentPage < state.numberOfTotalPages) {
    state.currentPage++;
  } else {
    if (state.currentPage === state.numberOfTotalPages) {
      const numberOfFullPages = state.numerOfTotalItems / state.itemsPerPage;
      const numberOfRemainingItems =
        state.numerOfTotalItems % state.itemsPerPage;
      var numberOfPages = numberOfFullPages;
      if (numberOfRemainingItems !== 0) {
        numberOfPages = numberOfFullPages + 1;
      }

      if (numberOfPages > state.numberOfTotalPages) {
        state.currentPage++;
        state.numberOfTotalPages++;
      }
    }
  }
}

export default pageUp;
