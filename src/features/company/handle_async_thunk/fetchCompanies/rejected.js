export default function fetchCompaniesRejected() {
  return (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  };
}
