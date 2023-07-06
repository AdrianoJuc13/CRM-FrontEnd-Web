export default function fetchProspectingPending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
