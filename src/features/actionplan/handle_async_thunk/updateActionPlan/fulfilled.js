export default function updateActionPlanFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateActionPlan = false;
    state.errorUpdateActionPlan = "";
    if (action.payload.status !== 200) {
      state.errorUpdateActionPlan =
        "There was an error while updating your action plan";
    }
  };
}
