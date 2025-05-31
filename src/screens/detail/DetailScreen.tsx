import { View, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextFont } from "@/src/screens/components/TextFont";
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
  if (!id_item) return <View style={styles.alertErrorText}><TextFont>Error, id item expired</TextFont></View>;

  //y una salida si no se encuentra el VA con id x
  const item = id_item ? contenidosAudiovisuales.find((item) => item.id === id_item) : undefined;
  if (!item) return <View style={styles.alertErrorText}><TextFont>Item not found</TextFont></View>;


  return (
    <View style={{flex:1}}>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar backgroundColor="rgba(231, 94, 14, 0.67)" barStyle="light-content" />

        <View style={styles.pressableContainer}>
          <PressableIconText 
            iconName={"arrow-left"} 
            iconSize={20} 
            iconColor={colors.lightGray} 
            text={"BACK"} 
            action={() => router.back()}                
          />
        </View>
          

        {item && (
            <View style={styles.cardContainer}>
                <CardAudioVisual 
                    contenido={item} 
                    isSmall={true} 
                    style={styles.card}
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
  pressableContainer: {
    alignItems:"flex-start", 
    marginVertical:10
  },
  alertErrorText: {
    backgroundColor:colors.darkRed
  },
  cardContainer: {
    flex: 1, 
    padding: 5, 
    justifyContent: "flex-start"
  },
  card: {
    flex:1,
    width: "100%",
    paddingBottom:25,
  }
});
