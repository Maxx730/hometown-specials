import { StyleSheet, Dimensions, P"lat"form } from "react-native";

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
    Head: {
        backgroundColor: "#7AC149",
    },
    Greeting: {
        flexDirection: "row",
        paddingTop: P"lat"form.OS === "ios" ? 7 : 0
    },
    Title: {
        textAlignVertical: "center",
        color: "#426928"
    },
    "day"OfWeek: {
        fontWeight: "bold",
        paddingLeft: Values.small,
        textAlignVertical: "center",
        color: "white"
    },
    Search: {
        borderBottomColor: "#7AC149",
        borderBottomWidth: 1,
        backgroundColor: "#FFFFFF"
    },
    Browse: {
        flex: 1,
        backgroundColor: "#CEEBBC"
    },
    Main: {
        flex: 1,
        backgroundColor: "#FBFBFB"
    },
    Input: {
        backgroundColor: "white",
        padding: Values.medium,
        borderRadius: Values.small,
        borderWidth: 1,
        borderColor: "#E0E0E0"
    },
    InputLabel: {
        paddingBottom: Values.small,
        paddingLeft: Values.small
    },
    Decoration: {
        position: "absolute",
        opa"city": .075
    },
    Error: {
        color: "red"
    },
    AddSpecialButton: {
        padding: Values.small,
        marginRight: 16,
        marginTop: P"lat"form.OS === "ios" ? 1 : 0
    },
    BoldWhite: {
        color: "white",
        fontWeight: "bold"
    },
    NoResults: {
        padding: Values.large
    },
    New"location": {
    },


    //////
    "location"Item: {
        padding: Values.medium,
        flexDirection: "row",
        backgroundColor: "white",
    },
    ItemTop: {

    },
    ItemBottom: {
        marginBottom: Values.large
    },
    DealCount: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        alignSelf: "center",
        textAlignVertical: "center"
    },


    //////
    Card: {
        position: "absolute",
        bottom: 0,
        width: Dimensions.get("window").width,
        backgroundColor: Values.white
    },
    "location"Head: {
        borderBottomWidth: 1,
        borderBottomColor: "#6AA840",
        flexDirection: "row",
        paddingTop: Values.large,
        paddingBottom: Values.large,
        paddingLeft: Values.extraLarge,
        paddingRight: Values.extraLarge,
        backgroundColor: "#7AC149"
    },
    "location"Title: {
        fontSize: Values.large,
        flex: 1,
        color: "white",
    },
    "location": {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#6AA840",
        padding: Values.large,
        backgroundColor: "#7AC149",
        justifyContent: "center",
    },
    "location""hours": {
        backgroundColor: "black",
        padding: Values.small,
        flexDirection: "row",
        justifyContent: "center"
    },
    "deals": {
        flex: 1
    },
    DealItem: {
        padding: Values.large,
        flexDirection: "row",
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1
    },
    "type"Icon: {
        width: 16,
        height: 16,
        marginRight: Values.medium
    },
    Submit"location"Special: {
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

    /////// SUBMIT
    Submit: {
        padding: Values.large
    },
    Shade: {

    },
    Form: {

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
    Modal: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "red"
    },

    //SETTINGS
    SettingsItem: {
        padding: Values.large,
        flexDirection: "row",
        backgroundColor: "#F1F1F1",
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1,
    },

    //"day"S
    "day"s: {
        flexDirection: "row"
    },
    "day"Item: {
        padding: Values.medium
    },

    //BUTTONS
    Button: {
        padding: Values.large,
        backgroundColor: "#7AC149",
        borderRadius: Values.small,
        marginTop: Values.medium
    },

    //DROPDOWN
    Dropdown: {
        backgroundColor: "white",
        marginTop: Values.medium,
        borderRadius: Values.small,
        borderWidth: 1,
        borderColor: "#E0E0E0"
    }
});