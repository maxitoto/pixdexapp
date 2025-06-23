import { StatusBar, View } from "react-native";
import { HeaderBar } from "./components/HeaderBar";
import { Banner } from "./components/Banner";
import { CategoryList } from "./components/CategoryList";
import { FilterProvider } from "@/src/context/useDataFilterContext";

export function HomeScreen() {
  return (
      <View >
        <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />
        <FilterProvider>
          <HeaderBar/>
          <Banner/>
          <CategoryList/>
        </FilterProvider>
      </View>
  );
}

