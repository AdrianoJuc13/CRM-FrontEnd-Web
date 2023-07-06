export default function updateObjectiveFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateObjective = false;
    state.errorUpdateObjective = "";
    if (action.payload.status !== 200) {
      state.errorUpdateObjective =
        "There was an error while updating your Objective";
    }
  };
}
