import "./src/ignoreWarnings";

import React from 'react';

import { Platform, StatusBar, StyleSheet, UIManager, View } from 'react-native';
import Navigator from './src/navigation/index';
import theme from './src/utils/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/src/integration/react';
import { store, persistor } from './src/redux/store';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = props => {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            // barStyle="light-content"
            backgroundColor={theme.primary}
            translucent={true}
          />

          <Navigator />
        </View>
    //  </PersistGate>
    //  </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
