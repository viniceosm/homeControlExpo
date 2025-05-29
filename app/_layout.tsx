import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen'; // Added
import { useEffect } from 'react'; // Added

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync(); // Added

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({ // Modified to capture error
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) { // Modified condition
      SplashScreen.hideAsync();
    }
  }, [loaded, error]); // Added error to dependencies

  // If the app is not loading fonts, we can return the layout
  if (!loaded && !error) { // Modified condition
    return null; // Keep returning null while fonts are loading and no error
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" options={{ gestureEnabled: false }} />
        <Stack.Screen name="settings" />
      </Stack>
    </ThemeProvider>
  );
}
