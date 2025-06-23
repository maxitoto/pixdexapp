import { router, useLocalSearchParams } from "expo-router";
import { TextFont } from "@/src/screens/components/Textos";
import { View, StyleSheet } from "react-native";
import { PressableIconText } from "@/src/screens/components/PressableIconText";
import { useState } from "react";
import { Heart } from "@/src/screens/games/hangman/components/heart";

export function HangmanGame(){
    const { name } = useLocalSearchParams();
    const username = name as string;

    const [lives, setLives] = useState(5);

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
                
                <View>
                    {Array.from({ length: lives }).map((_, i) => (
                        <Heart  size={20} key={i} index={i} backgroundColor="violet" />
                    ))}
                </View>

            </View>
            <TextFont  texto={username} size={20}/>
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
});