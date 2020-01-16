import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import Views
import Main from './views/Main';
import Details from './views/Details';

//Import Data
import data from './lib/Data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: data.locations
    }
  }

  render() {
    return(
      <View style={[{
        flex: 1
      }]}>
        <Main data={this.state.locations}/>
      </View>
    );
  }
}

export default App;
