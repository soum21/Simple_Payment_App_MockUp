import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import { styles } from './loginStyles';
import bgImage from '../../../assets/bg.jpg';
import logo from '../../../assets/Rlogo.png';
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux';
import { loginAction } from '../../../store/actions/testAction';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showpass: true,
            press: false,
            username: '',
            password: ''
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.userData.username) {
            Actions.Dash();
        }
        else{
            Alert.alert(
                'UserName: ram',
                'password: 123',
                [
                  {text: 'Ok', onPress: () => console.log('Ask me later pressed')},
                  
                ],
                {cancelable: false},
              )
        }
    }

    showPass = () => {
        (!this.state.press) ? this.setState({ showpass: false, press: true }) : this.setState({ showpass: true, press: false });
    }
    handleLogin = () => {
        const { username, password } = this.state;
        this.props.loginAction(username, password)
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>LOGIN AREA</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => { this.setState({ username: text }) }}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showpass}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => { this.setState({ password: text }) }}
                    />
                    <TouchableOpacity style={styles.btnEye} onPress={() => this.showPass()}>
                        <Icon name={!this.state.press ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={26} color={'rgba(255,255,255,0.7)'} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'red' }}>{this.props.error !== null ? this.props.error : null}</Text>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.handleLogin()}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}


const mapStateToProps = state => {
    return {
        userData: state.test.userData,
        error: state.test.authError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginAction: (username, password) => {
            dispatch(loginAction(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
