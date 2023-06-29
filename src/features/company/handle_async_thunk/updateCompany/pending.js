function updateCompanyPending() {
  return (state) => {
    state.loadingUpdateCompany = true;
    state.errorUpdateCompany = "";
  };
}
export default updateCompanyPending;
