export default function fetchProspectingFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.pagesLoaded++;
      state.Prospecting = state.Prospecting.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId =
        state.Prospectings[state.Prospecting.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching Prospecting";
    }
    // state.payload = action.payload.Prospecting;
    state.error = "";
  };
}
