function addReportFulfilled() {
  return (state, action) => {
    state.loadingAddReport = false;
    state.errorAddReport = "";
    if (action.payload.status !== 200) {
      state.errorAddReport =
        "There was an error while adding your Report visit";
    }
  };
}
export default addReportFulfilled;
