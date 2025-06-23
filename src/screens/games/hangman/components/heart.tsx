import { View } from "react-native";
import { Octicons } from "@expo/vector-icons";
interface HeartProps {
    size?: number;
    color?: string;
    backgroundColor?: string;
    index?: number;
}

export const Heart: React.FC<HeartProps> = ({
    size = 20,
    color = "red",
    backgroundColor = "white",
    index,
}) => {
    return (
        <View
            style={{
                width: size,
                height: size,
                backgroundColor,
                borderRadius: size / 2,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Octicons name="heart" color={color} size={size - 2} />
        </View>
    );
};
