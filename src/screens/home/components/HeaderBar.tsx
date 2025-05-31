import { View, StyleSheet, Alert } from "react-native";
import {colors} from "@/src/constants/colors";
import { TextFont } from "../../components/TextFont"
import { PressableIconText } from "@/src/screens/components/PressableIconText";

export function HeaderBar() {
  
    return (
        <View style={styles.headerContent}>
            <View>
                <TextFont style={styles.textTitle}>Pixdex</TextFont>
            </View>

            <PressableIconText 
              iconName={"gear"} 
              iconSize={12} 
              iconColor={colors.lightGray} 
              text={"Filtrar"}   
              textSize={10}  
              action={() => Alert.alert("Filtrar")}         
            />

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
  }
});
