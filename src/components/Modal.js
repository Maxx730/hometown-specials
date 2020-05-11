import React from 'react';
import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

//Import Styling
import Styles from '../../lib/Styles';

//Import Componets
import Button from './Button';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this._slideClosed = this._slideClosed.bind(this);

        this.state = {
            opacity: new Animated.Value(0),
            fromTop: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this._slideOpen();
    }

    render() {
        return(
            <View style={[{
                position: 'absolute'
            }]}>
                <Animated.View style={[Styles.ModalMask, {
                    opacity: this.state.opacity
                }]}>
                    <View style={[{
                        flex: 2
                    }]}>

                    </View>
                    <Animated.View style={[Styles.Modal,{
                        flex: this.state.fromTop
                    }]}>
                        <View style={[Styles.ModalHead]}>
                            <Text style={[Styles.ModalTitle]}>
                                {this.props.title}
                            </Text>
                        </View>
                        <View style={[Styles.ModalBody, {

                        }]}>
                            {this.props.children}
                        </View>
                        {this._renderActions()}
                    </Animated.View> 
                    <View style={[{
                        flex: 2
                    }]}>

                    </View>
                </Animated.View>               
            </View>
        );
    }

    _slideOpen() {
        Animated.timing(this.state.fromTop,{
            toValue: this.props.weight ? this.props.weight : 1,
            duration: 250
        }).start();

        Animated.timing(this.state.opacity,{
            toValue: 1,
            duration: 150
        }).start();
    }

    _slideClosed() {

        Animated.timing(this.state.opacity,{
            toValue: 0,
            duration: 150
        }).start(this.props.onClose && this.props.onClose);
    }

    _renderActions() {
        if(this.props.buttons && this.props.buttons.length > 0) {
            return(
                <View style={[{
                    flexDirection: 'row'
                }]}>
                    {this.props.buttons.map((button, index) => {
                        return(
                            <TouchableOpacity key={`button-${index}`} onPress={button.isCancel ? this._slideClosed : () => {
                                button.press && button.press();
                                this._slideClosed();
                            }} style={[Styles.CloseButton,{
                                flex: 1
                            }]}>
                                    <Text style={[{
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }]}>{button.label}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            );
        } else {
            return(
                <View style={[{

                }]}>
                    <TouchableOpacity onPress={this._slideClosed} style={[Styles.CloseButton,{
                    }]}>
                        <Text style={[{
                            textAlign: 'center'
                        }]}>Close</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

export default Modal;