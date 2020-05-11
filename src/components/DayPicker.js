import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Import Utility Methods
import { _getDaysOfWeek } from '../../lib/Utils';

//Import Styling
import Styles from '../../lib/Styles';

class DayPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        }
    }

    
    isSelected(index) {
        for(let i = 0;i < this.state.selected.length;i++) {
            if(this.state.selected[i] === index) {
                return true;
            }
        }

        return false;
    }

    render() {
        return(
            <View style={[Styles.DayPicker]}>
                {
                    _getDaysOfWeek().map((day, index) => {
                        return (
                            <TouchableOpacity onPress={() => {

                            }} key={`day-${index}`} style={[Styles.DayPickerDay,this.isSelected(index) && Styles.DaySelected]}>
                                <Text>
                                    {day.label.substring(0,1)}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
}

export default DayPicker;