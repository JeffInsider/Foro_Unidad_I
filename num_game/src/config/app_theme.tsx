import { StyleSheet } from "react-native";

export const colors = {
    light: '#ffffff',
    dark: '#000000',
    primary: '#1a73e8',
    secondary: '#d1d1d1',
    gray: '#1a1a1a',
    
  };

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: colors.light,
    },
    message: {
        fontSize: 25,
        marginBottom: 20,
    },
});