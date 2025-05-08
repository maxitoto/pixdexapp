import { colors } from "@/src/constants/colors";
import { useFonts } from "expo-font";
import { TextProps, Text } from "react-native";

export function TextFont({ style, ...props }: TextProps) {
  const [loaded] = useFonts({
    "PressStart2P-Regular": require("@/assets/fonts/PressStart2P-Regular.ttf"),
  });

  if (!loaded) return <Text style={style} {...props}>{props.children}</Text>;

  return (
    <Text
      style={[
        { fontFamily: "PressStart2P-Regular", color: colors.lightGray },
        style
      ]}
      {...props}
    >
      {props.children}
    </Text>
  );
}
