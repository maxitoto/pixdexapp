import { View, StyleSheet } from "react-native";
import { ButtonGame } from "./ButtonGame";
import { colors } from "@/src/constants/colors";

export function Banner(){
    return (
    <View style={styles.buttonGameAreaContainer}>
        <ButtonGame 
        title="Desafío del Ahorcado"
        description={"Adivina los titulos letra por letra. ¿Cúantos puedes indentificar?"}
        />
        <ButtonGame 
        backgroundColor="verde"
        title="Pixel Reveal"
        description={'Identifica titulos a partir de imágenes pixeladas. ¿Cuántos puedes adivinar?'}
        />
    </View>
);}

const styles = StyleSheet.create({
    buttonGameAreaContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginVertical:5,
        gap:10,
        maxWidth:"100%"
      },
});
