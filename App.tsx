// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Navigation from '@navigation/Navigation';
// // import '@unistyles/unistyles'

// const App = () => {
//   return (
 

//       <Navigation />

//   )
// }

// export default App





import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '@navigation/Navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/states/store';
import { PersistGate } from 'redux-persist/integration/react';


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



