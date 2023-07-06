export default function deleteReportFulfilled() {
  return (state, action) => {
    state.loadingDeleteReport = false;
    state.errorDeleteReport = "";
    if (action.payload.status !== 200) {
      state.errorDeleteReport = "There was an error while deleting your Report";
    }
  };
}
