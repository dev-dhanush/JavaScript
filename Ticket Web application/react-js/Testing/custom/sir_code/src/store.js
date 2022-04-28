import { createStore } from "redux";
import counterReducer from "./reducer/CounterReducer";
function configureStore(state = 0) {
  return createStore( counterReducer,state);
}
export default configureStore;
