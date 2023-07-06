export default function updateReportFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateReport = false;
    state.errorUpdateReport = "";
    if (action.payload.status !== 200) {
      state.errorUpdateReport = "There was an error while updating your Report";
    }
  };
}
