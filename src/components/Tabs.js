import React from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

//Import Styling
import Styles from '../../lib/Styles';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            right: new Animated.Value((Dimensions.get('window').width / 4) + 32),
            left: new Animated.Value(3)
        }
    }

    render() {
        return(
            <View style={[Styles.TabFrame]}>
                <Animated.View style={[Styles.TabIndicator,{left: this.state.left, right: this.state.right}]}>

                </Animated.View>
                {
                    this.props.tabs.map((tab, index) => {
                        return(
                            <TouchableOpacity key={`tab-${index}`} style={[Styles.Tab]} onPress={() => {
                                index === 0 ? this._toLeft(tab.callback && tab.callback) : this._toRight(tab.callback && tab.callback);
                            }}>
                                <Text style={[Styles.TabLabel]}>
                                    {tab.label}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }

    _toRight(callback) {
        Animated.timing(this.state.right, {
            toValue: 4,
            duration: 150
        }).start();

        Animated.timing(this.state.left, {
            toValue: (Dimensions.get('window').width / 4) + 32,
            duration: 150
        }).start(callback);
    }

    _toLeft(callback) {
        Animated.timing(this.state.right, {
            toValue: (Dimensions.get('window').width / 4) + 32,
            duration: 150
        }).start();

        Animated.timing(this.state.left, {
            toValue: 4,
            duration: 150
        }).start(callback);
    }
}

export default Tabs;