import {tiposContenidoAudiovisual} from "@/src/constants/Data/tiposContenidoAudiovisual";
import { View, FlatList, StyleSheet } from "react-native";
import { CardAudioVisualList } from "./CardAudioVisualList"

export function CategoryList(){
    
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
        flex: 1,
    },
    separador: {
        paddingTop:20, 
        gap:30 
    }
});