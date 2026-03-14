import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackgrond,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8,
    },
    buttonText: {
        color: colors.text,
        fontWeight: '500'
    },
    buttonPrimary: {
        backgroundColor: colors.primary,
    },
    buttonSecunday: {
        backgroundColor: colors.secondary,
    }
})