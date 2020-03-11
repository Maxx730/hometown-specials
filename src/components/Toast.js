import React from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';

//Import Styling
import Styles from '../../lib/Styles';

class Toast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromLeft: 0,
            fromTop: 0,
            opacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 750
        }).start(() => {
            setTimeout(() => {
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 1000
                }).start(() => {
                    this.props.onComplete && this.props.onComplete();
                });
            }, 500);
        });
    }

    render() {
        return (
            <Animated.View style={[Styles.Toast,{
                left: this.state.fromLeft,
                top: this.state.fromTop,
                opacity: this.state.opacity
            }]} onLayout={(event) => {
                let { width, height } = event.nativeEvent.layout;

                this.setState({
                    fromLeft: (Dimensions.get('window').width - width) / 2,
                    fromTop: ((Dimensions.get('window').height - height) / 2) * 1.5
                });
            }}>
                <Text style={[{
                    color: '#FFFFFF',
                    fontSize: 18
                }]}>{this.props.message}</Text>
            </Animated.View>
        )
    }
}

export default Toast;