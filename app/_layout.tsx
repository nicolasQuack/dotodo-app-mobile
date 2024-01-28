import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { DarkTheme, LightTheme, NavigationDarkTheme, NavigationLightTheme } from '../constants/theme'
import { TodosProvider } from '@/context';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    Pacifico: require('../assets/fonts/Pacifico-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark'

  const appTheme = isDark ? DarkTheme : LightTheme

  return (
    <PaperProvider theme={appTheme}>
      <ThemeProvider value={isDark ? NavigationDarkTheme : NavigationLightTheme}>
        <TodosProvider>
          <Stack screenOptions={{ headerStyle: { backgroundColor: appTheme.colors.secondaryContainer } }}>
            <Stack.Screen name="index" options={{ headerTitle: 'DotoDo', headerTitleStyle: { fontFamily: 'Pacifico', fontSize: 24, color: appTheme.colors.onBackground }, headerTitleAlign: 'center' }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </TodosProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}
