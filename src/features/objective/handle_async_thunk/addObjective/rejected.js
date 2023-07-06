function addObjectiveRejected() {
  return (state, action) => {
    state.loadingAddObjective = false;
    state.errorAddObjective = action.error.message;
  };
}
export default addObjectiveRejected;
