





import Navigation from '@navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store } from '@states/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, View } from 'react-native';



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Navigation />
      </PersistGate>
    </Provider>
  )
}


export default App



