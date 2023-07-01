export default function fetchCompaniesPending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
