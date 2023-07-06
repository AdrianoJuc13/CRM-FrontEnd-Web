export default function updateCompanyFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateCompany = false;
    state.errorUpdateCompany = "";
    if (action.payload.status !== 200) {
      state.errorUpdateCompany =
        "There was an error while updating your company";
    }
  };
}
