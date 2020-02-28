import React from 'react';
import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

//Import Styling
import Styles from '../../lib/Styles';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this._slideClosed = this._slideClosed.bind(this);

        this.state = {
            opacity: new Animated.Value(0),
            fromTop: new Animated.Value(Dimensions.get('window').height)
        }
    }

    componentDidMount() {
        this._slideOpen();
    }

    render() {
        return(
            <View>
                <Animated.View style={[Styles.ModalMask, {
                    opacity: this.state.opacity
                }]}>
                    <Animated.View style={[Styles.Modal,{
                        top: this.state.fromTop
                    }]}>
                        <View style={[Styles.ModalHead]}>
                            <Text style={[Styles.ModalTitle]}>
                                {this.props.title}
                            </Text>
                        </View>
                        <View style={[Styles.ModalBody]}>
                            {this.props.children}
                        </View>
                        <TouchableOpacity onPress={this._slideClosed} style={[Styles.CloseButton]}>
                                <Text style={[Styles.CenterText]}>Close</Text>
                        </TouchableOpacity>
                    </Animated.View> 
                </Animated.View>               
            </View>
        );
    }

    _slideOpen() {
        Animated.timing(this.state.fromTop,{
            toValue: 100,
            duration: 250
        }).start();

        Animated.timing(this.state.opacity,{
            toValue: 1,
            duration: 150
        }).start();
    }

    _slideClosed() {
        Animated.timing(this.state.fromTop,{
            toValue: Dimensions.get('window').height,
            duration: 250
        }).start();

        Animated.timing(this.state.opacity,{
            toValue: 0,
            duration: 150
        }).start(this.props.onClose && this.props.onClose);
    }
}

export default Modal;