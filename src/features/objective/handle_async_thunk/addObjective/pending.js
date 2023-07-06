function addObjectivePending() {
  return (state, action) => {
    state.loadingAddObjective = false;
    state.errorAddObjective = "";
    if (action.payload.status !== 200) {
      state.errorAddObjective =
        "There was an error while adding your Objective";
    }
  };
}

export default addObjectivePending;
