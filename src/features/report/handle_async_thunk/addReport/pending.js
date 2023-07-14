function addReportPending() {
  return (state, action) => {
    state.loadingAddReport = false;
    state.errorAddReport = "";
    if (action.payload.status !== 200) {
      state.errorAddReport = "There was an error while adding your Report";
    }
  };
}

export default addReportPending;
