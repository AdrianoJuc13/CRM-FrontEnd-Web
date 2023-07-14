function addCompanyPending() {
  return (state, action) => {
    state.loadingAddCompany = false;
    state.errorAddCompany = "";
    if (action.payload.status !== 200) {
      state.errorAddCompany = "There was an error while adding your company";
    }
  };
}

export default addCompanyPending;
