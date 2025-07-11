import { View, StyleSheet, Pressable} from "react-native"
import { TextFont, TextNormal } from "@/src/screens/components/Textos"
import {colors, ColorName} from "@/src/constants/colors";

type buttonGameProp = {
    backgroundColor ? : ColorName,
    title ? : string
    description ? : string
    action?: () => void
}

export function ButtonGame({ backgroundColor="purpura", title="", description="", action}: buttonGameProp){
    return(
        <Pressable style={[
            styles.buttonGameContainer, 
            {backgroundColor: colors[backgroundColor]}]
        }
        onPress={action}
        >
            
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