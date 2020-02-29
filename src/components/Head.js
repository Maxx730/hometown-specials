import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//Import Components
import Days from "../components/Days";

//Import Styles
import Styles from "../../lib/Styles";

//Import Utility Methods
import { _getDayOfWeek, _findSpecials, getDay} from "../../lib/Utils";

class Head extends React.Component {
    constructor(props) {
        super(props);

        this._toggleShowFilters = this._toggleShowFilters.bind(this);
        this._setSelectedDay = this._setSelectedDay.bind(this);

        this.state = {
            term: '',
            showSearch: this.props.showSearch,
            showFilter: false,
            arrowRotation: new Animated.Value(0)
        }
    }

    render() {
        return(
            <View>
                <TouchableOpacity style={[Styles.Head]} onPress={this._toggleShowFilters}>
                    <Text style={[Styles.Title]}>{getDay(this.props.day)}</Text>
                    <Animated.View style={[Styles.DayToggleIcon,{
                        transform:[{
                            rotate: this.state.arrowRotation
                        }]
                    }]}>
                        <AntDesign name={this.state.showFilter ? 'up' : 'down'} size={18}/>
                    </Animated.View>
                </TouchableOpacity>
                {this.state.showFilter && <Days onDaySelected={this._setSelectedDay} selected={this.props.day}/>}
            </View>
        )
    }

    clearSearch() {
        this.setstate({
            term: ""
        });
    }

    _toggleShowFilters() {
        this.setState({ 
            showFilter: !this.state.showFilter
        });
    }

    _setSelectedDay(day) {
        this.props.setDay && this.props.setDay(day);
        this.setState({
            showFilter: false
        });
    }
}

export default Head;