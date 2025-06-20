import { View, ActivityIndicator, StyleSheet } from "react-native";

type props = {
    "size"?: number 
    "color"?:string
}

export function LoadingAnimatedIcon({size=5, color="orange"}:props){
    return (
        <View style={styles.iconContent}>
            <ActivityIndicator animating size={size} color={color} />   
        </View>
    );
}

const styles = StyleSheet.create({
    iconContent:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})