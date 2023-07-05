export default function fetchActionPlanFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.pagesLoaded++;
      state.actionplan = state.actionplan.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId = state.actionplan[state.actionplan.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching actionplan";
    }
    // state.payload = action.payload.actionplan;
    state.error = "";
  };
}
