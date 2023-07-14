export default function updateContactFulfilled() {
  return (state, action) => {
    console.log(action.payload);
    state.loadingUpdateContact = false;
    state.errorUpdateContact = "";
    if (action.payload.status !== 200) {
      state.errorUpdateContact =
        "There was an error while updating your contact";
    }
  };
}
