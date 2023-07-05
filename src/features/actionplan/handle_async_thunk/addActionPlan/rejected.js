function addActionPlanRejected() {
  return (state, action) => {
    state.loadingAddActionPlan = false;
    state.errorAddActionPlan = action.error.message;
  };
}
export default addActionPlanRejected;
