export default function deleteObjectivePending() {
  return (state) => {
    state.loadingDeleteObjective = true;
    state.errorDeleteObjective = "";
  };
}
