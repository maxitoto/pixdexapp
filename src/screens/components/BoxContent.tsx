import { View } from "react-native";
import { colors } from "@/src/constants/colors";
import type { ColorName } from "@/src/constants/colors";

type Props = {
  children: React.ReactNode;
  borderTopColor?: ColorName;
  borderBottomColor?: ColorName;
  borderLeftColor?: ColorName;
  borderRightColor?: ColorName;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderWidth?: number;
  borderColor?: ColorName;
  paddingVertical?: number;
  paddingHorizontal?: number;
};

export function BoxContent({
  children,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  borderTopWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderRightWidth,
  borderWidth,
  borderColor,
  paddingVertical,
  paddingHorizontal,
}: Props) {
  const dynamicStyle = {
    borderWidth: borderWidth ?? 4,
    borderColor: borderColor ? colors[borderColor] : colors.grisOscuro,

    ...(borderTopColor && { borderTopColor: colors[borderTopColor] }),
    ...(borderBottomColor && { borderBottomColor: colors[borderBottomColor] }),
    ...(borderLeftColor && { borderLeftColor: colors[borderLeftColor] }),
    ...(borderRightColor && { borderRightColor: colors[borderRightColor] }),

    ...(borderTopWidth !== undefined && { borderTopWidth }),
    ...(borderBottomWidth !== undefined && { borderBottomWidth }),
    ...(borderLeftWidth !== undefined && { borderLeftWidth }),
    ...(borderRightWidth !== undefined && { borderRightWidth }),

    ...(paddingVertical !== undefined && { paddingVertical }),
    ...(paddingHorizontal !== undefined && { paddingHorizontal }),
  };

  return <View style={[dynamicStyle]}>{children}</View>;
}


