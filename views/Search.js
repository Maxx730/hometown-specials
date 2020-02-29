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
        const specials = _findSpecials(this.props.data.locations,this.state.searchTerm);
        return(
            <View>
                <View style={[Styles.SearchView]}>
                    <Input icon={<AntDesign name={'search1'} size={24}/>} placeholder={`Search`} onChange={(value) => {
                        this.setState({
                            searchTerm: value
                        })
                    }}/>
                </View>
                <View style={[{
                   height: 100
                }]}>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Locations day={0} data={specials}/>
                    </View>
                </View>
            </View>
        );
    }

    renderResultList() {

    }
}


export default Search;