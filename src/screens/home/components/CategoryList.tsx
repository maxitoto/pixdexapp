import {ITipoContenidoAudiovisual} from "@/src/constants/Data/tiposContenidoAudiovisual";
import { View, FlatList, StyleSheet } from "react-native";
import { CardAudioVisualList } from "./CardAudioVisualList"
import { API_URL } from "@/src/constants/urls"
import { useEffect, useState } from "react";
import { fetch } from 'expo/fetch';

async function getTipos(): Promise<ITipoContenidoAudiovisual[]> {
    const responseTipos = await fetch(`${API_URL}/tipos`)
    const tipos: ITipoContenidoAudiovisual[] = await responseTipos?.json();
    return tipos
}


export function CategoryList(){
    const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);

    useEffect(() => {
        obtenerTipos();
    }, []);

    async function obtenerTipos() {
        try {
        const tipos = await getTipos();
        setTipos(tipos);
        } catch (error) {
        alert(`FALLO ${error}`);
        console.log("ERROR", error);
        } finally {
        }
    }

  
    return(
        <View style={styles.containerList}>
            <FlatList
                data={tipos}
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
        flex: 1,
    },
    separador: {
        paddingTop:20, 
        gap:30 
    }
});