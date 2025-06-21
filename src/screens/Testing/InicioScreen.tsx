import { View, Text, StyleSheet} from "react-native";
import { TextFont } from "../components/Textos";
import React from "react";
import { TagBox } from "../components/TagBox";
import { ListCategorias } from "../components/ListCategorias";


export function InicioScreen() {
    return (
        <View style={{flex:1, marginTop:100, backgroundColor:"gray", gap:20}}>

        </View>     
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:20,color:"white"
    }
});