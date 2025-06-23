import { colors } from "@/src/constants/colors";
import { View, StyleSheet, Image } from "react-native";
import { TextFont, TextNormal } from "@/src/screens/components/Textos";
import { IContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";
import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { ListCategorias } from "./ListCategorias";
import { TagBox } from "./TagBox";
import { useDataContext } from "@/src/context/useDataContext";
import { Platform } from "react-native";

interface CardAudioVisualProps {
  contenido: IContenidoAudiovisual;
  isSmall: boolean;
}

export function CardAudioVisual({ contenido, isSmall }: CardAudioVisualProps) {

  const {generos} = useDataContext();
 
  return (
      <View style={[
        {
          width: isSmall ? "100%" : 150,
          flex: isSmall ? 1 : 0,
          marginBottom: isSmall 
            ? Platform.OS === "web"
              ? 0
              : "10%"
            : 0,
          height: !isSmall ? "99%" : undefined
        },
        styles.container
      ]}>
      <Image
        style={[
          styles.image,
          isSmall && { flex: 1 },
          !isSmall && { height: 225},
        ]}
        source={{ uri: contenido.imageUrl }}
        resizeMode="cover"
      />

      <View style={{paddingHorizontal:5}}>
        <TextFont 
        align={isSmall? "center" : "left"} 
        size={isSmall ? 20 : 10} 
        lineHeight={isSmall ? undefined : 15}
        texto={contenido.nombre}
        />

        {isSmall && (
          <View style={styles.subContainer}>

            <TagBox>
              <TextNormal 
                size={8} 
                texto={tiposContenidoAudiovisual.find(tipo => tipo.id === contenido.tipoId)?.singular || 'Desconocido'}
              />
            </TagBox>

            <TextNormal  size={10} texto={contenido.descripcion}/>

            <TextFont align="left" size={14} color="verde" texto={"Genres"}/>

          </View>
        )}
          
        <ListCategorias >
          {contenido.generos.map((genero) => {      
            return (
              <TagBox key={genero}>
                <TextNormal size={8} texto={generos.find(g => g.id === genero)?.nombre}/>
              </TagBox>
            );
          })}
        </ListCategorias>
      </View>    
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRightColor:colors.purpuraClaro,
    borderLeftColor:colors.purpuraOscuro,
    borderTopColor:colors.purpuraOscuro,
    borderBottomColor:colors.purpuraClaro,
  },
  image: {
    width: "100%",
    marginBottom:10
  },
  subContainer: {
    gap:4,
    alignItems:"flex-start"
  }
});

