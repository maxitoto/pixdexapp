import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, StyleSheet, StatusBar, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextFont } from "../../components/TextFont";
import { colors } from "@/src/constants/colors";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { CardAudioVisual } from "../../home/components/CardAudioVisual";

type TRouteParams = { itemData?: string;};
  
  export function MainContent() {
    const { itemData } = useLocalSearchParams<TRouteParams>();
    const router = useRouter();
    
    // Convertimos el string a objeto
    const item = itemData ? JSON.parse(itemData) : null;
    return (
        <SafeAreaView style={styles.screenContainer}>
            <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />

            <View style={{alignItems:"flex-start", marginVertical:10}}>
                <Pressable style={styles.backButton} onPress={() => router.back()}>
                    <Octicons 
                        name="arrow-left" 
                        size={20} 
                        color={colors.lightGray} 
                        style={{top:-2}}
                    />

                    <TextFont style={{}} >BACK</TextFont>
                </Pressable>  
            </View>
            

            {item && (
                <View style={{flex: 1, padding: 5, justifyContent: "flex-start"}}>
                    <CardAudioVisual 
                        contenido={item} 
                        isSmall={true} 
                        style={{ 
                            flex:1,
                            width: "100%",        
                        }}
                    />
                </View>
        )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    backgroundColor: colors.fondo,
    padding: 5,
  },
  backButton: {
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
});