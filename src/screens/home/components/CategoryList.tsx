import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { CardAudioVisualList } from "./CardAudioVisualList"
import { useDataContext } from "@/src/context/useDataContext";
import { LoadingAnimatedIcon } from "@/src/screens/components/LoadingAnimatedIcon";

export function CategoryList(){
    const {tipos, loading } = useDataContext();

    return(
        <View style={styles.container}>
            {loading ? (
                <LoadingAnimatedIcon size={60}/>
                ) : (
                <FlatList
                    data={tipos}
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
    }
});