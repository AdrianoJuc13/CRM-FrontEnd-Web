export default function fetchOpportunitiesPending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
