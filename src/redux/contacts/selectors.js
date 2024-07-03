
export const selectFilteredContacts = (state) => {

  const filter = state.contacts.filter.toLowerCase();
  return state.contacts.items.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );
};
