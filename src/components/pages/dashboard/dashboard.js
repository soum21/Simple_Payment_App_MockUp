import React from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import bgImage from '../../../assets/bg.jpg';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from './dashStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
const Dashboard = (props) => {
    handleOwnAccount = () => {
        Actions.OwnAcc();
    }

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <Grid>
                <Row size={35} style={styles.row25}>
                    <Text style={styles.textInfo1}>What would you like to do?</Text>
                </Row>
                <Row size={50} style={styles.row50}>
                    <Grid>
                        <Col>
                            <Row style={styles.row14}>
                                <TouchableOpacity style={styles.dashButton} onPress={() => this.handleOwnAccount()}>
                                    <Icon name={'ios-git-compare'} size={60} color={'rgba(255,255,255,0.7)'} />
                                    <Text style={styles.textInfo}>Own Account Transfer</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row14}>
                                <TouchableOpacity style={styles.dashButton}>
                                    <Icon name={'ios-globe'} size={60} color={'rgba(255,255,255,0.7)'} />
                                    <Text style={styles.textInfo}>Telegraphic Transfer</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={styles.row14}>
                                <TouchableOpacity style={styles.dashButton}>
                                    <Icon name={'ios-contacts'} size={60} color={'rgba(255,255,255,0.7)'} />
                                    <Text style={styles.textInfo}>Other Account Transfer</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row14}>
                                <TouchableOpacity style={styles.dashButton}>
                                    <Icon name={'ios-barcode'} size={60} color={'rgba(255,255,255,0.7)'} />
                                    <Text style={styles.textInfo}>Manage Transfer</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>

                </Row>
                <Row size={15} style={styles.row25}>

                </Row>
            </Grid>
        </ImageBackground>
    )
}

export default Dashboard;
