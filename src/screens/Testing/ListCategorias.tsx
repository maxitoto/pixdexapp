import React from "react";
import { View, StyleSheet } from "react-native";

type props = {
    children: React.ReactNode
}

export function ListCategorias({children}:props) {
    return (
        <View style={styles.list}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flexDirection:"row",
        flexWrap:"wrap",
        paddingVertical:5,
        justifyContent:"center",
        gap:2
    }
});