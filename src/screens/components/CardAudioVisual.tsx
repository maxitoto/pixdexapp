import { colors } from "@/src/constants/colors";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextFont } from "./TextFont";
import { generosContenidoAudiovisual } from "@/src/constants/Data/generosContenidoAudiovisual";
import { ContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";
import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";

import { StyleProp, ViewStyle } from "react-native";

interface CardAudioVisualProps {
  contenido: ContenidoAudiovisual;
  isSmall: boolean;
  style?: StyleProp<ViewStyle>;
}

export function CardAudioVisual({ contenido, isSmall, style }: CardAudioVisualProps) {
  return (
    <View style={[styles.card, style]}>
      <Image
        style={styles.image}
        source={{ uri: contenido.imageUrl }}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <TextFont style={[styles.titleCard, { fontSize: isSmall ? 10 : 12 }]} numberOfLines={2}>
          {contenido.nombre}
        </TextFont>

        {isSmall && (
           <View>
            <View style={styles.generoBox}>
              <TextFont style={[styles.generoText, {fontSize:6, textAlign:"center",paddingTop:5, paddingBottom:-1}]}>
                {tiposContenidoAudiovisual.find(tipo => tipo.id === contenido.tipoId)?.singular || 'Desconocido'}
              </TextFont>
            </View>
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
  },
  image: {
    flex: 1,
    width: "100%",
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

