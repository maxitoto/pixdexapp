import { Pressable, View, StyleSheet } from "react-native"
import { Octicons } from "@expo/vector-icons";
import { TextFont } from "@/src/screens/Testing/Textos";
import { colors, ColorName } from "@/src/constants/colors";
 
type Props = {
    iconName: keyof typeof Octicons.glyphMap,
    iconSize: number,
    iconColor: string,
    text: string,
    textSize?:number,
    textColor?:ColorName,
    action?: () => void
}

export function PressableIconText({iconName, iconSize, iconColor, 
                                    text, textSize, action, textColor="lightGray"}: Props)
{
    return (
            <Pressable style={styles.Button} onPress={action}>
                <Octicons name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
                <TextFont color={textColor} size={textSize} texto={text}/>
            </Pressable>
    );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.purpuraOscuro,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    paddingTop: 6,
    paddingHorizontal: 10,
    gap: 5,
    borderWidth:2,
    borderTopColor:colors.purpuraClaro,
    borderLeftColor:colors.purpuraClaro,
    borderRightColor:colors.purpuraOscuro,
    borderBottomColor:colors.purpuraOscuro,
  },
  icon: {
    top:-2
  },
});
