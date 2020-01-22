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
        backgroundColor: '#7AC149',
    },
    Greeting: {
        flexDirection: 'row'
    },
    Title: {
        textAlignVertical: 'center',
        color: '#426928'
    },
    DayOfWeek: {
        fontWeight: 'bold',
        paddingLeft: Values.small,
        textAlignVertical: 'center',
        color: 'white'
    },
    Search: {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    Browse: {
        flex: 1,
        backgroundColor: '#CEEBBC'
    },
    Main: {
        flex: 1,
        backgroundColor: '#FBFBFB'
    },
    Input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: Values.medium
    },
    InputLabel: {
        paddingBottom: Values.small
    },
    Decoration: {
        position: 'absolute',
        opacity: .075
    },


    //////
    LocationItem: {
        padding: Values.medium,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    ItemTop: {

    },
    ItemBottom: {
        marginBottom: Values.large
    },
    DealCount: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center'
    },


    //////
    Card: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        backgroundColor: Values.white
    },
    LocationHead: {
        borderBottomWidth: 1,
        borderBottomColor: '#6AA840',
        flexDirection: 'row',
        paddingTop: Values.large,
        paddingBottom: Values.large,
        paddingLeft: Values.extraLarge,
        paddingRight: Values.extraLarge,
        backgroundColor: '#7AC149'
    },
    LocationTitle: {
        fontSize: Values.large,
        flex: 1,
        color: 'white',
    },
    Location: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#6AA840',
        borderBottomWidth: 1,
        borderBottomColor: '#6AA840',
        padding: Values.large,
        backgroundColor: '#7AC149',
        justifyContent: 'center',
    },
    LocationHours: {
        backgroundColor: 'black',
        padding: Values.small,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Deals: {
        flex: 1
    },
    DealItem: {
        padding: Values.large,
        flexDirection: 'row',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1
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
        right: 5,
        top: 5,
        zIndex: 999,
        padding: Values.medium,
        borderWidth: 1,
        borderColor: '#6AA840',
        flexDirection: 'row',
        backgroundColor: '#7AC149'
    },
    ShowMap: {
        padding: Values.medium,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#7AC149'
    },

    /////// SUBMIT
    Submit: {

    },
    Shade: {

    },
    Form: {

    },
    SubmitHead: {
        padding: Values.large,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row'
    },
    SubmitContent: {
        padding: Values.medium
    },

    ////PICK
    Pick: {

    },
    Holder: {
        padding: Values.large
    },
    Modal: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'red'
    },

    //SETTINGS
    SettingsItem: {
        padding: Values.large,
        flexDirection: 'row',
        backgroundColor: '#F1F1F1',
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,
    }
});