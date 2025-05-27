import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCSrywuN2Yh83BbaYLF4FyvvZWwYYaW8TY",
  authDomain: "home-control-3d7bb.firebaseapp.com",
  projectId: "home-control-3d7bb",
  storageBucket: "home-control-3d7bb.firebasestorage.app",
  messagingSenderId: "254824748373",
  appId: "1:254824748373:web:6f53bc6c17dfb0478b0bdc",
  measurementId: "G-XW1PCW5CPM"};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
