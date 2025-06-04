import { colors } from "@/src/constants/colors";
import { Text, StyleSheet, View } from 'react-native';

export function TextTag({texto}:{texto:string}){
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{texto}</Text>
        </View>
            

    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.lightGray,
        backgroundColor: colors.grisOscuro,
        fontSize: 8,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    textContainer: {
        flexWrap: "wrap",
    }
});

