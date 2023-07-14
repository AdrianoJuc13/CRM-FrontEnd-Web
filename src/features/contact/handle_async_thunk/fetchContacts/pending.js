export default function fetchContactsPending() {
  return (state) => {
    state.loading = true;
    state.error = "";
  };
}
