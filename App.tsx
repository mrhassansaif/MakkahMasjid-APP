import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {TabNavigation} from './routes/TabNavigation';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <TabNavigation />
    </NativeBaseProvider>
  );
}

export default App;
