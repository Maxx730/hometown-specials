import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            hasClicked: false
        }
    }

    render() {
        return(
            <TouchableOpacity style={[{
                flexDirection: 'row',
                backgroundColor: 'gray',
                alignItems: 'center',
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12
            },this.state.hasClicked && {
                backgroundColor: '#7AC149'
            }]} onPress={() => {
                !this.state.hasClicked && this.setState({
                    count: this.state.count + 1,
                    hasClicked: true
                });
            }}>
                {this.state.hasClicked ? <View style={[{
                    flexDirection: 'row',
                }]}>
                <Text style={[{
                    paddingTop: 4,
                    paddingRight: 8,
                    fontWeight: 'bold',
                    color: this.state.hasClicked ? '#FFFFFF' : '#000000',
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}>{this.state.count}</Text>
                <Feather style={[{
                    paddingTop: 2
                }]} name={'check'} color={this.state.hasClicked && '#FFFFFF'} size={24}/>
                </View> : <Text>Verify</Text>}
            
            </TouchableOpacity>
        );
    }
}

export default Counter;