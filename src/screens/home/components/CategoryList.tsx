import { View, FlatList } from "react-native";
import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";
import { CardAudioVisualList } from "./CardAudioVisualList"

export function CategoryList(){
    return(
        <View style={{ flex: 1,}}>
            <FlatList
                data={tiposContenidoAudiovisual}
                keyExtractor={(tipo) => tipo.id.toString()}
                renderItem={({ item }) => <CardAudioVisualList {...item} />}
                contentContainerStyle={{paddingTop:20, gap:30 }}
                maxToRenderPerBatch={3}
            />   
        </View>
             
    );
}