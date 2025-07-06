import { View } from "react-native";
import { HeaderBar } from "./components/HeaderBar";
import { Banner } from "./components/Banner";
import { CategoryList } from "./components/CategoryList";
import { FilterProvider } from "@/src/context/useDataFilterContext";

export function HomeScreen() {
  return (
      <View >
        <FilterProvider>
          <HeaderBar/>
          <Banner/>
          <CategoryList/>
        </FilterProvider>
      </View>
  );
}

