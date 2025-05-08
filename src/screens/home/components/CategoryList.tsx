import { View, FlatList } from "react-native";
import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { BoxAudioVisual } from "./BoxAudioVisual"

export function CategoryList(){
    return(
        <View style={{ flex: 1,}}>
            <FlatList
                data={tiposContenidoAudiovisual}
                keyExtractor={(tipo) => tipo.id.toString()}
                renderItem={({ item }) => <BoxAudioVisual {...item} />}
                contentContainerStyle={{paddingTop:20, gap:30 }}
                maxToRenderPerBatch={3}
            />   
        </View>
             
    );
}