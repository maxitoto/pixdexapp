import { StyleSheet, Pressable } from "react-native";
import { CheckBox } from "@/src/screens/home/components/CheckBox";
import { TextNormal } from "@/src/screens/components/Textos"
import { useDataFilterContext } from "@/src/context/useDataFilterContext";

type props={
    text:string
    sizetext:number
    sizebox:number
    categoria:string
    id:number
}

export function TextCheckBox({text = "", sizetext = 5 , sizebox = 5, categoria="tipo", id}:props){

    const { setTiposIdFilter, tiposIdFilter, setGenerosIdFilter, generosIdFilter  } = useDataFilterContext();

    const isCheck = categoria === "tipo" ? tiposIdFilter.includes(id): generosIdFilter.includes(id);

    function check() {
    if (isCheck) {
        if (categoria === "tipo") {
        setTiposIdFilter(tiposIdFilter.filter(e => e !== id));
        } else {
        setGenerosIdFilter(generosIdFilter.filter(e => e !== id));
        }
    } else {
        if (categoria === "tipo") {
        setTiposIdFilter([id, ...tiposIdFilter]);
        } else {
        setGenerosIdFilter([id, ...generosIdFilter]);
        }
    }
    }
    
    return (
        <Pressable style={styles.container} onPress={check}>
            <CheckBox size={sizebox} isCheck={isCheck}/>
            <TextNormal size={sizetext} texto={text}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: "row", 
        gap: 10, 
        width: "48%", 
        margin:5, 
        alignItems:"center"
    },
});