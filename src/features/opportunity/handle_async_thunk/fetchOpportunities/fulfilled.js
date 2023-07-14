export default function fetchOpportunitiesFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.pagesLoaded++;
      state.opportunities = state.opportunities.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId =
        state.opportunities[state.opportunities.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching opportunities";
    }
    // state.payload = action.payload.opportunities;
    state.error = "";
  };
}
