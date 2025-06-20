import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBar } from "./components/HeaderBar";
import { Banner } from "./components/Banner";
import { CategoryList } from "./components/CategoryList";
import { colors } from "@/src/constants/colors"

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />
      <HeaderBar/> 
      <Banner/>
      <CategoryList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    backgroundColor: colors.fondo,
    padding: 5,
  },
});