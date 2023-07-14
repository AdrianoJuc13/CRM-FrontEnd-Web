export default function deleteActionPlanFulfilled() {
  return (state, action) => {
    state.loadingDeleteActionPlan = false;
    state.errorDeleteActionPlan = "";
    if (action.payload.status !== 200) {
      state.errorDeleteActionPlan =
        "There was an error while deleting your ActionPlan";
    }
  };
}
