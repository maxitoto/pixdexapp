import { View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/src/constants/colors";

export function Heart() {
    return (
        <View>
            <Octicons name="heart-fill" color={colors.purpuraClaro} size={20}/>
        </View>
    );
}
