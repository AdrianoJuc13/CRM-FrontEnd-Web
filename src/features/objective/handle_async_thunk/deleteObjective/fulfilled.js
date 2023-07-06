export default function deleteObjectiveFulfilled() {
  return (state, action) => {
    state.loadingDeleteObjective = false;
    state.errorDeleteObjective = "";
    if (action.payload.status !== 200) {
      state.errorDeleteObjective =
        "There was an error while deleting your Objective";
    }
  };
}
