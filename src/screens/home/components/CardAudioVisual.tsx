import { colors } from "@/src/constants/colors";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TextFont } from "../../components/TextFont";
import { generosContenidoAudiovisual } from "@/src/constants/Data/generosContenidoAudiovisual";
import { ContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";

import { StyleProp, ViewStyle } from "react-native";

interface CardAudioVisualProps {
  contenido: ContenidoAudiovisual;
  isSmall: boolean;
  style?: StyleProp<ViewStyle>;
}

export function CardAudioVisual({ contenido, isSmall, style }: CardAudioVisualProps) {
  return (
    <View style={[styles.card, style]}>
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: contenido.imageUrl }}
      />
      <View style={styles.textContainer}>
        <TextFont style={[styles.titleCard, { fontSize: isSmall ? 10 : 12 }]} numberOfLines={2}>
          {contenido.nombre}
        </TextFont>

        {isSmall && (
           <View>
            <Text style={styles.descriptionCard} numberOfLines={2}>
              {contenido.descripcion}
            </Text>
            <TextFont style={{color:colors.verde, fontSize:14, marginVertical:5}}>Genres</TextFont>
          </View>
        )}
        
        <View style={styles.generoBox}>
          {contenido.generos.map((genero) => {
            return (
              <Text style={styles.generoText} key={genero}>
                {generosContenidoAudiovisual[genero].nombre}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRightColor:colors.purpuraClaro,
    borderLeftColor:colors.purpuraOscuro,
    borderStartColor:colors.purpuraOscuro,
    borderBottomColor:colors.purpuraClaro,
    width: 120,
    height: 240,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    backgroundColor:"white"
  },
  textContainer: {
    padding: 5,
    height: 90,
    justifyContent:"center",
  },
  titleCard: {
    marginBottom: 5,
    color: colors.lightGray,
  },
  generoBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  generoText: {
    color: colors.lightGray,
    backgroundColor: colors.grisOscuro,
    fontSize: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  descriptionCard: {
    fontSize: 10,
    color: colors.lightGray,
    marginTop: 5,
  }
});

