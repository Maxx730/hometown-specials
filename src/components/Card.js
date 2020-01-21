import React from 'react';
import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

//Import Components
import Deals from './Deals';
import Submit from './Submit';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: new Animated.Value(Dimensions.get('window').height),
            showMap: this.props.showMapDefault,
            showSubmit: true
        }
    }

    componentDidMount() {
        Animated.timing(this.state.top,{
            toValue: 0,
            duration: 250
        }).start();
    }

    render() {
        const location = this.props.location;

        return(
            <Animated.View style={[Styles.Card,{
                top: this.state.top,
                width: Dimensions.get('window').width
            }]}>
                <View style={[Styles.LocationHead]}>
                    <Text style={[Styles.LocationTitle]}>
                        {location.name}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(this.state.top,{
                            toValue: Dimensions.get('window').height,
                            duration: 250
                        }).start(() => {
                            this.props.onClose && this.props.onClose(null);
                        });
                    }}>
                        <Feather name={'x'} color={'white'} size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={[{
                    flex: 1
                }]}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                showMap: !this.state.showMap
                            });
                        }} style={[this.state.showMap ? Styles.HideMap : Styles.ShowMap]}>
                            <Text style={[{
                                color: 'white',
                                textAlignVertical: 'center'
                            }]}>
                                {
                                    !this.state.showMap ? 'Tap to Show Map' : 'Hide Map'
                                }
                            </Text>
                        </TouchableOpacity>
                        {
                            this.state.showMap && <MapView style={[{
                                width: Dimensions.get('window').width,
                                height: 200
                            }]} initialRegion={{
                                latitude: location.location.lat,
                                longitude: location.location.long,
                                latitudeDelta: 0.0005,
                                longitudeDelta: 0.0005,
                            }}>
                                <Marker coordinate={{
                                    latitude: location.location.lat,
                                    longitude: location.location.long,
                                }} title={location.name} description={location.location.street}>
    
                                </Marker>
                            </MapView>
                        }
                    </View>
                    <View style={[Styles.Location]}>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                        }]}>{location.location.street}, </Text>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                        }]}>{location.location.city}, </Text>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white'
                        }]}>{location.location.state}</Text>
                    </View>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Deals deals={location.deals}/>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

export default Card;