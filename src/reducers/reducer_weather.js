import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      //identical lines
      //three dots, take the state array and flatten it out for us
      return [ action.payload.data, ...state];
  }
  // console.log('Action received', action);
  return state;
}