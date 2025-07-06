import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { ContenidoProvider } from '@/src/context/useDataContext';
import { colors } from '@/src/constants/colors';

export default function RootLayout() {
  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Container style={styles.screenContainer}>
      <StatusBar style='light'/>
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
    paddingTop: Platform.OS === 'web' ? 0 : 42,
    paddingHorizontal: 5,
  },
});
