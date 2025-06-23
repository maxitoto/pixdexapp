import { StyleSheet, SafeAreaView, View, Platform, StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import { ContenidoProvider } from '@/src/context/useDataContext';
import { colors } from '@/src/constants/colors';

export default function RootLayout() {
  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Container style={styles.screenContainer}>
      <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />
      <ContenidoProvider>
        <Slot />
      </ContenidoProvider>
    </Container>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.fondo,
    marginTop: Platform.OS === 'web' ? 0 : 24,
    padding: 5,
  },
});
