export default function deleteContactFulfilled() {
  return (state, action) => {
    state.loadingDeleteContact = false;
    state.errorDeleteContact = "";
    if (action.payload.status !== 200) {
      state.errorDeleteContact =
        "There was an error while deleting your contact";
    }
  };
}
