export default function updateCompanyRejected() {
  return (state, action) => {
    state.loadingUpdateCompany = false;
    state.state.errorUpdateCompany = action.error.message;
  };
}
