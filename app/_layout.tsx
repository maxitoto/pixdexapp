import { View , StyleSheet} from 'react-native';
import { Slot } from 'expo-router'
import { ContenidoProvider } from '@/src/context/useDataContext';

export default function RootLayout() {
  return (
    <View style={styles.container}>
        <ContenidoProvider>
          <Slot/>
        </ContenidoProvider>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

