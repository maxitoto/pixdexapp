import { useFonts } from "expo-font";
import { Text, StyleSheet } from "react-native";
import { colors, ColorName} from "@/src/constants/colors";

type propsTextFont={
    texto?:string
    color?: ColorName,
    size?: number,
    align?:"center"|"left"|"right",
    lineHeight?:number | undefined
}

export function TextFont({texto="", color="lightGray", size=5, align="center", lineHeight}:propsTextFont) {
    const [loaded] = useFonts({
        "PressStart2P-Regular": require("@/assets/fonts/PressStart2P-Regular.ttf"),
    });

    if (!loaded) return <Text style={[
            {
                color:colors[color],
                fontSize:size,
                textAlign:align,
                lineHeight: lineHeight
                
            },
        ]}>{texto}</Text>;
    return (
        <Text style={[
            {
                color:colors[color],
                fontSize:size,
                textAlign:align,
                lineHeight: lineHeight
            },
            styles.textFont
        ]}>{texto}</Text>
    );
}

type propsText={
    texto?:string
    color?: ColorName,
    size?: number,
    align?:"center"|"left"|"right",
    font?: "sans-serif"|"serif"|"monospace"
}

export function TextNormal({texto="", color="lightGray", size=5, align="center", font="sans-serif"}:propsText) {
    return (
        <Text style={[
            {
                color:colors[color],
                fontSize:size,
                textAlign:align,
                fontFamily: font
            },
        ]}>{texto}</Text>
    );
}


const styles = StyleSheet.create({
    textFont: {
        fontFamily: "PressStart2P-Regular",
    },
});