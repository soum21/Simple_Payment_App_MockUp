
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ImageBackground, Image,Alert, TextInput, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import bgImage from '../../../assets/bg.jpg';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from './ownAccStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import From from './from/from';
import To from './To/to';
import Mymodal from './modal/modal';
import { Actions } from 'react-native-router-flux';
export class OwnAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToAccount: false,
            showFromAccount: false,
            pressFrom: false,
            pressTo: false,
            showPicker: false,
            pickerSelectionTo: [],
            pickerSelectionFrom: [],
            balance: ''
        }
    }
    onChanged = (data) => {
        this.setState({
            balance: data
        })
    }

    okHandle = () => {
        if(parseInt(this.state.balance) <= this.state.pickerSelectionFrom.balance){
            Actions.Desc({
                from: this.state.pickerSelectionFrom,
                to: this.state.pickerSelectionTo,
                amount: this.state.balance,
            })
        }
        else{
            Alert.alert(
                'Error',
                'You dont have enough credits.',
                [
                  {text: 'Ok', onPress: () => console.log('Ask me later pressed')},
                  
                ],
                {cancelable: false},
              )
        }
        
    }

    handleFromTouch = () => {
        // console.log("From")
        this.setState({
            showPicker: !this.state.showPicker,
            pressFrom: true
        })
    }
    handleToTouch = () => {
        // console.log("From")
        this.setState({
            showPicker: !this.state.showPicker,
            pressTo: true
        })
    }

    executeChange = () => {
        console.log(this.state.pressFrom, this.state.pressTo, this.state.pickerSelectionFrom, this.state.pickerSelectionTo)
        if (this.state.pressFrom && this.state.pickerSelectionFrom) {
            this.setState({
                showPicker: !this.state.showPicker,
                showFromAccount: !this.state.showFromAccount,
                pressFrom: !this.state.pressFrom
            })
        }
        if (this.state.pressTo && this.state.pickerSelectionTo) {
            this.setState({
                showPicker: !this.state.showPicker,
                showToAccount: !this.state.showToAccount,
                pressTo: !this.state.pressTo
            })
        }
        console.log(this.state)

    }

    handlePickerSelect = (itemValue, itemIndex) => {
        if (this.state.pressFrom) {
            this.setState({
                pickerSelectionFrom: itemValue,
            })
        }
        if (this.state.pressTo) {
            this.setState({
                pickerSelectionTo: itemValue
            })
        }
    }

    render() {
        console.log(this.state)
        const { userAccounts } = this.props.user;
        if (!this.props.user) {
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Text> Waiting </Text>
            </ImageBackground>
        }
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Grid style={{ marginTop: 65 }}>
                    <Row size={40} style={styles.row40}>
                        <From render={this.state.showFromAccount} handleFromTouch={this.handleFromTouch} data={this.state.pickerSelectionFrom} />
                        <To render={this.state.showToAccount} handleToTouch={this.handleToTouch} data={this.state.pickerSelectionTo} />
                    </Row>
                    <Row size={40} style={styles.row10}>
                        {/* {this.renderNumerInput()} */}
                        {
                            (this.state.pickerSelectionFrom.id && this.state.pickerSelectionTo.id) ? (
                                <View style={{ alignItems: 'center' }}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType='numeric'
                                        onChangeText={(text) => this.onChanged(text)}
                                        value={this.state.balance.toString()}
                                        maxLength={10}  //setting limit of input
                                    />
                                    <TouchableOpacity style={styles.btnLogin} onPress={() => this.okHandle()}>
                                        <Text style={styles.text}>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                    <TextInput
                                        style={styles.input}
                                        maxLength={10}  //setting limit of input
                                        editable={false}
                                        placeholder="RM 0.00"
                                    />
                                )
                        }
                    </Row>
                    <Row size={30} style={styles.row50}>
                        <Mymodal show={this.state.showPicker} handlePickerSelect={this.handlePickerSelect} executeChange={this.executeChange} data={userAccounts} />
                    </Row>
                </Grid>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.test.userData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginAction: (username, password) => {
            dispatch(loginAction(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnAccount);
