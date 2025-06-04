import React from "react";
import { View, StyleSheet } from "react-native";

type props = {
    children: React.ReactNode
    justify?: "center"| "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
}

export function ListCategorias({children, justify = "flex-start"}:props) {
    return (
        <View style={[
            {
                justifyContent: justify,
            },
            styles.list
            ]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flexDirection:"row",
        flexWrap:"wrap",
        paddingVertical:5,  
        gap:2
    }
});