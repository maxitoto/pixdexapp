import { 
    ITipoContenidoAudiovisual,
    tiposContenidoAudiovisual 
} from "@/src/constants/Data/tiposContenidoAudiovisual";

import { View, FlatList, StyleSheet } from "react-native";
import { CardAudioVisualList } from "./CardAudioVisualList"
import { useEffect, useState } from "react"
import { API_URL } from "@/src/constants/urls";


export function CategoryList(){
    const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);


    //preguntar al !!!
    useEffect(() => {
        getTipos();
    }, []);

    const getTipos = async () => {
        const responseTipos = await fetch(`${API_URL}/tipos`);
        const tiposList:ITipoContenidoAudiovisual[] = await responseTipos.json();
        console.log(tiposList);
        setTipos(tiposList);
    };
    //----------------------

    return(
        <View style={styles.containerList}>
            <FlatList
                data={tiposContenidoAudiovisual}
                keyExtractor={(tipo) => tipo.id.toString()}
                renderItem={({ item }) => <CardAudioVisualList {...item} />}
                contentContainerStyle={styles.separador}
                maxToRenderPerBatch={3}
            />   
        </View>
    );
}

const styles = StyleSheet.create({
    containerList: { 
        flex: 1
    },
    separador: {
        paddingTop:20, 
        gap:30 
    }
});