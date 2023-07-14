export default function fetchObjectiveFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.pagesLoaded++;
      state.Objective = state.Objective.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId = state.Objectives[state.Objective.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching Objective";
    }
    // state.payload = action.payload.Objective;
    state.error = "";
  };
}
