import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { TextFont } from "@/src/screens/components/Textos"
import { useDataContext } from "@/src/context/useDataContext";
import { TextCheckBox } from "./TextCheckBox";

export function Filtros(){
    const {tipos, generos } = useDataContext();

    return(
        <View style={styles.container}>
            <TextFont color="lightGray" size={25} texto="Filter Content" />
            
            <ScrollView contentContainerStyle={styles.lista}>
                <TextFont color="verde" size={20} texto="Content Types" align="left" />
                <View style={styles.elementos}>
                    <View style={styles.elementos}>
                        {tipos.map((tipo) => (
                            <TextCheckBox 
                            key={tipo.id} 
                            text={tipo.plural.toLowerCase()} 
                            sizebox={45} 
                            sizetext={20} 
                            categoria="tipo"
                            id={tipo.id}
                            />
                        ))}
                    </View>
                </View>

                
                <TextFont color="verde" size={20} texto="Genres" align="left" />
                <View style={styles.elementos}>        
                    <FlatList
                    data={generos}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    scrollEnabled={false}
                    columnWrapperStyle={styles.column}
                    renderItem={({ item }) => (
                        <TextCheckBox 
                        text={item.nombre} 
                        sizebox={45} sizetext={20}
                        categoria="genero"
                        id={item.id}
                        />
                    )}
                    />
                </View>
            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{ 
        padding: 5 
    },
    lista:{
        padding: 5, 
        gap:5,
    },
    elementos:{ 
        padding: 5 
    },
    column:{
        justifyContent:"space-between"
    }
});