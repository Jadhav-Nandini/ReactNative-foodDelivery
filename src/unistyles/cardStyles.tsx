
import { defaultTheme } from "./unistyles";
import { StyleSheet } from "react-native";

const { colors, border, device } = defaultTheme

export const cardStyles = StyleSheet.create({
    recommendedContainer: {
        marginTop: 25,
        paddingLeft:10
    },
    mainPadding: {
        padding: 10
    },
    regularFoodContainer: {
        marginVertical: 10,
    },
    listContainer: {
        paddingHorizontal: 15,
    },
    itemContainer: {
        // backgroundColor:colors.background,
        marginRight: 15,
        width: device.width * 0.3,
        overflow: 'hidden',
        marginBottom: 15,
    },
    regularFoodImage: {
        width: device.width * 0.30,
        height: device.width * 0.30,
        resizeMode: 'cover'
    },
    bookmarkIcon: {
        position: 'absolute',
        zIndex: 2,
        top: 5,
        right: 5,
    },
    bookmarkIconImage: {
        width: 15,
        height: 18,
        resizeMode: 'contain'
    },
    itemImage: {
        width: '100%',
        height: 100,
    },
    discountContainer: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        zIndex: 2
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clockIcon: {
        width: 14,
        height: 14,
        resizeMode: 'contain'
    },
    itemInfo: {
        marginTop: 8,
    },
    imageContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border
    },
    centerText: {
        textAlign: 'center',
        opacity: 0.4,
        marginVertical: 10,
    },

})