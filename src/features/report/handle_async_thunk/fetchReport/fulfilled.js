export default function fetchReportFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.pagesLoaded++;
      state.Report = state.Report.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId = state.Report[state.Report.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching Report";
    }
    // state.payload = action.payload.Report;
    state.error = "";
  };
}
