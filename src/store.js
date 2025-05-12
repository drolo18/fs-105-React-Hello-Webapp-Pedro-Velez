export const initialStore=()=>{
  return{
   contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add':

      const data = action.payload

      return {
        ...store,
        contacts: data
      };
    default:
      throw Error('Unknown action.');
  }    
}
