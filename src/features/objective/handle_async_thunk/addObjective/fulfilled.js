function addObjectiveFulfilled() {
  return (state, action) => {
    state.loadingAddObjective = false;
    state.errorAddObjective = "";
    if (action.payload.status !== 200) {
      state.errorAddObjective =
        "There was an error while adding your Objective visit";
    }
  };
}
export default addObjectiveFulfilled;
