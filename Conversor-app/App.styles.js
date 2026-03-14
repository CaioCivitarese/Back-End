import { StyleSheet } from "react-native";
import { colors } from "./src/styles/colors";

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: colors.background,   
    },
    scrollView: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 24,
    },
    header: {
        mardgingBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        mardigBoottom: 8,
    },
    subTitle: {
        color: colors.texteSecondary,
        fontSize: 16,
    },
    card: {
        backgroundColor: colors.card,
        borderRafius: 8,
        padding: 24,
        marginBootom: 24,
    },
    lebel: {
        color: colors.texteSecondary,
        marginBootom:8,
        fontSize: 14,
    }
})