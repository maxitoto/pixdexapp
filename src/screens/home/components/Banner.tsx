import { View, StyleSheet } from "react-native";
import { ButtonGame } from "./ButtonGame";
import { ROUTES } from "@/src/constants/navigation/ROUTES";
import { router } from "expo-router";

export function Banner(){
    return (
    <View style={styles.buttonGameAreaContainer}>

        <ButtonGame 
        title="Desafío del Ahorcado"
        description={"Adivina los titulos letra por letra. ¿Cúantos puedes indentificar?"}
        action={() => router.push({ 
            pathname: `${ROUTES.GAMES}[select_game]`, 
            params: { select_game: "hangman" } 
        })}
        />

        <ButtonGame 
        backgroundColor="verde"
        title="Pixel Reveal"
        description={'Identifica titulos a partir de imágenes pixeladas. ¿Cuántos puedes adivinar?'}
        action={() => router.push({ 
            pathname: `${ROUTES.GAMES}[select_game]`, 
            params: { select_game: "pixelreveal" } 
        })}
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
