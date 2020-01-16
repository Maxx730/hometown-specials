import { StyleSheet, Dimensions } from 'react-native';

const Values = {
    small: 6,
    mediumSmall: 8,
    medium: 12,
    large: 18,
    extraLarge: 24,

    card: Dimensions.get('window').height / 20,

    white: '#FFFFFF'
}

export default StyleSheet.create({
    Head: {
        paddingTop: 60,
        padding: Values.medium,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    Greeting: {
        flexDirection: 'row'
    },
    Title: {
        paddingBottom: Values.small
    },
    DayOfWeek: {
        fontWeight: 'bold',
        paddingLeft: Values.small
    },
    Search: {
        borderWidth: 1,
        borderColor: 'black',
        padding: Values.medium
    },
    Browse: {
        flex: 1
    },
    Main: {
        flex: 1
    },




    //////
    LocationItem: {
        padding: Values.medium,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: Values.small,
        marginBottom: Values.small,
        marginLeft: Values.medium,
        marginRight: Values.medium,
        flexDirection: 'row'
    },
    ItemTop: {
        marginTop: Values.large
    },
    ItemBottom: {
        marginBottom: Values.large
    },
    DealCount: {
        fontWeight: 'bold',
        padding: Values.small,
        color: 'white',
        backgroundColor: 'black'
    },


    //////
    Card: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        backgroundColor: Values.white,
        borderTopRightRadius: Values.medium,
        borderTopLeftRadius: Values.medium,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    LocationHead: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        marginTop: Values.medium,
        paddingTop: Values.large,
        paddingBottom: Values.large,
        paddingLeft: Values.extraLarge,
        paddingRight: Values.extraLarge
    },
    LocationTitle: {
        fontSize: Values.large,
        flex: 1
    },
    Location: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'black',
        padding: Values.large
    },
    Deals: {
        padding: Values.large,
        borderTopWidth: 1,
        borderTopColor: 'black'
    },
    DealItem: {
        padding: Values.large,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: Values.small,
        marginBottom: Values.small
    },
    TypeIcon: {
        width: 16,
        height: 16,
        marginRight: Values.medium
    },
    SubmitLocationSpecial: {
        padding: Values.large,
        borderTopWidth: 1,
        borderTopColor: 'black'
    },
    HideMap: {
        position: 'absolute',
        backgroundColor: 'white',
        right: 5,
        top: 5,
        zIndex: 999,
        padding: Values.medium,
        borderWidth: 1,
        borderColor: 'black'
    },
    ShowMap: {
        padding: Values.medium,
    }
});