import { router, useLocalSearchParams } from "expo-router";
import { TextFont, TextNormal } from "@/src/screens/components/Textos";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { PressableIconText } from "@/src/screens/components/PressableIconText";
import { useState } from "react";
import { Heart } from "@/src/screens/games/hangman/components/Heart";
import { BoxContent } from "@/src/screens/components/BoxContent";
import { useDataContext } from "@/src/context/useDataContext";
import { ModalExpo } from "@/src/screens/components/Modal";
import { IContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";
import { letters } from "@/src/constants/letters";

export function HangmanGame(){

    const { contenidos } = useDataContext();
    
    const { name } = useLocalSearchParams();
    const username = name as string;

    const [isVisibleTitleModal, setIsVisibleTitleModal] = useState(false);
    const [isVisibleLetterModal, setIsVisibleLetterModal] = useState(false);

    const [lives, setLives] = useState<number>(5);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [guessedTitles, setGuessedTitles] = useState<string>();
    const [contenidoToGuess, setContenidoToGuess] = useState<IContenidoAudiovisual>(contenidos[Math.floor(Math.random() * contenidos.length)]);


    function restarVidas() {
        const prevLives = lives;
        setLives(prevLives - 1);
        if((prevLives-1)<= 0) {
            setGuessedLetters(letters.map(letter => letter.toLowerCase()));
            alert("Game Over");
        } 
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.pressableContainer}>
                <PressableIconText 
                    iconName={"arrow-left"} 
                    iconSize={20} 
                    text={"EXIT"} 
                    textSize={12}
                    action={() => router.back()}                
                />
                
                {
                  lives <= 0 ? <PressableIconText text="Try Again" textSize={12} 
                  action={() => {
                    setLives(5);
                    setGuessedLetters([]);
                    setGuessedTitles("");
                    setContenidoToGuess(contenidos[Math.floor(Math.random() * contenidos.length)]);
                  }}/> :
                    <View style={{flexDirection:"row", gap:5}}>
                        {Array.from({ length: lives }).map((_, i) => (
                            <Heart key={i} />
                        ))}
                    </View>
                }
                

                <TextNormal texto={username} size={15}/>
            </View>
            <BoxContent>
                <View style={styles.subContainer}>
                    <View style={styles.buttonContainer}>
                        <PressableIconText 
                            text={"GUESS TITLE"} 
                            textSize={12}
                            action={() => {
                                if(lives === 0) return;
                                setGuessedTitles("");
                                setIsVisibleTitleModal(true);
                            }}                
                        />
                        <PressableIconText 
                            text={"GUESS LETTER"} 
                            textSize={12}
                            action={() => {
                                if(lives === 0) return;
                                setIsVisibleLetterModal(true);
                            }}                
                        />
                    </View>

                    <Image
                        style={styles.image}
                        source={{ uri: contenidoToGuess.imageUrl }}
                        resizeMode="cover"
                    />

                    <View style={{flexDirection:"row", gap:5, paddingHorizontal:5, flexWrap:"wrap"}}>
                        {
                            contenidoToGuess.nombre.split('').map((letter, index) => {
                                const lowerLetter = letter.toLowerCase();
                                return lowerLetter === " " ? 
                                    <TextFont key={index} size={5} texto={" "} /> :
                                    guessedLetters.includes(lowerLetter) ? 
                                    <TextFont key={index} size={15} texto={letter} /> :
                                    <TextFont key={index} size={13} texto={"_"} />;
                            })
                        }
                    </View>
                </View>
            </BoxContent>

            <ModalExpo visible={isVisibleTitleModal} onModalClose={() => setIsVisibleTitleModal(false)}>
                <View style={styles.blockContentModal}>
                    <TextFont size={20} texto="Guess To Title"/>
                    <BoxContent borderColor="purpuraClaro" borderWidth={2}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setGuessedTitles}
                            value={guessedTitles}                           
                        />
                    </BoxContent>
                    <View style={styles.buttomSend}>
                        <BoxContent borderColor="verde" borderWidth={2}>
                            <PressableIconText 
                                text={"SUBMIT GUESS"} 
                                textSize={12}
                                action={() => {
                                    if (contenidoToGuess.nombre.toLowerCase() === guessedTitles?.toLowerCase()) {
                                        alert("You guessed the title correctly!");
                                        setGuessedLetters([]);
                                        setGuessedTitles("");
                                        setContenidoToGuess(contenidos[Math.floor(Math.random() * contenidos.length)]);
                                    }                                        
                                    else {
                                        restarVidas();
                                    }
                                    setIsVisibleTitleModal(false);
                                }}            
                            />
                        </BoxContent>     
                    </View>
                </View>
            </ModalExpo>

            <ModalExpo visible={isVisibleLetterModal} onModalClose={() => setIsVisibleLetterModal(false)}>
                <View style={styles.blockContentModal}>
                    <TextFont size={20} texto="Guess To Letter"/>
                    <View style={styles.buttomSendLetters}>
                        {
                            letters.map((letter, index) => (
                                <View style={
                                    {
                                        opacity: guessedLetters.includes(letter.toLowerCase()) ? 0.5 : 1,
                                        pointerEvents: guessedLetters.includes(letter.toLowerCase()) ? "none" : "auto",
                                        margin:4,
                                    }
                                }>
                                    <PressableIconText 
                                        key={index}
                                        text={letter} 
                                        textSize={12}
                                        action={() => {
                                            setGuessedLetters(prevLetters => [...prevLetters, letter.toLowerCase()]);
                                            if (!contenidoToGuess.nombre.toLowerCase().includes(letter.toLowerCase())) {
                                                restarVidas();
                                            }
                                            setIsVisibleLetterModal(false);
                                        }}         
                                    /> 
                                </View>
                                    
                            ))
                        }
                        
                            
                            
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
        flexDirection:"row",
        alignItems:"center", 
        justifyContent:"space-between"
    },
    buttonContainer: {
        flexDirection:"row",
        gap:15,
        justifyContent:"center"
    },
    subContainer: {
        gap:10,
        padding:20,
        alignItems:"center",
        height:"89%"
    },
    image: {
        width: "100%",
        height:"100%",
        marginBottom:10
    },
    buttomSend:{
        justifyContent:"center",
        alignItems:"flex-end",
        marginRight:10,
    },
    input: {
        color: 'white',
        textAlign:"center"
  },
    blockContentModal: {
        paddingHorizontal:20,
        gap:10,
        paddingBottom:10,
  },
  buttomSendLetters: {
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10,
    justifyContent:"center"
  }
});