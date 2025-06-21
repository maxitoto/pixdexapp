import { StatusBar, View,StyleSheet } from "react-native";
import { HeaderBar } from "./components/HeaderBar";
import { Banner } from "./components/Banner";
import { CategoryList } from "./components/CategoryList";

export function HomeScreen() {
  return (
      <View >
        <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />
        <HeaderBar/> 
        <Banner/>
        <CategoryList/>
      </View>
  );
}

