import React from 'react';
import { View, Text, Dimensions, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

//Import Components
import Input from './Input';
import Button from './Button';

//Import Utility Methods
import { _getDaysOfWeek, _getDayOfWeek } from '../../lib/Utils';

const Pickers = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        marginTop: 12,
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        marginTop: 12,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      }
});

class Submit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: new Animated.Value(Dimensions.get('window').height),
            types: [{
                label: 'Food',
                value: 'food'
            },{
                label: 'Drink',
                value: 'drink'
            }],
            days: _getDaysOfWeek(),
            category: 'food',
            day: _getDayOfWeek().toLowerCase()
        }
    }

    componentDidMount() {
        Animated.timing(this.state.top,{
            toValue: Dimensions.get('window').height / 4,
            duration: 250
        }).start();
    }

    render() {
        return(
            <View style={[Styles.Submit]}>
                <View style={[Styles.Form]}>
                    <View style={[Styles.SubmitContent]}>
                        <Text>
                            Please fill out the information below and we will add this special after review.
                        </Text>
                        <Input/>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select a category...'
                              }}
                            items={this.state.types}
                            onValueChange={value => {
                                this.setState({

                                });
                            }}

                            style={Pickers}
                        />

                        <RNPickerSelect
                            placeholder={{
                                label: 'Select a category...'
                              }}
                            items={this.state.days}
                            onValueChange={value => {
                                this.setState({
                                    day: value
                                });
                            }}
                            value={this.state.day}
                            style={Pickers}
                        />
                        <Input/>
                        <Button label={'Submit'}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default Submit;