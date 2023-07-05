function updateActionPlanPending() {
  return (state) => {
    state.loadingUpdateActionPlan = true;
    state.errorUpdateActionPlan = "";
  };
}
export default updateActionPlanPending;
