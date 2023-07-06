export default function deleteObjectiveRejected() {
  return (state, action) => {
    state.loadingDeleteObjective = false;
    state.errorDeleteObjective = action.error.message;
  };
}
