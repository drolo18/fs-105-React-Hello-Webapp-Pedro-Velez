export const initialStore = () => {
  return {
    contacts: [],
    contact: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'setContacts':

      const data = action.payload

      return {
        ...store,
        contacts: data
      };

    case 'editContact':

    const contact = action.payload

      return {
        ...store,
        contact: contact
      };


    default:
      throw Error('Unknown action.');
  }
}
