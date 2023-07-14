export default function fetchContactFulfilled() {
  return (state, action) => {
    state.loading = false;
    state.error = "";
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.pagesLoaded++;
      state.contacts = state.contacts.concat(action.payload.data);
      state.hasMore = action.payload.hasMore;
      state.lastId = state.contacts[state.contacts.length - 1].companie_id;
    } else {
      state.error = "There was an error while fetching contacts";
    }
    // state.payload = action.payload.contacts;
    state.error = "";
  };
}
