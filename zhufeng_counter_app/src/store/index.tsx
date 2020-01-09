import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
//let store = createStore(reducers);
let store = applyMiddleware(thunk)(createStore)(reducers);

export default store;