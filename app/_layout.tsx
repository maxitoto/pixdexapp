import { StyleSheet, SafeAreaView, View} from 'react-native';
import { Slot } from 'expo-router'
import { ContenidoProvider } from '@/src/context/useDataContext';
import { colors } from '@/src/constants/colors';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.screenContainer}>
        <ContenidoProvider>
            <Slot/>
        </ContenidoProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { 
    flex:1,
    backgroundColor: colors.fondo,
    marginTop: 24,
    padding: 5,
  },
});

