import { dark as darkTheme, mapping } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { ReactElement } from 'react';
import NavigatorMain from './src/navigations/NavigatorMain';

function App(): ReactElement {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <NavigationContainer>
          <NavigatorMain />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App;
