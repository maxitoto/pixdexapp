import { StyleSheet, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { colors } from "@/src/constants/colors"

type props = {
    size?: number
    isCheck:boolean
}

export function CheckBox({size = 5, isCheck}:props){
    
    return(
        <View 
            style={[{
                backgroundColor: isCheck? colors.purpuraClaro: undefined,
                height: size/2,
                width: size/2,
                },
                styles.contenedor]}
        >
            {isCheck && (
                <Octicons name="check" size={size*0.4} color={colors.lightGray} />
            )}         
        </View> 
)}

const styles = StyleSheet.create({
    contenedor: {
        borderColor:colors.purpuraClaro,
        borderWidth:2,
        borderRadius:5, 
        alignItems:"center",
        justifyContent:"center",
    }
});