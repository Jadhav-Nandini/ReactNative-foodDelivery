
import { Provider } from 'react-redux';
import { store } from '@states/store';
import Navigation from '@navigation/Navigation';

const App = () => {
  return (

      <Provider store={store}>
        <Navigation />
      </Provider>

  );
};

export default App;
