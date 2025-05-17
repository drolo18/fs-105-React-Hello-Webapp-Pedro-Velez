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

      return {
        ...store,
        contact: data
      };


    default:
      throw Error('Unknown action.');
  }
}
