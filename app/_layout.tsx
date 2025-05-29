import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#990099',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="galeria" />
    </Stack>
  );
}
