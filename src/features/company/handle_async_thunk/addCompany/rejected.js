function addCompanyRejected() {
  return (state, action) => {
    state.loadingAddCompany = false;
    state.errorAddCompany = action.error.message;
  };
}
export default addCompanyRejected;
