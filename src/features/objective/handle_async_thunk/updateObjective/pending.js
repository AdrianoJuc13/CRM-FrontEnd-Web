function updateObjectivePending() {
  return (state) => {
    state.loadingUpdateObjective = true;
    state.errorUpdateObjective = "";
  };
}
export default updateObjectivePending;
