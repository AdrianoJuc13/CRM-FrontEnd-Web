export default function deleteCompanyFulfilled() {
  return (state, action) => {
    state.loadingDeleteCompany = false;
    state.errorDeleteCompany = "";
    if (action.payload.status != 200) {
      state.errorDeleteCompany =
        "There was an error while deleting your company";
    }
  };
}
