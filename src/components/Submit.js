import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

//Import Components
import Input from './Input';
import Button from './Button';

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
            types: [{
                label: 'Food',
                value: 'food'
            },{
                label: 'Drink',
                value: 'drink'
            }],
            loading: false,
            days: _getDaysOfWeek(),
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
        return(
            <View style={[Styles.Form]}>
            <View style={[Styles.SubmitContent]}>
                <Text style={[Styles.SubmitSubtext]}>
                    Please fill out the information below and we will add this special after review.
                </Text>
                {this.renderLocationPicker()}
                <Input label={'Description'} onChange={this.setDescription}/>
                {
                    this.state.hasError && this.renderErrorMessage()
                }
                <Button onPress={this.submitForm} label={'Submit'}/>
            </View>
        </View>
        );
    }

    checkForErrors() {
        if(this.state.category === '' || this.state.day === '' || this.state.location === '' || this.state.description === '') {
            return true;
        } else {
            return false;
        }
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

    render() {
        return(
            <View style={[Styles.Submit]}>
                <Text style={[{
                    fontSize: 24,
                    fontWeight: 'bold'
                }]}>
                    Submit Special
                </Text>
                {this.state.hasSuccess ? this.renderSuccessMessage() : this.renderForm()}
            </View>
        );
    }
}


export default Submit;