import { View, StyleSheet, FlatList } from "react-native"
import { Link } from "expo-router";
import { ROUTES } from "@/src/constants/navigation/ROUTES";

import { colors } from "@/src/constants/colors"
import { TextFont } from "@/src/screens/components/Textos";
import { TagBox } from "../../components/TagBox";

import { ITipoContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { CardAudioVisual } from "../../components/CardAudioVisual";
import { useDataContext } from "@/src/context/useDataContext";
import { useState, useEffect } from "react";
import { IContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";
import { LoadingAnimatedIcon } from "@/src/screens/components/LoadingAnimatedIcon";


type props = {
    id: number,
    singular?: string,
    plural?: string
}

export function CardAudioVisualList({id, singular, plural} : ITipoContenidoAudiovisual){

    const {contenidos} = useDataContext();

    const [loading, setLoading] = useState(true);
    
    const [contenidosFiltrados, setContenidosFiltrados] = useState<IContenidoAudiovisual[]>([]);

    const [isSingle, setIsSingle] = useState(false);

    useEffect(() => {
        const copia = contenidos.filter(c => c.tipoId === id);
        setContenidosFiltrados(copia);
        setIsSingle(copia.length === 1);
            const timer = setTimeout(() => { 
                //Leo, esto es a modo de ejemplo, hay un loading global y otro para los contendos filtrados
                setLoading(false);
            }, 4000);
        return () => clearTimeout(timer);
    }, [contenidos, id]);


    return (
        <View style={styles.boxContent}>

        <View style={styles.textBox}>
            <TagBox backgroundColor="purpura" paddingTop={4}>
                {(isSingle ?
                    <TextFont texto={singular} size={10} color="lightGray"/>:
                    <TextFont texto={plural} size={10} color="lightGray"/>
                )}
            </TagBox>
        </View>
            

        <View style={styles.cardContent}>
            {(loading? 
            <LoadingAnimatedIcon size={40}/>:
            <FlatList
                data={contenidosFiltrados}
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
            )}
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

