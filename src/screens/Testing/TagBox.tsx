import { colors } from "@/src/constants/colors";
import { View, StyleSheet } from "react-native";

type props = {
    children: React.ReactNode,
}

export function TagBox({children}:props) {
    return (
        <View style={[styles.container]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.grisOscuro,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:5,
        alignSelf: "center"
    },
});