export default function updateActionPlanRejected() {
  return (state, action) => {
    state.loadingUpdateActionPlan = false;
    state.state.errorUpdateActionPlan = action.error.message;
  };
}
