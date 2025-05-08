import { View, StyleSheet, Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import {colors} from "@/src/constants/colors";
import { TextFont } from "../../components/TextFont"


export function HeaderBar() {
  
    return (
        <View style={styles.headerContent}>
            <View>
                <TextFont style={styles.textTitle}>Pixdex</TextFont>
            </View>
            <Pressable style={styles.filterButtonContent}>
                <Octicons name="gear" size={12} color={colors.lightGray} />
                <TextFont style={styles.textFilter}>Filtrar</TextFont>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  textTitle: {
    color: colors.purpura,
    fontSize: 20,
  },
  filterButtonContent: {
    backgroundColor: colors.purpura,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderTopColor: colors.purpuraClaro,
    borderBottomColor: colors.purpuraOscuro,
    borderLeftColor: colors.purpuraClaro,
    borderRightColor: colors.purpuraOscuro,
    gap:10,
  },
  textFilter: {
    fontSize: 10,
  },
});
