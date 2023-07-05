export default function deleteActionPlanPending() {
  return (state) => {
    state.loadingDeleteActionPlan = true;
    state.errorDeleteActionPlan = "";
  };
}
