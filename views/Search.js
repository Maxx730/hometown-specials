import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

//Import Styling
import Styles from '../lib/Styles';

//Import Components
import Input from '../src/components/Input';
import Locations from '../src/components/Locations';

//Import Utility Methods
import { _findSpecials } from '../lib/Utils';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }
    }

    render() {
        const specials = _findSpecials(this.props.data.locations,this.props.term);
        return(
            <View style={[{
                flex: 1,
                flexDirection: 'column'
            }]}>
                <View style={[{
                   flex: 1
                }]}>
                    {
                        this.props.term === '' && <Text style={[{
                            backgroundColor: '#000000',
                            color: '#FFFFFF',
                            textAlign: 'center',
                            padding: 6
                        }]}>All Locations</Text>
                    }

                    <View style={[{
                        flex: 1
                    }]}>
                        <Locations day={0} data={specials} onlyShowDeals={false} setFocused={(location) => {
                            this.props.setFocused && this.props.setFocused(location, true);
                        }}/>
                    </View>
                </View>
            </View>
        );
    }

    renderResultList() {

    }
}


export default Search;