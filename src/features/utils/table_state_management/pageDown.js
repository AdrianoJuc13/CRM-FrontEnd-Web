function pageDown(state, action) {
  if (state.currentPage > 1 && state.currentPage <= state.numberOfTotalPages) {
    state.currentPage--;
  }
}

export default pageDown;
