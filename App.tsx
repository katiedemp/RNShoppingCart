import { light as lightTheme, mapping } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import NavigatorMain from './src/navigations/NavigatorMain';
import store from './src/redux/store/store';

function App(): ReactElement {
  return (
    <>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <NavigationContainer>
            <NavigatorMain />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </>
  );
}

export default App;
