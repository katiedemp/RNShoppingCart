import { light as lightTheme, mapping } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigatorMain from './src/navigations/NavigatorMain';
import { persistor, store } from './src/redux/store/store';

function App(): ReactElement {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <NavigationContainer>
              <NavigatorMain />
            </NavigationContainer>
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
