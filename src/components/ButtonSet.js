import React from 'react';
import { View, Text } from 'react-native';

//Import Styles
import Styles from '../../lib/Styles';

class ButtonSet extends React.Component {
    render() {
        return(
            <View style={[Styles.ButtonSet]}>
                {
                    this.props.children.map((button,index) => {
                        return React.cloneElement(button,{
                            left: index === 0 ? true : false,
                            right: index === this.props.children.length - 1 ? true : false,
                            middle: index !== 0 && index !== this.props.children.length - 1 ? true : false,
                            key: `button-${index}`
                        });
                    })
                }
            </View>
        );
    }
}

export default ButtonSet;