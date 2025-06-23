import { View, FlatList, StyleSheet } from "react-native";
import { CardAudioVisualList } from "./CardAudioVisualList"
import { useDataContext } from "@/src/context/useDataContext";
import { LoadingAnimatedIcon } from "@/src/screens/components/LoadingAnimatedIcon";
import { useDataFilterContext } from "@/src/context/useDataFilterContext";
import { useEffect, useState } from "react";
import { ITipoContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { TextFont } from "@/src/screens/components/Textos";

export function CategoryList(){
    const { tipos, loading } = useDataContext();
    const { filtrados } = useDataFilterContext();
    const [tiposMostrar, setTiposMostrar] = useState<ITipoContenidoAudiovisual[]>(tipos);

    useEffect(() => {
        filtrados.tipos.length === 0 ? setTiposMostrar(tipos) :
        setTiposMostrar(filtrados.tipos);
    }, [tipos, filtrados]);

    return(
        <View style={styles.container}>
            {loading ? (
                <LoadingAnimatedIcon size={60}/>
                ) : (
                <FlatList
                    ListEmptyComponent={
                        <View style={styles.listEmpty}>
                            <TextFont  color="lightGray" size={20} texto="No existe un tipo"/>
                        </View>
                    }
                    data={tiposMostrar}
                    keyExtractor={(tipo) => tipo.id.toString()}
                    renderItem={({ item }) => <CardAudioVisualList {...item} />}
                    contentContainerStyle={styles.separador}
                    maxToRenderPerBatch={3}
                />  
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    separador: {
        paddingTop:20, 
        gap:30 
    },
    container: {
        height:"81%",
    },
    listEmpty: {
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    }
});