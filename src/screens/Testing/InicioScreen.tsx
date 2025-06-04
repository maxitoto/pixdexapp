import { View, Text, StyleSheet} from "react-native";
import { TextFont } from "../components/Textos";
import React from "react";
import { TagBox } from "../components/TagBox";
import { ListCategorias } from "../components/ListCategorias";


export function InicioScreen() {
    return (
        <View style={{flex:1, marginTop:100, backgroundColor:"gray", gap:20}}>

            <ListCategorias>
                <TagBox><Text style={styles.text}>hola</Text></TagBox>
                <TagBox><TextFont size={25} color="lightGray" texto="hola"/></TagBox>
                <TagBox><Text style={styles.text}>hola</Text></TagBox>
                <TagBox><TextFont size={35} color="verde" texto="hola"/></TagBox>
                <TagBox><Text style={styles.text}>hola</Text></TagBox>
                <TagBox><Text style={styles.text}>hola</Text></TagBox>
            </ListCategorias>
            <TextFont size={25} color="lightGray" texto="hola"/>
            <TextFont size={50} color="lightGray" texto="hola"/>
            <TextFont size={75} color="lightGray" texto="hola"/>
            <TextFont size={100} color="lightGray" texto="hola"/>
        </View>     
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:20,color:"white"
    }
});