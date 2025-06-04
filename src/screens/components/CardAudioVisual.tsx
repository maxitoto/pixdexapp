import { colors } from "@/src/constants/colors";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextFont } from "./TextFont";
import { generosContenidoAudiovisual } from "@/src/constants/Data/generosContenidoAudiovisual";
import { IContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";
import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";

import { StyleProp, ViewStyle } from "react-native";
import { TextTag } from "./TextTag";
import { TextSpecial } from "./TextSpecial";

interface CardAudioVisualProps {
  contenido: IContenidoAudiovisual;
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
            <TextTag texto = {tiposContenidoAudiovisual.find(tipo => tipo.id === contenido.tipoId)?.singular || 'Desconocido'}/>
            <Text style={styles.descriptionCard} numberOfLines={2}>
              {contenido.descripcion}
            </Text>
            <TextSpecial texto={"Genres"}/>
          </View>
        )}
        
        <View style={styles.listGenerosTag}>
          {contenido.generos.map((genero) => {
            return (
              <TextTag key={genero} texto={generosContenidoAudiovisual[genero].nombre}/>
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
    borderTopColor:colors.purpuraOscuro,
    borderBottomColor:colors.purpuraClaro,
    width: 120,
    height: 240,
  },
  image: {
    flex: 1,
    width: "100%",
    marginBottom:10
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
  descriptionCard: {
    fontSize: 10,
    color: colors.lightGray,
    marginTop: 5,
  },
  textContenido: {
    fontSize:6, 
    textAlign:"center",
    paddingTop:5, 
    paddingBottom:-1
  },
  textHeadListGenres: {
    color:colors.verde, 
    fontSize:14, 
    marginVertical:5
  },
  listGenerosTag: {
    flexDirection: "row",
    gap: 5,
    flexWrap:"wrap"
  }
});

