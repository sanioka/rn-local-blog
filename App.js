import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';

import { bootstrap } from "./src/service/bootstrap.helper";
import { AppNavigation } from "./src/navigation/AppNavigation";
import store from './src/store'

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Pre-load fonts, make any API calls you need to do here
        await bootstrap();

        // Artificially delay for two seconds to simulate a slow loading experience.
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }
    loadResources();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately!
      // If we call this after `setIsReady`, then we may see a blank screen while the app is loading its initial state
      // and rendering its first pixels. So instead, we hide the splash screen once we know the root view has already performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </View>
  );
}
