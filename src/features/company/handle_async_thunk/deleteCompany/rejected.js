export default function deleteCompanyRejected() {
  return (state, action) => {
    state.loadingDeleteCompany = false;
    state.errorDeleteCompany = action.error.message;
  };
}
