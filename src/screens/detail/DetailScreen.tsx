import { View, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextNormal } from "@/src/screens/components/Textos";
import { colors } from "@/src/constants/colors";
import { CardAudioVisual } from "@/src/screens/components/CardAudioVisual";
import { contenidosAudiovisuales } from "@/src/constants/Data/contenidosAudiovisuales";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PressableIconText } from "../components/PressableIconText";

type TRouteParams = { id: string;};
  
export default function DetailScreen() {
  const { id } = useLocalSearchParams<TRouteParams>();
  const router = useRouter();
  
  //salida en caso de error
  const id_item = id ? parseInt(id) : undefined;
  if (!id_item) return (
    <View style={styles.alertErrorText}>
      <TextNormal texto="Error, id item expired" size={10}/>
    </View>

  );

  //y una salida si no se encuentra el VA con id x
  const item = id_item ? contenidosAudiovisuales.find((item) => item.id === id_item) : undefined;
  if (!item) return ( 
    <View style={styles.alertErrorText}>
      <TextNormal texto="Item not found" size={10}/>
    </View>
  );


  return (
      <View style={styles.screenContainer}>
        <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />

        <View style={styles.pressableContainer}>
          <PressableIconText 
            iconName={"arrow-left"} 
            iconSize={20} 
            iconColor={colors.lightGray} 
            text={"BACK"} 
            textSize={12}
            action={() => router.back()}                
          />
        </View>
          

        {item && (
                <CardAudioVisual 
                    contenido={item} 
                    isSmall={true} 
                />
        )}
        
      </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { 
    gap: 10,
    flex:1,
  },
  pressableContainer: {
    alignItems:"flex-start", 
  },
  alertErrorText: {
    backgroundColor:colors.darkRed
  },
});
