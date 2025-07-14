import { Stack } from 'expo-router';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { themeStyles } from './constants/theme';

function StackLayout() {
  const { theme } = useTheme();
  const T = themeStyles[theme];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: T.BG },
        headerTintColor: T.ACCENT,
        headerTitleStyle: { color: T.ACCENT },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Profile", headerRight: () => <ThemeToggle /> }}
      />
      <Stack.Screen
        name="about"
        options={{ title: "About", headerRight: () => <ThemeToggle /> }}
      />
    </Stack>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}