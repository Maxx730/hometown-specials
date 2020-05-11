import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Import Utility Methods
import { _getDaysOfWeek } from '../../lib/Utils';

//Import Styling
import Styles from '../../lib/Styles';


class Frequency extends React.Component {
    constructor(props) {
        super(props);

        this.includeDay = this.includeDay.bind(this);

        this.state = {
            selected: []
        }
    }

    render() {
        return(
            <View style={[Styles.FrequencyFrame]}>
                {_getDaysOfWeek(true).map((day, index) => {
                    return(
                        <TouchableOpacity onPress={() => {
                            this.includeDay(index);
                        }} style={[Styles.FrequencyDay, index === 0 && Styles.FrequencyDayLeft, index == 6 && Styles.FrequencyDayRight, this.state.selected.indexOf(index) > -1 && Styles.FrequencyDaySelected]} key={`frequency-day-${index}`}>
                            <Text>{day.label.substring(0, 1)}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }

    includeDay(id) {
        if(this.state.selected.indexOf(id) > -1) {
            let selected = this.state.selected;
            selected.splice(this.state.selected.indexOf(id), 1);
            
            this.setState({
                selected: selected
            });
        } else {
            let selected = this.state.selected;
            selected.push(id)
            this.setState({
                selected: selected
            });
        }
    }
}

export default Frequency;