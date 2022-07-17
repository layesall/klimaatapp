import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';

import RootStack from './navigation/';

export default function App() {
  return (
    <Suspense fallback={<></>}>
      <StatusBar style="auto" />
      <RootStack />
    </Suspense>
  );
}

