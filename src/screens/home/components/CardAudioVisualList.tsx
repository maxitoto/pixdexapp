import { View, StyleSheet, FlatList } from "react-native"
import { Link } from "expo-router";
import { ROUTES } from "@/src/constants/navigation/ROUTES";

import { colors } from "@/src/constants/colors"
import { TextFont } from "@/src/screens/components/Textos";
import { TagBox } from "@/src/screens/components/TagBox";

import { ITipoContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { CardAudioVisual } from "@/src/screens/components/CardAudioVisual";
import { useDataContext } from "@/src/context/useDataContext";
import { useState, useEffect } from "react";
import { IContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";
import { LoadingAnimatedIcon } from "@/src/screens/components/LoadingAnimatedIcon";
import { useDataFilterContext } from "@/src/context/useDataFilterContext";
import { BoxContent } from "@/src/screens/components/BoxContent";



type props = {
    id: number,
    singular?: string,
    plural?: string
}

export function CardAudioVisualList({id, singular, plural} : ITipoContenidoAudiovisual){
    const { filtrados } = useDataFilterContext();

    const {contenidos} = useDataContext();

    const [loading, setLoading] = useState(true);
    
    const [contenidosFiltrados, setContenidosFiltrados] = useState<IContenidoAudiovisual[]>([]);

    const [isSingle, setIsSingle] = useState(false);

    useEffect(() => {
        let copia = contenidos.filter(c => c.tipoId === id);

        const generosFiltradosId = filtrados.genero?.map(g => g.id) || [];

        if (generosFiltradosId.length > 0) {
            copia = copia.filter(c =>
            c.generos?.some(g => generosFiltradosId.includes(g))
            );
        }

        setContenidosFiltrados(copia);
        setIsSingle(copia.length === 1);
        setLoading(false);
    }, [contenidos, id, filtrados.genero]);


    return (
        <BoxContent paddingHorizontal={10}>

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
                ListEmptyComponent={
                <View style={styles.listEmpty}>
                        <TextFont color="lightGray"  size={20} texto="No hay contenidos"/>
                </View>
                }
                data={contenidosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Link
                        href={{
                            pathname: `${ROUTES.DETAIL}[id]`,
                            params: { id: item.id },
                        }}
                        >
                        <CardAudioVisual contenido={item} isSmall={false} />
                        </Link>
                    );
                }}
                        
                horizontal
                contentContainerStyle={styles.separador}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
            )}
        </View>
                
            
        </BoxContent>
    );
}

const styles = StyleSheet.create({
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
    listEmpty: {
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    }

});

