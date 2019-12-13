import React, { Component } from 'react';
import { View, Switch, ImageBackground, Image, TextInput, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native';
import bgImage from '../../../assets/bg.jpg';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from './doneStyle';
import { Actions } from 'react-native-router-flux';
import { List, ListItem, Left, Body, Right, Text, Content, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Done = (props) => {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <Grid style={{ marginTop: 70 }}>
                <Row style={styles.row50, {justifyContent:'center',alignItems:'center' }} size={2}>
                    <Icon
                        size={100}
                        style={{
                            color: 'white',
                            alignSelf: "center",
                            marginTop: 50,
                            marginBottom: 30,
                            alignSelf:'center'
                        }}
                        name="md-checkmark"

                    />
                </Row>
                <Row style={styles.row50, {justifyContent:'center',alignItems:'center' }} size={2}>
                        <Content>
                        <List>
                            <ListItem >
                                <Body>
                                    <Text style={{textAlign:'center',color:'white',fontSize:25}}>
                                        You're Done.
                                    </Text>
                                </Body>
                            </ListItem>
                            <ListItem >
                                <Body>
                                    <Text style={{textAlign:'center',color:'white',fontSize:25}}>
                                        Ref ID: {`${props.from.id}${props.to.id}`}
                                    </Text>
                                </Body>
                            </ListItem>
                        </List>
                        </Content>
                </Row>
                <Row style={styles.row50, {justifyContent:'center',alignItems:'center' }} size={2}>
                <Grid>
                <Row style={styles.row50, { justifyContent:'center',alignItems:'center' }}>
                        <Col style={styles.row50, { justifyContent:'center',alignItems:'center' }}>
                                <TouchableOpacity style={styles.dashButton}>
                                    <Icon name="ios-search" size={60} color={'rgba(255,255,255,0.7)'} />
                                    <Text style={styles.textInfo}>
                                        View Reciept
                                    </Text>
                                </TouchableOpacity>
                                
                        </Col>
                        <Col style={styles.row50, {justifyContent:'center',alignItems:'center' }}>
                                <TouchableOpacity style={styles.dashButton}>
                                    <Icon name="ios-mail" size={60} color={'rgba(255,255,255,0.7)'} />
                                    <Text style={styles.textInfo}>
                                        Email Reciept
                                    </Text>
                                </TouchableOpacity>
                                
                        </Col>
                 </Row>       
                    </Grid>
                </Row>
                <Row style={styles.row50, { justifyContent:'center',alignItems:'center' }} size={1}>
                <TouchableOpacity style={styles.btnLogin} onPress={() => Actions.Dash()}>
                    <Text style={styles.text}>DONE</Text>
                </TouchableOpacity>
                </Row>

            </Grid>
        </ImageBackground >
    )
}

export default Done;
