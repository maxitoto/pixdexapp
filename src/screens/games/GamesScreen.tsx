import { View, StyleSheet, TextInput } from "react-native";
import { TextFont, TextNormal } from "@/src/screens/components/Textos";
import { BoxContent } from "@/src/screens/components/BoxContent";
import { PressableIconText } from "@/src/screens/components/PressableIconText";
import { router, useLocalSearchParams } from "expo-router";
import { ModalExpo } from "@/src/screens/components/ModalExpo";
import { useState } from "react";
import { ROUTES } from "@/src/constants/navigation/ROUTES";
import type { ColorName } from "@/src/constants/colors";

type JuegoSlug = "hangman" | "pixelreveal";

export function GamesScreen() {
    const [isVisible, setIsVisible] = useState(false);
    const [username, onChangeUsername] = useState("");

    const { select_game } = useLocalSearchParams();
 
    const dataPorJuego: Record<JuegoSlug, { titulo: string; descripcion: string; color: ColorName; rutaJuego: string }> = {
        "hangman": {
            titulo: "Hangman Challenge",
            descripcion: "Guess the title of popular TV shows, movies, and anime one letter at a time. You have 5 lives - can you get the highest score?",
            color: "purpuraOscuro",
            rutaJuego: ROUTES.HANGMAN.toString(),
        },
        "pixelreveal": {
            titulo: "Pixel Reveal Challenge",
            descripcion: "Adivina títulos a partir de imágenes pixeladas.",
            color: "verde",
            rutaJuego: ROUTES.PIXELREVEAL.toString(),
        },
    };

    const slugParam = select_game as JuegoSlug;

    const info = dataPorJuego[slugParam];

    if (!info) return <TextFont size={25} texto="Juego no encontrado"/>

    return (
        <View style={styles.container}>

            <View style={styles.pressableContainer}>
                <PressableIconText 
                    iconName={"arrow-left"} 
                    iconSize={20} 
                    text={"BACK"} 
                    textSize={12}
                    action={() => router.back()}                
                />
            </View>

            <BoxContent>
                <View style={styles.blockContent}>
                    <TextFont size={25} texto={info.titulo} color={info.color} align="center" lineHeight={35}/>
                    <TextNormal 
                        texto={info.descripcion} 
                        size={15} align="center"
                    />

                    <View style={styles.buttomPlay}>
                        <BoxContent borderColor="verde" borderWidth={2}>
                            <PressableIconText 
                                text={"START GAME"} 
                                textSize={12}
                                action={() => setIsVisible(true)}                
                            />
                        </BoxContent>     
                    </View>
                </View>
            </BoxContent>

            <ModalExpo visible={isVisible} onModalClose={() => setIsVisible(false)}>
                <View style={styles.blockContentModal}>
                    <TextFont size={20} texto="Enter You Name"/>
                    <BoxContent borderColor="purpuraClaro" borderWidth={2}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeUsername}
                            value={username}    
                            placeholder="Enter Username"    
                            placeholderTextColor={"white"}   
                            autoCapitalize="none"
                            autoCorrect={false}
                            spellCheck={false}   
                            autoComplete="off"     
                        />
                    </BoxContent>
                    <View style={styles.buttomPlay}>
                        <BoxContent borderColor="verde" borderWidth={2}>
                            <PressableIconText 
                                text={"START GAME"} 
                                textSize={12}
                                action={() => {
                                    if(!username) return
                                    router.push({ 
                                        pathname: `${info.rutaJuego}[name]`, 
                                        params: { name: username } 
                                    })
                                }}            
                            />
                        </BoxContent>     
                    </View>
                </View>
            </ModalExpo>
        </View>     
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:10,
    },
    pressableContainer: {
        alignItems:"flex-start", 
    },
    blockContent: {
        paddingVertical:15,
        paddingHorizontal:25,
        gap:10,
    },
    buttomPlay:{
        justifyContent:"center",
        alignItems:"flex-end",
        marginRight:10,
    },
    input: {
    color: 'white',
    textAlign:"center",
  },
  blockContentModal: {
    paddingHorizontal:20,
    gap:10,
    paddingBottom:10,
  }
});
