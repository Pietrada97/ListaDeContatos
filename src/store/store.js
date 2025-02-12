import { createStore } from 'redux';
import { Provider } from 'react-redux';
import contactsReducer from './reducers';

const store = createStore(contactsReducer);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
