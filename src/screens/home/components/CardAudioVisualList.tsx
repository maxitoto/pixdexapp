import { View, StyleSheet, FlatList } from "react-native"
import { ITipoContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { TextFont } from "../../components/TextFont";
import { colors } from "@/src/constants/colors"
import { CardAudioVisual } from "../../components/CardAudioVisual";
import { contenidosAudiovisuales } from "@/src/constants/Data/contenidosAudiovisuales"
import { Link } from "expo-router";
import { ROUTES } from "@/src/constants/navigation/ROUTES";

export function CardAudioVisualList({id, singular, plural} : ITipoContenidoAudiovisual){
    return (
        <View style={styles.boxContent}>

            <View style={styles.textBox}>
                <TextFont style={styles.textTipo}>{singular}</TextFont>
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
                contentContainerStyle={{paddingTop:20,}}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
            </View>
                
            
        </View>
    );
}

const styles = StyleSheet.create({
    boxContent: {
        flex:1,
        borderWidth:4,
        borderColor:colors.grisOscuro,
        position:"relative",
        padding:10,
    },
    textBox: {
        position:"absolute",
        top:-12,
        left:10,
        borderWidth:2,
        borderColor:colors.purpuraClaro,
        backgroundColor:colors.purpura,
        zIndex:1,
    },
    textTipo:{
        fontSize:10,
        textAlignVertical:"center",
        paddingHorizontal:6,
        paddingVertical:2,
        top:1,
    }, 
    cardContent:{ 
        flex:1,
    }
});

