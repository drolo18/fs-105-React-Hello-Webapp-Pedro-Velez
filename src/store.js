export const initialStore=()=>{
  return{
   contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'setContacts':

      const data = action.payload

      return {
        ...store,
        contacts: data
      };
    case 'addContacts':

    return {
      ...store, 
      contacts: [...store.contacts, action.payload]
    }

    default:
      throw Error('Unknown action.');
  }    
}
