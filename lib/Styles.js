import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const Values = {
    small: 6,
    mediumSmall: 8,
    medium: 12,
    large: 18,
    extraLarge: 24,

    card: Dimensions.get("window").height / 20,

    white: "#FFFFFF"
}

export default StyleSheet.create({
    ///GENERIC STYLES
    CenterText: {
        textAlign: 'center'
    },

    //HEAD
    Head: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: Values.large + 3
    },
    Title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    DayToggleIcon: {
        marginLeft: 6,
        marginTop: 2
    },



    DayOfWeek: {
        fontWeight: 'bold',
        paddingLeft: Values.small,
        textAlignVertical: "center",
        color: "white"
    },
    Search: {
        backgroundColor: '#FFFFFF'
    },
    Browse: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    Main: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    //////SEARCH
    SearchView: {
        marginBottom: 12,
        borderBottomWidth: .5,
        borderBottomColor: '#D1D1D1',
    },

    /////INPUT
    Input: {
        paddingLeft: Values.medium,
        flexDirection: 'row',
    },
    InputLabel: {
        paddingBottom: Values.small,
        paddingLeft: Values.large
    },
    InnerValue: {
        paddingTop: Values.medium,
        paddingBottom: Values.medium,
        marginLeft: Values.medium
    },


    Decoration: {
        position: "absolute",
        opacity: .075
    },
    Error: {
        color: "red"
    },
    AddSpecialButton: {
        padding: Values.small,
        marginRight: 16,
        marginTop: Platform.OS === "ios" ? 1 : 0
    },
    BoldWhite: {
        color: "white",
        fontWeight: "bold"
    },
    NoResults: {
        padding: Values.large
    },
    Newlocation: {
    },


    //////LOCATIONS
    LocationList: {
        backgroundColor: '#EEEEEF',
        flex: 1
    },
    LocationItem: {
        padding: Values.large,
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
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center'
    },


    //////MODAL
    Modal: {
        backgroundColor: '#FFFFFF',
        zIndex: 200,
        borderRadius: Values.medium,
        flexDirection: 'column'
    },
    ModalMask: {
        backgroundColor: '#00000099',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1,
        padding: 24
    },
    ModalHead: {
        paddingLeft: Values.large,
        paddingTop: Values.medium,
        paddingBottom: Values.medium,
        flexDirection: 'row',
    },
    ModalTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        flex: 1
    },
    CloseButton: {
        padding: Values.large,
        backgroundColor: '#EEEEEF',
        borderTopWidth: 1,
        borderTopColor: '#D1D1D1',
        borderBottomRightRadius: Values.medium,
        borderBottomLeftRadius: Values.medium
    },
    ModalBody: {
        flex: 1
    },
    ModalAdress: {
        paddingLeft: Values.large,
        paddingRight: Values.large,
        flexDirection: 'row'
    },
    ModalTabs: {
        marginTop: Values.large,
        flex: 1
    },
    ModalContent: {
      flex: 1
    },


    //////
    Card: {
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("window").width,
        backgroundColor: Values.white
    },
    LocationHead: {
        borderBottomWidth: 1,
        borderBottomColor: "#6AA840",
        flexDirection: "row",
        paddingTop: Values.large,
        paddingBottom: Values.large,
        paddingLeft: Values.extraLarge,
        paddingRight: Values.extraLarge,
        backgroundColor: "#7AC149"
    },
    LocationTitle: {
        fontSize: Values.large,
        flex: 1,
        color: "white",
    },
    Location: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#6AA840",
        padding: Values.large,
        backgroundColor: "#7AC149",
        justifyContent: "center",
    },


    ////////DEALS
    Deals: {
        paddingLeft: Values.large,
        paddingRight: Values.large,
        marginBottom: 16,
        flex: 1,
    },
    DealItem: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        margin: Values.large,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 7,
        height: 240
    },
    DealInformation: {
        flex: 1
    },
    DealShare: {
        padding: Values.small,
        paddingRight: Values.large,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DealsTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    TypeIcon: {
        width: 16,
        height: 16,
        marginRight: Values.medium
    },
    SubmitLocationSpecial: {
        padding: Values.large,
        borderTopWidth: 1,
        borderTopColor: "black"
    },
    OpenMap: {
        padding: Values.medium,
        paddingBottom: 16,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#7AC149"
    },
    ZeroDeals: {
        flex: 1,
        justifyContent: 'center',
        padding: 18,
        alignContent: 'center'
    },

    //////NAVBAR
    Navbar: {
        padding: Values.medium,
        backgroundColor: '#FFFFFFEE',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: 'white'
    },
    NavButton: {
        padding: Values.medium,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 48
    },
    NavButtonText: {
        fontWeight: 'bold',
        marginLeft: 6,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 1,
        fontSize: 0,
        color: '#FFFFFF'
    },
    NavSelected: {
        backgroundColor: '#7AC149',
        paddingLeft: Values.large,
        paddingRight: Values.large + 2,
        borderRadius: 100,
        width: 'auto'
    },

    ////TABS
    TabFrame: {
        flexDirection: 'row',
        backgroundColor: '#EEEEEF',
        borderRadius: 100,
        padding: 3,
        borderWidth: .5,
        borderColor: '#D1D1D1',
        marginTop: 0,
        flex: 5
    },
    TabIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Values.small
    },
    TabHolder: {
        flex: 1,
        padding: Values.large,
        backgroundColor: '#FFFFFFEE',
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    Tab: {
        flex: 1,
        padding: Values.medium
    },
    TabLabel: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    TabSelected: {
        backgroundColor: '#FFFFFF',
        borderRadius: Values.medium,
        borderWidth: .5,
        borderColor: '#D1D1D1'
    },
    TabIndicator: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        top: 3,
        bottom: 3,
        right: (Dimensions.get('window').width / 2) - Values.large,
        left: 3,
        borderRadius: 100,
        borderWidth: .5,
        borderColor: '#D1D1D1'
    },

    /////// SUBMIT
    Submit: {
        flex: 1,
        paddingTop: 12
    },
    Shade: {

    },
    Form: {
        padding: Values.large,
        flex: 1
    },
    SubmitHead: {
        padding: Values.large,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        flexDirection: "row"
    },
    SubmitContent: {

    },
    SubmitPickers: {
        paddingTop: Values.large,
        paddingBottom: Values.large
    },
    SubmitSubtext: {
        padding: Values.small
    },
    SubmitError: {
        padding: Values.small
    },
    SubmitSuccess: {
        padding: Values.small
    },

    ////PICK
    Pick: {

    },
    Holder: {
        padding: Values.large
    },

    //SETTINGS
    SettingsItem: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: .5,
    },

    //DAYS
    Days: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    DayItem: {
        padding: Values.medium
    },
    DaySelected: {
        color: '#7AC149',
        fontWeight: 'bold'
    },

    //BUTTONS
    Button: {
        padding: Values.large,
        backgroundColor: "red",
        borderRadius: Values.small,
        flex: 1
    },
    ButtonRound: {
        borderRadius: 100
    },
    ButtonRight: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
    },
    ButtonLeft: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },

    //DROPDOWN
    Dropdown: {
        backgroundColor: 'white',
        borderRadius: Values.small,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        flexDirection: 'row'
    },
    DropdownFrame: {
        flexDirection: 'column'
    },
    DropdownLabel: {
        padding: Values.small,
        fontWeight: 'bold'
    },

    //BUTTONSET
    ButtonSet: {
        marginTop: 6,
        flexDirection: 'row'
    },

    //HOURS
    LocationHours: {
        flex: 1,
        marginTop: Values.medium
    },
    HoursList: {
        marginTop: Values.medium,
        marginBottom: Values.medium
    },
    HoursItem: {
        borderTopWidth: 1,
        paddingTop: Values.medium,
        paddingBottom: Values.medium,
        paddingLeft: Values.large,
        borderTopColor: '#EEEEEF'
    },



    ////////TOAST MESSAGES
    Toast: {
        position: 'absolute',
        backgroundColor: '#00000088',
        zIndex: 99999,
        padding: Values.medium,
        paddingLeft: Values.large * 1.5,
        paddingRight: Values.large * 1.5,
        borderRadius: 100
    },

    ////////SUBMIT CYCLE
    SubmissionFrame: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1
    },
    LocationChoiceFrame: {
    },
    OrDivider: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: Values.large
    },

    ///////// DETAILS VIEW
    DetailsView: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    DetailsHead: {
        flexDirection: 'row',
        flexBasis: 48
    },
    DetailsBody: {
        flex: 1
    }
});