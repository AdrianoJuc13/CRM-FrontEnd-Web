export default function deleteActionPlanRejected() {
  return (state, action) => {
    state.loadingDeleteActionPlan = false;
    state.errorDeleteActionPlan = action.error.message;
  };
}
