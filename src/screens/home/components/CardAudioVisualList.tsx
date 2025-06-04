import { View, StyleSheet, FlatList } from "react-native"
import { ITipoContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { TextFont } from "@/src/screens/Testing/Textos";
import { colors } from "@/src/constants/colors"
import { CardAudioVisual } from "../../components/CardAudioVisual";
import { contenidosAudiovisuales } from "@/src/constants/Data/contenidosAudiovisuales"
import { Link } from "expo-router";
import { ROUTES } from "@/src/constants/navigation/ROUTES";
import { TagBox } from "../../Testing/TagBox";

type props = {
    id: number,
    singular?: string,
    plural?: string
}

export function CardAudioVisualList({id, singular, plural} : ITipoContenidoAudiovisual){
    return (
        <View style={styles.boxContent}>

        <View style={styles.textBox}>
            <TagBox backgroundColor="purpura" paddingTop={4}>
                <TextFont texto={singular} size={10} color="lightGray"/>
            </TagBox>
        </View>
            

        <View style={styles.cardContent}>
            <FlatList
            data={contenidosAudiovisuales.filter((item) => item.tipoId === id)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                <Link 
                    href={{
                        pathname: `${ROUTES.DETAIL}${"[id]"}`,
                        params: { 
                            id: item.id
                        }
                    }}
                >
                    <CardAudioVisual contenido={item} isSmall={false} />
                </Link>
                )}     
            horizontal
            contentContainerStyle={styles.separador}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
        </View>
                
            
        </View>
    );
}

const styles = StyleSheet.create({
    boxContent: {
        borderWidth:4,
        borderColor:colors.grisOscuro,
        position:"relative",
        paddingHorizontal:10,
        height:350,
    },
    textBox: {
        position:"absolute",
        top:-12,
        left:10,
        borderWidth:2,
        borderColor:colors.purpuraClaro,
        zIndex:1,
    }, 
    cardContent:{ 
        flex:1,
        paddingBottom:5,
    },
    separador: {
        paddingTop:20
    },
});

