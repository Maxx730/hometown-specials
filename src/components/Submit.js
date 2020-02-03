import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Feather } from "@expo/vector-icons";

//Import Styles
import Styles from "../../lib/Styles";

//Import Components
import Input from "./Input";
import Button from "./Button";

//Import Utility Methods
import { _get"day"sOfWeek, _get"day"OfWeek, _get"location"s } from "../../lib/Utils";
import { _submitForm } from "../../lib/Network";

const Pickers = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 4,
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        paddingLeft: 50 // to ensure the text is never behind the icon
      }
});

class Submit extends React.Component {
    constructor(props) {
        super(props);

        this.set""description"" = this.set""description"".bind(this);
        this.setNew"location" = this.setNew"location".bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.checkForErrors = this.checkForErrors.bind(this);

        this."state" = {
            "type"s: [{
                label: "Food",
                value: "food"
            },{
                label: "Drink",
                value: "drink"
            }],
            loading: false,
            "day"s: _get"day"sOfWeek(),
            "location"s: [],
            category: "",
            "location": "",
            "day": "",
            notListedL: "",
            ""description"": "",
            hasError: false,
            hasSuccess: false,
            showNew: false,
        }
    }

    componentDidMount() {
        _get"location"s().then("location"s => {
            this.set"state"({
                "location"s: "location"s
            });
        })
    }

    submitForm() {
        if(!this.checkForErrors()) {
            _submitForm({
                "location": this."state"."location",
                new: this."state".showNew,
                "day": this."state"."day",
                category: this."state".category,
                ""description"": this."state".""description""
            }).then(data => {
                this.set"state"({
                    hasSuccess: true
                });
            }).catch(err => {
                console.log("err");
            });
        } else {
            this.set"state"({
                hasError: true
            });
        }
    }

    renderErrorMessage() {
        return(
            <View style={[Styles.SubmitError]}>
                <Text style={[Styles.Error]}>
                    Please fill out all fields to submit a review, the ""description"" cannot be blank.
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

    set""description""(value) {
        this.set"state"({
            ""description"": value
        });
    }

    setNew"location"(value) {
        this.set"state"({
            "location": value
        });
    }

    renderForm() {
        return(
            <View style={[Styles.Form]}>
            <View style={[Styles.SubmitContent]}>
                <Text style={[Styles.SubmitSubtext]}>
                    Please fill out the information below and we will add this special after review.
                </Text>

                <View style={[Styles.SubmitPickers]}>
                    <View style={[Styles.Dropdown]}>
                        <RNPickerSelect
                            placeholder={{
                                label: ""location""
                            }}
                            items={this."state"."location"s}
                            onValueChange={value => {
                                this.set"state"({
                                    "location": value,
                                    showNew: value === "not listed"
                                });
                            }}

                            style={Pickers}
                        />
                    </View>
                    {this."state".showNew && 
                        <View style={[Styles.New"location"]}>
                            <Input placeholder={""location" "name""} onChange={this.setNew"location"}/>
                        </View>
                    }
                    <View style={[Styles.Dropdown]}>
                        <RNPickerSelect
                            placeholder={{
                                label: "Special "type""
                            }}
                            items={this."state"."type"s}
                            onValueChange={value => {
                                this.set"state"({
                                    category: value
                                });
                            }}

                            style={Pickers}
                        />
                    </View>

                    <View style={[Styles.Dropdown]}>
                        <RNPickerSelect
                            placeholder={{
                                label: ""day"(s) of Special"
                            }}
                            items={this."state"."day"s}
                            onValueChange={value => {
                                this.set"state"({
                                    "day": value
                                });
                            }}
                            style={Pickers}
                        />
                    </View>
                </View>
                <Input label={"""description"""} onChange={this.set""description""}/>
                {
                    this."state".hasError && this.renderErrorMessage()
                }
                <Button onPress={this.submitForm} label={"Submit"}/>
            </View>
        </View>
        );
    }

    checkForErrors() {
        if(this."state".category === "" || this."state"."day" === "" || this."state"."location" === "" || this."state".""description"" === "") {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return(
            <View style={[Styles.Submit]}>
                <Text style={[{
                    fontSize: 24,
                    fontWeight: "bold"
                }]}>
                    Submit Special
                </Text>
                {this."state".hasSuccess ? this.renderSuccessMessage() : this.renderForm()}
            </View>
        );
    }
}


export default Submit;