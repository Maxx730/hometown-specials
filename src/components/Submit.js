import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Picker, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

//Import Components
import Input from './Input';
import Button from './Button';
import Tabs from './Tabs';

//Import Utility Methods
import { _getDaysOfWeek, _getDayOfWeek, _getLocations } from '../../lib/Utils';
import { _submitForm } from '../../lib/Network';

const Pickers = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 100,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 160,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 100,
        color: 'black',
        paddingRight: 30,
        paddingLeft: 50 // to ensure the text is never behind the icon
      }
});

class Submit extends React.Component {
    constructor(props) {
        super(props);

        this.setDescription = this.setDescription.bind(this);
        this.setNewLocation = this.setNewLocation.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.checkForErrors = this.checkForErrors.bind(this);

        this.state = {
            loading: false,
            locations: [],
            category: '',
            location: '',
            day: '',
            notListedL: '',
            description: '',
            hasError: false,
            hasSuccess: false,
            showNew: false,
        }
    }

    componentDidMount() {
        _getLocations().then(locations => {
            this.setState({
                locations: locations
            });
        })
    }

    submitForm() {
        if(!this.checkForErrors()) {
            _submitForm({
                location: this.state.location,
                new: this.state.showNew,
                day: this.state.day,
                category: this.state.category,
                description: this.state.description
            }).then(data => {
                this.setState({
                    hasSuccess: true
                });
            }).catch(err => {
                console.log('err');
            });
        } else {
            this.setState({
                hasError: true
            });
        }
    }

    renderErrorMessage() {
        return(
            <View style={[Styles.SubmitError]}>
                <Text style={[Styles.Error]}>
                    Please fill out all fields to submit a review, the description cannot be blank.
                </Text>
            </View>
        );
    }

    renderSuccessMessage() {
        return(
            <View style={[Styles.SubmitSuccess]}>
                <Text style={[Styles.Success]}>Thank you. We will review your submission and update our information.</Text>
            </View>
        );
    }

    setDescription(value) {
        this.setState({
            description: value
        });
    }

    setNewLocation(value) {
        this.setState({
            location: value
        });
    }

    renderForm() {
        if(this.state.showNew) {
            return(
                <View style={[Styles.Form]}>
                    <View>
                        <Input placeholder={'New Location Name'} onChange={this.setDescription}/>
                    </View>
                    <View style={[{
                        marginTop: 16
                    }]}>
                        {this.renderDayPicker()}
                        {this.renderTypePicker()}
                    </View>
                </View>
            );
        } else {
            return(
                <View style={[Styles.Form]}>
                    <View style={[Styles.SubmitContent]}>
                        {this.renderLocationPicker()}
                        {this.renderDayPicker()}
                        {this.renderTypePicker()}
                        {this.renderDescription()}
                        {
                            this.state.hasError && this.renderErrorMessage()
                        }
                        <Button round onPress={this.submitForm} label={'Submit'}/>
                    </View>
                </View>
            );            
        }
    }

    checkForErrors() {
        if(this.state.category === '' || this.state.day === '' || this.state.location === '' || this.state.description === '') {
            return true;
        } else {
            return false;
        }
    }

    renderDescription() {
        return(
            <View>
                <Text style={[{
                    padding: 8
                }]}>
                    Please be as descriptive as possible to make sure we can verify the authenticity of this special.
                </Text>
                <Input placeholder={'Description'} onChange={this.setDescription}/>
            </View>
        )
    }

    renderDayPicker() {
        return(
            <View>
                <Text style={[{
                    fontWeight: 'bold',
                    marginLeft: 8
                }]}>Day</Text>
                <Picker style={[{}]}  
                        selectedValue={this.state.location}  
                        onValueChange={(itemValue, itemPosition) =>  {
                            this.setState({
                                location: itemValue
                            })
                        }}  
                    >
                    {_getDaysOfWeek().map(day => {
                        return <Picker.Item label={day.label} value={day.value} /> 
                    })} 
                </Picker> 
            </View>
        )
    }

    renderLocationPicker() {
        return(
            <View>
                <Text style={[{
                    fontWeight: 'bold',
                    marginLeft: 8
                }]}>Location</Text>
                <Picker style={[{}]}  
                        selectedValue={this.state.location}  
                        onValueChange={(itemValue, itemPosition) =>  {
                            this.setState({
                                location: itemValue
                            })
                        }}  
                    >
                    {this.state.locations.map(location => {
                        return <Picker.Item label={location.label} value={location.label} /> 
                    })} 
                </Picker> 
            </View>
        )
    }

    renderTypePicker() {
        return(
            <View>
                <Text style={[{
                    fontWeight: 'bold',
                    marginLeft: 8
                }]}>Special Type</Text>
                <Picker style={[{}]}  
                        selectedValue={this.state.location}  
                        onValueChange={(itemValue, itemPosition) =>  {
                            this.setState({
                                location: itemValue
                            })
                        }}  
                    >
                    <Picker.Item label={'Food'} value={'food'} /> 
                    <Picker.Item label={'Drink'} value={'drink'} /> 
                    <Picker.Item label={'Other'} value={'other'} /> 
                </Picker> 
            </View>
        )
    }

    render() {
        return(
            <View style={[Styles.Submit]}>
                    <View style={[{
                        borderBottomWidth: 1,
                        borderBottomColor: '#000000'
                    }]}>
                        <Text style={[{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            padding: 12
                        }]}>Submit a Special</Text>
                        <Tabs tabs={[{
                            label: 'Current',
                            callback: () => {
                                this.setState({
                                    showNew: false
                                });
                            }
                        },{
                            label: 'New Location',
                            callback: () => {
                                this.setState({
                                    showNew: true
                                });
                            }
                        }]}/>
                    </View>
                    <ScrollView>
                        {this.state.hasSuccess ? this.renderSuccessMessage() : this.renderForm()}
                    </ScrollView>
            </View>
        );
    }
}


export default Submit;