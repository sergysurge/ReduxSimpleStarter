//State argument is the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      //always return a fresh object
      return action.payload;
  }

  //returns state either way, even when you dont do anything with the action
  return state
}