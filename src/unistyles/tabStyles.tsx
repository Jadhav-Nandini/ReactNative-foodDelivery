import { RFValue } from "react-native-responsive-fontsize";

import { BOTTOM_TAB_HEIGHT } from "./Constants";
import { defaultTheme } from "./unistyles";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

const { colors, fonts, device } = defaultTheme

export const tabStyles = StyleSheet.create({
    tabContainer: {
        width: device.width * 0.82,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15
    } as ViewStyle,
    tabBarContainer: {
        width: '100%',
        position: 'absolute',
        height: BOTTOM_TAB_HEIGHT,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 11,
        shadowColor: '#000',
        bottom: 0,
        zIndex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    } as ViewStyle,
    verticalLine: {
        marginHorizontal: 10,
        height: '60%',
        width: 1.9,
        position: "absolute",
        left: '55%',
        borderRadius: 20,
        opacity: 0.2,
        backgroundColor: colors.lightText
    } as ViewStyle,
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    } as ViewStyle,
    focusedTabItem: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
    }as ViewStyle,
    slidingIndicator: {
        position: 'absolute',
        top: 0,
        height: 3,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '15%',
    }as ViewStyle,
    groceryLogoContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '12%',
        overflow: 'hidden',
        backgroundColor: '#F7CB46',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    }as ViewStyle,
    groceryLogo: {
        width: '100%',
        height: 26,
        resizeMode: 'contain',
    }as ImageStyle,
    tabLabel: {
        fontFamily: fonts.Medium,
        fontSize: RFValue(10),
        color: '#B3B3B3',
    } as TextStyle,
    focusedTabLabel: {
        color: '#fff',
    }as TextStyle,
})



