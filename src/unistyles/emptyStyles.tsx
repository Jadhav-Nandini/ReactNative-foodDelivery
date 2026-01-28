import { StyleSheet } from "react-native";
import { defaultTheme } from "./unistyles";

const { colors, device } = defaultTheme

export const emptyStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background
    },
    emptyImage: {
        width: device.width * 0.9,
        height: device.height * 0.4,
        resizeMode: 'contain'
    }
})