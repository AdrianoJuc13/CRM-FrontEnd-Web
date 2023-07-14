function setItemsPerPage(state, action) {
  const value = action.payload;

  if (value === undefined || value === null || value === 0) {
    throw Error("value is undefined or null or 0");
  }
  if (typeof value !== "number") {
    throw Error("value is not a number");
  }

  state.itemsPerPage = value;
}

export default setItemsPerPage;
