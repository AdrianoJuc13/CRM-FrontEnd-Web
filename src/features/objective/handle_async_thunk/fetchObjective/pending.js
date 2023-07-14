export default function fetchObjectivePending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
