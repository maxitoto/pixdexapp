import { View, Pressable, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextFont } from "@/src/screens/components/TextFont";
import { colors } from "@/src/constants/colors";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { CardAudioVisual } from "@/src/screens/components/CardAudioVisual";
import { contenidosAudiovisuales } from "@/src/constants/Data/contenidosAudiovisuales";
import { useLocalSearchParams, useRouter } from "expo-router";

type TRouteParams = { id: string;};
  
export default function DetailScreen() {
  const { id } = useLocalSearchParams<TRouteParams>();
  const router = useRouter();
  

  //salida en caso de error
  const id_item = id ? parseInt(id) : undefined;
  if (!id_item) return <View style={{backgroundColor:colors.darkRed}}><TextFont>Error, id item expired</TextFont></View>;

  //y una salida si no se encuentra el VA con id x
  const item = id_item ? contenidosAudiovisuales.find((item) => item.id === id_item) : undefined;
  if (!item) return <View style={{backgroundColor:colors.darkRed}}><TextFont>Item not found</TextFont></View>;


  return (
    <View style={{flex:1}}>
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
                <TextFont>BACK</TextFont>
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
                        paddingBottom:25,        
                    }}
                />
            </View>
        )}
        
      </SafeAreaView>
    </View>
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
