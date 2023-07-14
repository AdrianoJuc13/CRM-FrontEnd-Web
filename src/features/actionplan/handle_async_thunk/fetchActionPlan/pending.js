export default function fetchActionPlanPending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
