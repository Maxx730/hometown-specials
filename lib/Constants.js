import { StyleSheet } from 'react-native';

const Colors = {
    White: '#FFFFFF',
    Black: '#000000',
    Shade: '#000000CC',
    SlightGrey: '#EAEAEA',
    SlightGrayer: '#D6D6D6',
    DividerGrey: '#999999',

    Disabled: '#EAEAEA',
    DisabledTextColor: '#C2C5C3',
    Primary: '#56DF6C',
    Secondary: '',
    Danger: '#F24738',

    Darkest: '#1E1E1E',
    Darker: '#252525',
    Dark: '#2E2E2E'
}

const Sizes = {
    VerySmall: 4,
    Small: 8,
    Medium: 12,
    Large: 24,
    Larger: 32,
    Largest: 48,

    FontSmall: 12,
    FontMedium: 18,
    FontLarge: 24,

    FeaturedSmall: 120,
    FeaturedMedium: 240,
    FeaturedLarge: 360,

    PercentFull: '100%',
    HsButtonHeight: 72
}

const Labels = {
    CANCEL: 'Cancel',
    CONFIRM: 'Confirm',
    ACCEPT: 'Accept',
    DELETE: 'Delete',
    SAVE: 'Save',
    ADD: 'Add',
    PLACEHOLDER: 'Placeholder',
    GENERAL: 'General',
    SETTINGS: 'Settings',
    PREFERENCES: 'Preferences',
    USE_DEVICE_THEME: 'Use Device Theme',
    DARK_THEME: 'Dark Mode',
    WELCOME: 'Welcome',
    PREFERENCES_DISPLAY:'Display',
    LOCATION: 'Location',
    LOCATIONS: 'Locations',
    LOCATION_NAME: 'Location Name',
    ADDRESS: 'Address',
    CITY: 'City',
    STATE: 'State',
    ZIP: 'Zipcode',
    STREET: 'Street',

    CONFIRM_CHANGES: 'Confirm Changes',
    CONFIRM_MESSAGE: 'Please confirm the changes before they are recorded into the database.',

    MODAL_TITLE_DEFAULT: 'Title',
    MODAL_MESSAGE_DEFAULT: 'Content'
}

const CommonStyles = StyleSheet.create({
    Flex: {
        flex: 1
    },
    DarkBackground: {
        backgroundColor: Colors.Darkest
    },
    WhiteText: {
        color: Colors.White
    },
    BlackText: {
        color: Colors.Black
    }
});

export { Colors, Sizes, CommonStyles, Labels }