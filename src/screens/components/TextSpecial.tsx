import { StyleSheet } from 'react-native';
import { TextFont } from './TextFont';
import { colors } from '@/src/constants/colors';

export function TextSpecial({texto}: {texto: string}) {
    return (
        <TextFont style={styles.textHeadListGenres}>{texto}</TextFont>
    );
}

const styles = StyleSheet.create({
    textHeadListGenres: {
        color:colors.verde, 
        fontSize:14, 
        marginVertical:5
    }
});
