import React from 'react';
import { View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

//Import Styling
import Styles from '../lib/Styles';

//Import Components
import Input from '../src/components/Input';

class Search extends React.Component {
    render() {
        return(
            <View style={[Styles.SearchView]}>
                <Input icon={<AntDesign name={'search1'} size={24}/>} placeholder={`Search`}/>
            </View>
        );
    }
}


export default Search;