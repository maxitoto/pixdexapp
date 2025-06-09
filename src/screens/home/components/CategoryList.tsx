import {ITipoContenidoAudiovisual} from "@/src/constants/Data/tiposContenidoAudiovisual";
import { View, FlatList, StyleSheet } from "react-native";
import { CardAudioVisualList } from "./CardAudioVisualList"
import { API_URL } from "@/src/constants/urls"
import { useEffect, useState } from "react";

async function getTipos(): Promise<ITipoContenidoAudiovisual[]> {
  console.log(`${API_URL}/tipos`);
  const responseTipos = await fetch(`${API_URL}/tipos`);

  if (!responseTipos.ok) {
    throw new Error("Error al obtener tipos");
  }
  console.log("-----------");
  const tipos: ITipoContenidoAudiovisual[] = await responseTipos.json();
  console.log(tipos);
  
  return tipos
}


export function CategoryList(){
    const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);

    useEffect(() => {
        obtenerTipos();
    }, []);

    async function obtenerTipos() {
        try {
        const tiposDict = await getTipos();
        setTipos(tiposDict);
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