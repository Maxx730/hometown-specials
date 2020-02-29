import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Event } from 'expo-analytics';

//Import Styles
import Styles from "../../lib/Styles";
import { getDay } from "../../lib/Utils";

const _days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

class Days extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this._animateDown();
    }

    render() {
        return(
            <Animated.View style={[Styles.Days,{
                height: this.state.height
            }]}>
                {
                    _days.map((day, index) => {
                        return <TouchableOpacity onPress={() => {
                            // this.props.setDay && this.props.setDay(index);
                            // this.props.analytics.event(new Event('Day', 'Change', getDay(day)))
                            // .then(() => {})
                            // .catch(e => console.log(e.message));
                            this._animateUp(() => {
                                this.props.onDaySelected(index);
                            });
                        }} key={`day-item-${day}`} style={[Styles.DayItem]}>
                            <Text style={[index === this.props.selected && Styles.DaySelected]}>{day}</Text>
                        </TouchableOpacity>
                    })
                }
            </Animated.View>
        );
    }

    _animateDown() {
        Animated.spring(this.state.height,{
            toValue: 48,
            velocity: 5,
            tension: 10,
            friction: 4,
        }).start();
    }

    _animateUp(onFinish) {
        Animated.timing(this.state.height,{
            toValue: 0,
            duration: 150
        }).start(onFinish);
    }
}

export default Days;