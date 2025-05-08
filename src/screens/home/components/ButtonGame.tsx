import { View, StyleSheet, Pressable} from "react-native"
import { TextFont } from "../../components/TextFont"
import {colors} from "@/src/constants/colors";

type buttonGameProp = {
    backgroundColor ? : string
    title ? : string
    description ? : string
}

export function ButtonGame({ backgroundColor, title, description}: buttonGameProp){
    return(
        <Pressable style={[
            styles.buttonGameContainer, 
            {backgroundColor: backgroundColor?? colors.purpura}]
        }>
            
            <View style={{alignItems: "flex-start" }}>
                <TextFont style={styles.title}>{title}</TextFont>
                <TextFont style={styles.description}>{description}</TextFont>
            </View>
            
            <View style={{alignItems: "flex-end"}} >
                <TextFont style={styles.jugar}>Jugar</TextFont>
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
    },

    title:{
        fontSize:12,
    },

    description:{
        fontSize:8,
        flexWrap: "wrap",
    },

    jugar:{
        fontSize:6,
    }

});