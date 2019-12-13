import React, { Component } from 'react';
import { View, Switch, ImageBackground, Image, TextInput, TouchableOpacity, Modal, TouchableHighlight, Alert } from 'react-native';
import bgImage from '../../../assets/bg.jpg';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from './constyle';
import { Actions } from 'react-native-router-flux';
import { List, ListItem, Left, Body, Right, Text, Content,Container } from 'native-base';

const Confirm = (props) => {
    handleSuccess = () => {
        Actions.Done({
            from:props.from,
            to:props.to
        })
        
    };
    
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <Content>
                <List style={{ marginTop: 65 }}>
                    <ListItem>
                        <Left>
                            <Text>From Account</Text>
                        </Left>
                        <Body>
                            <Text>
                                {props.from.acc_type}
                            </Text>
                            <Text note numberOfLines={1} style={{ color: 'black' }}>
                                {props.from.id}
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Transfer To</Text>
                        </Left>
                        <Body>
                            <Text>
                                {props.to.acc_type}
                            </Text>
                            <Text note numberOfLines={1} style={{ color: 'black' }}>
                                {props.to.id}
                            </Text>
                        </Body>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Left>
                            <Text>When</Text>
                        </Left>
                        <Body>
                            <Text>
                                {`${props.date}/${props.month}/${props.year}`}
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Amount</Text>
                        </Left>
                        <Body>
                            <Text style={{ color: 'yellow' }}>
                                RM {props.amount}
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>Recipient Referrence</Text>
                        </Left>
                        <Body>
                            <Text >
                                {props.recp}
                            </Text>
                        </Body>
                    </ListItem>
                </List>     
                <Grid style={{marginTop:25}}>
                    <Row size={1} style={styles.row50}>
                        <Grid>
                            <Row style={styles.row50}>
                                <Col style={styles.row50}>
                                    <TouchableOpacity onPress={() => Actions.pop()} style={styles.btnCan} onPress={() => { Actions.pop() }}>
                                        <Text style={styles.text}>Cancel</Text>
                                    </TouchableOpacity>
                                </Col>
                                <Col style={styles.row50}>
                                    <TouchableOpacity style={styles.btnPro} onPress={() => this.handleSuccess()}>
                                        <Text style={styles.text}>Proceed</Text>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Grid>
                    </Row>
                </Grid> 
            </Content>
           
        </ImageBackground >
    )
}

export default Confirm
