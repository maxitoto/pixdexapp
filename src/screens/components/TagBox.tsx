import { colors, ColorName } from "@/src/constants/colors";
import { View, StyleSheet } from "react-native";

type Props = {
    children: React.ReactNode;
    backgroundColor?: ColorName;
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    
};

export function TagBox({children, backgroundColor="grisOscuro", padding, paddingBottom, paddingTop, paddingLeft, paddingRight}:Props) {
    return (
        <View style={[
            {
                backgroundColor:colors[backgroundColor],
                padding:padding,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
            },
            styles.container
            ]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:5,
    },
});
