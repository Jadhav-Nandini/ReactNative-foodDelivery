





// import Navigation from '@navigation/Navigation';
// // import { Text, View } from 'react-native';

// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Provider } from 'react-redux';
// import { persistor, store } from '@states/store';
// import { PersistGate } from 'redux-persist/integration/react';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//     <Navigation />
//       </PersistGate>
//     </Provider>

//     // <Navigation />

// //     // <View>
// //     // <Text>dfggfgghdgdniodsfdhuighruigrugiuugwwwwwwwwwwwwwweeeeeeeeeeeeeeeeeeeeeee</Text>

// //     // </View>
//   )
// }


// export default App










// import Navigation from '@navigation/Navigation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <Navigation />
//     </SafeAreaProvider>
//   );
// };

// export default App;












import { Provider } from 'react-redux';
import { store } from '@states/store';
import Navigation from '@navigation/Navigation';

const App = () => {
  return (
    // <SafeAreaProvider>
      <Provider store={store}>
        {/* ✅ PersistGate ki zaroorat nahi ab */}
        <Navigation />
      </Provider>

  );
};

export default App;







// locationHeader, SearchBar  safeArea - comment











