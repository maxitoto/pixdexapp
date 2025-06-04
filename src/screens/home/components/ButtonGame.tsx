import { View, StyleSheet, Pressable} from "react-native"
import { TextFont, TextNormal } from "@/src/screens/Testing/Textos"
import {colors, ColorName} from "@/src/constants/colors";

type buttonGameProp = {
    backgroundColor ? : ColorName,
    title ? : string
    description ? : string
}

export function ButtonGame({ backgroundColor="purpura", title="", description=""}: buttonGameProp){
    return(
        <Pressable style={[
            styles.buttonGameContainer, 
            {backgroundColor: colors[backgroundColor]}]
        }>
            
            <View style={styles.titleDescContainer}>
                <TextFont size={12} texto={title} align="left"/>
                
                <TextNormal size={8} texto={description} align="left" font="sans-serif"/>
            </View>
            
            <View style={styles.jugarContainer} >
                <TextFont size={8} texto="Jugar"/>
            </View>
            
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonGameContainer: { 
        flex: 1,    
        padding: 10,
        borderColor: colors.purpuraOscuro,
        borderWidth:4,
        justifyContent:"space-between"
    },
    titleDescContainer: {
        alignItems: "flex-start"
    },
    
    jugarContainer: {
        alignItems: "flex-end"
    }


});