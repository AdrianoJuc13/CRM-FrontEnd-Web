export default function updateObjectiveRejected() {
  return (state, action) => {
    state.loadingUpdateObjective = false;
    state.state.errorUpdateObjective = action.error.message;
  };
}
