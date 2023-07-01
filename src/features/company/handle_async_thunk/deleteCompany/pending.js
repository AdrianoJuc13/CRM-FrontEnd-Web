export default function deleteCompanyPending() {
  return (state) => {
    state.loadingDeleteCompany = true;
    state.errorDeleteCompany = "";
  };
}
