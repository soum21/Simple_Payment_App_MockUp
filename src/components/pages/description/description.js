import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Switch, ImageBackground, Image, Alert, TextInput, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import bgImage from '../../../assets/bg.jpg';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from './desStyle';
import From from '../ownAccountTransfer/from/from';
import To from '../ownAccountTransfer/To/to';
import { getDate } from '../../../store/actions/testAction';
import { Actions } from 'react-native-router-flux';
class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recRef: '',
            other: '',
            today: false,
            later: false
        }
    }
    componentWillReceiveProps(newProps) {
        console.log(newProps)
    }
    switchLaterToggle = () => {
        this.setState({
            later: !this.state.later
        })
    }
    switchTodayToggle = () => {
        this.setState({
            today: !this.state.today,
            later: false
        })
        this.props.getDate();
    }
    handleConfirm = () => {
        if (!this.state.recRef) {
            // Alert('Please Insert Recepient')
            Alert.alert(
                'Error',
                'Please Insert Recepient',
                [
                    { text: 'Ok', onPress: () => console.log('Ask me later pressed') },

                ],
                { cancelable: false },
            )
        }
        if (!this.state.today) {
            Alert.alert(
                'Error',
                'Please Insert when',
                [
                    { text: 'Ok', onPress: () => console.log('Ask me later pressed') },

                ],
                { cancelable: false },
            )
        }
        else {
            Actions.Con({
                from: this.props.from,
                to: this.props.to,
                amount: this.props.amount,
                recp: this.state.recRef,
                date: this.props.date,
                month: this.props.month,
                year: this.props.year
            })
        }
    }
    render() {

        console.log(this.props)

        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <Grid style={{ marginTop: 65 }}>
                    <Row size={30} style={styles.row40}>
                        <From render={true} data={this.props.from} />
                        <To render={true} data={this.props.to} />
                    </Row>
                    <Row size={15} style={styles.row10}>
                        <Grid>
                            <Row style={{ justifyContent: 'center', alignItems: 'center' }} size={5}>
                                <View>
                                    <Text style={{ fontSize: 23, color: 'white' }}>Amount</Text>
                                </View>
                            </Row>
                            <Row style={{ justifyContent: 'center', alignItems: 'center' }} size={5}>
                                <View>
                                    <Text style={{ fontSize: 40, color: 'yellow' }}>{this.props.amount}</Text>
                                </View>
                            </Row>
                        </Grid>
                    </Row>
                    <Row size={15} style={styles.row50}>
                        <Grid>
                            <Row style={{ justifyContent: 'center', alignItems: 'center' }} size={5}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Recipient Reference'}
                                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(text) => { this.setState({ recRef: text }) }}
                                />
                            </Row>
                            <Row style={{ justifyContent: 'center', alignItems: 'center' }} size={5}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Other Payment Details'}
                                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(text) => { this.setState({ other: text }) }}
                                />
                            </Row>
                        </Grid>


                    </Row>
                    <Row size={30} style={styles.row50}>
                        <Grid>
                            <Row size={0.5} style={styles.row50}>
                                <Text style={styles.text}>When</Text>
                            </Row>
                            <Row size={2} >
                                <Grid>
                                    <Row size={1} >
                                        <Grid>
                                            <Col style={styles.row50}>
                                                <Text style={styles.text}>Today</Text>
                                            </Col>
                                            <Col style={styles.row50}>
                                                <Switch
                                                    onValueChange={this.switchTodayToggle}
                                                    value={this.state.today} />

                                            </Col>
                                        </Grid>
                                    </Row>
                                    <Row size={1} >
                                        <Col style={styles.row50}>
                                            <Text style={styles.text}>Later</Text>
                                        </Col>
                                        <Col style={styles.row50}>
                                            <Switch
                                                onValueChange={this.switchLaterToggle}
                                                value={this.state.later} />
                                        </Col>
                                    </Row>
                                </Grid>
                            </Row>
                            <Row size={1} style={styles.row50}>
                                <Grid>
                                    <Row style={styles.row50}>
                                        <Col style={styles.row50}>
                                            <TouchableOpacity style={styles.btnCan} onPress={() => { Actions.pop() }}>
                                                <Text style={styles.text}>Cancel</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col style={styles.row50}>
                                            <TouchableOpacity style={styles.btnPro} onPress={this.handleConfirm}>
                                                <Text style={styles.text}>Proceed</Text>
                                            </TouchableOpacity>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Row>

                        </Grid>
                    </Row>
                </Grid>
            </ImageBackground>
        )
    }

}

const mapStateToProps = state => {
    return {
        date: state.test.date,
        dayoOfweek: state.test.dayOfWeek,
        month: state.test.month,
        time: state.test.time,
        year: state.test.year,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDate: () => {
            dispatch(getDate())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
