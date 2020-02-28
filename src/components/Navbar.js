import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            openWidth: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this._clickAnimation();
    }

    render() {
        return(
            <Animated.View style={[Styles.Navbar]}>
                <TouchableOpacity style={[Styles.NavButton, this.props.location === 'list' && Styles.NavSelected]} onPress={() => {
                    this.props.setNavigationLocation && this.props.setNavigationLocation('list');
                    this._clickAnimation();
                }}>
                    <AntDesign name={'bars'} size={24} color={this._getIconColor('list')}/>
                    {this.props.location === 'list' && this._renderText()}
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.NavButton, this.props.location === 'submit' && Styles.NavSelected]} onPress={() => {
                    this.props.setNavigationLocation && this.props.setNavigationLocation('submit');
                    this._clickAnimation();
                }}>
                    <AntDesign name={'form'} size={24} color={this._getIconColor('submit')}/>
                    {this.props.location === 'submit' && this._renderText()}
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.NavButton, this.props.location === 'settings' && Styles.NavSelected]} onPress={() => {
                    this.props.setNavigationLocation && this.props.setNavigationLocation('settings');
                    this._clickAnimation();
                }}>
                    <AntDesign name={'setting'} size={24} color={this._getIconColor('settings')}/>
                    {this.props.location === 'settings' && this._renderText()}
                </TouchableOpacity>
            </Animated.View>
        );
    }

    _renderText() {
        switch(this.props.location) {
            case 'list':
                return <Animated.Text style={[Styles.NavButtonText,{width: this.state.openWidth}]}>Specials</Animated.Text>
            case 'search':
                return <Animated.Text style={[Styles.NavButtonText,{width: this.state.openWidth}]}>Search</Animated.Text>
            case 'submit':
                return <Animated.Text style={[Styles.NavButtonText,{width: this.state.openWidth}]}>Submit</Animated.Text>
            case 'settings':
                return <Animated.Text style={[Styles.NavButtonText,{width: this.state.openWidth}]}>Settings</Animated.Text>
        }
    }

    _clickAnimation() {
        this.setState({
            openWidth: new Animated.Value(0)
        },() => {
            Animated.spring(this.state.openWidth, {
                toValue: 65,
                velocity: 500,
                tension: 30,
                friction: 4,
            }).start();
        });
    }

    _getIconColor(location) {
        return location === this.props.location ? '#FFFFFF' : '#000000'
    }

    _getStyling() {

    }
}

export default Navbar;