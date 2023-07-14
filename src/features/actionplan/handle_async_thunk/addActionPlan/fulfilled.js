function addActionPlanFulfilled() {
  return (state, action) => {
    state.loadingAddActionPlan = false;
    state.errorAddActionPlan = "";
    if (action.payload.status !== 200) {
      state.errorAddActionPlan =
        "There was an error while adding your action plan";
    }
  };
}
export default addActionPlanFulfilled;
