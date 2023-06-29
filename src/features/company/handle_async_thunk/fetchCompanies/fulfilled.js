export default function fetchCompaniesFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status == 200) {
      state.pagesLoaded++;
      state.companies = state.companies.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId = state.companies[state.companies.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching companies";
    }
    // state.payload = action.payload.companies;
    state.error = "";
  };
}
